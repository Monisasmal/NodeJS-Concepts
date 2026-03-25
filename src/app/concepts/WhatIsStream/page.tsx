export default function WhatIsStream() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is a Stream in Node.js?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          A stream in Node.js is a way to handle reading or writing data in
          small chunks instead of loading the entire data into memory at once.
          It is useful for handling large files efficiently.
        </p>
      </section>

      {/* Types */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Types of Streams
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>Readable:</b> Read data (e.g., fs.createReadStream)</li>
          <li><b>Writable:</b> Write data (e.g., fs.createWriteStream)</li>
          <li><b>Duplex:</b> Read and write (e.g., sockets)</li>
          <li><b>Transform:</b> Modify data while streaming</li>
        </ul>
      </section>

      {/* Why Use */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Why Use Streams
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Handles large data efficiently</li>
          <li>Reduces memory usage</li>
          <li>Faster processing</li>
          <li>Improves performance</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

const readStream = fs.createReadStream("largeFile.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("Chunk:", chunk);
});`}
        </pre>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. How Streams Work
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Data is processed in chunks</li>
          <li>Each chunk is handled as it arrives</li>
          <li>No need to load full file into memory</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Efficient for large files</li>
          <li>Low memory usage</li>
          <li>Better performance</li>
          <li>Supports real-time data processing</li>
        </ul>
      </section>

    </div>
  );
}