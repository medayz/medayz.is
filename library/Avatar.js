export default function Avatar({ src, alt, height, width }) {
  return (
    <img
      className="rounded-full border-solid border-2 border-gray-50 my-8 mr-4 w-28 h-28"
      src={src}
      alt={alt}
    />
  );
}
