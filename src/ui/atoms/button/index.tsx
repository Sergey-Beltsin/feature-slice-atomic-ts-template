import PropTypes from 'prop-types';

interface ButtonProps {
  onClick(): void,
  label: string,
  children: React.ElementRef<string>
}

export const Button: React.FC<ButtonProps> = ({ onClick, label, children }) => {
  return (
    <button
      className='button'
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired
}
