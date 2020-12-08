export default function TechsGrid({ children }) {
  return (
    <div className="grid grid-cols-5 grid-rows-1 gap-4 justify-start font-sans p-4 h-26">
      {children}
    </div>
  );
}
