export default function CreateThrottleFunction() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Create Throttle Function
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>

        <p className="text-sm sm:text-base text-gray-700">
          Create a throttle function that limits how many times a function
          can execute within a specific time interval.
        </p>

      </section>

      {/* Coding Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Coding Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

// Example
function handleScroll() {
  console.log("Scrolling...");
}

const throttledScroll = throttle(handleScroll, 2000);

// Simulate multiple calls
throttledScroll();
throttledScroll();
throttledScroll();`}
        </pre>

      </section>

      {/* Preview */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Preview
        </h2>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Scrolling...

// Function executes only once
// within 2 seconds`}
        </pre>

      </section>

      {/* Explanation */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>

        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Throttle limits function execution frequency</li>
          <li>Date.now() gets current timestamp</li>
          <li>Function runs only after delay interval</li>
          <li>Prevents excessive function calls</li>
          <li>Commonly used in scroll and resize events</li>
        </ul>

      </section>

    </div>
  );
}