"use client"
import React, { useEffect, useState } from 'react';


import { LineChart } from '@mui/x-charts/LineChart';
import { dataset } from './GDPperCapita';

export default function StackedAreas() {
  return (
    <div style={{ backgroundColor: '#252b3f', padding: '20px', borderRadius: '8px' }}> {/* Add padding and border radius for better appearance */}
    <LineChart
      dataset={dataset}
      xAxis={[
        {
          id: 'Years',
          dataKey: 'date',
          scaleType: 'time',
          valueFormatter: (date) => date.getFullYear().toString(),
        },
      ]}
      yAxis={[
        {
          id: 'users',
          label: '',
         
        },
      ]}
      series={[
        {
          id: 'Users',
          label: 'users',
          dataKey: 'us',
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'Subscribers',
          label: 'Subscribers',
          dataKey: 'sb',
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'Sales',
          label: 'Sales',
          dataKey: 'sa',
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'orders',
          label: 'orders',
          dataKey: 'or',
          stack: 'total',
          area: true,
          showMark: false,
        },
      ]}
  
      height={500}
      margin={{ left: 70 ,top:200}}
    />
     </div>
  );
}