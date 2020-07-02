import React from "react";
import Typography from "@material-ui/core/Typography";
import Hero from "../layout/home/Hero";
import TestimonialGrid from "../layout/home/TestimonialGrid";
import OdeToFood from "../layout/home/OdeToFood";
import OrderOnlineHome from "../layout/home/OrderOnlineHome";
import ImageSlider from "../layout/home/ImageSlider";
import PartyAndCatering from "../layout/home/PartyAndCatering";
import FooterBungalow from "../layout/home/FooterBungalow";
import { ThemeContext } from "../../contexts/ThemeContext";
import OldHero from "../layout/home/OldHero";
import { Hidden } from "@material-ui/core";

const HomePage = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100vw",
              backgroundColor: theme.bg,
              overflowX: "hidden",
            }}
          >
            <Hidden smDown>
              <Hero />
            </Hidden>
            <Hidden mdUp>
              <OldHero />
            </Hidden>

            <OdeToFood />

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
              <OrderOnlineHome />

              <ImageSlider />

              <PartyAndCatering xs={12} sm={12} />

              <div
                style={{
                  marginTop: "67px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "30px",
                }}
              >
                <Typography
                  variant="h2"
                  align="center"
                  style={{ color: theme.primary }}
                >
                  Testimonials
                </Typography>
                <Typography
                  variant="subtitle2"
                  align="center"
                  style={{ color: theme.syntax }}
                >
                  <br />
                  <br />
                  The love and the kind words of appreciation is really the
                  secret ingredient of our success and the key reason for us to
                  comeback.
                </Typography>
                <TestimonialGrid />
              </div>
            </div>
            <FooterBungalow />
          </div>
        );
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
            paddingTop: "56.25%", // 16:9
          },
          socialIcon: {
            color: "white",
            margin: "10px",
          },
        };
      }}
    </ThemeContext.Consumer>
  );
};

export default HomePage;
