import './UserItem.css';
import React from 'react';

const UserItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.user.id);
  };

  return (
    <li className="user-item" onClick={deleteHandler}>
      <div className="user-item__info">
        {props.user.username} ({props.user.age} years old) {props.id}
      </div>
    </li>
  );
};

export default UserItem;
