export default function SyncVsAsyncFileMethods() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Difference between Sync and Async File Methods
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          In Node.js, file operations can be performed using synchronous (sync)
          or asynchronous (async) methods. Sync methods block execution, while
          async methods allow other operations to run simultaneously.
        </p>
      </section>

      {/* Sync */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Synchronous (Sync)
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Blocking operation</li>
          <li>Executes line by line</li>
          <li>Stops program until task is completed</li>
          <li>Simple but slower for large tasks</li>
        </ul>
      </section>

      {/* Async */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Asynchronous (Async)
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Non-blocking operation</li>
          <li>Does not stop execution</li>
          <li>Uses callbacks, promises, or async/await</li>
          <li>Faster and more efficient</li>
        </ul>
      </section>

      {/* Key Differences */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Key Differences
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
          <li><b>Execution:</b> Blocking vs Non-blocking</li>
          <li><b>Performance:</b> Slower vs Faster</li>
          <li><b>Usage:</b> Simple tasks vs Real-world apps</li>
          <li><b>Handling:</b> Direct return vs Callback/Promise</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          5. Example
        </h2>

        <p className="text-sm text-gray-600 mb-2">👉 Synchronous</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf8");
console.log(data);
console.log("Done");`}
        </pre>

        <p className="text-sm text-gray-600 mt-4 mb-2">👉 Asynchronous</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("Done");`}
        </pre>
      </section>

      {/* Output Difference */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Output Difference
        </h2>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`// Sync Output
File Content
Done

// Async Output
Done
File Content`}
        </pre>
      </section>

      {/* When to Use */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. When to Use
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Use Sync for small scripts or debugging</li>
          <li>Use Async for real-world applications</li>
          <li>Prefer Async for better performance</li>
        </ul>
      </section>

    </div>
  );
}