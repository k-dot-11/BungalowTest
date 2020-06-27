import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import OdeToFood from "../layout/home/OdeToFood";
import FooterBungalow from "../layout/home/FooterBungalow";
import {
  Button,
  Link,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Container,
  Paper,
  Avatar,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const AboutPage = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <>
            <div
              style={{
                backgroundColor: theme.bg,
                paddingTop: "40px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Paper
                elevation={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    backgroundColor: "tomato",
                    width: "61vw",
                  }}
                >
                  {" "}
                  <img
                    style={{ margin: "60px 40px 20px", float: "right" }}
                    src="https://www.utsavvegetarian.com/wp-content/uploads/2019/01/utsav-ws.jpg"
                    height="475vw"
                    width="auto"
                  />
                  <Typography
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      padding: "30px 30px 15px",
                    }}
                    variant="h2"
                    align="left"
                  >
                    Our Story
                  </Typography>
                  <Typography
                    style={{ color: "white", padding: "30px" }}
                    variant="subtitle1"
                    align="justify"
                  >
                    Utsav is an award-winning vegetarian restaurant which has
                    been providing top-notch dining experiences since 2000. It
                    earned innumerable awards and unstinted recognition for its
                    impeccable service and delectable range of varied cuisines.
                    <br /> <br /> Known for its exquisite ala-carte and
                    elaborate buffets, special weekend feasts with the
                    contemporary multi-cuisine vegetarian fare, Utsav is the
                    only restaurant to have won all the four awards by
                    Association of Catering Professionals, Diners Club, Times
                    Group and AP Tourism.
                    <br />
                    <br /> Yes! Now we are back in a new format, directly to
                    wherever you are, at your doorstep. That premium food
                    experience you have cherished at our restaurants, is now
                    available to you at the comfort of your home/office,
                    directly delivering deliciousness to you. You can find us on
                    various delivery platforms like Swiggy, Zomato, and Ubereats
                    or you can order directly from our websites.{" "}
                  </Typography>
                  <Typography
                    style={{ color: "white", padding: "0px 30px 40px " }}
                    variant="subtitle1"
                    align="center"
                  >
                    Come, join us as we continue to celebrate this ode to food.
                  </Typography>
                </div>
              </Paper>
              <Container
                style={{
                  flex: 10,
                  padding: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Paper
                  elevation={3}
                  style={{
                    backgroundColor: theme.paper,
                    padding: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    align="center"
                    variant="h2"
                    style={{ color: "tomato", fontWeight: "bold" }}
                  >
                    Our Team <br />
                  </Typography>
                  <div style={{ marginRight: "160px", marginLeft: "160px" }}>
                    <Typography
                      align="center"
                      style={{ color: theme.syntax, size: "30px" }}
                    >
                      ________
                      <br />
                      <br />
                      The passion for food, eagerness to serve and the
                      commitment to delight has always been the binding force of
                      our team. The magic continues…
                      <br />
                      <br />
                    </Typography>
                  </div>
                  <br />
                  <img
                    style={{ borderRadius: 15, margin: 20 }}
                    src="https://www.utsavvegetarian.com/wp-content/uploads/2019/12/team-1200x769.jpg"
                    width="990"
                    height="auto"
                  />
                </Paper>
              </Container>

              <Typography
                variant="h2"
                align="center"
                style={{ color: "tomato" }}
              >
                Testimonials
              </Typography>
              <hr width="60px" height="4px" />
              <Typography variant="subtitle2" style={{ color: theme.syntax }}>
                <br />
                <br />
                The love and the kind words of appreciation is really the secret
                ingredient of our success and the key reason for us to comeback.
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "55vw",
                  margin: "20px",
                  marginBottom: "30px",
                }}
              >
                <Paper
                  style={{
                    backgroundColor: theme.paper,
                    padding: "20px",
                    margin: "20px",
                  }}
                >
                  <Typography style={{ color: theme.syntax }}>
                    For a vegetarian buffet Lunch I think this is one of the
                    best places. The services is also very impressive
                  </Typography>
                  <div>
                    <Avatar
                      style={{ backgroundColor: "tomato", margin: "10px" }}
                    >
                      KS
                    </Avatar>
                  </div>
                </Paper>
                <Paper
                  style={{
                    backgroundColor: theme.paper,
                    padding: "20px",
                    margin: "20px",
                  }}
                >
                  <Typography style={{ color: theme.syntax }}>
                    For a vegetarian buffet Lunch I think this is one of the
                    best places. The services is also very impressive
                  </Typography>
                  <div>
                    <Avatar
                      style={{ backgroundColor: "tomato", margin: "10px" }}
                    >
                      MD
                    </Avatar>
                  </div>
                </Paper>
                <Paper
                  style={{
                    backgroundColor: theme.paper,
                    padding: "20px",
                    margin: "20px",
                  }}
                >
                  <Typography style={{ color: theme.syntax }}>
                    For a vegetarian buffet Lunch I think this is one of the
                    best places. The services is also very impressive
                  </Typography>
                  <div>
                    <Avatar
                      style={{ backgroundColor: "tomato", margin: "10px" }}
                    >
                      PS
                    </Avatar>
                  </div>
                </Paper>
              </div>
            </div>
            <FooterBungalow />
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default AboutPage;
