export default function RequireVsImport() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Difference between require and import
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          require and import are used to include modules in JavaScript.
          require belongs to CommonJS, while import is part of ES Modules (ESM),
          the modern JavaScript standard.
        </p>
      </section>

      {/* require */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. require
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Used in CommonJS</li>
          <li>Synchronous loading</li>
          <li>Can be used anywhere in the code</li>
          <li>Default in older Node.js versions</li>
        </ul>
      </section>

      {/* import */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. import
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Used in ES Modules (ESM)</li>
          <li>Asynchronous loading</li>
          <li>Must be used at the top level</li>
          <li>Modern JavaScript standard</li>
        </ul>
      </section>

      {/* Key Differences */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Key Differences
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
          <li><b>Syntax:</b> require() vs import</li>
          <li><b>Module System:</b> CommonJS vs ES Modules</li>
          <li><b>Loading:</b> Sync vs Async</li>
          <li><b>Usage:</b> Flexible vs Top-level only</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          5. Example
        </h2>

        <p className="text-sm text-gray-600 mb-2">👉 Using require</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`// math.js
module.exports = function add(a, b) {
  return a + b;
};

// app.js
const add = require("./math");
console.log(add(2, 3));`}
        </pre>

        <p className="text-sm text-gray-600 mt-4 mb-2">👉 Using import</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`// math.js
export default function add(a, b) {
  return a + b;
}

// app.js
import add from "./math.js";
console.log(add(2, 3));`}
        </pre>
      </section>

      {/* When to Use */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. When to Use
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Use require in older Node.js projects</li>
          <li>Use import in modern applications</li>
          <li>Prefer import for frontend and full-stack apps</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>require is simple and flexible</li>
          <li>import provides cleaner and modern syntax</li>
          <li>Better support with modern tools and frameworks</li>
        </ul>
      </section>

    </div>
  );
}