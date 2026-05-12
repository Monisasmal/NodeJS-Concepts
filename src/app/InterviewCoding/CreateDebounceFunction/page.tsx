export default function CreateDebounceFunction() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Create Debounce Function
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>

        <p className="text-sm sm:text-base text-gray-700">
          Create a debounce function that delays the execution of a function
          until a certain amount of time has passed after the last event trigger.
        </p>

      </section>

      {/* Coding Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Coding Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Example
function searchData() {
  console.log("Searching...");
}

const debounceSearch = debounce(searchData, 1000);

// Simulate typing
debounceSearch();
debounceSearch();
debounceSearch();`}
        </pre>

      </section>

      {/* Preview */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Preview
        </h2>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Searching...

// Printed only once after 1 second`}
        </pre>

      </section>

      {/* Explanation */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>

        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Debouncing delays function execution</li>
          <li>clearTimeout() removes previous timer</li>
          <li>setTimeout() creates new delay</li>
          <li>Function runs only after user stops triggering events</li>
          <li>Commonly used in search bars and resize events</li>
        </ul>

      </section>

    </div>
  );
}