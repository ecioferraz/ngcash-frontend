import Link from 'next/link';
import TextCard from '../../components/TextCard';
import { removeUser } from '../../services/localStorage';
import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Container>
      <TextCard>NG.CASH</TextCard>
      <Link href="/login" onClick={removeUser}>
        <TextCard as="p" size="small">
          Logout
        </TextCard>
      </Link>
    </Styled.Container>
  );
}
