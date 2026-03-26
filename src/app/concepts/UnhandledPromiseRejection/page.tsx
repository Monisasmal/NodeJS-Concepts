export default function UnhandledPromiseRejection() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is Unhandled Promise Rejection?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          An unhandled promise rejection occurs when a Promise is rejected but
          no error handling mechanism (like .catch() or try/catch) is used to
          handle that error.
        </p>
      </section>

      {/* Why it Happens */}
      <section className="mb-6 bg-red-50 border-l-4 border-red-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Why it Happens
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Missing .catch() in promises</li>
          <li>No try/catch with async/await</li>
          <li>Errors inside async functions not handled</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          3. Example (Unhandled)
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs").promises;

async function readFile() {
  const data = await fs.readFile("wrong.txt", "utf8"); // ❌ error
  console.log(data);
}

readFile(); // ❌ No error handling`}
        </pre>
      </section>

      {/* Fixed Example */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Fixed Example
        </h2>

        <p className="text-sm text-gray-600 mb-2">👉 Using try/catch</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`async function readFile() {
  try {
    const data = await fs.readFile("wrong.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

readFile();`}
        </pre>

        <p className="text-sm text-gray-600 mt-4 mb-2">👉 Using .catch()</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`fs.readFile("wrong.txt", "utf8")
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err.message));`}
        </pre>
      </section>

      {/* Impact */}
      <section className="mb-6 bg-purple-50 border-l-4 border-purple-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Impact
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Application may crash</li>
          <li>Hard to debug issues</li>
          <li>Unstable behavior</li>
        </ul>
      </section>

      {/* Best Practices */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Best Practices
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Always use .catch() with promises</li>
          <li>Use try/catch with async/await</li>
          <li>Handle all possible errors</li>
          <li>Log errors properly</li>
        </ul>
      </section>

    </div>
  );
}