export default function NodeConcurrency() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        How does Node.js handle Concurrency?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Node.js handles concurrency using a single-threaded event loop along
          with asynchronous, non-blocking operations. Instead of creating a new
          thread for each request, it efficiently manages multiple requests at
          the same time.
        </p>
      </section>

      {/* Key Concept */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Key Concepts
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Single-threaded JavaScript execution</li>
          <li>Event Loop for handling multiple tasks</li>
          <li>Non-blocking I/O operations</li>
          <li>Thread pool (libuv) for heavy tasks</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. How it Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Multiple requests come to the server</li>
          <li>Main thread quickly registers the requests</li>
          <li>Time-consuming tasks are sent to background threads</li>
          <li>Event Loop keeps checking completed tasks</li>
          <li>Callback functions are executed when tasks are done</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`console.log("Start");

setTimeout(() => {
  console.log("Task completed");
}, 2000);

console.log("End");`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">👉 Output:</p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Start
End
Task completed`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 Even though the task takes 2 seconds, Node.js does not block execution.
        </p>
      </section>

      {/* Why Important */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Why This is Important
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Handles thousands of users efficiently</li>
          <li>No need to create multiple threads</li>
          <li>Better performance for I/O-heavy tasks</li>
          <li>Ideal for real-time applications</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>High scalability</li>
          <li>Efficient resource usage</li>
          <li>Fast response handling</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Disadvantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Not suitable for CPU-heavy tasks</li>
          <li>Blocking code can affect entire application</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Uses single-threaded event loop</li>
          <li>Handles concurrency via async non-blocking I/O</li>
          <li>Uses thread pool (libuv) internally</li>
          <li>Best for I/O-bound applications</li>
        </ul>
      </section>

    </div>
  );
}