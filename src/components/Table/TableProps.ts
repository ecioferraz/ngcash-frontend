type DataProps = {
  date: string;
  type: 'Cash-in' | 'Cash-out';
  username: string;
  value: string;
};

type TableProps = {
  data: DataProps[];
};

export default TableProps;
