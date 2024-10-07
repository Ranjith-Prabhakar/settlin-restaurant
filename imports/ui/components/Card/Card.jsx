import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { useNavigate } from "react-router-dom"

export default function RestaurantCard({ restaurant }) {
    const navigate = useNavigate()  
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={restaurant.imageUrl}
          alt="restaurant image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {restaurant.name}
          </Typography>
          <Button sx={{width:'100%'}} variant="contained" size='large' onClick={()=>navigate(`/book_seat/${restaurant._id}`)}>Book Seats</Button>         
        </CardContent>
    </Card>
  );
}
