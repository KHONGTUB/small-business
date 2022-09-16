import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "./AddListing.css";
import { Button } from "@mui/material";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@mui/icons-material/Room";

export default function AddListing(props) {
  const [state, setState] = useState({
    name: "",
    address: "",
    hours: "",
    description: "",
  });

  useEffect(() => {
    props.deleteCoordinates();
  }, []);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    if (name === "address") {
      props.fetchCoordinates(value);
    }

    setState((prevstate) => {
      return {
        ...prevstate,
        [name]: value,
      };
    });
  };

  return (
    <div className="addPage">
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
          props.deleteCoordinates();
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
          label="Address (ex: 1234 Roundway RD, Austin, TX 78748)"
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
          Save
        </Button>
      </form>
      <div className="map" style={{ height: 500, width: 500 }}>
        {Object.keys(props.coords).length !== 0 && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_KEY }}
            defaultCenter={{ lat: 30.2672, lng: -97.7431 }}
            defaultZoom={12}
            center={props.coords}
            zoom={14}
          >
            <RoomIcon
              style={{ color: "red" }}
              lat={props.coords.lat}
              lng={props.coords.lng}
            />
          </GoogleMapReact>
        )}
      </div>
    </div>
  );
}
