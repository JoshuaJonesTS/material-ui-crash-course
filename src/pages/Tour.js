import { Typography } from "@mui/material";
import Container from "@mui/system/Container";
import Box from "@mui/material/Box";

const Tour = () => {
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant='h3' component='h1' marginTop={3}>
                Explore the World in Vegas
            </Typography>
            <Box marginTop={3} sx={{displayFlex: 'flex'}}>
                <img src='https://media.timeout.com/images/105124791/750/422/image.jpg' alt='' style={{height: '325px'}}/>
            </Box>
        </Container>
    );
}

export default Tour;