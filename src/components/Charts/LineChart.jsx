import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';

export default function LineChart( { data, labels, ...props } ) {

  const [options] = useState( {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2
  } );

  const [dataset] = useState( {
    labels: labels,
    datasets: [{
      label: '# of Votes',
      data: data,
      backgroundColor: [
        // 'rgba(255, 99, 132, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
        'rgba(0, 149, 255, 1)'
      ],
      borderColor: [
        // 'rgba(255, 99, 132, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
        'rgba(0, 149, 255, 1)'
      ],
      borderWidth: 1
    }]
  } )

  return (
    <div {...props}>
      <Line data={dataset} options={options} />
    </div>
  )
}
