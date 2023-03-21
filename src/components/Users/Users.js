import './Users.css';
import React from 'react';

import Card from '../Card/Card';
import UsersList from './UsersList';

const User = (props) => {
  if (props.data.length === 0) {
    return <h1 style={{ color: '#fafafa' }}>No users found!</h1>;
  }

  return (
    <>
      <Card className="card-users">
        <UsersList data={props.data} onDeleteItem={props.onDeleteUser} />
      </Card>
    </>
  );
};

export default User;
