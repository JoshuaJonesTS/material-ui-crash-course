import { Typography } from "@mui/material";
import Container from "@mui/system/Container";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";

const Tour = () => {
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant='h3' component='h1' marginTop={3}>
                Explore the World in Vegas
            </Typography>
            <Box marginTop={3} sx={{display: 'flex'}}>
                <img src='https://media.timeout.com/images/105124791/750/422/image.jpg' alt='' style={{height: '325px'}}/>
            </Box>
            <ImageCollage />
        </Container>
    );
}

export default Tour;