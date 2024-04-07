
type formGroupTypes = {label: string,id:string,name:string, type:string, className:'string', onChange: () => void}
const FormGroup = ({ label, id, name, type, className, onChange }:formGroupTypes) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} className={className} onChange={onChange} />
    </div>
  );
};

export default FormGroup;
