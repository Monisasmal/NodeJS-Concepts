export default function ExplainLibuv() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Explain libuv in Detail
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          libuv is a C library used by Node.js to handle asynchronous operations.
          It provides the event loop, thread pool, and non-blocking I/O capabilities
          that make Node.js fast and scalable.
        </p>
      </section>

      {/* Why libuv */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Why libuv is Needed
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>JavaScript is single-threaded</li>
          <li>Handles heavy I/O tasks in background</li>
          <li>Provides non-blocking behavior</li>
          <li>Makes Node.js scalable</li>
        </ul>
      </section>

      {/* Core Components */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Core Components of libuv
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>Event Loop:</b> Executes callbacks</li>
          <li><b>Thread Pool:</b> Handles heavy tasks</li>
          <li><b>Async I/O:</b> File system, network operations</li>
          <li><b>Timers:</b> setTimeout, setInterval</li>
        </ul>
      </section>

      {/* Thread Pool */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Thread Pool
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          libuv uses a thread pool (default size: 4) to handle operations like
          file system access, DNS lookup, and cryptography. These tasks run in
          background threads so the main thread is not blocked.
        </p>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-purple-50 border-l-4 border-purple-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. How libuv Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Node.js receives a request</li>
          <li>Async task is delegated to libuv</li>
          <li>libuv assigns task to thread pool (if needed)</li>
          <li>Task executes in background</li>
          <li>Result is pushed to callback queue</li>
          <li>Event loop executes callback</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          6. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

console.log("Start");

fs.readFile("file.txt", "utf8", (err, data) => {
  console.log("File Read Done");
});

console.log("End");

// Output:
// Start
// End
// File Read Done`}
        </pre>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Enables non-blocking I/O</li>
          <li>Handles multiple requests efficiently</li>
          <li>Improves performance</li>
          <li>Works across platforms</li>
        </ul>
      </section>

    </div>
  );
}