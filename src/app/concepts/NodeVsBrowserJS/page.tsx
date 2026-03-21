export default function NodeVsBrowserJS() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Node.js vs Browser JavaScript
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          JavaScript in the browser runs inside a web browser and is used to
          create interactive user interfaces. Node.js allows JavaScript to run
          outside the browser, mainly on the server side to build backend
          applications.
        </p>
      </section>

      {/* Where */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Where it Runs
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>Browser JS:</b> Runs inside web browsers like Chrome, Edge</li>
          <li><b>Node.js:</b> Runs on the server (outside browser)</li>
        </ul>
      </section>

      {/* API Access */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. API Access
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>Browser JS:</b> Can access DOM, window, document</li>
          <li><b>Node.js:</b> Cannot access DOM, but has file system, OS, network APIs</li>
        </ul>
      </section>

      {/* Use Case */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Use Cases
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>Browser JS:</b> UI interactions, animations, form validation</li>
          <li><b>Node.js:</b> Backend logic, APIs, database handling</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          5. Example
        </h2>

        <p className="text-sm text-gray-600 mb-2">Browser JavaScript:</p>
        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});`}
        </pre>

        <p className="text-sm text-gray-600 mt-4 mb-2">Node.js:</p>
        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

fs.writeFileSync("test.txt", "Hello from Node.js");`}
        </pre>
      </section>

      {/* Key Differences */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Key Differences
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Browser JS works with UI, Node.js works with server</li>
          <li>Browser has DOM access, Node.js does not</li>
          <li>Node.js can access system resources</li>
          <li>Both use JavaScript but in different environments</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Node.js runs outside browser, Browser JS runs inside browser</li>
          <li>Node.js has access to file system, browser does not</li>
          <li>Browser JS interacts with DOM</li>
          <li>Both use same JavaScript language</li>
        </ul>
      </section>

    </div>
  );
}