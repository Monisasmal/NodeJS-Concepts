export default function WhatIsPiping() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is Piping in Streams?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Piping in Node.js streams is a method used to connect the output of one
          stream directly to the input of another stream. It allows data to flow
          automatically from one place to another.
        </p>
      </section>

      {/* Why Use */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Why We Use Piping
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Efficient data transfer</li>
          <li>Reduces memory usage</li>
          <li>Handles large files easily</li>
          <li>Automatic data flow between streams</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. How Piping Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Readable stream provides data</li>
          <li>Writable stream receives data</li>
          <li>pipe() connects both streams</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

// Pipe data from input to output
readStream.pipe(writeStream);`}
        </pre>
      </section>

      {/* Flow */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Data Flow
        </h2>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`input.txt  --->  Readable Stream  --->  pipe()  --->  Writable Stream  --->  output.txt`}
        </pre>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Efficient for large data handling</li>
          <li>Reduces manual coding</li>
          <li>Improves performance</li>
          <li>Automatic flow control</li>
        </ul>
      </section>

    </div>
  );
}