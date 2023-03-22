import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    setUsersList((prevUsersList) => [user, ...prevUsersList]);
  };

  const deleteUserHandler = (userId) => {
    setUsersList((prevUsersList) => {
      const users = prevUsersList.filter((user) => user.id !== userId);

      return users;
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDeleteUser={deleteUserHandler} />
    </div>
  );
};

export default App;
