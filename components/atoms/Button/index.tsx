import css from './button.module.css'

type ButtonProps = {
    label: string,
    variant: 'primary' | 'secondary' | 'danger',
}

const getVariant = (variant: string) => {
    switch (variant) {
        case 'primary':
            return 'button-primary'
        case 'secondary':
            return 'button-secondary'
        case 'danger':
            return 'button-danger'           
        default:
            return 'button-primary';
    }
}

const Button = ({label, variant}: ButtonProps) => {
    return(
        <div className={css[getVariant(variant)]}>
            {label}
        </div>
    )
}

export default Button