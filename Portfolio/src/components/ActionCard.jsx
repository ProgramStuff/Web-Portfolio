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

    // const [visibleCard, setVisibleCard] = React.useState("");


//     async function scrollAnimation (element, rootMargin) {
//       const [isVisible, setIsVisible] = React.useState(false);

//       React.useEffect(() => {
//         const current = element?.current;
//         const observer = new IntersectionObserver(
//           ([entry]) => {
//             setIsVisible(entry.isIntersecting);
//           },
//           { rootMargin }
//         );
//         current && observer?.observe(current);

//         return () => current && observer.unobserve(current);
//       }, []);
//       return isVisible;
// };

    // const triggerRef = React.useRef(null);
    // const isVisible = scrollAnimation(triggerRef, "0px");

    // React.useEffect(() => {
    //   if (isVisible) {
    //     console.log(isVisible);
    //     setVisibleCard("visible-card");
    //     slideCards(); // Trigger a function when the container is visible on view port
    //   }
    // }, [slideCards, isVisible]);

    const slideCards = () => {
      anime({
        targets: '.project-cards',
        easing: 'easeInOutExpo',
        translateX: 1450,
        duration: 600
      });
    }

    React.useEffect(() => {
      slideCards();
    })

    return (
      <Card className='project-cards' sx={{ background: 'gray' }}>
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