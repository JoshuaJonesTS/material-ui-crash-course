import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { imageAddress } from "./TourCard.utils";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img 
                    src={imageAddress}
                    alt=''
                >
                </img>
                <Box paddingX={1}>
                    <Typography variant='subtitle1' component='h2'>
                        Immerse into the Falls
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                    <AccessTime/>
                    <Typography variant='body2' component='p'>
                        5 hours
                    </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
}

export default TourCard;