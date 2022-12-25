import TextCard from '../../components/TextCard';
import BalanceCardProps from './BalanceCardProps';
import * as Styled from './styles';

export default function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <Styled.Container>
      <TextCard as="h6" size="medium">
        Saldo
      </TextCard>
      <TextCard as="p">R$ {balance.replace('.', ',')}</TextCard>
    </Styled.Container>
  );
}
