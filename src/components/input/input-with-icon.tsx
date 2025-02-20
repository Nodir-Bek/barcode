import { StyledInput } from "./style";

interface IProps {
    label: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
    disabled?: boolean;
}

function inputWithIcon({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    disabled,
}: IProps) {
    return (
        <div className="relative flex flex-col-reverse w-full">
            <StyledInput
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                aria-label={label}
                className={`peer w-full pb-1 pt-6 px-3 text-base rounded-lg border border-gray-400 focus:border-brandColor/75 text-gray-600 bg-white focus:outline-none focus:ring-0 appearance-none transition-colors duration-300  ${disabled ? "bg-gray-200" : ""
                    }`}
                disabled={disabled}
            />
            <label
                htmlFor={name}
                className="absolute top-0 items-center px-3 pt-2 text-xs peer-focus:font-semibold peer-focus:text-brandColor/75 focus:border-brandColor/75 uppercase text-gray-600 bg-transparent transition-colors duration-300"
            >
                {label}
            </label>
        </div>
    );
}

export default inputWithIcon