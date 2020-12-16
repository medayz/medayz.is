export default function Avatar({ src, alt, height, width }) {
  return (
    <img
      className="rounded-full border-solid border-2 border-gray-50 my-8 mr-4"
      src={src}
      alt={alt}
      height={height}
      width={width}
    />
  );
}
