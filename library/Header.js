import Avatar from "./Avatar";

export default function Header({ avatar, children }) {
  return (
    <header className="flex">
      <Avatar src={avatar.src} alt={avatar.alt} width={100} height={100} />
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly w-full">
        {children}
      </div>
    </header>
  );
}
