export default function PromiseAllExample() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Implement Promise.all Example
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>

        <p className="text-sm sm:text-base text-gray-700">
          Create multiple promises and use Promise.all() to execute them
          together. Display all resolved results once every promise is completed.
        </p>
      </section>

      {/* Coding Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Coding Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("API Data");
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("User Data");
  }, 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Product Data");
  }, 1500);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });`}
        </pre>

      </section>

      {/* Preview */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Preview
        </h2>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`[
  'API Data',
  'User Data',
  'Product Data'
]`}
        </pre>

      </section>

      {/* Explanation */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>

        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Promise.all() executes multiple promises together</li>
          <li>It waits until all promises are resolved</li>
          <li>If one promise fails → Promise.all() rejects immediately</li>
          <li>Results are returned in array format</li>
          <li>Useful for parallel async operations</li>
        </ul>

      </section>

    </div>
  );
}