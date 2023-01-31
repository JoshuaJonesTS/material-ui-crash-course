import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { imageAddress } from "./TourCard.utils";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";

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
                        <AccessTime sx={{ width: 12.5 }}/>
                        <Typography variant='body2' component='p' marginLeft={0.5}>
                            5 hours
                        </Typography>
                    </Box>
                    <Box  
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        marginTop={3}
                    >
                        <Rating 
                            name='half-rating-read' 
                            defaultValue={4.5} 
                            precision={0.5} 
                            readOnly 
                            size='small'
                        />
                        <Typography variant='body2' component='p' marginLeft={0.5}>
                            4.5
                        </Typography>
                        <Typography variant='body2' component='p' marginLeft={0.5}>
                            (655 reviews)
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
}

export default TourCard;