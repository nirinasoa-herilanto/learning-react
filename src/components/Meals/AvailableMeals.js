import React, { useEffect, useState } from 'react';
import styles from './AvailableMeals.module.css';

import { appConfig } from '../../config/app.config';

import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${appConfig.auth.databaseUrl}/meals.json`);

        if (!res.ok) {
          throw new Error('Something wrong, please try later!');
        }

        const data = await res.json();

        const mealsData = [];

        for (const item in data) {
          mealsData.push({
            id: item,
            name: data[item].name,
            description: data[item].description,
            price: data[item].price,
          });
        }

        setMeals(mealsData);
      } catch (error) {
        setErrorMsg(error?.message);
      }
      setIsLoading(false);
    })();
  }, []);

  const mealsList = meals?.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section>
        <div style={{ color: 'white', textAlign: 'center' }}>Loading ...</div>
      </section>
    );
  }

  if (errorMsg) {
    return (
      <section>
        <div style={{ color: 'red', textAlign: 'center' }}>{errorMsg}</div>
      </section>
    );
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
