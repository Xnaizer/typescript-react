import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
    // type: 'text' | 'number' |
} & ComponentPropsWithoutRef<'input'>

const Input =  forwardRef<HTMLInputElement, InputProps> (function Input(props, ref) {
    const {label,id, ...item} = props;
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...item } ref={ref} />
        </p>
    )
})


export default Input;