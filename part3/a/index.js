const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(400).end();
  }
});

app.delete("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  notes = notes.filter((note) => note.id !== id);
  response.status(204).end();
});

const generateId = () =>
  String(
    (notes.length > 0 ? Math.max(...notes.map((note) => Number(note.id))) : 0) +
      1,
  );

app.post("/api/notes", (request, response) => {
  const body = request.body;
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const note = {
    id: generateId(),
    content: body.content,
    important: body.important || false,
  };
  notes = notes.concat(note);
  response.json(note);
});

app.put("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  const body = request.body;

  console.log(body);

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const newNote = {
    id: id,
    content: body.content,
    important: body.important || false,
  };

  const existNote = notes.find((note) => note.id === id);

  if (!existNote) {
    return response.status(400).json({ error: "note not found" });
  }

  notes = notes.map((note) => (note.id === id ? newNote : note));
  response.json(notes);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
