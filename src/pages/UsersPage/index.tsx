import React from 'react';
import { UsersProps } from '../../models/users.interface';
import UsersContainer from '../../containers/UsersContainer.container';

export default function UsersPage({
  history,
}: UsersProps) {
  return (
    <>
      <h2>Users</h2>
      <UsersContainer />
      <button type="button" onClick={() => history && history.goBack()}>Go Back</button>
    </>
  );
}
