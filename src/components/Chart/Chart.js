import './Chart.css';
import React from 'react';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const values = props.data.map((el) => el.value);
  const maximumValue = Math.max(...values);

  return (
    <div className="chart">
      {props.data.map((el) => (
        <ChartBar
          key={el.label}
          value={el.value}
          maxValue={maximumValue}
          label={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
