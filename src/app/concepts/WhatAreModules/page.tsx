export default function WhatAreModules() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What are Modules in Node.js?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Modules in Node.js are reusable blocks of code that can be imported and
          used in different files. They help organize code into smaller,
          manageable parts.
        </p>
      </section>

      {/* Types */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Types of Modules
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>Core Modules:</b> Built into Node.js (e.g., http, fs)</li>
          <li><b>Local Modules:</b> Custom modules created by developers</li>
          <li><b>Third-party Modules:</b> Installed using npm (e.g., express)</li>
        </ul>
      </section>

      {/* Why Use */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Why We Use Modules
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Organize code into smaller parts</li>
          <li>Improve code reusability</li>
          <li>Make applications easier to maintain</li>
          <li>Avoid code duplication</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. How Modules Work
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Export functionality using module.exports</li>
          <li>Import using require()</li>
          <li>Each file acts as a separate module</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          5. Example
        </h2>

        <p className="text-sm text-gray-600 mb-2">👉 math.js (module file)</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`function add(a, b) {
  return a + b;
}

module.exports = add;`}
        </pre>

        <p className="text-sm text-gray-600 mt-4 mb-2">👉 app.js (main file)</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const add = require("./math");

console.log(add(2, 3));`}
        </pre>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Better code organization</li>
          <li>Reusable components</li>
          <li>Easy maintenance</li>
          <li>Scalable applications</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Disadvantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Too many modules can increase complexity</li>
          <li>Requires proper structure and management</li>
        </ul>
      </section>

    </div>
  );
}