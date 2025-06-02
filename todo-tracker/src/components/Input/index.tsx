type Input = {
  // label: string;
  className?: string;
  type: string;
  name: string;
  placeholder?: string;
  onkeyup?: () => void;
};

const Input = ({ className, type, name, placeholder, onkeyup }: Input) => {
  return (
    <input
      className={`input w-full rounded-sm p-2 ${className}`}
      name={name}
      type={type}
      placeholder={placeholder}
      onKeyUp={onkeyup}
    />
  );
};

export default Input;
