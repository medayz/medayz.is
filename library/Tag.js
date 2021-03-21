export default function Tag({ text }) {
  return (
    <span className="px-1.5 mr-1 rounded-sm text-xs font-medium bg-gray-100 text-blue-700 dark:text-blue-400 dark:bg-gray-700">
      {text}
    </span>
  );
}
