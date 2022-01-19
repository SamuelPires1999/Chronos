import css from './button.module.css'

type ButtonProps = {
    label: string,
    variant?: 'primary' | 'secondary' | 'danger',
    fullWidth?: boolean
}

const getVariant = (variant: string | undefined) => {
    switch (variant) {
        case 'primary':
            return css['button-primary']
        case 'secondary':
            return css['button-secondary']
        case 'danger':
            return css['button-danger']         
        default:
            return css['button-primary'];
    }
}

const Button = ({label, variant, fullWidth = false}: ButtonProps) => {
    return(
        <div className={[css['button-base'], getVariant(variant), fullWidth && 'w-full text-center'].join(' ')}>
            {label}
        </div>
    )
}

export default Button