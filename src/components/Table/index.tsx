import TableProps from './TableProps';
import * as Styled from './styles';
import Loading from '../Loading';

export default function Table({ data, loading }: TableProps) {
  return loading ? (
    <Loading />
  ) : (
    <Styled.Container>
      <>
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
      </>
    </Styled.Container>
  );
}
