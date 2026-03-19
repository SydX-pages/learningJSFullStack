import Input from "./Input";
import Button from "./Button";

const PersonForm = (props) => {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <Input
          text="name"
          value={props.newName}
          onChange={props.onNameChange}
        />
        <Input
          text="number"
          value={props.newNumber}
          onChange={props.onNumberChange}
        />
        <Button type="submit" text="add" />
      </form>
    </>
  );
};

export default PersonForm;
