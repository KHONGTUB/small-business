import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Listing.css";

export default function Listing(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [display, setIsDisplay] = useState([]);

  function displayDetails(text) {
    setIsDisplay(
      props.listings.find((element) => {
        return element["name"] === text;
      })
    );
  }

  return (
    <div>
      {isClicked === false ? (
        <TableContainer className="Table" component={Paper}>
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
              {props.listings.map((business) => (
                <TableRow key={business["name"]}>
                  <TableCell
                    onClick={(e) => {
                      setIsClicked(!isClicked);
                      displayDetails(e.target.innerText);
                    }}
                    component="th"
                    scope="row"
                  >
                    {business["name"]}
                  </TableCell>
                  <TableCell>{business["description"]}</TableCell>
                  <TableCell>{business["hours"]}</TableCell>
                  <TableCell>{business["address"]}</TableCell>
                  {props.loggedIn === true && <TableCell>Delete</TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>
          <div className="Details">
            <h1 className="Title">{display["name"]}</h1>
            <h3 className="Address">{display["address"]}</h3>
            <h3 className="Open">{display["hours"]}</h3>
            <p className="Desc">{display["description"]}</p>
          </div>
          <button
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            Return
          </button>
        </div>
      )}
    </div>
  );
}
