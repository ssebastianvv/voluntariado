import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

    placeholder?: string;
    type?: string;
    name?: string;
    error?: string;
}
export const Input=({
    placeholder,
    type = 'text',
    name,
    error,
    ...props// esto es desestructuracion global para poder pasar todas las propiedades que tenga el input
}: InputProps)=>{

  return (
    <div className="flex flex-col mb-4">
      <div className='styles.inputContainer'>
<input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${styles.inputField} ${error ? styles.error : ""}`}
                {...props}
      />
      {error && <p className={styles.errorMessage}>This field is required</p>}
    
    </div>
    </div>
  )

}