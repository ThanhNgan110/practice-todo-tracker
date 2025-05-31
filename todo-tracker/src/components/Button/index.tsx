interface PropButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'success' | 'outline' | 'close';
  type: 'button' | 'submit';
}

const VariantButton: Record<PropButton['variant'], string> = {
  primary: 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700',
  secondary:
    'px-3 py-2 rounded-md bg-secondary border hover:bg-secondary-1 hover:border-secondary-2',
  outline:
    'px-3 py-2 rounded-2xl text-primary border border-primary hover:bg-overlay-dark hover:border-overlay-dark',
  success:
    'px-3 py-2 bg-success rounded hover:bg-success-1 hover:border-success-2',
  close:
    'px-3 py-2 rounded bg-status-close hover:bg-status-close-1 hover:border-status-close-1',
};

const Button = ({ children, variant, type, ...rest }: PropButton) => (
  <button className={`btn ${VariantButton[variant]}`} type={type} {...rest}>
    {children}
  </button>
);

export default Button;
