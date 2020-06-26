import React from 'react';
import {Paper , Typography , Button} from '@material-ui/core';

const PartyAndCatering = () => {
    return (
        <Paper style={{ backgroundColor: '#444444', display: 'flex', flexDirection: 'column', height: '60vw' }}>
        <div
            style={{
                flex: 1,
                backgroundColor: 'tomato',
                width: '61vw',
                flexDirection: 'row',
                display: 'flex'
            }}
        >
            <div>
                <img
                    style={{ margin: '20px' }}
                    src="https://www.utsavvegetarian.com/wp-content/uploads/2018/12/small-parties-1.jpg"
                />
            </div>
            <div style={{ width: '35vw', padding: '45px' }}>
                <Typography style={{ color: 'white', fontWeight: 'bold' }} variant="h2" align="center">
                    Small Parties
                </Typography>
                <Typography style={{ color: 'white' }} variant="subtitle1" align="justify">
                    <br />
                    <br />
                    For home parties with extended family and friends upto 70 people or for a cosy gathering
                    of 25 people, we are delighted to bring delicious, hot and wholesome food at your
                    doorstep.
                </Typography>
                <Button
                    href="/signin"
                    variant="contained"
                    size="large"
                    style={{ color: 'tomato', backgroundColor: 'white', marginTop: '30px' }}
                >
                    Plan a Party !{' '}
                </Button>
            </div>
        </div>
        <div
            style={{
                flex: 1,
                backgroundColor: 'tomato',
                width: '61vw',
                flexDirection: 'row',
                display: 'flex'
            }}
        >
            <div
                style={{
                    width: '35vw',
                    padding: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <Typography style={{ color: 'white', fontWeight: 'bold' }} variant="h2" align="center">
                    Large Catering
                </Typography>
                <Typography style={{ color: 'white' }} variant="subtitle1" align="justify">
                    <br />
                    <br />
                    Be it a get-together for 100 people or a large function for 5000 guests, we ensure that
                    everybody is delighted. Complete hygiene, combined with choicest cuisines and
                    exceptional service with competitive pricing will ensure that you really celebrate.
                </Typography>
                <Button
                    href="/signin"
                    variant="contained"
                    size="large"
                    style={{ color: 'tomato', backgroundColor: 'white', marginTop: '30px' }}
                >
                    Order Now !
                </Button>
            </div>
            <img
                style={{ margin: '20px' }}
                src="https://www.utsavvegetarian.com/wp-content/uploads/2018/12/outdoor.jpg"
            />
        </div>
    </Paper>
    )
}

export default PartyAndCatering
