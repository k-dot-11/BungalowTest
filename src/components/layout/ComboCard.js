import React from "react";
import {
  List,
  Typography,
  Paper,
  Container,
  Avatar,
  Button,
} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const items = [
  {
    dish: "Soft-Boiled Organic Egg",
    ing: "Potato/Bread/Cheese",
    price: "13",
  },
  {
    dish: "Soft-Boiled Organic Egg",
    ing: "Potato/Bread/Cheese",
    price: "16",
  },
  {
    dish: "Soft-Boiled Organic Egg",
    ing: "Potato/Bread/Cheese",
    price: "12",
  },
  {
    dish: "Soft-Boiled Organic Egg",
    ing: "Potato/Bread/Cheese",
    price: "16",
  },
  {
    dish: "Soft-Boiled Organic Egg",
    ing: "Potato/Bread/Cheese",
    price: "18",
  },
  {
    dish: "Soft-Boiled Organic Egg",
    ing: "Potato/Bread/Cheese",
    price: "20",
  },
];

const ComboCard = () => (
  <>
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <Container
        style={{
          paddingRight: "20px",
          paddingLeft: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={4}
          style={{
            display: "flex",
            flexDirection: "column",

            width: "25%",
            padding: "30px",
            border: "3px solid tomato",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              flex: 1,
              borderRadius: "10px",

              width: "100%",
            }}
          >
            <div style={{ paddingLeft: "17px", float: "left", width: "50%" }}>
              <Typography variant="h6" style={{ color: "tomato" }}>
                DINNER PACK
              </Typography>
              <Typography variant="body2" style={{ paddingBottom: "20px" }}>
                Save 65%
              </Typography>
            </div>
            <div
              style={{
                float: "right",
                width: "20%",

                paddingRight: "20px",
              }}
            >
              <Typography variant="h4" style={{ color: "tomato" }}>
                $109
              </Typography>
            </div>
            {items.map((item, index) => (
              <List key={index}>
                <ListItem>
                  <ListItemText primary={item.dish} />
                  <Typography style={{ float: "right" }}>
                    ${item.price}
                  </Typography>
                </ListItem>
                <ListItem style={{ paddingTop: "0px" }}>
                  <ListItemText secondary={item.ing} />
                </ListItem>
              </List>
            ))}

            <Button
              href="/signin"
              variant="contained"
              size="large"
              style={{
                color: "tomato",
                backgroundColor: "white",
                margin: "10px 0 10px 15px",
              }}
            >
              Order Now &gt;{" "}
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  </>
);

export default ComboCard;
