import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./AddListing.css";
import { Button } from "@mui/material";

export default function AddListing(props) {
  const [state, setState] = useState({
    name: "",
    address: "",
    hours: "",
    description: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevstate) => {
      return {
        ...prevstate,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form
        className="addform"
        onSubmit={(e) => {
          e.preventDefault();
          props.addListing(state);
          setState(() => {
            return {
              name: "",
              address: "",
              hours: "",
              description: "",
            };
          });
        }}
      >
        <TextField
          id="name"
          name="name"
          value={state.name}
          onChange={handleTextChange}
          label="Name"
          variant="standard"
        />
        <TextField
          id="address"
          name="address"
          value={state.address}
          onChange={handleTextChange}
          label="Address (ex: 1234 Roundway RD, Austin, TX, 78748)"
          variant="standard"
        />
        <TextField
          id="hours"
          name="hours"
          value={state.hours}
          onChange={handleTextChange}
          label="Hours (ex: 8AM - 9PM)"
          variant="standard"
        />
        <TextField
          id="description"
          name="description"
          value={state.description}
          onChange={handleTextChange}
          label="Description"
          variant="standard"
        />
        <Button
          type="submit"
          className="submit_button"
          variant="contained"
          color="primary"
        >
          submit
        </Button>
      </form>
    </div>
  );
}
