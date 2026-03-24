export default function ModuleExportsVsExports() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        module.exports vs exports
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          In Node.js, both module.exports and exports are used to export data
          from a module so it can be used in other files. However, they work
          slightly differently under the hood.
        </p>
      </section>

      {/* module.exports */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. module.exports
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Main object that is returned when require() is called</li>
          <li>Can export a function, object, or value</li>
          <li>Used when exporting a single value</li>
        </ul>
      </section>

      {/* exports */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. exports
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Shorthand reference to module.exports</li>
          <li>Used to add multiple properties</li>
          <li>Cannot directly assign a new value</li>
        </ul>
      </section>

      {/* Key Differences */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Key Differences
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
          <li><b>Usage:</b> module.exports → single export | exports → multiple exports</li>
          <li><b>Assignment:</b> module.exports can be reassigned | exports cannot</li>
          <li><b>Reference:</b> exports is a reference to module.exports</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          5. Example
        </h2>

        <p className="text-sm text-gray-600 mb-2">👉 Using module.exports</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`// math.js
module.exports = function add(a, b) {
  return a + b;
};

// app.js
const add = require("./math");
console.log(add(2, 3));`}
        </pre>

        <p className="text-sm text-gray-600 mt-4 mb-2">👉 Using exports</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`// math.js
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;

// app.js
const math = require("./math");
console.log(math.add(2, 3));`}
        </pre>
      </section>

      {/* Important Note */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Important Note
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          If you assign a new value to exports, it will break the reference with
          module.exports and will not work as expected.
        </p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm mt-3">
{`// ❌ Wrong
exports = function() {};

// ✅ Correct
module.exports = function() {};`}
        </pre>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Helps in modular code structure</li>
          <li>Supports code reuse</li>
          <li>Makes large applications manageable</li>
        </ul>
      </section>

    </div>
  );
}