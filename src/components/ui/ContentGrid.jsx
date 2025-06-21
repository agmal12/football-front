// src/components/ContentGrid.jsx
const dummyCards = [
  {
    title: "Titans Post Elite PFF Tackling in 2019",
    author: "Ben Suttock",
    date: "Mar 1, 2020",
    image: "https://via.placeholder.com/150",
  },
  // Add more cards as needed...
];

export default function ContentGrid() {
  return (
    <section className="bg-[#0D1224] text-white py-16 px-6">
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {dummyCards.map((card, index) => (
          <div key={index} className="bg-[#1C2135] rounded-xl overflow-hidden shadow-md">
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-400">
                By {card.author} - {card.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
