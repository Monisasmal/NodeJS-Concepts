export default function TypesOfStreams() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Types of Streams in Node.js
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Streams in Node.js are used to handle data in chunks. There are
          different types of streams based on how data is read, written, or
          processed.
        </p>
      </section>

      {/* Readable */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Readable Stream
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Used to read data</li>
          <li>Data comes in chunks</li>
          <li>Example: fs.createReadStream()</li>
        </ul>
      </section>

      {/* Writable */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Writable Stream
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Used to write data</li>
          <li>Sends data in chunks</li>
          <li>Example: fs.createWriteStream()</li>
        </ul>
      </section>

      {/* Duplex */}
      <section className="mb-6 bg-purple-50 border-l-4 border-purple-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Duplex Stream
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Can read and write data</li>
          <li>Two-way communication</li>
          <li>Example: network sockets</li>
        </ul>
      </section>

      {/* Transform */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Transform Stream
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Modify data while streaming</li>
          <li>Input is transformed into output</li>
          <li>Example: compression, encryption</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          6. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

// Readable Stream
const readStream = fs.createReadStream("input.txt");

// Writable Stream
const writeStream = fs.createWriteStream("output.txt");

// Pipe data
readStream.pipe(writeStream);`}
        </pre>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Efficient for large data</li>
          <li>Low memory usage</li>
          <li>Faster processing</li>
          <li>Supports real-time operations</li>
        </ul>
      </section>

    </div>
  );
}