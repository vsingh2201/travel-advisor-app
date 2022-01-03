import React from 'react'
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
    // This is a hook in React
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');
    

    //const coordinates = {lat:0, lng:0};

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
            bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={(e) =>{
                setCoordinates({lat:e.center.lat, lng:e.center.lng});
                setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw});
            }}
            onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                        (!isDesktop) ? (
                            <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                        ): (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                    {place.name}
                                </Typography>
                                <img 
                                    className={classes.pointer}
                                    src = {place.photo ? place.photo.images.large.url :'data:image/png;base64,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'}
                                    alt ={place.name}
                                />
                                <Rating size="small" value={Number(place.rating)} readOnly/>
                            </Paper>
                        )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map
