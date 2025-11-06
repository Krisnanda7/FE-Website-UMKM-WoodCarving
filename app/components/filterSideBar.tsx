"use client";

export default function FilterSidebar({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
}) {
  const categories = [
    "Abstract",
    "Animal",
    "Balinese Statue",
    "Buddha",
    "Cross Medallions",
    "Dragon",
    "Hand",
    "Hindu God",
    "Kitchen Set",
  ];

  const formatRupiah = (value: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  return (
    <aside className="bg-white rounded-xl shadow p-6 sticky top-20 h-fit">
      {/* ===== Filter by price ===== */}
      <h2 className="font-bold text-lg mb-4">Filter by price</h2>
      <p className="text-sm mb-3 text-gray-500">
        {formatRupiah(priceRange[0])} - {formatRupiah(priceRange[1])}
      </p>

      {/* Dua slider untuk min & max */}
      <div className="flex flex-col gap-2">
        Min
        <input
          type="range"
          min="0"
          max="20000000"
          step="50000"
          value={priceRange[0]}
          onChange={(e) =>
            onPriceChange([Number(e.target.value), priceRange[1]])
          }
          className="w-full accent-amber-600"
        />
        Max
        <input
          type="range"
          min="0"
          max="20000000"
          step="50000"
          value={priceRange[1]}
          onChange={(e) =>
            onPriceChange([priceRange[0], Number(e.target.value)])
          }
          className="w-full accent-amber-600"
        />
      </div>

      {/* ===== Filter by category ===== */}
      <h2 className="font-bold text-lg mt-8 mb-4">Filter by category</h2>
      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <label
            key={cat}
            className={`flex items-center gap-2 cursor-pointer hover:text-amber-600 transition ${
              selectedCategories.includes(cat) ? "text-amber-600" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => onCategoryChange(cat)}
            />
            {cat}
          </label>
        ))}
      </div>
    </aside>
  );
}
