export default function TechsGrid({ children }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans p-4">
      {children}
    </div>
  );
}
