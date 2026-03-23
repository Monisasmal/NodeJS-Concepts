export default function SetTimeoutVsSetImmediate() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Difference between setTimeout and setImmediate
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Both setTimeout() and setImmediate() are used to execute asynchronous
          callbacks in Node.js, but they run in different phases of the Event Loop.
        </p>
      </section>

      {/* setTimeout */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. setTimeout()
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          setTimeout() schedules a callback to run after a minimum delay (in milliseconds).
          It executes in the Timers phase of the Event Loop.
        </p>
      </section>

      {/* setImmediate */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. setImmediate()
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          setImmediate() schedules a callback to run immediately after the current
          I/O operations are completed. It executes in the Check phase.
        </p>
      </section>

      {/* Key Differences */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Key Differences
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
          <li><b>Phase:</b> setTimeout → Timers phase</li>
          <li><b>Phase:</b> setImmediate → Check phase</li>
          <li><b>Delay:</b> setTimeout has delay</li>
          <li><b>Delay:</b> setImmediate runs after I/O</li>
          <li><b>Order:</b> Execution order is not always guaranteed</li>
        </ul>
      </section>

      {/* Example 1 */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          5. Example (Basic)
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`setTimeout(() => console.log("Timeout"), 0);

setImmediate(() => console.log("Immediate"));`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 Output order is not guaranteed in this case.
        </p>
      </section>

      {/* Example 2 */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          6. Example (Inside I/O)
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

fs.readFile("file.txt", () => {
  setTimeout(() => console.log("Timeout"), 0);
  setImmediate(() => console.log("Immediate"));
});`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 Output:
        </p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Immediate
Timeout`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 Inside I/O cycle, setImmediate runs before setTimeout.
        </p>
      </section>

      {/* Why Important */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Why This is Important
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Helps understand Event Loop deeply</li>
          <li>Important for async debugging</li>
          <li>Frequently asked in interviews</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>setTimeout runs in Timers phase</li>
          <li>setImmediate runs in Check phase</li>
          <li>Execution order depends on context</li>
          <li>Inside I/O → setImmediate executes first</li>
        </ul>
      </section>

    </div>
  );
}