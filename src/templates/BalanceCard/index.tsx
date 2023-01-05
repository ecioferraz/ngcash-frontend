import Loading from '../../components/Loading';
import TextCard from '../../components/TextCard';
import BalanceCardProps from './BalanceCardProps';
import * as Styled from './styles';

export default function BalanceCard({
  balance,
  error,
  loading,
}: BalanceCardProps) {
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
