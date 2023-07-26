import React, { useState } from 'react';
import style from './CalculateForm.module.css';

const CalculateForm = (props) => {
  const [currentSaving, setCurrentSaving] = useState('');
  const [yearlyContribution, setYearlyContribution] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');

  const currentSavingChangeHandler = (e) => {
    setCurrentSaving(e.target.value);
  };

  const yearlyContributionChangeHandler = (e) => {
    setYearlyContribution(e.target.value);
  };

  const expectedReturnChangeHandler = (e) => {
    setExpectedReturn(e.target.value);
  };

  const durationChangeHandler = (e) => {
    setDuration(e.target.value);
  };

  const submitCalculateHandler = (e) => {
    e.preventDefault();

    if (!currentSaving || !yearlyContribution || !expectedReturn || !duration)
      return;

    const inputDate = {
      'current-savings': currentSaving,
      'yearly-contribution': yearlyContribution,
      'expected-return': expectedReturn,
      duration: duration,
    };

    props.onCalculateInvestment(inputDate);
  };

  const resetCalculateHandler = (e) => {
    e.preventDefault();

    props.onCalculateInvestment(null);

    setCurrentSaving('');
    setYearlyContribution('');
    setExpectedReturn('');
    setDuration('');
  };

  return (
    <form
      className={`${style.form} ${props.className || ''}`}
      onSubmit={submitCalculateHandler}
      onReset={resetCalculateHandler}
    >
      <div className={style['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSaving}
            onChange={currentSavingChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={yearlyContributionChangeHandler}
          />
        </p>
      </div>
      <div className={style['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={expectedReturnChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={durationChangeHandler}
          />
        </p>
      </div>

      <p className={style.actions}>
        <button type="reset" className={style['buttonAlt']}>
          Reset
        </button>
        <button type="submit" className={style.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculateForm;
