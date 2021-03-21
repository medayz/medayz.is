import Tags from "./Tags";

export default function TechItem({ type, description, tags = [], children }) {
  return (
    <div className="flex flex-col items-start justify-between rounded-md px-2 py-3 bg-gray-50 dark:bg-gray-800 border-solid border border-gray-50 dark:border-gray-800 h-full">
      <div className="w-full">
        <div className="w-full flex items-center mb-2 rounded-md">
          {children}
        </div>
        <span className="text-xs dark:text-gray-300 font-sans font-medium leading-5 pt-3 pb-1 pl-1 truncate">
          {type}
        </span>
        <p className="text-xs text-gray-400 pb-3 leading-4 pl-1">
          {description}
        </p>
      </div>
      <Tags tags={tags} />
    </div>
  );
}
