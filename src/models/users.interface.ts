import { User } from '../store/ducks/users/types';

interface StateProps {
  users: User[];
  loading: boolean;
  error: string;
  history: {
    goBack: Function;
  };
}

interface DispatchProps {
  loadRequest(): void;
}

export type Props = StateProps & DispatchProps;
