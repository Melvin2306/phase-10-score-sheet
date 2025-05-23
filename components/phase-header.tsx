export function PhaseHeader() {
  return (
    <div className="flex items-center space-x-2">
      <h1 className="text-3xl font-black tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-green-600">
          PHASE 10
        </span>
      </h1>
      <h2 className="text-2xl font-bold">Score Sheet</h2>
      <div className="hidden md:flex space-x-1">
        {[4, 8, 3, 10, "W", 1, 2].map((num, i) => (
          <div
            key={i}
            className={`w-8 h-8 flex items-center justify-center font-bold text-white transform rotate-${
              i * 5 - 10
            } ${
              typeof num === "string"
                ? "bg-green-600"
                : i % 3 === 0
                ? "bg-blue-500"
                : i % 3 === 1
                ? "bg-green-500"
                : "bg-red-500"
            } rounded shadow-md`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}
