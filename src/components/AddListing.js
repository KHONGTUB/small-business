import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./AddListing.css";

export default function AddListing() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="input"
      >
        <TextField id="name" label="Name" variant="standard" />
        <TextField id="address" label="Address" variant="standard" />
        <TextField id="hours" label="Hours" variant="standard" />
        <TextField id="description" label="Description" variant="standard" />
      </Box>
    </div>
  );
}
