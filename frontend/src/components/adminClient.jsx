import React, { useState } from "react";

const AdminClient = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        designation:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here

        await fetch("http://127.0.0.1:3000/v1/client",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({client:{
                name:formData.name,
                description:formData.description,
                image:formData.image,
                designation:formData.designation
                
            }})
        },
    )
        alert("Form submitted successfully!");
        setFormData({
            name: "",
        description: "",
        image: "",
        designation:""
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Add a client</h2>
            <div style={{ marginBottom: "10px" }}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    style={{ width: "100%", padding: "8px" }}
                />
            </div>
            
            
            <div style={{ marginBottom: "10px" }}>
                <label>description:</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter your description"
                    required
                    style={{ width: "100%", padding: "8px" }}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label>Image Address:</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Enter your Image Address"
                    required
                    style={{ width: "100%", padding: "8px" }}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label>Designation</label>
                <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Enter Designation"
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

export default AdminClient;
