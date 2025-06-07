import MenuItem from './MenuItem';

type SelectProps = {
  name: string;
  className?: string;
  onchange: () => void;
  data: { title: string, name: string, value: string }[];
};

const Select = ({ name, className, onchange, data }: SelectProps) => (
  <select name={name} className={`input ${className}`} onChange={onchange}>
    {data.map((item, index) => (
      <MenuItem key={`${index}`} items={item} />
    ))}
  </select>
);

export default Select;
