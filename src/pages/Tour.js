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
                <img src='https://www.travelandleisure.com/thmb/655_7ZWBV7JsuIkj270XXpHYXxA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/las-vegas-nevada-LVTG0221-9fbc1de25545444ead7dd48d2a6b1056.jpg' alt='' style={{height: '325px', width: '500px'}}/>
            </Box>
        </Container>
    );
}

export default Tour;