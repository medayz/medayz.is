export default function TechsGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans p-4">
      {children}
    </div>
  );
}
