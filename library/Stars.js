export default function Stars({ stars }) {
  return (
    <div className="flex items-center justify-evenly w-16">
      {Array(stars)
        .fill(() => (
          <svg
            className="w-3 h-3 fill-current text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))
        .concat(
          Array(5 - stars).fill(() => (
            <svg
              className="w-3 h-3 fill-current text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))
        )
        .map((Item, index) => (
          <Item key={index} />
        ))}
    </div>
  );
}
