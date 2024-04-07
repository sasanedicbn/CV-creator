type FormGroupProps = {
    label: string;
    id: string;
    name: string;
    type: string;
    className: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  };

const FormGroup = ({ label, id, name, type, className, onChange }:FormGroupProps) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} className={className} onChange={onChange} />
    </div>
  );
};

export default FormGroup;
