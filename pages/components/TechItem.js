import Image from "next/image";

export default function TechItem({ name, children }) {
  return (
    <div className="row-span-full flex flex-col items-center justify-between rounded-md h-16">
      <span className="relative bg-gray-50 h-8 w-8 overflow-hidden rounded-md">
        {children}
      </span>
      <span className="bg-gray-50 dark:bg-gray-900 text-xs font-sans font-medium leading-4 border-solid border border-gray-50 dark:border-gray-800 rounded-full py-0.5 px-2">
        {name}
      </span>
    </div>
  );
}
