import css from './button.module.css'

type ButtonProps ={
    label: string
}

const Button = ({label}: ButtonProps) => {
    return(
        <button className={css['button-primary']}>
            {label}
        </button>
    )
}

export default Button