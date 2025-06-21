// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="bg-[#0D1224] text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
        Share or discover <br /> the best sports content
      </h1>
      <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full text-lg">
        START A SPORTSBLOG
      </button>
      <p className="mt-4 text-gray-300">It's Free. Learn More →</p>
    </section>
  );
}
