import Image from "next/image";
import { PropsWithChildren } from "react";


type HeaderProps = {
    images :{src: string, alt:string}
}

type HeaderPropsType = PropsWithChildren<HeaderProps>;

const Header:React.FC<HeaderPropsType> = ({children, images}) => {

    return (
        <header>
            <Image src={images.src} alt={images.alt}  />
            {children}
        </header>
    )
}

export default Header;