import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { imageAddress } from "./TourCard.utils";

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img 
                    src={imageAddress}
                    alt=''
                >
                </img>
            </Paper>
        </Grid>
    );
}

export default TourCard;