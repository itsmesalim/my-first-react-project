import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {

  const navigate = useNavigate();

  const initialState = {
    name: "",
    email: "",
    password: ""
  }

  const [data, setData] = useState(initialState);

  /* 
    the above statement is useState hook. 
    data: is our state variable.
    setData: is the function to update the 'name' state.
  
  */

  const handleChange = (e) => {
    e.preventDefault();
    
    // const name = e.target.name;
    // const value = e.target.value;
    const {name, value} = e.target;
 
    const actsValue = (name === "email") ? value.toLowerCase() : value;

    console.log(name, value);

    setData( (prev) => {
      return{
        ...prev, [name] : actsValue
      }
    });


  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(data);

    setData(initialState);
    navigate("/Menue");
  }

  return (
    <>
      <form className="signup-form" onSubmit={handleSubmit}>
        <nav className="nav-bar">USER SIGNUP</nav>

        <label htmlFor="">User Name</label>

        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Enter your Name"
          onChange={handleChange}
          // onChange={(e) => setName(e.target.value.substring(0,10))}
        />

        <label htmlFor="">Email</label>

        <input 
        type="text" 
        name="email" 
        value={data.email}
        placeholder="Enter your Email" 
        onChange={handleChange}
        />

        <label htmlFor="">Password</label>

        <input 
        type="password" 
        name="password" 
        value={data.password}
        placeholder="Enter your Password" 
        onChange={handleChange}
        />

        <button type="submit" name="submit" value="Submit">
          SUBMIT
        </button>
      </form>
    </>
  );
}

