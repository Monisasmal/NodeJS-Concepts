export default function StreamLargeFile() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Stream a Large File
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>

        <p className="text-sm sm:text-base text-gray-700">
          Read and stream a large file in Node.js using streams instead of
          loading the entire file into memory.
        </p>

      </section>

      {/* Coding Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Coding Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

// Create readable stream
const readStream = fs.createReadStream(
  "largefile.txt",
  "utf8"
);

// Read file chunk by chunk
readStream.on("data", (chunk) => {
  console.log("Received Chunk:");
  console.log(chunk);
});

// When reading is completed
readStream.on("end", () => {
  console.log("File reading completed");
});

// Handle errors
readStream.on("error", (err) => {
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
{`Received Chunk:
Hello World...

Received Chunk:
More File Data...

File reading completed`}
        </pre>

      </section>

      {/* Explanation */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>

        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>createReadStream() reads file in chunks</li>
          <li>Does not load entire file into memory</li>
          <li>data event receives chunks of data</li>
          <li>end event runs after file reading completes</li>
          <li>Efficient for large files and media streaming</li>
        </ul>

      </section>

    </div>
  );
}