import { Typography } from "@mui/material";
import Container from "@mui/system/Container";

const Tour = () => {
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant='h3' component='h1' marginTop={3}>
                Explore the World in Vegas
            </Typography>
        </Container>
    );
}

export default Tour;