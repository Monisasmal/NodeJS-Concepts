export default function WhatIsBuffer() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is a Buffer in Node.js?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          A Buffer in Node.js is a temporary memory area used to store binary data.
          It is mainly used when working with streams or handling raw data like
          files, network requests, or images.
        </p>
      </section>

      {/* Why Buffer */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Why We Use Buffer
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>To handle binary data directly</li>
          <li>Used in file system operations</li>
          <li>Helps in streaming data efficiently</li>
          <li>Works with network data (TCP, HTTP)</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. How Buffer Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Stores data in raw binary format</li>
          <li>Fixed-size memory allocation</li>
          <li>Data is processed in chunks</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`// Create buffer
const buffer = Buffer.from("Hello");

// Convert to string
console.log(buffer.toString());

// Access raw data
console.log(buffer);`}
        </pre>
      </section>

      {/* Output */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Output
        </h2>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Hello
<Buffer 48 65 6c 6c 6f>`}
        </pre>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Efficient handling of binary data</li>
          <li>Fast data processing</li>
          <li>Essential for streams and file handling</li>
          <li>Low-level memory control</li>
        </ul>
      </section>

    </div>
  );
}