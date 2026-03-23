export default function EventLoopPhases() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Event Loop Phases in Node.js
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          The Event Loop in Node.js works in multiple phases. Each phase has a
          specific purpose and a queue of callbacks to execute. The loop goes
          through these phases continuously to process asynchronous operations.
        </p>
      </section>

      {/* Overview */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Phases Overview
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Timers</li>
          <li>I/O Callbacks</li>
          <li>Idle / Prepare</li>
          <li>Poll</li>
          <li>Check</li>
          <li>Close Callbacks</li>
        </ul>
      </section>

      {/* Timers */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Timers Phase
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Executes callbacks scheduled by setTimeout() and setInterval().
          These callbacks run after the specified delay (not exactly at that time).
        </p>
      </section>

      {/* I/O Callbacks */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. I/O Callbacks Phase
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Executes callbacks for some system operations like TCP errors or file
          system operations that were deferred from previous cycles.
        </p>
      </section>

      {/* Idle */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Idle / Prepare Phase
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Internal phase used by Node.js. It is not directly accessible by developers.
        </p>
      </section>

      {/* Poll */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Poll Phase (Most Important)
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Fetches new I/O events</li>
          <li>Executes I/O callbacks</li>
          <li>Waits if no tasks are available</li>
          <li>Core phase where most work happens</li>
        </ul>
      </section>

      {/* Check */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Check Phase
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Executes callbacks scheduled by setImmediate().
        </p>
      </section>

      {/* Close */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          8. Close Callbacks Phase
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Executes close events like socket.on(&apos;close&apos;).
        </p>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          9. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`setTimeout(() => console.log("Timer"), 0);

setImmediate(() => console.log("Immediate"));

console.log("Start");`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 Output may vary depending on the phase execution order.
        </p>
      </section>

      {/* Order */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          10. Execution Order (Simplified)
        </h2>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Timers → I/O → Idle → Poll → Check → Close`}
        </pre>
      </section>

      {/* Why Important */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          11. Why This is Important
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Helps understand async behavior</li>
          <li>Important for debugging</li>
          <li>Frequently asked in interviews</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Event loop has multiple phases</li>
          <li>Poll phase is most important</li>
          <li>setTimeout runs in Timers phase</li>
          <li>setImmediate runs in Check phase</li>
        </ul>
      </section>

    </div>
  );
}