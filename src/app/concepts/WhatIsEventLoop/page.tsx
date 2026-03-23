export default function WhatIsEventLoop() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is the Event Loop?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          The Event Loop is a core mechanism in Node.js that allows it to handle
          multiple operations efficiently using a single thread. It continuously
          checks the call stack and callback queue and executes tasks without
          blocking the execution.
        </p>
      </section>

      {/* Key Idea */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Key Idea
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Runs on a single thread</li>
          <li>Handles asynchronous operations</li>
          <li>Continuously checks task queues</li>
          <li>Executes callbacks when ready</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. How it Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Code is executed line by line in Call Stack</li>
          <li>Async tasks are sent to background (libuv)</li>
          <li>Completed tasks go to Callback Queue</li>
          <li>Event Loop pushes callbacks to Call Stack</li>
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
  console.log("Timeout Callback");
}, 0);

console.log("End");`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">👉 Output:</p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Start
End
Timeout Callback`}
        </pre>

        <p className="text-sm text-gray-600 mt-3">
          👉 Even with 0ms delay, callback runs later because Event Loop processes it after the main code.
        </p>
      </section>

      {/* Phases */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Event Loop Phases (Simplified)
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Timers (setTimeout, setInterval)</li>
          <li>I/O Callbacks</li>
          <li>Idle/Prepare</li>
          <li>Poll (fetch new I/O events)</li>
          <li>Check (setImmediate)</li>
          <li>Close Callbacks</li>
        </ul>
      </section>

      {/* Why Important */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Why This is Important
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Handles multiple requests efficiently</li>
          <li>Prevents blocking of application</li>
          <li>Core of Node.js performance</li>
          <li>Enables asynchronous programming</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Efficient concurrency</li>
          <li>Better performance</li>
          <li>Handles large number of requests</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          8. Disadvantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Complex to understand</li>
          <li>Blocking code affects entire system</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Event Loop enables non-blocking behavior</li>
          <li>Works with call stack and callback queue</li>
          <li>Core part of Node.js architecture</li>
          <li>Handles concurrency in single thread</li>
        </ul>
      </section>

    </div>
  );
}