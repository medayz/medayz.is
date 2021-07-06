import Image from "next/image";

export default function Bio() {
  return (
    <section className="text-xs">
      <p className="flex flex-col mb-4">
        <span className="text-gray-400 mb-1">{"> whoami"}</span>
        <span>medayz</span>
      </p>
      <p className="flex flex-col">
        <span className="text-gray-400 mb-1">{"> cat bio"}</span>
      </p>
      <p className="mb-4">
        Hello, my full name is Mohamed Ayoub Zahir! too long right ? 😁
      </p>
      <p className="mb-4">
        Well you can call me Mohamed, and on internet I just use medayz
        everywhere as my username!
      </p>
      <p className="mb-8">
        I spend my time either creating bugs or fixing them 🐛
      </p>
      <div className="flex flex-row sm:items-center mb-4">
        <div className="flex sm:items-center flex-shrink-0">
          <Image
            src="/js.png"
            alt="JS logo"
            width={21}
            height={21}
            layout="fixed"
          />
        </div>
        <p className="ml-2">
          I'm currently interested in JavaScript, React and the technologies of
          their ecosystem!
        </p>
      </div>
    </section>
  );
}
