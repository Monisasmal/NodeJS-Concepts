export default function NonBlockingIO() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is Non-blocking I/O?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Non-blocking I/O is a method where operations like file reading,
          database calls, or network requests do not block the execution of the
          program. Instead, the program continues running and handles the result
          later using callbacks, promises, or async/await.
        </p>
      </section>

      {/* Key Idea */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Key Idea
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Execution does not wait for task completion</li>
          <li>Other code continues to run</li>
          <li>Result is handled later</li>
          <li>Uses asynchronous programming</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. How it Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Request is sent for a task (e.g., file read)</li>
          <li>Task is handled in background (thread pool)</li>
          <li>Main thread continues execution</li>
          <li>When task is done, callback is executed</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

console.log("Start");

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log("File read completed");
});

console.log("End");`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">👉 Output:</p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Start
End
File read completed`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 File reading happens in background, so execution does not stop.
        </p>
      </section>

      {/* Blocking vs Non-blocking */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Blocking vs Non-blocking
        </h2>

        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
          <li>
            <b>Blocking:</b> Code waits until task is completed
          </li>
          <li>
            <b>Non-blocking:</b> Code continues execution without waiting
          </li>
          <li>
            <b>Blocking:</b> Slower performance
          </li>
          <li>
            <b>Non-blocking:</b> Faster and scalable
          </li>
        </ul>
      </section>

      {/* Why Important */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Why This is Important
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Handles multiple users efficiently</li>
          <li>Improves performance</li>
          <li>Prevents application freezing</li>
          <li>Core concept of Node.js</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>High scalability</li>
          <li>Better resource utilization</li>
          <li>Fast response handling</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          8. Disadvantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Code can be harder to understand</li>
          <li>Callback hell if not managed properly</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Non-blocking I/O does not stop execution</li>
          <li>Uses callbacks, promises, async/await</li>
          <li>Core feature of Node.js</li>
          <li>Improves scalability and performance</li>
        </ul>
      </section>

    </div>
  );
}