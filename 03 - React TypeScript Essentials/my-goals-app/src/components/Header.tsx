import Image from "next/image";
import { type PropsWithChildren } from "react";

type ImgProps = {
  image: {
    src: string;
    alt: string;
  };
};

type HeaderProps = PropsWithChildren<ImgProps>;

const Header: React.FC<HeaderProps> = ({ image, children }) => {
  return (
    <header className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md rounded-lg">
      <div className="w-16 h-16 overflow-hidden rounded-full border-2 border-white">
        <Image
          src={image.src}
          alt={image.alt}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col">{children}</div>
    </header>
  );
};

export default Header;
