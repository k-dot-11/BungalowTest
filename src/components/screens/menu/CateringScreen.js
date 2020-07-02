import React from "react";
import FooterBungalow from "../../layout/home/FooterBungalow";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Radium from "radium";

import {
  Button,
  Link,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Hidden,
  Container,
  Paper,
  Avatar,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TestimonialGrid from "../../layout/home/TestimonialGrid";
import { Parallax } from "react-parallax";

const CateringScreen = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        const styles = {
          heroTitle: {
            color: "white",
          },

          heroButtons: {
            padding: "20px",
          },

          heroButton: {
            marginRight: "10px",
            marginLeft: "10px",
            backgroundColor: theme.primary,
            color: "white",
          },
          cardMedia: {
            paddingTop: "56.25%",
          },
          socialIcon: {
            color: "white",
            margin: "10px",
          },
        };
        return (
          <>
           <Parallax
							blur={2}
							bgImage={require('../../../assets/concept3.jpeg')}
              bgImageAlt="the cat"
              style={{padding:'60px' , height:'auto' ,}}
							strength={600}
						>
              <Container

                  elevation={4}
                style={{ flex: 10}}
                maxWidth="sm"
              >
                <Typography
                  align="center"
                  variant="h3"
                  style={styles.heroTitle}
                >
                  Bigger Celebration needs greater care!
                  <br />
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: "#EEE" }}
                  paragraph
                >
                  <br />
                  Catering Services for 100 to 5000 guests
                </Typography>
                <Grid container justify="center" style={styles.heroButtons}>
                  <Grid item>
                    <Button href="/contactus" variant="h3" style={styles.heroButton}>
                      CONTACT US!
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Parallax>
            <div
              style={{
                flex: 10,
                backgroundColor: theme.bg,
                width:'100vw',
                paddingTop: "40px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid
                container
                spacing={2}
                style={{
                  alignSelf: "center",
                  width: "70vw",
                  margin: "25px",
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                }}
              >
                <Grid
                  style={{ marginBottom: "100px" }}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <Paper
                  elevation={4}
                    style={{
                      backgroundColor: theme.paper,
                      padding: "20px",
                      margin: "20px",
                      height: "100%",
                    }}
                  >
                    <div style={{ padding: "20px 0 25px 0" }}>
                      <Typography
                        align="center"
                        variant="h4"
                        style={{ color: theme.primary }}
                      >
                        Corporate
                      </Typography>
                    </div>
                    <div style={{ padding: "0 20px 0px 20px" }}>
                      <Typography
                        align="justify"
                        style={{ color: theme.syntax }}
                      >
                        We understand the importance of showcasing and
                        representing your brand in a unique way. Therefore,
                        Utsav caterers are really good at customizing menus,
                        themes and service styles to exceed yours and your
                        guest’s expectations.
                      </Typography>
                    </div>
                  </Paper>
                </Grid>
                <Grid
                  style={{ marginBottom: "100px" }}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <Paper
                  elevation={4}
                  style={{
                      backgroundColor: theme.paper,
                      padding: "20px",
                      margin: "20px",
                      height: "100%",
                    }}
                  >
                    <div style={{ padding: "20px 0 25px 0" }}>
                      <Typography
                        align="center"
                        variant="h4"
                        style={{ color: theme.primary }}
                      >
                        Weddings
                      </Typography>
                    </div>
                    <div style={{ padding: "0 20px 0px 20px" }}>
                      <Typography
                        align="justify"
                        style={{ color: theme.syntax }}
                      >
                        For one of the most important events in your life, We
                        focus on creating an elegant and personalized experience
                        with beautiful presentations, and by creating a
                        flavorful and unique touch for your wedding for all to
                        remember.
                      </Typography>
                    </div>
                  </Paper>
                </Grid>
                <Grid
                  style={{ marginBottom: "100px" }}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <Paper
                  elevation={4}
                  style={{
                      backgroundColor: theme.paper,
                      padding: "20px",
                      margin: "20px",
                      height: "100%",
                    }}
                  >
                    <div style={{ padding: "20px 0 25px 0" }}>
                      <Typography
                        align="center"
                        variant="h4"
                        style={{ color: theme.primary }}
                      >
                        Social
                      </Typography>
                    </div>
                    <div style={{ padding: "0 20px 0px 20px" }}>
                      <Typography
                        align="justify"
                        style={{ color: theme.syntax }}
                      >
                        With 16+ years of experience catering to life’s most
                        memorable events, Utsav can handle all the details while
                        you enjoy your own party. Be it birthday parties, family
                        get-togethers, and cocktail parties, you can count on
                        us.
                      </Typography>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
              <div
                style={{
                  flex: 1,
                  marginBottom: "50px",
                  backgroundColor: "tomato",
                  width: "76vw",
                }}
              >
                {" "}
                <div>
                  <Typography
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      padding: "30px 30px 15px",
                    }}
                    variant="h3"
                    align="center"
                  >
                    Redefining the Art of Catering
                  </Typography>
                </div>
                <div>
                  <Hidden smDown>
                    <iframe
                      style={{
                        margin: "40px 40px 20px",
                        float: "left",
                        width: "26.55vw",
                        height: "15vw",

                        /* [theme.breakpoints.down("sm")]: {
                        float: "none",
                        width: "80%",
                        height: "35vw",
                      },
                      [theme.breakpoints.up("sm")]: {
                        float: "left",
                        width: "26.55vw",
                        height: "15vw",
                      }, */
                      }}
                      src="https://www.youtube.com/embed/hHWjYe0fcHc"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </Hidden>
                  <Hidden smUp>
                    <iframe
                      style={{
                        alignSelf: "center",
                        margin: "40px 30px 20px",
                        width: "80%",
                        height: "35vw",

                        /* [theme.breakpoints.down("sm")]: {
                        float: "none",
                        
                      },
                      [theme.breakpoints.up("sm")]: {
                        float: "left",
                        width: "26.55vw",
                        height: "15vw",
                      }, */
                      }}
                      src="https://www.youtube.com/embed/hHWjYe0fcHc"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </Hidden>
                  {/* <img
                      style={{
                        margin: "60px 40px 20px",
                        float: "right",
                        alignSelf: "center",
                        justifySelf: "center",
                      }}
                      src="https://www.utsavvegetarian.com/wp-content/uploads/2019/01/utsav-ws.jpg"
                      width="475vw"
                      height="auto"
                    /> */}
                </div>
                <Typography
                  style={{ color: "white", padding: "30px", fontSize:'18px' }}
                  variant="subtitle1"
                  align="justify"
                >
                  Guests always look for culinary creativity along with engaging
                  service, they find in their favorite restaurant, but they want
                  to recreate that environment in the setting of their choice.
                  <br /> <br /> Your event doesn’t have to be just the formula
                  based “starters, main course, or desserts”. We feel that the
                  food and landscape should be as dynamic as the conversations
                  your guests have at your event & that’s where we come in.
                  <br />
                  <br />
                </Typography>
              </div>
              <Typography
                variant="h2"
                align="center"
                style={{ color: "tomato" }}
              >
                Testimonials
              </Typography>
              <hr width="60px" height="4px" />
              <Typography variant="subtitle2" align='center' style={{ color: theme.syntax }}>
                <br />
                <br />
                The love and the kind words of appreciation is really the secret
                ingredient of our success and the key reason for us to comeback.
              </Typography>
              <TestimonialGrid />
            </div>

            <FooterBungalow />
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};
export default CateringScreen;
