export default function CreateHTTPServerConcept() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        How to Create an HTTP Server in Node.js?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          In Node.js, an HTTP server is created using the built-in http module.
          It allows you to handle client requests and send responses over the web.
        </p>
      </section>

      {/* Steps */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Steps to Create Server
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Import http module</li>
          <li>Create server using createServer()</li>
          <li>Handle request and response</li>
          <li>Start server using listen()</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          3. Example
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

      {/* How it Works */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. How it Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Client sends request to server</li>
          <li>Server processes request</li>
          <li>Server sends response back</li>
        </ul>
      </section>

      {/* Output */}
      <section className="mb-6 bg-purple-50 border-l-4 border-purple-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Output
        </h2>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Open browser → http://localhost:3000

Output:
Hello World`}
        </pre>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Simple and lightweight</li>
          <li>No external libraries needed</li>
          <li>Good for learning backend basics</li>
          <li>Highly scalable</li>
        </ul>
      </section>

    </div>
  );
}