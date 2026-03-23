export default function MicrotaskVsMacrotask() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Microtask vs Macrotask Queue
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Microtask and Macrotask queues are part of the Event Loop in JavaScript.
          They store asynchronous callbacks, but differ in priority and execution order.
        </p>
      </section>

      {/* Microtask */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Microtask Queue
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>High priority queue</li>
          <li>Executed immediately after current code</li>
          <li>Runs before Macrotasks</li>
          <li>Examples: Promise.then(), process.nextTick()</li>
        </ul>
      </section>

      {/* Macrotask */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Macrotask Queue
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Lower priority queue</li>
          <li>Executed after Microtasks</li>
          <li>Handled in Event Loop phases</li>
          <li>Examples: setTimeout(), setImmediate()</li>
        </ul>
      </section>

      {/* Key Differences */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Key Differences
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
          <li><b>Priority:</b> Microtask → Higher | Macrotask → Lower</li>
          <li><b>Execution:</b> Microtask runs first</li>
          <li><b>Queue Type:</b> Microtask queue vs Event Loop phases</li>
          <li><b>Examples:</b> Promise vs setTimeout</li>
        </ul>
      </section>

      {/* Execution Flow */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Execution Flow
        </h2>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`1. Execute Sync Code
2. Execute Microtasks (ALL)
3. Execute ONE Macrotask
4. Repeat`}
        </pre>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          6. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">👉 Output:</p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Start
End
Promise
Timeout`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 Promise (Microtask) runs before setTimeout (Macrotask).
        </p>
      </section>

      {/* Why Important */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Why This is Important
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Helps understand execution order</li>
          <li>Important for debugging async code</li>
          <li>Frequently asked in interviews</li>
        </ul>
      </section>

      {/* Warning */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          8. Important Note
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          If too many Microtasks are added (like process.nextTick or Promise),
          they can block the Event Loop and delay Macrotasks.
        </p>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Microtask queue has higher priority</li>
          <li>Promises and nextTick are Microtasks</li>
          <li>setTimeout is a Macrotask</li>
          <li>Microtasks run before Macrotasks</li>
        </ul>
      </section>

    </div>
  );
}