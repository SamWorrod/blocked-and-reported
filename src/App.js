import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';
import data from './data.js'
import Grid from '@mui/material/Grid2';


const generateTiers = () => {
  let tiers = []
  data.forEach((week) => {
    tiers.push(week.tier)
  })
  return tiers
}

const generateLabels = () => {
  let weeks = []
  data.forEach((week) => {
    weeks.push('Week ' + week.week.toString())
  })
  return weeks
}
function App() {
  
  

  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{width: '100vw'}}>
          <AppBar position="static" >
            <Toolbar sx={{backgroundColor: '#475458'}}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Blocked And Reported Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <div className='body'>
        <Box sx={{height: '60vh', width: '90vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'black', boxShadow: '1px 1px 1px grey', margin: '15vh 5vw 0vh 5vw', border: '2px solid grey' }}>
          <div style={{ width: '90vw', display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
            Weekly Tier
          </div>
          
          <LineChart
            series={[
              { data: generateTiers(), label: 'Current Tier' },
            ]}
            yAxis={[{min: 16, max: 1, label: 'Tier'}]}
            xAxis={[{ scaleType: 'point', data: generateLabels(), label: 'Week' }]}
          />
        </Box>
      </div>
    </div>
  );
}

export default App;
