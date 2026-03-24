export default function CreateHttpServer() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Create a Simple HTTP Server
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Create a simple HTTP server in Node.js that listens on port 3000 and
          returns &quot;Hello World&quot; when accessed in the browser.
        </p>
      </section>

      {/* Code Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Coding Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});`}
        </pre>
      </section>

      {/* Preview */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Preview
        </h2>

        <p className="text-sm sm:text-base text-gray-700">
          Open your browser and go to:
        </p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm mt-2">
{`http://localhost:3000`}
        </pre>

        <p className="text-sm text-gray-600 mt-2">
          👉 Output: Hello World
        </p>
      </section>

      {/* Explanation */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>

        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>http module is used to create the server</li>
          <li>createServer() handles request and response</li>
          <li>writeHead() sets status code and headers</li>
          <li>end() sends response to client</li>
          <li>listen() runs server on port 3000</li>
        </ul>
      </section>

    </div>
  );
}