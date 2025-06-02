type ItemOption = {
  value: string;
};

const MenuItem = ({ value }: ItemOption) => {
  return <option value={value}>{value}</option>;
};

export default MenuItem;
