import { useState } from "react";

export default function ContactForm() {
  const [getData, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data telah di submit");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Firstname</label>
      <input
        type="text"
        name="firstName"
        value={getData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Lastname</label>
      <input
        type="text"
        name="lastName"
        value={getData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={getData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <p>{JSON.stringify(getData)}</p>
    </form>
  );
}
