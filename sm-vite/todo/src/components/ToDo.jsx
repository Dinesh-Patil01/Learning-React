import { useState } from "react";

const ToDo = () => {
  const [formState, setFormState] = useState({
   
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const formInputValue =
      type === "checkbox" ? checked : type === "number" ? Number(value) : value;

    const newState = {
      ...formState,
      [name]: formInputValue,
    };

    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "30px",
          padding: "20px",
          border: "1px solid black",
        }}
      >
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={formState.age}
          onChange={handleInputChange}
          placeholder="Age"
        />
       
        <label>
          Married:
          <input
            type="checkbox"
            name="isMarried"
            checked={formState.isMarried}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ToDo;