export default function WhatIsCallbackHell() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is Callback Hell?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Callback Hell is a situation where multiple callbacks are nested inside
          each other, making the code difficult to read, understand, and maintain.
        </p>
      </section>

      {/* Key Idea */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Key Idea
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Deeply nested callbacks</li>
          <li>Hard to read and debug</li>
          <li>Common in asynchronous code</li>
          <li>Also called &quot;Pyramid of Doom&quot;</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-red-50 border-l-4 border-red-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          3. Example (Callback Hell)
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`loginUser(user, (userData) => {
  getOrders(userData, (orders) => {
    getOrderDetails(orders, (details) => {
      processPayment(details, (result) => {
        console.log("Payment Done");
      });
    });
  });
});`}
        </pre>
      </section>

      {/* Problems */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Problems with Callback Hell
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Code becomes unreadable</li>
          <li>Difficult to debug</li>
          <li>Error handling becomes complex</li>
          <li>Hard to maintain and scale</li>
        </ul>
      </section>

      {/* Solution */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Solutions
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Use Promises</li>
          <li>Use async/await</li>
          <li>Break code into smaller functions</li>
          <li>Use modular structure</li>
        </ul>
      </section>

      {/* Improved Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          6. Improved Code (Using Promises)
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`loginUser(user)
  .then(getOrders)
  .then(getOrderDetails)
  .then(processPayment)
  .then(() => console.log("Payment Done"))
  .catch(err => console.log(err));`}
        </pre>
      </section>

      {/* Why Important */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Why This is Important
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Helps write clean and maintainable code</li>
          <li>Improves readability</li>
          <li>Important for async programming</li>
          <li>Common interview question</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          8. Advantages (Avoiding Callback Hell)
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Cleaner code</li>
          <li>Better error handling</li>
          <li>Improved maintainability</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Callback Hell = nested callbacks</li>
          <li>Also called Pyramid of Doom</li>
          <li>Makes code unreadable</li>
          <li>Solved using Promises and async/await</li>
        </ul>
      </section>

    </div>
  );
}