import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adding = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8080/api/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(book);
  return (
    <>
      <div className="form">
        <h1>Add A New Book</h1>
        <input
          type="text"
          placeholder="enter the title"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="enter the decription"
          name="desc"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="enter the cover"
          name="cover"
          onChange={handleChange}
        />
      </div>
      <button className="add-button" onClick={handleClick}>
        Add Book
      </button>
    </>
  );
};

export default Adding;
