import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

import "./App.css";
function App() {
  const [input, setInput] = useState({ name: "" });
  const [tableData, setTableData] = useState([]);
  const [editButton, setEditButton] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [message, setMessage] = useState({ value: "" });

  const [color, setColor] = useState("black");
  function onControlInput(e) {
    console.log(e.target.name);
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function HandleSubmit(e) {
    e.preventDefault();
    // if (editButton) {
    //   const tempd = tableData;
    //   Object.assign(tableData[editIndex], input);
    //   console.log("table sata is", input);
    //   setTableData([...tempd]);
    //   setEditButton(false);
    //   setInput({ name: "", email: "" });
    // } else {
    setTableData([...tableData, input]);
    setInput({ name: "" });
  }
  function deleteHandle(index) {
    const filterDatat = tableData.filter((items, i) => i !== index);
    setTableData(filterDatat);
  }

  function handleEdit(index) {
    const temporaryData = tableData[index];
    setInput({
      name: temporaryData.name,
      email: temporaryData.email,
    });
    setEditButton(true);
    setEditIndex(index);
  }

  let today = new Date().toJSON().slice(0, 10);

  function inputHandler(event, i) {
    console.log("key in date ", i);
    console.log("todays data is ", tableData[i]);
    if (today >= event.target.value) {
      document.getElementById(i).style.color = "red";
      document.getElementById(i).innerHTML = "Due day is passed !!";
    } else {
      console.log("small");
      document.getElementById(i).style.color = "orange";
      document.getElementById(i).innerHTML = "Good TO GO !!";
    }
  }

  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <div>
        <h1>todo application</h1>

        <Form className="form-styling" onSubmit={HandleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Todo:</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              placeholder="Name"
              onChange={onControlInput}
              value={input.name}
              name="name"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </div>

      <div className="d-flex flex-wrap   main-container ">
        {tableData.map((item, i) => (
          <div className=" inner-container p-3 shadow-5 m-3" key={i}>
            <h5>Task:{i + 1}</h5>
            <h1>{item.name}</h1>
            <br />
            <input
              type="date"
              name="date"
              onChange={(event) => inputHandler(event, i)}
            />
            <br />
            <textarea placeholder="Some Text..."></textarea>

            <br />
            <Button
              variant="danger"
              style={{ margin: "0px 10px" }}
              onClick={() => deleteHandle(i)}
            >
              delete
            </Button>
            <br />

            <span
              id={i}
              style={{ color: color, fontSize: "20px", fontWeight: "800" }}
            >
              Set Deadline
            </span>
          </div>
        ))}

        {/* <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Sr</th>
              <th>Title</th>
              <th>Email</th>
              <th>Options</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr>
                <td>{i}</td>
                <td>{item.name}</td>
                <td>
                  <input type="date" />
                </td>
                <td>
                  <textarea />
                </td>
                <td>
                  <Button
                    variant="danger"
                    style={{ margin: "0px 10px" }}
                    onClick={() => deleteHandle(i)}
                  >
                    delete
                  </Button>
                  <Button variant="warning" onClick={() => handleEdit(i)}>
                    edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table> */}
      </div>
    </div>
  );
}

export default App;
