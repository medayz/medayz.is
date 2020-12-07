export default function Section({ title, children }) {
  return (
    <section className="my-20 rounded-md bg-gray-100 dark:bg-gray-900 border-solid border border-gray-100 dark:border-gray-800">
      <h3 className="absolute -mt-8 text-md font-sans font-bold mb-4 text-purple-700 dark:text-orange-200 dark:bg-gray-900">
        {title}
      </h3>
      {children}
    </section>
  );
}
