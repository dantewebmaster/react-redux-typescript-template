import React from 'react';
import { User } from '../../store/ducks/users/types';

interface OwnProps {
  data: User[];
}

export default function UserList({ data }: OwnProps) {
  return (
    <ul>
      {data.map((user: User, i: number) => <li key={user.login.uuid}>{`${i}: ${user.name.first} ${user.name.last}`}</li>)}
    </ul>
  );
}
