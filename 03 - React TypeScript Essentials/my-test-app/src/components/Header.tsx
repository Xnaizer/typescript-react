import Image from "next/image";
import { PropsWithChildren } from "react";

type imgType = {
    img : {
        src:string;
        alt:string;
    }
}

type HeaderProps = PropsWithChildren<imgType>;

const Header:React.FC<HeaderProps> = ({img,children}) => {

    return (
        <header className="p-4">
            <Image src={img.src} alt={img.alt} className="w-32 mb-4 " />
            <h1>Welcome To Wella World</h1>
            {children}
        </header>
    )
}

export default Header;