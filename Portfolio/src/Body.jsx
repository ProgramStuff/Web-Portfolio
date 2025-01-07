import ActionCard from './components/ActionCard'
import { Container } from '@mui/material'

export default function Body(){
    return (
        <>
            <h3 class='section-title' id='projects'>Projects</h3>
            {/* <Container id='card-container'> */}
                <ActionCard />
                <ActionCard />
                {/* <ActionCard />
                <ActionCard />
                <ActionCard />
                <ActionCard />
                <ActionCard /> */}
            {/* </Container> */}
        </>
    )
}