import { Repository } from '../store/ducks/repositories/types';

interface StateProps {
  repositories: Repository[];
  loading: boolean;
  error: boolean;
}

interface DispatchProps {
  loadRequest(): void;
}

export type Props = StateProps & DispatchProps;
