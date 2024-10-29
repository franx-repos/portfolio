import { useState } from "react";
import githubLogo from "../assets/img/github-logo.svg";
import linkedInLogo from "../assets/img/linkedin-logo.svg";
import mailLogo from "../assets/img/mail.svg";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: "home", href: "#home" },
    { title: "about", href: "#about" },
    { title: "projects", href: "#projects" },
    { title: "contact", href: "#contact" },
  ];

  const socialItems = [
    {
      title: "github logo",
      img: githubLogo,
      url: "https://github.com/franx-repos",
    },
    {
      title: "linkedin logo",
      img: linkedInLogo,
      url: "https://www.linkedin.com/in/frank-jaekel-foersterling/",
    },
    {
      title: "mail logo",
      img: mailLogo,
      url: "#contact",
    },
  ];
  console.log(githubLogo);
  return (
    <nav className="fixed w-full z-50 font-frankyFont">
      <div className="w-full flex flex-wrap items-center p-1 lg:p-4 bg-stone-900 lg:bg-transparent">
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400 hover:scale-125 transition-transform"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="flex ml-auto w-fit space-x-2 lg:space-x-4 justify-end">
          {socialItems.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target={item.url === "#contact" ? "_self" : "_blank"}
            >
              <img
                className="w-8 hover:scale-125 transition-transform cursor-pointer"
                src={item.img}
                alt={item.title}
              />
            </a>
          ))}
        </div>
        <div
          className={`${isMenuOpen ? "flex" : "hidden"} w-full`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium mt-4 w-32 border-l-2 border-green-400">
            {menuItems.map((item) => (
              <li key={item.title} className="flex w-full">
                <a
                  href={item.href}
                  className="flex w-full py-2 px-3 text-white text-xl  hover:text-green-400"
                  aria-current="page"
                  onClick={toggleMenu}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
