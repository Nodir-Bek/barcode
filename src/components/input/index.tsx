
interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {

    value: string
}
const TextField = ({ value, type = 'text', ...rest }: ITextFieldProps) => {
    return (
        <input
            type={type}
            value={value}
            className="text-[var(--brand-color)] w-full border border-gray-300 px-4 bg-white rounded-tl-[30px] rounded-br-[30px] py-3 focus:border-[var(--brand-color)] outline-none transition-all duration-300 ease-in-out"
            {...rest}
        />
    )
}

export default TextField