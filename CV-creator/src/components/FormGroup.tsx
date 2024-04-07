
const FormGroup = ({ label, id, name, type, className, onChange,value }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} className={className} onChange={onChange} />
    </div>
  );
};

export default FormGroup;
