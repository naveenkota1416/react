import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import {
  
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';




function Home() {

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
  return (
    
      <div className='homemain'>
      
    <div className='subhome1'>
      <h1>Growth for day</h1>
      
      
       <PieChart
         {...props}
      series={[
        {
          data: [
            { id: 0, value: 10, label: (location) => `${location}+A` },
            { id: 1, value: 15, label: (location) => `${location}+B` },
            { id: 2, value: 20, label: (location) => `${location}+C` },
          ],
          type: 'pie',
          arcLabel: 'label',
        },
      ]}
    />
    </div>

 <div className='subhome2'>
  <h1>Growth for month</h1>
 <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />

 </div>


 <div>
  <h1>Growth for year</h1>
 <LineChart
      width={1000}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId' },
        { data: uData, label: 'uv', id: 'uvId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
          strokeWidth: 1,
        },
        '.MuiLineElement-series-pvId': {
          strokeDasharray: '5 5',
        },
        '.MuiLineElement-series-uvId': {
          strokeDasharray: '3 4 5 2',
        },
        [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
          fill: '#fff',
        },
        [`& .${markElementClasses.highlighted}`]: {
          stroke: 'none',
        },
      }}
    />

 </div>
    </div>
  )
}

const props = {
  width: 500,
  height: 200,
};






     





 

export default Home