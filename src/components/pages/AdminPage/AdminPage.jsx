import "./AdminPage.css";
import React from "react";
import { useState } from "react";
import axios from 'axios'

function AdminPage() {
  const [pic, setPic]=useState('')

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPic(reader.result);
      };
    } else {
      setPic("");
    }
  };

  const sendData=async()=>{
    try {
      return await axios.post("http://localhost:9090/products", {image:pic})
    } catch (error) {
      console.log(error);
    }
  }

  return (
    
    <div className="home">
      <form>
      <input type="file" onChange={(e)=>TransformFileData(e.target.files[0])}></input>
      <button onClick={sendData}>click</button>
    </form>
      <h1>Home</h1>
    </div>
  );
};

export default AdminPage;
