import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import anime from 'animejs/lib/anime.es.js';

import FLLHomeImage from '../assets/images/FLL-home.png';

  
  export default function ActionAreaCard() {

    const [cardState, setCardState] = React.useState("");

    async function slideCards() {
      anime({
        targets: '.slide-card',
        easing: 'easeInOutExpo',
        translateX: 1450,
        duration: 600,
      });
    }

    const scrollAnimation = (element, rootMargin) => {
      const [isVisible, setIsVisible] = React.useState();

      React.useEffect(() => {
        const current = element?.current;
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting);
          },
          { rootMargin }
        );
        current && observer?.observe(current);

        return () => current && observer.unobserve(current);
      }, []);
      return isVisible;
};

  const triggerRef = React.useRef(null);
  const isVisible = scrollAnimation(triggerRef, "0px");

    React.useEffect(() => {
      if (isVisible) {
        setCardState("slide-card");
        slideCards();
      }
    }, [slideCards, isVisible]);

    return (
      <Card ref={triggerRef} className={cardState ? cardState : "hidden-card"} sx={{ background: 'gray' }}>
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
            height="390"
            image={FLLHomeImage}
            alt="Project image"
          />

        </CardActionArea>
      </Card>
    );
  }
