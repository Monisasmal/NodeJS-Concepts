export default function WhatArePromises() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What are Promises?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          A Promise is an object in JavaScript that represents the eventual
          completion or failure of an asynchronous operation and its result.
        </p>
      </section>

      {/* States */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Promise States
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>Pending:</b> Initial state</li>
          <li><b>Fulfilled:</b> Operation completed successfully</li>
          <li><b>Rejected:</b> Operation failed</li>
        </ul>
      </section>

      {/* Key Idea */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. Key Idea
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Handles asynchronous operations</li>
          <li>Avoids callback hell</li>
          <li>Improves readability</li>
          <li>Supports chaining</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. How it Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Create a Promise</li>
          <li>Perform async operation</li>
          <li>Resolve (success) or Reject (error)</li>
          <li>Handle result using .then() and .catch()</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          5. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));`}
        </pre>
      </section>

      {/* Chaining */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          6. Promise Chaining
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`loginUser(user)
  .then(getOrders)
  .then(getOrderDetails)
  .then(processPayment)
  .then(() => console.log("Done"))
  .catch(err => console.log(err));`}
        </pre>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Avoids callback hell</li>
          <li>Better readability</li>
          <li>Easy error handling</li>
          <li>Supports chaining</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          8. Disadvantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Slightly complex for beginners</li>
          <li>Can still become complex if overused</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Promise represents async result</li>
          <li>Has 3 states: pending, fulfilled, rejected</li>
          <li>Uses .then() and .catch()</li>
          <li>Solves callback hell problem</li>
        </ul>
      </section>

    </div>
  );
}