import Link from 'next/link';
import ImageCard from '../../components/ImageCard';
import TextCard from '../../components/TextCard';
import { removeUser } from '../../services/localStorage';
import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Container>
      <ImageCard
        altText="Logo da NG.CASH"
        src="../../assets/images/ngcash-logo-small.png"
      />
      <Link href="/login" onClick={removeUser}>
        <TextCard as="p" size="small">
          Logout
        </TextCard>
      </Link>
    </Styled.Container>
  );
}
