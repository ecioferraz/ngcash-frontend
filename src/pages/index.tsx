import styled from 'styled-components';

export default function Home() {
  const Heading = styled.h1`
    background: ${({ theme }) => theme.colors.secondaryColor};
  `;

  return <Heading>Hello, world</Heading>;
}
