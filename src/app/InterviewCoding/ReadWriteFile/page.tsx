export default function ReadWriteFile() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Read and Write Files using fs Module
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Write a Node.js program to create a file, write data into it, and then
          read the file content using the fs module.
        </p>
      </section>

      {/* Coding Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Coding Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const fs = require("fs");

// Write to file
fs.writeFile("example.txt", "Hello Node.js", (err) => {
  if (err) throw err;
  console.log("File written successfully");

  // Read file
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
  });
});`}
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
{`File written successfully
File content: Hello Node.js`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>

        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>fs module is used to work with the file system</li>
          <li>writeFile() creates and writes data to a file</li>
          <li>readFile() reads data from the file</li>
          <li>Callbacks handle asynchronous operations</li>
          <li>&quot;utf8&quot; ensures readable text output</li>
        </ul>
      </section>

    </div>
  );
}