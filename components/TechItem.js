import Tags from "./Tags";

export default function TechItem({ name, description, tags=[], children }) {
  return (
    <div className="flex flex-col items-start justify-between rounded-md px-2 py-3 bg-gray-50 dark:bg-gray-800 border-solid border border-gray-50 dark:border-gray-800 h-full">
      <div>
        <div className="w-full flex mb-2">
          {children}
        </div>
        <span className="text-xs font-sans font-medium leading-4 pt-3 pb-1 truncate">
          {name}
        </span>
        <p className="text-xs dark:text-gray-400 pb-3">{description}</p>
      </div>
      <Tags tags={tags} />
    </div>
  );
}
