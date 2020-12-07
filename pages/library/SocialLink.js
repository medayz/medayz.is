import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink({ link, username, icon }) {
  return (
    <a href={link} target="_blank" className="flex items-center mb-2">
      <FontAwesomeIcon icon={icon} />
      <span className="text-xs ml-2 font-sans font-light">{username}</span>
    </a>
  );
}
