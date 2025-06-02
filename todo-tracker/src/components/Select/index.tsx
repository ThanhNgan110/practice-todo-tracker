import MenuItem from './MenuItem';

type SelectProps = {
  className: string;
  onchange: () => void;
  data: string[];
};

const Select = ({ className, onchange, data }: SelectProps) => (
  <select className={`input ${className}`} onChange={onchange}>
    {data.map((item, index) => (
      <MenuItem key={index} value={item} />
    ))}
  </select>
);

export default Select;
