import React, { useState } from "react";
import AWS from "aws-sdk";
import "./RegistrationForm.css";

const RegistrationForm = () => {
 
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    contact: "",
    skills: "",
 
    address: "",
    city: "",
    state: "",
    zipCode: "",
    passportType: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Configure AWS SDK with your credentials
    const s3 = new AWS.S3({
      accessKeyId: ,
      secretAccessKey: ,
    });

    // Specify bucket name and file name
    const bucketName = ;
    const fileName = `${formData.firstName}-${formData.lastName}.json`;

    // Convert form data to JSON string
    const data = JSON.stringify(formData);

    // Upload data to S3 bucket
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: data,
    };
    await s3.upload(params).promise();

    // Reset form data
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      contact: "",
      skills: "",
    
      address: "",
      city: "",
      state: "",
      zipCode: "",
      passportType: "",
    });
  };



  return (
    <form onSubmit={handleSubmit}>
    <h2>Registration Form</h2>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Middle Name:
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Contact:
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Skills:
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleInputChange}
        />
      </label>
      
      <label>
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
      </label>
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Zip Code:
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Passport Type:
        <select
          name="passportType"
          value={formData.passportType}
          onChange={handleInputChange}
        >
          <option value="Regular">Regular</option>
          <option value="Tatkal">Tatkal</option>
          <option value="Diplomatic">Diplomatic</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
