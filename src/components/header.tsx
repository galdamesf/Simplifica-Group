import { Navbar } from "./navbar";
export const Header = () => {
  return (
    <header className="flex justify-between ">
      <a href="/">
        <img className="w-60 -mt-15" src="/public/images/logo.png" alt="Logo" />
      </a>
      <Navbar />
    </header>
  );
};
