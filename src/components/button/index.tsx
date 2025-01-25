interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    btnType?: string
    onClick?: () => void
}
const btnTypes = {
    primary: 'bg-[var(--brand-color)]',
    danger: 'bg-danger',
    info: 'bg-info'
}
const Button = ({ children, btnType = 'primary', ...props }: IButtonProps) => {
    return (
        <button
            className={`${btnTypes[btnType as keyof typeof btnTypes]} text-white hover:bg-[var(--brand-color)]/[0.8] font-bold py-3 px-6 w-full max-w-max rounded-tl-2xl rounded-br-2xl`}
            {...props}
        >
            {children}
        </button>

    )
}

export default Button