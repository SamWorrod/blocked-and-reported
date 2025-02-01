import React, { useState } from 'react'
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';
import data from './data.js'
import Grid from '@mui/material/Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


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
  const [board, setBoard] = useState('chart')
  const onPageSelect = (e) => {
    setBoard(e.target.value)
  }

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
        <FormControl variant="standard" sx={{ m: 1, width: '10vw', display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
          <InputLabel id="demo-simple-select-standard-label">Page</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={board}
            onChange={onPageSelect}
            label="Page"
          >
            <MenuItem value={'chart'}>Chart</MenuItem>
            <MenuItem value={'breakdown'}>Team Breakdown</MenuItem>
          </Select>
        </FormControl>
        {board === 'chart' ? (
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
        ) : (
          <Box sx={{height: '60vh', width: '90vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'black', boxShadow: '1px 1px 1px grey', margin: '15vh 5vw 0vh 5vw', border: '2px solid grey' }}>
          </Box>
        )}
      </div>
    </div>
  );
}

export default App;
