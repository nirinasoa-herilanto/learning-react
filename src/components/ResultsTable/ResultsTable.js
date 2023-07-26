import React from 'react';
import style from './ResultsTable.module.css';

import { formattedPriceHandler } from '../../utils/formattedPriceHandler';

/**
 * Use to display calculate investment results
 */
const ResultsTable = (props) => {
  return (
    <table className={`${style.result} ${props.className || ''}`}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formattedPriceHandler(item.savingsEndOfYear)}</td>
            <td>{formattedPriceHandler(item.yearlyInterest)}</td>
            <td>
              {formattedPriceHandler(
                item.savingsEndOfYear -
                  props.initialInvestment -
                  item.yearlyContribution * item.year
              )}
            </td>
            <td>
              {formattedPriceHandler(
                props.initialInvestment + item.yearlyContribution * item.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
