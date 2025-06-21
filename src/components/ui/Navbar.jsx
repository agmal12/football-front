// src/components/Navbar.jsx
export default function Navbar() {
  const items = ["NBA", "NFL", "NHL", "MLB", "SOCCER", "FANTASY", "NASCAR"];

  return (
    <nav className="bg-[#0D1224] text-white px-6 py-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-green-400">SPORTSBLOG</h2>
      <div className="hidden md:flex space-x-6">
        {items.map((item) => (
          <a key={item} href="#" className="hover:text-green-400 font-medium">
            {item}
          </a>
        ))}
      </div>
      <div className="space-x-4">
        <button className="p-2 rounded hover:bg-gray-700">🔍</button>
        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
          SIGN IN
        </button>
      </div>
    </nav>
  );
}
