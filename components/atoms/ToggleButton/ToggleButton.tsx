import PropType, { InferProps } from "prop-types";

const ToggleButtonComponentProps = {
    section: PropType.string
}


export const ToggleButtonComponent = ({ section }: InferProps<typeof ToggleButtonComponentProps>) => {
    let inputStyles = `peer checked:right-0 checked:border-primary_green absolute block w-6 h-6 rounded-full 
                       bg-white border-2 appearance-none cursor-pointer`;
    let labelStyles = `peer-checked:bg-primary_green block h-6 rounded-full bg-gray-300 text-white py-1.5 px-2.5 
                        text-xs cursor-pointer`;

    return (
        <>
            <span className="relative inline-block w-10 select-none align-middle transition duration-200 ease-in">
                <input type="checkbox" name={`toggle-${section}`} id={`${section}`} className={inputStyles} />
                <label htmlFor={`${section}`} className={labelStyles}>I</label>
            </span>
        </>
    )
}