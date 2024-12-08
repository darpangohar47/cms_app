import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here

        await fetch("http://127.0.0.1:3000/v1/contact",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({contact:{
                fullname:formData.fullName,
                email:formData.email,
                mobile:formData.mobile,
                city:formData.city,
                
            }})
        },
    )
        alert("Form submitted successfully!");
        setFormData({
            fullName: "",
            email: "",
            mobile: "",
            city: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Contact Form</h2>
            <div style={{ marginBottom: "10px" }}>
                <label>Full Name:</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    style={{ width: "100%", padding: "8px" }}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    style={{ width: "100%", padding: "8px" }}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label>Mobile Number:</label>
                <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    required
                    style={{ width: "100%", padding: "8px" }}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label>City:</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    required
                    style={{ width: "100%", padding: "8px" }}
                />
            </div>
            <button
                type="submit"
                style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
