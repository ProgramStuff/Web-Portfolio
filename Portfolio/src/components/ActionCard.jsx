import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import FLLHomeImage from '../assets/images/FLL-home.png';

/**
 * 
 *   .note {
    background: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 240px;
    margin: 16px;
    float: left;
  }
 */

  
  export default function ActionAreaCard() {
    return (
      <Card sx={{ maxWidth: 345, background: 'gray', borderRadius: '15px' }}>
        <CardActionArea>
 
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              First Lego League Management
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Manage First Lego League volunteers and set announcements
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            height="160"
            image={FLLHomeImage}
            alt="Project image"
          />

        </CardActionArea>
      </Card>
    );
  }