import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink({ link, username, icon, image, text }) {
  if (image) {
    return (
      <a href={link} target="_blank" className="flex items-center mb-2">
        <span className="flex justify-start text-xs font-semibold font-sans px-2">
          {text}
        </span>
        <span className="text-xs font-sans font-light flex-grow">
          {username}
        </span>
      </a>
    );
  }

  if (image) {
    return (
      <a href={link} target="_blank" className="flex items-center mb-2">
        <span className="flex justify-center w-8">
          <Image src={image} width={16} height={16} alt="icon" />
        </span>
        <span className="text-xs font-sans font-light flex-grow">
          {username}
        </span>
      </a>
    );
  }

  return (
    <a href={link} target="_blank" className="flex items-center mb-2">
      <span className="flex justify-center w-8">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="text-xs font-sans font-light flex-grow">{username}</span>
    </a>
  );
}
