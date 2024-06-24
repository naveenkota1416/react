import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';




const seriesA = {
  data: [2, 3, 1, 4, 5],
  label: 'Series A',
};
const seriesB = {
  data: [3, 1, 4, 2, 1],
  label: 'Series B',
};
const seriesC = {
  data: [3, 2, 4, 5, 1],
  label: 'Series C',
};

function Contact() {
  return (
    <div>
      <h1>Monthly Overviews</h1>
       <BarChart
      width={600}
      height={300}
      series={[
        { ...seriesA, stack: 'total' },
        { ...seriesB, stack: 'total' },
        { ...seriesC, stack: 'total' },
      ]}
    />

     
    <div className='Crad'>
      

     <div className='box'>
        <h1>Contacts</h1>
        <p>5000</p>
        </div>
        
        
      <div className='box'>
        <h1>Follwers</h1>
        <p>10M</p>
      </div>

     
      <div className='box'>
        <h1>Favourites</h1>
        <p>5000</p>
      </div>
    

      <div className='box'>
        <h1>Views</h1>
        <p>5000</p>
      </div>


    </div>
    <div>
     
    <AssignmentIndIcon />
    <CallIcon/>
    <InstagramIcon/>
    <MailIcon/>
     
    </div>
    </div>

    
  )
}

export default Contact