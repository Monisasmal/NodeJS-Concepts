export default function NextTickVsSetImmediate() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Difference between process.nextTick and setImmediate
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          process.nextTick() and setImmediate() are used to schedule asynchronous
          callbacks in Node.js, but they execute in different phases and priority levels
          of the Event Loop.
        </p>
      </section>

      {/* process.nextTick */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. process.nextTick()
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          process.nextTick() executes its callback immediately after the current
          operation completes, before the Event Loop continues to the next phase.
          It has higher priority than other async methods.
        </p>
      </section>

      {/* setImmediate */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. setImmediate()
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          setImmediate() executes its callback in the Check phase of the Event Loop,
          after I/O operations are completed.
        </p>
      </section>

      {/* Key Differences */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Key Differences
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
          <li><b>Priority:</b> nextTick → Higher priority</li>
          <li><b>Priority:</b> setImmediate → Lower priority</li>
          <li><b>Execution:</b> nextTick → Before Event Loop continues</li>
          <li><b>Execution:</b> setImmediate → In Check phase</li>
          <li><b>Use case:</b> nextTick → Immediate execution after current code</li>
          <li><b>Use case:</b> setImmediate → After I/O operations</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          5. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`console.log("Start");

setImmediate(() => {
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("nextTick");
});

console.log("End");`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">👉 Output:</p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Start
End
nextTick
setImmediate`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 process.nextTick runs before setImmediate because it has higher priority.
        </p>
      </section>

      {/* Why Important */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Why This is Important
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Helps understand async execution order</li>
          <li>Important for debugging</li>
          <li>Frequently asked in interviews</li>
        </ul>
      </section>

      {/* Warning */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Important Note
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Overusing process.nextTick() can block the Event Loop because it keeps
          executing before moving to the next phase.
        </p>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>process.nextTick runs before Event Loop phases</li>
          <li>setImmediate runs in Check phase</li>
          <li>nextTick has higher priority</li>
          <li>Overuse of nextTick can block Event Loop</li>
        </ul>
      </section>

    </div>
  );
}