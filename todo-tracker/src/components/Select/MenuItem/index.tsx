type ItemOption = {
  items: { title: string; name: string; value: string };
};

const MenuItem = ({ items }: ItemOption) => {
  const { title, name, value } = items;
  switch (title) {
    case 'author':
      return <option value={value}>{name}</option>;
    case 'severity':
      return <option value={value}>{name}</option>;
    case 'orderby':
      return <option value={value}>{name}</option>;
  }
};

export default MenuItem;
