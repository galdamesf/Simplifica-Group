import { Navbar } from "./navbar";
export const Header = () => {
  return (
    <header className="flex justify-between ">
      <a href="/">
        <img className="w-50 -mt-20" src="/public/images/logo.png" alt="Logo" />
      </a>
      <Navbar />
    </header>
  );
};
