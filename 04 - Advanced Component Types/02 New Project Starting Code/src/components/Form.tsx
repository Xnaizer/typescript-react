import { FormEvent, forwardRef, useImperativeHandle, useRef, type ComponentPropsWithoutRef } from "react"

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown ) => void;
}

export type FormHandle = {
    clear: () => void
}


const Form =  forwardRef<FormHandle, FormProps>( function Form({onSave, children, ...otherProps}, ref) {
    const formRef = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                formRef.current?.reset();
            }
        }
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const data = Object.fromEntries(formData)
        onSave(data)
        formRef.current?.reset();

    }
    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
            {children}
        </form>
    )
})

export default Form;