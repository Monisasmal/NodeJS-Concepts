export default function TypesOfErrors() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Types of Errors in Node.js
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Errors in Node.js occur when something goes wrong during program
          execution. Understanding different types of errors helps in debugging
          and building reliable applications.
        </p>
      </section>

      {/* Syntax Errors */}
      <section className="mb-6 bg-red-50 border-l-4 border-red-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Syntax Errors
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Occurs due to incorrect code syntax</li>
          <li>Detected at compile time</li>
          <li>Prevents code from running</li>
        </ul>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm mt-3">
{`// ❌ Missing bracket
console.log("Hello"`}
        </pre>
      </section>

      {/* Runtime Errors */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Runtime Errors
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Occurs during execution</li>
          <li>Example: accessing undefined variables</li>
          <li>Can crash the application</li>
        </ul>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm mt-3">
{`let data;
console.log(data.name); // ❌ Runtime error`}
        </pre>
      </section>

      {/* Logical Errors */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Logical Errors
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>No error message shown</li>
          <li>Program runs but gives wrong output</li>
          <li>Hard to detect</li>
        </ul>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm mt-3">
{`// ❌ Wrong logic
function add(a, b) {
  return a - b;
}`}
        </pre>
      </section>

      {/* System Errors */}
      <section className="mb-6 bg-purple-50 border-l-4 border-purple-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. System Errors
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Errors from OS or system</li>
          <li>Example: file not found, permission denied</li>
          <li>Common in file system or network operations</li>
        </ul>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm mt-3">
{`const fs = require("fs");

fs.readFile("unknown.txt", (err, data) => {
  if (err) console.error(err); // ❌ System error
});`}
        </pre>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Why Understanding Errors is Important
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Helps in debugging code</li>
          <li>Improves application reliability</li>
          <li>Prevents crashes</li>
          <li>Enhances user experience</li>
        </ul>
      </section>

    </div>
  );
}