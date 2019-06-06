import React from 'react';
import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
  data: Repository[];
}

export default function RepositoryList({ data }: OwnProps) {
  return (
    <ul>
      {data.map((repo: Repository, i: number) => <li key={repo.id}>{`${i}: ${repo.name}`}</li>)}
    </ul>
  );
}
