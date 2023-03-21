import './UserForm.css';
import React, { useState } from 'react';

import Card from '../Card/Card';

const UserForm = (props) => {
  const [user, setUser] = useState({ username: '', age: '' });

  const usernameChangeHandler = (e) => {
    setUser((prev) => ({ ...prev, username: e.target.value }));
  };

  const ageChangeHandler = (e) => {
    setUser((prev) => ({ ...prev, age: e.target.value }));
  };

  const submitUserHandler = (e) => {
    e.preventDefault();

    if (user.username.trim() === '') {
      props.onDisplayWarningMessage(
        'Username can not be empty! Please tell us your name :)'
      );
      props.onShowWarning();
      return;
    }

    if (+user.age <= 0) {
      props.onDisplayWarningMessage(
        'Age can not be less than or equal to 0! Please provide your age :)'
      );
      props.onShowWarning();
      return;
    }

    props.onAddUser({ id: `user-${Date.now()}`, ...user });
    setUser({ username: '', age: '' });
  };

  return (
    <Card className="card-form">
      <form onSubmit={submitUserHandler}>
        <div className="user-data">
          <label className="user__label">Username</label>
          <br />
          <input
            className="user__input"
            type="text"
            placeholder="John Doe"
            value={user.username}
            onChange={usernameChangeHandler}
          />
        </div>

        <div className="user-data">
          <label className="user__label">Age</label>
          <br />
          <input
            className="user__input"
            type="number"
            placeholder="0"
            step={1}
            value={user.age}
            onChange={ageChangeHandler}
          />
        </div>

        <button className="user__btn" type="submit">
          Add user
        </button>
      </form>
    </Card>
  );
};

export default UserForm;
