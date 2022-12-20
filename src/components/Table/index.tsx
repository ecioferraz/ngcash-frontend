import TableProps from './TableProps';
import * as Styled from './styles';

export default function Table({ data }: TableProps) {
  return (
    <Styled.Container>
      <thead>
        <tr>
          <th>De/para</th>
          <th>Valor (R$)</th>
          <th>Tipo</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ date, type, username, value }) => (
          <tr key={date}>
            <th>{username}</th>
            <th>{value}</th>
            <th>{type}</th>
            <th>{date}</th>
          </tr>
        ))}
      </tbody>
    </Styled.Container>
  );
}
