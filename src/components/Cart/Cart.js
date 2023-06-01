import React,{useState,useEffect} from 'react'
import Button from "react-bootstrap/Button";
function Cart(props) {
const[data,setData]=useState(true)

console.log("input data is",props.data);
let tableData=props.tableData;

console.log("table data  data is",tableData);

function deleteHandle(index) {
let fild=tableData.filter((items, i) => i !== index);
     console.log("fil",fild)
     props.filterdata(fild)
  }

  return (
    <div>
<div className="d-flex flex-wrap   main-container ">
        {data? tableData.map((item, i) => (
          <div className=" inner-container p-3 shadow-5 m-3">
            <h5>Task:{i + 1}</h5>
            <h1>{item.name}</h1>
            <br />
            <input type="date"  />
            <br />
            <textarea>Some textArea...</textarea>
      
            <br />
            <input type='checkbox'/>
            <br />
            <Button
              variant="danger"
              style={{ margin: "0px 10px" }}
              onClick={() => deleteHandle(i)}
            >
              delete
            </Button>
            <br />
            
            <span style={{fontSize:"20px",fontWeight:"800"}}>dead</span>
          </div>
        )):"null"}

       
      </div>
    </div>
  )
}

export default Cart