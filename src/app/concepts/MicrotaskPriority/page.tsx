export default function MicrotaskPriority() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Difference between process.nextTick, Promise.then, queueMicrotask
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          These are all used to schedule microtasks in Node.js, but they have
          different priorities and execution order in the event loop.
        </p>
      </section>

      {/* Execution Priority */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Execution Priority (High → Low)
        </h2>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`process.nextTick()
Promise.then()
queueMicrotask()`}
        </pre>
      </section> 

      {/* Explanation */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Explanation
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>process.nextTick:</b> Runs immediately after current operation (highest priority)</li>
          <li><b>Promise.then:</b> Runs in microtask queue after nextTick</li>
          <li><b>queueMicrotask:</b> Similar to Promise.then but slightly lower priority</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`console.log("Start");

process.nextTick(() => console.log("nextTick"));

Promise.resolve().then(() => console.log("Promise"));

queueMicrotask(() => console.log("Microtask"));

console.log("End");

// Output:
// Start
// End
// nextTick
// Promise
// Microtask`}
        </pre>
      </section>

      {/* Key Differences */}
      <section className="mb-6 bg-purple-50 border-l-4 border-purple-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Key Differences
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>process.nextTick has its own queue (runs before event loop)</li>
          <li>Promise.then uses microtask queue</li>
          <li>queueMicrotask is standard API (browser + Node)</li>
        </ul>
      </section>

      {/* Important Note */}
      <section className="mb-6 bg-red-50 border-l-4 border-red-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Important Note
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Overusing <b>process.nextTick</b> can block the event loop because it
          runs before other tasks.
        </p>
      </section>

    </div>
  );
}