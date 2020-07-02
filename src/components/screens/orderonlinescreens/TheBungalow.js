import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const TheBungalow = () => {
  return (
    <div
      style={{
        margin: "100px",
        // flex: "1",
        // height: "100%",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "20px",
            }}
            height="110px"
            width="110px"
            src={require("../../../assets/rocket.png")}
          ></img>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            align="center"
            style={{ color: "tomato", fontWeight: "400" }}
          >
            COMING SOON!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h5">
            We are almost there! This section is under construction. <br />
            Come back later to view this section!
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            textAlign: "center",
          }}
          xs={12}
        >
          <Button
            style={{
              margin: "25px",
              color: "tomato",
              backgroundColor: "#FFF",
            }}
            variant="contained"
            component="span"
          >
            <Link style={{ color: "tomato", textDecoration: "none" }} to="/">
              GO TO HOME
            </Link>
          </Button>

          <Button
            style={{
              margin: "25px",
              backgroundColor: "#FFF",
              color: "tomato",
            }}
            variant="contained"
            component="span"
          >
            <Link
              style={{ color: "tomato", textDecoration: "none" }}
              to="/menu"
            >
              CHECK MENU
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default TheBungalow;
