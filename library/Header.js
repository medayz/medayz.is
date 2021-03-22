import Avatar from "./Avatar";
import ThemeButton from "./ThemeButton";

export default function Header({ avatar, children }) {
  return (
    <header className="flex justify-between items-center w-full mt-4 mb-8 flex-wrap">
      <Avatar src={avatar.src} alt={avatar.alt} />
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-start md:items-center order-last md:order-1">
        {children}
      </div>
      <div className="flex self-start order-1 md:order-last md:self-center">
        <ThemeButton />
      </div>
    </header>
  );
}
