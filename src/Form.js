import { useState } from "react";

const Form = (props) => {
  const [curr_name, setnameaHandler] = useState("");
  const [curr_num, setnumHandler] = useState("");
  const sendNameHandler = (event) => {
    setnameaHandler(event.target.value);
  };
  const sendNumberHandler = (event) => {
    setnumHandler(event.target.value);
  };
  const sendValueHandler = (event) => {
    event.preventDefault();
    const obj_data = {
      cur_name: curr_name,
      cur_num: curr_num
    };
    props.childDataHandler(obj_data);
  };
  return (
    <form onSubmit={sendValueHandler}>
      <label>Name </label>
      <input type="text" name="name" onChange={sendNameHandler} />
      <br />
      <br />
      <label>Number </label>
      <input type="number" name="number" onChange={sendNumberHandler} />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
