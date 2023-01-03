import SelectProps from './SelectProps';
import * as Styled from './styles';

export default function Select({ handleChange }: SelectProps) {
  return (
    <Styled.Container onChange={handleChange}>
      <option defaultChecked value="all">
        Todas
      </option>
      <option value="cash-in">Entradas</option>
      <option value="cash-out">Saídas</option>
    </Styled.Container>
  );
}
