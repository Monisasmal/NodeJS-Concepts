export default function NodeSingleOrMultiThread() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Is Node.js Single-threaded or Multi-threaded?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Short Answer
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Node.js is single-threaded for executing JavaScript code, but it uses
          multi-threading internally through a thread pool to handle asynchronous
          operations like file system, network, and database tasks.
        </p>
      </section>

      {/* Detailed Explanation */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Detailed Explanation
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>JavaScript runs on a single main thread</li>
          <li>Node.js uses an event-driven architecture</li>
          <li>Time-consuming tasks are offloaded to background threads</li>
          <li>Event Loop handles callbacks when tasks are completed</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. How it Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>User sends multiple requests</li>
          <li>Main thread processes lightweight tasks</li>
          <li>Heavy I/O tasks go to thread pool (libuv)</li>
          <li>Event Loop returns results when ready</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

console.log("Start");

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log("File read completed");
});

console.log("End");`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">👉 Output:</p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Start
End
File read completed`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 Node.js does not block execution while reading files.
        </p>
      </section>

      {/* Why Important */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Why This Matters
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Handles many users at the same time</li>
          <li>Improves performance for I/O-heavy apps</li>
          <li>No need to manage threads manually</li>
          <li>Perfect for real-time applications</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Fast and lightweight</li>
          <li>Efficient concurrency model</li>
          <li>Handles multiple requests easily</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Disadvantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Not suitable for CPU-heavy operations</li>
          <li>Single thread can be blocked by heavy computations</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Node.js is single-threaded for JavaScript execution</li>
          <li>Uses event loop for handling concurrency</li>
          <li>Uses thread pool internally (libuv)</li>
          <li>Best for I/O-bound applications</li>
        </ul>
      </section>

    </div>
  );
}