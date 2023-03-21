import './UsersList.css';
import React from 'react';

import UserItem from './UserItem';

const UsersList = (props) => {
  return (
    <ul className="users-list">
      {props.data?.map((user) => (
        <UserItem key={user.id} user={user} onDelete={props.onDeleteItem} />
      ))}
    </ul>
  );
};

export default UsersList;
