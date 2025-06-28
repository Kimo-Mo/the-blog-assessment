import Link from "next/link";
import ThemeBtn from "@/app/components/NavBar/ThemeBtn";

const MobileMenu = ({
  toggleMenu,
  isOpen,
}: {
  toggleMenu: () => void;
  isOpen: boolean;
}): React.JSX.Element => {
  return (
    <nav
      className={`flex items-center justify-center flex-col fixed transition-all top-0 h-screen w-screen bg-[var(--background)] sm:hidden ${
        isOpen ? "right-0" : " right-[-100%]"
      }`}>
      <Link href="/" onClick={toggleMenu}>
        <p className="font-bold text-2xl">Kareem</p>
      </Link>
      <ul className="flex flex-col items-center gap-6 mt-6">
        <li>
          <Link
            href="/"
            className="text-lg hover:text-blue-900 transition-colors"
            onClick={toggleMenu}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-lg hover:text-blue-900 transition-colors"
            onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-lg hover:text-blue-900 transition-colors"
            onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-lg hover:text-blue-900 transition-colors"
            onClick={toggleMenu}>
            Newsletter
          </Link>
        </li>
        <ThemeBtn />
      </ul>
    </nav>
  );
};

export default MobileMenu;
