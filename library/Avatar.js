export default function Avatar({ src, alt }) {
  return (
    <img
      className="rounded-lg border-solid border-2 border-gray-50 w-28 h-28 mb-8 md:mb-0"
      src={src}
      alt={alt}
    />
  );
}
