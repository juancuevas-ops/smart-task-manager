// frontend/src/components/PriorityChart.jsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Baja', value: 5 },
  { name: 'Media', value: 3 },
  { name: 'Alta', value: 2 },
];

const colors = ['#8884d8', '#82ca9d', '#ffc658'];

const PriorityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PriorityChart;
