export default function CustomEventEmitter() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Create a Custom EventEmitter
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Create a custom EventEmitter in Node.js that listens to an event and
          executes a callback when the event is triggered.
        </p>
      </section>

      {/* Coding Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Coding Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const EventEmitter = require("events");

// Create custom emitter
const myEmitter = new EventEmitter();

// Listen to event
myEmitter.on("greet", (name) => {
  console.log("Hello " + name);
});

// Emit event
myEmitter.emit("greet", "Manaswini");`}
        </pre>
      </section>

      {/* Preview */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Preview
        </h2>

        <p className="text-sm sm:text-base text-gray-700">
          Run the file using Node.js:
        </p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm mt-2">
{`node app.js`}
        </pre>

        <p className="text-sm text-gray-600 mt-2">
          👉 Output in terminal:
        </p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm mt-2">
{`Hello Manaswini`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>

        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>EventEmitter is a core module in Node.js</li>
          <li>on() is used to listen to events</li>
          <li>emit() is used to trigger events</li>
          <li>Custom events help in building scalable applications</li>
        </ul>
      </section>

    </div>
  );
}