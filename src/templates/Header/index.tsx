import Link from 'next/link';
import Heading from '../../components/TextCard';
import { removeUser } from '../../services/localStorage';
import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Container>
      <Heading>NG.CASH</Heading>
      <Link href="/login" onClick={removeUser} />
    </Styled.Container>
  );
}
