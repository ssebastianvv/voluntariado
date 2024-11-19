import styles from './button.module.scss';


interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: any;
  name?: string;
  error?: string;
}

export const Button = ({
  type = "submit",
  name,
  error,
  ...props
}: buttonProps) => {    
  return (
    <button
      type={type}
      name={name}
      className={`${styles.button}`}
      {...props}
    >
      {props.children}
    </button>
  );
};