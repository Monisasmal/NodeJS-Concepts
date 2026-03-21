export default function WhatIsV8Engine() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is V8 Engine
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          V8 Engine is a JavaScript engine developed by Google that executes
          JavaScript code. It converts JavaScript into machine code so that it
          can run very fast on your system.
        </p>
      </section>

      {/* Who Developed */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Who Developed V8 Engine
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          V8 Engine was developed by Google and is used in the Chrome browser
          and Node.js runtime environment.
        </p>
      </section>

      {/* Where Used */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Where it is Used
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Google Chrome browser</li>
          <li>Node.js runtime</li>
          <li>Other Chromium-based browsers</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Why V8 Engine is Important
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Executes JavaScript very fast</li>
          <li>Converts JS into machine code (not interpreted line by line)</li>
          <li>Improves performance of web apps and servers</li>
          <li>Enables JavaScript to run outside browser (Node.js)</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. How V8 Engine Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Receives JavaScript code</li>
          <li>Parses and converts it into Abstract Syntax Tree (AST)</li>
          <li>Compiles it into machine code using Just-In-Time (JIT) compilation</li>
          <li>Executes code directly (very fast)</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          6. Example
        </h2>

        <p className="text-sm text-gray-600 mb-2">
          JavaScript code you write:
        </p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`let a = 10;
let b = 20;

console.log(a + b);`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 V8 converts this into machine code and executes it quickly.
        </p>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>High performance</li>
          <li>Uses JIT compilation</li>
          <li>Efficient memory management</li>
          <li>Open-source and widely used</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>V8 is a JavaScript engine developed by Google</li>
          <li>Used in Chrome and Node.js</li>
          <li>Converts JS into machine code</li>
          <li>Uses Just-In-Time (JIT) compilation</li>
        </ul>
      </section>

    </div>
  );
}