import Loading from '../../components/Loading';
import TextCard from '../../components/TextCard';
import { useUpdateContext } from '../../contexts/UpdateContext';
import useBalance from '../../hooks/useBalance';
import * as Styled from './styles';

export default function BalanceCard() {
  const { update } = useUpdateContext();
  const { balance, error, loading } = useBalance(update);

  return (
    <Styled.Container>
      <TextCard as="h6" size="small">
        Saldo
      </TextCard>
      {loading ? (
        <Loading />
      ) : (
        <TextCard as="p" size="small">
          {balance || error}
        </TextCard>
      )}
    </Styled.Container>
  );
}
