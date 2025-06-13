import Button from '../Button';

import type { Todo } from '../../types';

type ListItemProps = {
  item: Omit<Todo, 'author' | 'severity'>;
};

const ListItem = ({ item }: ListItemProps) => {
  const { id, title } = item;
  return (
    <li className="rounded-sm border border-ghost">
      <div className="flex gap-[10px] items-center bg-alabaster py-4 px-5">
        {id}
        <span className=" bg-pale-sky text-white font-bold text-[14px] rounded-[4px] py-1 px-[10px] h-5 flex items-center">
          {/* set status default new and change status when click button*/}
          new
        </span>
      </div>
      <div className="py-6 px-5">
        <h3 className="text-xl font-semibold mb-5">{title}</h3>
        <div className="flex justify-end gap-[10px]">
          <Button variant="primary" type="button">
            Close
          </Button>
          <Button variant="secondary" type="button">
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
