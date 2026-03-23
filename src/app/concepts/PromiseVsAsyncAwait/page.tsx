export default function PromiseVsAsyncAwait() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Difference between Promise and async/await
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Promises and async/await are both used to handle asynchronous operations
          in JavaScript. async/await is built on top of Promises and provides a more
          readable and cleaner way to write asynchronous code.
        </p>
      </section>

      {/* Promise */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Promise
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Uses .then() and .catch()</li>
          <li>Supports chaining</li>
          <li>Can become complex with multiple chains</li>
          <li>Good for handling parallel operations</li>
        </ul>
      </section>

      {/* Async/Await */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. async/await
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Uses async and await keywords</li>
          <li>Looks like synchronous code</li>
          <li>Easier to read and maintain</li>
          <li>Uses try/catch for error handling</li>
        </ul>
      </section>

      {/* Key Differences */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Key Differences
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-2">
          <li><b>Syntax:</b> Promise → .then() | async/await → cleaner syntax</li>
          <li><b>Readability:</b> async/await is more readable</li>
          <li><b>Error Handling:</b> Promise → .catch() | async/await → try/catch</li>
          <li><b>Chaining:</b> Promise supports chaining</li>
          <li><b>Debugging:</b> async/await is easier to debug</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          5. Example Comparison
        </h2>

        <p className="text-sm text-gray-600 mb-2">👉 Using Promise:</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`fetchData()
  .then(data => processData(data))
  .then(result => console.log(result))
  .catch(err => console.log(err));`}
        </pre>

        <p className="text-sm text-gray-600 mt-4 mb-2">👉 Using async/await:</p>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`async function getData() {
  try {
    const data = await fetchData();
    const result = await processData(data);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}`}
        </pre>
      </section>

      {/* When to Use */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. When to Use
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Use Promises for parallel operations (Promise.all)</li>
          <li>Use async/await for cleaner sequential code</li>
          <li>Use async/await in modern applications</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Promises handle async operations</li>
          <li>async/await improves readability</li>
          <li>Better error handling</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>async/await is built on top of Promises</li>
          <li>async/await provides cleaner syntax</li>
          <li>Promises use .then() and .catch()</li>
          <li>async/await uses try/catch</li>
        </ul>
      </section>

    </div>
  );
}