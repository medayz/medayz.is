import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink({ link, username, icon }) {
  return (
    <a href={link} target="_blank" className="flex items-center mb-2">
      <span className="flex justify-center w-8">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="text-xs font-sans font-light flex-grow">{username}</span>
    </a>
  );
}
