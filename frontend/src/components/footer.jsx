import React, { useState } from 'react'

function Footer() {
  const [email, setEmail] = useState("");
  const validateEmail = (e) =>{
    const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patt.test(e);
  }
  const handleSub = async ()=>{
    try {
      if(!validateEmail(email)){
        alert("Invalid Email");
        return;
      }
    await fetch("http://127.0.0.1:3000/v1/subscription",
      {
        method:"Post",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          subscription:{email:email}})
      })

      alert("Subscription added !")
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <div className='horizontal_scroll footer'>
        <p>Home</p>
        <p>Services</p>
        <p>Projects</p>
        <p>Testmonials</p>
        <p>Connect</p>
        <div>
            <label>Email</label>
            <input type="email"  onChange={(e)=>{
              
              setEmail(e.target.value)}}/>
            <button onClick={handleSub}>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
