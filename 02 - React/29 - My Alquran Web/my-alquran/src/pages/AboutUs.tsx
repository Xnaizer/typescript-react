import { FaInstagram, FaYoutube, FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

export default function AboutUs() {
  const techStack = [
    { name: "React", version: "19.0.12", link: "https://react.dev/" },
    { name: "TypeScript", version: "5.7.2", link: "https://www.typescriptlang.org/" },
    { name: "Vite", version: "6.2.0", link: "https://vitejs.dev/" },
    { name: "Tailwind CSS", version: "3.4.17", link: "https://tailwindcss.com/" },
    { name: "ESLint", version: "9.21.0", link: "https://eslint.org/" },
    { name: "React Router", version: "5.3.3", link: "https://reactrouter.com/" },
  ];

  const contacts = [
    { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/xnaizer/" },
    { icon: <FaYoutube />, label: "YouTube", link: "https://www.youtube.com/@xnaizerr" },
    { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/xnaizer/" },
    { icon: <FaGithub />, label: "GitHub", link: "https://github.com/Xnaizer" },
    { icon: <FaEnvelope />, label: "Email", link: "mailto:seykig028@gmail.com" },
  ];

  return (
    <section className="min-h-screen bg-body dark:bg-body-dark p-4 flex flex-col items-center">
      <h1 className="text-3xl lg:text-5xl font-subtitle text-title dark:text-title-dark pt-8 pb-10 lg:pt-14 lg:pb-8">
        About Us
      </h1>

      <div className="h-0.5 bg-text dark:bg-text-light w-full max-w-6xl my-4" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
        
        
        <div className="w-full flex flex-col lg:flex-row gap-6 pt-12 justify-between">
         
          <div className="rounded-md p-6 text-center w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4 text-title dark:text-title-dark">Created By: Xnaizer</h2>
            <div className="flex justify-center space-x-4 text-2xl">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-title dark:text-title-dark hover:text-first dark:hover:text-first"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>

         
          <div className="rounded-md p-6 w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4 text-title dark:text-title-dark">APIs Used</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://equran.id/apidev/v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-title dark:text-title-dark hover:text-first dark:hover:text-first"
                >
                  <span>equran.id API</span>
                  <FaExternalLinkAlt size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/API-myQuran-v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-title dark:text-title-dark hover:text-first dark:hover:text-first"
                >
                  <span>myQuran API</span>
                  <FaExternalLinkAlt size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="rounded-md p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-title dark:text-title-dark text-center">Tech Stack Used</h2>
          <div className="h-0.5 bg-text dark:bg-text-light w-full max-w-6xl my-4" />
        
          <ul className="grid grid-cols-2 gap-4">
            {techStack.map((tech) => (
              <li key={tech.name} className="flex flex-col items-center p-3 rounded-lg">
                <span className="text-lg font-medium text-title dark:text-title-dark">{tech.name}</span>
                <a
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-800 hover:text-first dark:hover:text-first text-sm"
                >
                  Docs ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
