
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Box, Chip } from '@mui/material';
import "./InfoBox.css";

const WEATHER_IMAGES = {
    default: "https://images.unsplash.com/photo-1549492470-d6ec75906b28?q=80&w=1931&auto=format&fit=crop",
    hot: "https://plus.unsplash.com/premium_photo-1667867219548-f025c60c5940?q=80&w=1974&auto=format&fit=crop",
    cold: "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?q=80&w=1975&auto=format&fit=crop",
    rain: "https://plus.unsplash.com/premium_photo-1670002344425-f274ee445f76?q=80&w=2070&auto=format&fit=crop"
};

export default function InfoBox({ info }) {
    const [bgImage, setBgImage] = useState(WEATHER_IMAGES.default);

    useEffect(() => {
        if (info.humidity > 80) setBgImage(WEATHER_IMAGES.rain);
        else if (info.temp > 15) setBgImage(WEATHER_IMAGES.hot);
        else setBgImage(WEATHER_IMAGES.cold);
    }, [info]);

    return (
        <Box className="InfoBox">
            <Card 
                sx={{ 
                    width:300,
                    maxWidth: 400, 
                    borderRadius: 3, 
                    boxShadow: 6, 
                    transition: "0.3s ease-in-out",
                    '&:hover': { transform: 'scale(1.05)' }
                }}
            >
                <CardMedia component="img" height="160" image={bgImage} alt="Weather" />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        {info.city} 
                        {info.humidity > 80 ? <ThunderstormIcon color="primary" /> 
                        : info.temp > 15 ? <WbSunnyIcon color="warning" /> 
                        : <AcUnitIcon color="info" />}
                    </Typography>

                    <Chip 
                        label={info.weather} 
                        sx={{ my: 1, fontSize: 14, fontWeight: 'bold', backgroundColor: 'lightgray' }}
                    />

                    <Typography variant="body1">
                        🌡 Temperature: <b>{info.temp}&deg;C</b>
                    </Typography>
                    <Typography variant="body2">
                        Min: {info.tempMin}&deg;C | Max: {info.tempMax}&deg;C
                    </Typography>
                    <Typography variant="body2">
                        💧 Humidity: {info.humidity}%
                    </Typography>
                    <Typography variant="body2">
                        💨 Wind Speed: {info.windSpeed} km/h
                    </Typography>
                    <Typography variant="body2">
                        🔻 Pressure: {info.pressure} hPa
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
