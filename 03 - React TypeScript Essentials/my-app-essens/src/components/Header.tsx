import { FC, 
    // PropsWithChildren, 
    type ReactNode 
} from "react"


interface HeaderPropsItem {
    children: ReactNode;
    image: {
        src: string;
        alt: string;
    }
}

// export default function Header(): FC<HeaderPropsItem> {({src, alt, children})} {
//     return (
//         <>
//          <div>
//             <img src={src} alt={alt} />
//             {children}
//          </div>
//         </>
//     )
// } 

// wrong!



interface HeaderPropsItem {
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
}

const Header: FC<HeaderPropsItem> = ({ image, children }) => {
  return (
    <header className="bg-slate-700 p-12 rounded-md">
      <div className="flex flex-col items-center">
        <img
          src={image.src}
          alt={image.alt}
          className="w-48 h-48 rounded-full shadow-lg p-4"
        />
        <div className="text-3xl font-bold text-white text-center mt-4">
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;




// export default function Header({image, children} : HeaderPropsItem) {
//     return (
//         <header>
//             <div>
//               <img src={image.src} alt={image.alt} />
//               {children}
//             </div>
//           </header>
//         )
// }