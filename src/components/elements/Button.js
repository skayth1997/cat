const Button = ({ children, onClick }) => (
  <button onClick={onClick} type="button" className="btn btn-primary">{children}</button>
);

export default Button;
