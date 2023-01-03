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
            <td>{username}</td>
            <td>{value}</td>
            <td>{type}</td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </Styled.Container>
  );
}
