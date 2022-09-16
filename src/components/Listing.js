import React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import RoomIcon from "@mui/icons-material/Room";
import Paper from "@mui/material/Paper";
import "./Listing.css";
import GoogleMapReact from "google-map-react";

export default function Listing(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [display, setIsDisplay] = useState([]);

  return (
    <div>
      {isClicked === false ? (
        <TableContainer
          style={{ width: "90vw" }}
          className="Table"
          component={Paper}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Hours</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.listings.map((business, index) => (
                <TableRow key={business["name"]}>
                  <TableCell
                    className="nameUnderline"
                    onClick={(e) => {
                      props.fetchCoordinates(business["address"]);
                      setIsClicked(!isClicked);
                      setIsDisplay(
                        props.listings.find((element) => {
                          return element["name"] === e.target.innerText;
                        })
                      );
                    }}
                    component="th"
                    scope="row"
                  >
                    {business["name"]}
                  </TableCell>
                  <TableCell>{business["description"]}</TableCell>
                  <TableCell>{business["hours"]}</TableCell>
                  <TableCell>{business["address"]}</TableCell>
                  {props.loggedIn === true && (
                    <TableCell>
                      <DeleteIcon
                        onClick={() => props.removeListing(index)}
                        style={{ color: "red" }}
                      />
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>
          <button
            className="returnButton"
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            Return
          </button>
          <div className="Details">
            <h1 className="Title">{display["name"]}</h1>
            <h3 className="Address">{display["address"]}</h3>
            <h3 className="Open">{display["hours"]}</h3>
            <p className="Desc">{display["description"]}</p>
            <div style={{ height: 600, width: 600 }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_KEY,
                  language: "en",
                }}
                defaultCenter={{ lat: 30.2672, lng: -97.7431 }}
                defaultZoom={12}
                center={props.coords}
                zoom={15}
              >
                <RoomIcon
                  style={{ color: "red" }}
                  lat={props.coords.lat}
                  lng={props.coords.lng}
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
