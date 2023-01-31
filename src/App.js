import './App.css'
import TourCard from './components/TourCard';
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';
import SearchAppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <Container>
        <Grid container spacing={5}>
          <TourCard/>
          <TourCard/>
          <TourCard/>
          <TourCard/>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
