import Input from "./Input";

const Filter = (props) => (
  <Input text="filter with" value={props.value} onChange={props.onChange} />
);

export default Filter;
