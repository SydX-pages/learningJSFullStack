require("dotenv").config();

const express = require("express");

const app = express();
const morgan = require("morgan");

const Person = require("./models/person");

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("dist"));

app.get("/api/persons", (request, response) => {
  Person.find({}).then((res) => {
    response.json(res);
  });
});

app.get("/info", (request, response) => {
  Person.find({}).then((res) => {
    response.send(`
    <div>
      <p>Phonebook has info for ${res.length} people</p>
      <p>${new Date().toString()}</p>
    </div>
      `);
  });
});

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).end();
      }
    })
    .catch((err) => next(err));
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "Name or Number Missing",
    });
  } else {
    const person = new Person({
      name: body.name,
      number: body.number,
    });
    person.save().then((savedPerson) => {
      response.json(savedPerson);
    });
  }
});

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then((res) => {
      response.status(204).end();
    })
    .catch((err) => next(err));
});

app.put("/api/persons/:id", (request, response, next) => {
  const { name, number } = request.body;

  Person.findById(request.params.id)
    .then((person) => {
      if (!person) {
        return response.status(404).end();
      }

      person.name = name;
      person.number = number;

      return person.save().then((updatedP) => {
        response.json(updatedP);
      });
    })
    .catch((err) => next(err));
});

const PORT = 3001;
app.listen(PORT);
