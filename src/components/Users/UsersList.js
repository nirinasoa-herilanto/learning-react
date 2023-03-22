import React from 'react';
import style from './UsersList.module.css';

import Card from '../UI/Card';

const UsersList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users?.length !== 0 ? (
          props.users?.map((user) => (
            <li key={user.id} onClick={() => props.onDeleteUser(user.id)}>
              {user.username} ({user.age} years old)
            </li>
          ))
        ) : (
          <div>No users !!!</div>
        )}
      </ul>
    </Card>
  );
};

export default UsersList;
