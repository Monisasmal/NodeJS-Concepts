export default function NodeJsExecutionFlow() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What Happens When You Run a Node.js File?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          When you run a Node.js file (e.g., using <b>node app.js</b>), Node.js
          executes the JavaScript code using its internal engine and starts
          processing tasks using the event-driven architecture.
        </p>
      </section>

      {/* Step-by-Step Flow */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Step-by-Step Execution Flow
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Node.js starts and loads the file</li>
          <li>V8 engine compiles JavaScript to machine code</li>
          <li>Global execution context is created</li>
          <li>Synchronous code runs line by line</li>
          <li>Async tasks are sent to libuv</li>
          <li>Event loop starts handling callbacks</li>
        </ul>
      </section>

      {/* Internal Components */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Internal Components Involved
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>V8 Engine:</b> Executes JavaScript</li>
          <li><b>Call Stack:</b> Handles function execution</li>
          <li><b>libuv:</b> Manages async operations</li>
          <li><b>Event Loop:</b> Executes callbacks</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 0);

console.log("End");

// Output:
// Start
// End
// Async Task`}
        </pre>
      </section>

      {/* Important Notes */}
      <section className="mb-6 bg-purple-50 border-l-4 border-purple-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Important Notes
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Synchronous code runs first</li>
          <li>Async tasks are handled later</li>
          <li>Event loop manages execution order</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Efficient execution model</li>
          <li>Handles async operations smoothly</li>
          <li>Supports scalable applications</li>
        </ul>
      </section>

    </div>
  );
}