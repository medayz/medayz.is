export function CardTitle({ children }) {
  return (
    <div className="flex justify-between bg-gray-100 dark:bg-gray-900 p-2 rounded-t-lg border-b-2 border-gray-50 dark:border-gray-800 dark:shadow-lg">
      {children}
    </div>
  );
}
export function CardBody({ children }) {
  return (
    <p className="font-extralight text-sm text-gray-400 dark:text-orange-50 px-3 py-2">
      {children}
    </p>
  );
}
export function CardActions({ children }) {
  return <div className="w-full">{children}</div>;
}

export function Card({ children }) {
  return (
    <div className="max-w-xs border-solid border border-blue-100 rounded-lg dark:shadow-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div className="h-full flex flex-col justify-between">{children}</div>
    </div>
  );
}
