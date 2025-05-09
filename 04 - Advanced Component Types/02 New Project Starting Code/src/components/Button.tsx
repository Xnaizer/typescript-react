import { ComponentPropsWithoutRef } from "react";

// type ButtonProps = {
//     el: 'button';
// } & ComponentPropsWithoutRef<'button'>

// type AnchorProps = {
//     el : 'anchor';
// } & ComponentPropsWithoutRef<'a'>

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href? : never;
}
type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href? : string;
}
type ButtonSelectionProps = ButtonProps | AnchorProps;

function isAnchorProps(props: ButtonSelectionProps): props is AnchorProps {
    return 'href' in props;
}

export default function Button(props : ButtonSelectionProps) {
    
    // const {el, ...otherProps} = props;
    if(isAnchorProps(props)){
        return (
            <a  className="button" {...props}>

            </a>
        );
    }


    return <button className="button" {...props} ></button>
}