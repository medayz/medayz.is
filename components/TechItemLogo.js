export default function TechItemLogo({ logo, name }) {
  return (
    <span className="relative bg-gray-50 h-8 w-8 overflow-hidden rounded-md flex items-center p-0.5 mr-2 flex-shrink-0">
      <img
        loading="lazy"
        className="rounded-md mr-2"
        src={logo}
        alt={`${name} logo`}
      />
    </span>
  );
}
