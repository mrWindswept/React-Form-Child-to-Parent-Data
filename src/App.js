import "./styles.css";
import { useState } from "react";
import Form from "./Form";
function App() {
  const [currValue, setnextValueHandler] = useState({
    cur_name: "Please enter your name",
    cur_num: "Please enter your number"
  });
  const getValueHandler = (childData) => {
    setnextValueHandler(childData);
  };
  console.log(currValue);

  return (
    <div className="App">
      <h1>Pass data from child component to parent component</h1>
      <Form childDataHandler={getValueHandler} />
      <p>Name is : {currValue.cur_name}</p>
      <p>Number is : {currValue.cur_num}</p>
    </div>
  );
}
export default App;
