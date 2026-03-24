export default function CommonJSvsESModules() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        CommonJS vs ES Modules
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          CommonJS and ES Modules are two module systems used in Node.js to
          organize and reuse code. CommonJS is the traditional module system,
          while ES Modules (ESM) is the modern standard introduced in JavaScript.
        </p>
      </section>

      {/* CommonJS */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. CommonJS
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Uses require() to import modules</li>
          <li>Uses module.exports to export</li>
          <li>Synchronous loading</li>
          <li>Default module system in Node.js</li>
        </ul>
      </section>

      {/* ES Modules */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. ES Modules (ESM)
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Uses import to import modules</li>
          <li>Uses export / export default</li>
          <li>Asynchronous loading</li>
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
          <li><b>Export:</b> module.exports vs export</li>
          <li><b>Loading:</b> Sync vs Async</li>
          <li><b>Usage:</b> Older vs Modern</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          5. Example
        </h2>

        <p className="text-sm text-gray-600 mb-2">👉 CommonJS</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`// math.js
module.exports = function add(a, b) {
  return a + b;
};

// app.js
const add = require("./math");
console.log(add(2, 3));`}
        </pre>

        <p className="text-sm text-gray-600 mt-4 mb-2">👉 ES Modules</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(2, 3));`}
        </pre>
      </section>

      {/* When to Use */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. When to Use
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Use CommonJS in older Node.js projects</li>
          <li>Use ES Modules in modern applications</li>
          <li>Prefer ES Modules for frontend and full-stack apps</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>CommonJS is simple and widely supported</li>
          <li>ES Modules provide cleaner syntax</li>
          <li>Better compatibility with modern tools</li>
        </ul>
      </section>

    </div>
  );
}