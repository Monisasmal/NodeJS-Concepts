export default function WhatIsLibuv() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is libuv?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          libuv is a C library used by Node.js that provides asynchronous,
          non-blocking I/O operations. It is responsible for handling the event
          loop, thread pool, and low-level system operations.
        </p>
      </section>

      {/* Role in Node.js */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Role in Node.js
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Manages the Event Loop</li>
          <li>Handles asynchronous I/O operations</li>
          <li>Provides thread pool for heavy tasks</li>
          <li>Interacts with the operating system</li>
        </ul>
      </section>

      {/* Why Needed */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Why libuv is Needed
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>JavaScript is single-threaded</li>
          <li>libuv enables non-blocking behavior</li>
          <li>Handles multiple operations efficiently</li>
          <li>Provides scalability for Node.js applications</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. How libuv Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Receives asynchronous tasks (file, network, etc.)</li>
          <li>Sends heavy tasks to thread pool</li>
          <li>Uses Event Loop to monitor task completion</li>
          <li>Executes callback when task is finished</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          5. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

console.log("Start");

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log("File read completed");
});

console.log("End");`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 libuv handles the file reading in the background thread pool.
        </p>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Enables non-blocking I/O</li>
          <li>Efficient concurrency handling</li>
          <li>Cross-platform support</li>
          <li>Improves Node.js performance</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Disadvantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Hidden complexity from developers</li>
          <li>Limited control over thread pool</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>libuv is a C library used by Node.js</li>
          <li>Handles event loop and async I/O</li>
          <li>Provides thread pool</li>
          <li>Core reason Node.js is non-blocking</li>
        </ul>
      </section>

    </div>
  );
}