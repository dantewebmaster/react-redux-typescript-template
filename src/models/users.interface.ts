import { User } from '../store/ducks/users/types';

interface StateProps {
  users: User[];
  loading: boolean;
  error: string;
  history?: {
    goBack: Function;
  };
}

interface DispatchProps {
  loadRequest(): void;
  resetStore(payload?: string[]): void;
}

export type UsersProps = StateProps & DispatchProps;
