import ListItem from '../ListItem';

import type { Todo } from '../../types';

type ListProps = {
  items: Todo[];
};

const List = ({ items }: ListProps) => {
  return (
    <ul className="flex flex-col gap-6">
      {items.map(items => (
        <ListItem key={items.id} item={items} />
      ))}
    </ul>
  );
};

export default List;
