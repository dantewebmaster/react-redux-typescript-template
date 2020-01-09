import { Repository } from '../store/ducks/repositories/types';

interface StateProps {
  repositories: Repository[];
  loading: boolean;
  error: string;
  history: {
    goBack: Function;
  };
}

interface DispatchProps {
  loadRequest(): void;
  resetStore(payload?: string[]): void;
}

export type RepositoriesProps = StateProps & DispatchProps;
