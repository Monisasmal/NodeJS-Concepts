export default function NodeJsHttpRequests() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        How does Node.js handle HTTP requests?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Node.js handles HTTP requests using its built-in http module.
          It creates a server that listens for incoming client requests and
          sends responses back to the client.
        </p>
      </section>

      {/* Flow */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Request Handling Flow
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Client sends HTTP request (browser, API call)</li>
          <li>Server receives request using createServer()</li>
          <li>Callback function processes request</li>
          <li>Response is sent using res.end()</li>
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

  // Request info
  console.log(req.method);
  console.log(req.url);

  // Response
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Request received");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});`}
        </pre>
      </section>

      {/* Key Objects */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          4. Key Objects
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>req (Request):</b> Contains client request data</li>
          <li><b>res (Response):</b> Used to send response to client</li>
        </ul>
      </section>

      {/* How Node Handles Multiple Requests */}
      <section className="mb-6 bg-purple-50 border-l-4 border-purple-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Handling Multiple Requests
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Uses event-driven architecture</li>
          <li>Non-blocking I/O operations</li>
          <li>Event loop handles multiple requests efficiently</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Handles multiple requests efficiently</li>
          <li>Non-blocking and fast</li>
          <li>Scalable for real-time applications</li>
          <li>Lightweight server setup</li>
        </ul>
      </section>

    </div>
  );
}