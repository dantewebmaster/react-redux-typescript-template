import React from 'react';
import RepositoryList from './components/RepositoryList';
import UserList from './components/UserList';

const styles = {
  app: {
    display: 'flex',
  },
};

export default function App() {
  return (
    <>
      <header>
        <h1>Welcome to React</h1>
      </header>
      <main className="main" style={styles.app}>
        <div className="repository-list">
          <RepositoryList />
        </div>
        <div className="user-list">
          <UserList />
        </div>
      </main>
    </>
  );
}
