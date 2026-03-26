export default function HandleAsyncErrors() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        How to Handle Async Errors in Node.js?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Async errors occur during asynchronous operations like file handling,
          API calls, or database queries. These errors must be handled properly
          to prevent application crashes.
        </p>
      </section>

      {/* Callback Error Handling */}
      <section className="mb-6 bg-red-50 border-l-4 border-red-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          2. Using Callbacks (Error-first pattern)
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log(data.toString());
});`}
        </pre>
      </section>

      {/* Promise Error Handling */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          3. Using Promises (.catch)
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs").promises;

fs.readFile("file.txt", "utf8")
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err.message));`}
        </pre>
      </section>

      {/* Async/Await */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Using Async/Await (try...catch)
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs").promises;

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

readFile();`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Best Practices
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Always handle errors in async code</li>
          <li>Use try...catch with async/await</li>
          <li>Use .catch() for promises</li>
          <li>Avoid unhandled promise rejections</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Prevents application crashes</li>
          <li>Improves reliability</li>
          <li>Better debugging</li>
          <li>Cleaner and maintainable code</li>
        </ul>
      </section>

    </div>
  );
}