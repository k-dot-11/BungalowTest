import React from 'react';
import { Paper, Typography, Button, Container, Hidden } from '@material-ui/core';
import { ThemeContext } from '../../../contexts/ThemeContext';
import './style.css';

const PartyAndCatering = () => {
<<<<<<< HEAD
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <Paper
            elevation={4}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              xs={12}
              sm={6}
              md={4}
              style={{
                flex: 1,
                backgroundColor: theme.primary,
                alignItems: "center",
                width: "61vw",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <div>
                <Hidden smDown>
                  <img
                    className="img-party"
                    style={{
                      top: "50%",
                      left: "50%",
                      margin: "20px",
                      width: "26vw",
                      height: "auto",
                    }}
                    src={require("../../../assets/party.png")}
                  />
                </Hidden>
              </div>
              <div
                className="content-party"
                style={{ padding: "45px", transition: "0.5s" }}
              >
                <Typography
                  style={{ color: "white", fontWeight: "bold" }}
                  variant="h2"
                  align="center"
                >
                  Small Parties
                </Typography>
                <Typography
                  style={{ color: "white" }}
                  variant="subtitle1"
                  align="justify"
                >
                  <br />
                  <br />
                  For home parties with extended family and friends upto 70
                  people or for a cosy gathering of 25 people, we are delighted
                  to bring delicious, hot and wholesome food at your doorstep.
                </Typography>
                <Button
                  href="/signin"
                  variant="contained"
                  size="large"
                  style={{
                    justifySelf: "center",
                    color: theme.primary,
                    backgroundColor: "white",
                    marginTop: "30px",
                  }}
                >
                  Plan a Party !{" "}
                </Button>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                backgroundColor: theme.primary,
                width: "61vw",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <div
                className="content-party"
                style={{
                  padding: "45px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{ color: "white", fontWeight: "bold" }}
                  variant="h2"
                  align="center"
                >
                  Large Catering
                </Typography>
                <Typography
                  style={{ color: "white" }}
                  variant="subtitle1"
                  align="justify"
                >
                  <br />
                  <br />
                  Be it a get-together for 100 people or a large function for
                  5000 guests, we ensure that everybody is delighted. Complete
                  hygiene, combined with choicest cuisines and exceptional
                  service with competitive pricing will ensure that you really
                  celebrate.
                </Typography>
                <Button
                  href="/catering"
                  variant="contained"
                  size="large"
                  style={{
                    color: theme.primary,
                    backgroundColor: "white",
                    marginTop: "30px",
                  }}
                >
                  Order Now !{" "}
                </Button>
              </div>
=======
	return (
		<ThemeContext.Consumer>
			{(context) => {
				const { isLightTheme, light, dark } = context;
				const theme = isLightTheme ? light : dark;
				return (
					<Paper
						elevation={4}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center'
						}}
						xs={12}
						sm={12}
					>
						<div
							xs={12}
							sm={6}
							md={4}
							style={{
								flex: 1,
								backgroundColor: theme.primary,
								alignItems: 'center',
								width: '75vw',
								flexDirection: 'row',
								display: 'flex'
							}}
						>
							<div>
								<Hidden smDown>
									<img
										className="img-party"
										style={{
											top: '50%',
											left: '50%',
											margin: '20px',
											width: '35vw',
											height: '60vh'
										}}
										src={require('../../../assets/party.png')}
									/>
								</Hidden>
							</div>
							<div className="content-party" style={{ padding: '45px', transition: '0.5s' }}>
								<Hidden mdUp>
									<img
										className="img-party"
										style={{
											margin: '20px',
											width: '50vw',
											height: 'auto'
										}}
										src={require('../../../assets/party.png')}
									/>
								</Hidden>
>>>>>>> 89e757075c6506b6d5350f3022ddef2d8180d58a

								<Typography style={{ color: 'white', fontWeight: 'bold' }} variant="h2" align="center">
									Small Parties
								</Typography>
								<Typography style={{ color: 'white' }} variant="subtitle1" align="justify">
									<br />
									<br />
									For home parties with extended family and friends upto 70 people or for a cosy
									gathering of 25 people, we are delighted to bring delicious, hot and wholesome food
									at your doorstep.
								</Typography>
								<Button
									href="/smallparties"
									variant="contained"
									size="large"
									style={{
										justifySelf: 'center',
										color: theme.primary,
										backgroundColor: 'white',
										marginTop: '30px'
									}}
								>
									Plan a Party !{' '}
								</Button>
							</div>
						</div>
						<div
							style={{
								flex: 1,
								backgroundColor: theme.primary,
								width: '75vw',
								flexDirection: 'row',
								display: 'flex'
							}}
						>
							<div
								className="content-party"
								style={{
									padding: '45px',
									display: 'flex',
									alignItems: 'center',
									flexDirection: 'column'
								}}
							>
								<Hidden mdUp>
									<img
										className="img-party"
										style={{
											margin: '20px',
											width: '50vw',
											height: 'auto'
										}}
										src={require('../../../assets/catering.png')}
									/>
								</Hidden>
								<Typography style={{ color: 'white', fontWeight: 'bold' }} variant="h2" align="center">
									<br />
									Large Catering
								</Typography>
								<Typography style={{ color: 'white' }} variant="subtitle1" align="justify">
									<br />
									<br />
									Be it a get-together for 100 people or a large function for 5000 guests, we ensure
									that everybody is delighted. Complete hygiene, combined with choicest cuisines and
									exceptional service with competitive pricing will ensure that you really celebrate.
								</Typography>
								<Button
									href="/signin"
									variant="contained"
									size="large"
									style={{
										color: theme.primary,
										backgroundColor: 'white',
										marginTop: '30px'
									}}
								>
									Order Now !{' '}
								</Button>
							</div>

							<Hidden smDown>
								<div>
									<img
										style={{ width: '35vw', margin: '20px', height: '60vh' }}
										src={require('../../../assets/catering.png')}
									/>
								</div>
							</Hidden>
						</div>
					</Paper>
				);
			}}
		</ThemeContext.Consumer>
	);
};

export default PartyAndCatering;
