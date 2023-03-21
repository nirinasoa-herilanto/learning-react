import './App.css';
import React, { useState } from 'react';

import UsersList from './components/Users/UsersList';
import Card from './components/Card/Card';
import UserForm from './components/Users/UserForm';
import Overlay from './components/Overlay/Overlay';
import Modal from './components/Modal/Modal';
import Users from './components/Users/Users';
import ModalItem from './components/Modal/ModalItem';

const App = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const [users, setUsers] = useState([
    { id: `user-1`, username: 'Nirinasoa Herilanto', age: 20 },
    { id: `user-2`, username: 'John Doe', age: 24 },
  ]);

  const displayWarningHandler = () => setShowWarning(!showWarning);

  const displayWarningMessage = (message) => {
    setWarningMessage(message);
  };

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  const deleteUserHandler = (userId) => {
    setUsers((prevUsers) => {
      const users = prevUsers.filter((user) => user.id !== userId);

      return users;
    });
  };

  React.useEffect(() => {
    document.title = 'Practice';
  }, []);

  return (
    <div className="app">
      <div className="app__content">
        <UserForm
          onAddUser={addUserHandler}
          onShowWarning={displayWarningHandler}
          onDisplayWarningMessage={displayWarningMessage}
        />

        <Users data={users} onDeleteUser={deleteUserHandler} />

        {showWarning && (
          <Modal onClose={displayWarningHandler}>
            <ModalItem
              warningMessage={warningMessage}
              onCloseModal={displayWarningHandler}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default App;
