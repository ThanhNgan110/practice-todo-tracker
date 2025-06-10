type ItemOption = {
  items: { title: string; name: string; value: string };
};

const MenuItem = ({ items }: ItemOption) => {
  const { name, value } = items;

  return <option value={value}>{name}</option>;
};

export default MenuItem;
