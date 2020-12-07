export default function ReposGrid({ children }) {
  return (
    <div className="grid sm:grid-cols-2 gap-8 justify-center font-sans md:py-6 py-12 px-6">
      {children}
    </div>
  );
}
