import ImageCardProps from './ImageCard.props';
import * as Styled from './styles';

export default function ImageCard({ altText, src }: ImageCardProps) {
  return <Styled.Container alt={altText} src={src} />;
}
