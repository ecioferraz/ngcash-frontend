import TextCard from '../../components/TextCard';
import BalanceCardProps from './BalanceCardProps';
import * as Styled from './styles';

export default function BalanceCard({ balance, error }: BalanceCardProps) {
  console.log(balance);
  return (
    <Styled.Container>
      <TextCard as="h6" size="small">
        Saldo
      </TextCard>
      <TextCard as="p" size="small">
        {balance || error}
      </TextCard>
    </Styled.Container>
  );
}
