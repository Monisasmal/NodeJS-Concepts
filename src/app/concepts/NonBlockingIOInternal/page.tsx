export default function NonBlockingIOInternal() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        How Node.js Handles Non-Blocking I/O Internally?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Non-blocking I/O means Node.js does not wait for operations like file
          reading, database calls, or API requests to complete. Instead, it
          continues executing other code and handles the result later.
        </p>
      </section>

      {/* Internal Components */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Internal Components
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>Event Loop:</b> Handles execution of tasks</li>
          <li><b>libuv:</b> Manages async operations and thread pool</li>
          <li><b>Callback Queue:</b> Stores completed tasks</li>
          <li><b>Thread Pool:</b> Executes heavy operations</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. How it Works (Step-by-Step)
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Request comes to Node.js</li>
          <li>Async task is offloaded to libuv</li>
          <li>Thread pool processes the task</li>
          <li>Result is placed in callback queue</li>
          <li>Event loop picks it and executes callback</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

console.log("Start");

fs.readFile("file.txt", "utf8", (err, data) => {
  console.log("File read completed");
});

console.log("End");

// Output:
// Start
// End
// File read completed`}
        </pre>
      </section>

      {/* Why it's Fast */}
      <section className="mb-6 bg-purple-50 border-l-4 border-purple-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Why it is Fast
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>No waiting for I/O operations</li>
          <li>Handles multiple requests simultaneously</li>
          <li>Efficient use of CPU</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>High performance</li>
          <li>Scalable applications</li>
          <li>Handles real-time data efficiently</li>
          <li>Better resource utilization</li>
        </ul>
      </section>

    </div>
  );
}