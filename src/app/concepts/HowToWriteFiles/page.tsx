export default function HowToWriteFiles() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        How to Write Files in Node.js?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          In Node.js, files are written using the built-in fs (File System)
          module. It allows you to create new files or overwrite existing ones
          with data.
        </p>
      </section>

      {/* Methods */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Methods to Write Files
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>fs.writeFile():</b> Asynchronous method</li>
          <li><b>fs.writeFileSync():</b> Synchronous method</li>
          <li><b>fs.appendFile():</b> Adds data to existing file</li>
        </ul>
      </section>

      {/* Async Example */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          3. Asynchronous Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

fs.writeFile("example.txt", "Hello Node.js", (err) => {
  if (err) throw err;
  console.log("File written successfully");
});`}
        </pre>
      </section>

      {/* Sync Example */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Synchronous Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

fs.writeFileSync("example.txt", "Hello Node.js");
console.log("File written successfully");`}
        </pre>
      </section>

      {/* Append Example */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          5. Append Data Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

fs.appendFile("example.txt", "\\nNew Data Added", (err) => {
  if (err) throw err;
  console.log("Data appended successfully");
});`}
        </pre>
      </section>

      {/* Differences */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Difference Between Async and Sync
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
          <li><b>Async:</b> Non-blocking, better for performance</li>
          <li><b>Sync:</b> Blocking, used for simple tasks</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Easy file creation and modification</li>
          <li>Supports asynchronous operations</li>
          <li>Built-in module (no installation needed)</li>
        </ul>
      </section>

    </div>
  );
}