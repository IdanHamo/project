import classNames from "classnames";
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        id={name}
        className={classNames("form-control", { "is-invalid": error })}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Input;
