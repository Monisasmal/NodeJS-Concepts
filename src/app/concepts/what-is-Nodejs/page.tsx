export default function WhatIsNodeJS() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          What is Node.js
        </h1>

        {/* Card Wrapper */}
        <div className="space-y-4">

          {/* Definition */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              1. Definition
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Node.js is a runtime environment that allows you to run JavaScript
              outside the browser. It is mainly used to build backend applications
              like servers and APIs.
            </p>
          </section>

          {/* When */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              2. When to Use Node.js
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Building backend/server-side applications</li>
              <li>Creating REST APIs</li>
              <li>Real-time apps (chat, live updates)</li>
              <li>Full-stack development (MERN)</li>
            </ul>
          </section>

          {/* Where */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              3. Where it is Used
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
              <li>Web servers</li>
              <li>APIs</li>
              <li>Real-time systems</li>
              <li>Microservices</li>
              <li>CLI tools</li>
            </ul>
          </section>

          {/* Why */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              4. Why Use Node.js
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-800 space-y-1">
              <li>JavaScript for both frontend & backend</li>
              <li>Fast (non-blocking)</li>
              <li>Handles multiple requests</li>
              <li>Huge npm ecosystem</li>
            </ul>
          </section>

          {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How Node.js Works</h2>
        <ul className="list-disc ml-6">
          <li>Built on Chrome V8 JavaScript Engine</li>
          <li>Uses single-threaded event loop</li>
          <li>Handles requests asynchronously</li>
          <li>Non-blocking I/O operations</li>
        </ul>
      </section>

          {/* Code */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Basic Syntax
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js");
  res.end();
});

server.listen(3000);`}
            </pre>
          </section>

          {/* Real Example */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Real Example
            </h2>

            <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api/user") {
    res.write(JSON.stringify({ name: "Manaswini", role: "Developer" }));
  } else {
    res.write("Home Page");
  }
  res.end();
});

server.listen(3000);`}
            </pre>
          </section>

          {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Fast and scalable</li>
          <li>Non-blocking architecture</li>
          <li>JavaScript everywhere</li>
          <li>Huge npm ecosystem</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Not suitable for CPU-heavy tasks</li>
          <li>Callback complexity (callback hell)</li>
          <li>Single-thread limitations</li>
        </ul>
      </section>

          {/* Interview */}
          <section className="bg-blue-50 shadow-sm rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Interview Points
            </h2>
            <ul className="list-disc ml-5 text-sm sm:text-base text-gray-900 space-y-1">
              <li>Node.js is a runtime</li>
              <li>Single-threaded event loop</li>
              <li>Non-blocking I/O</li>
              <li>Best for I/O-heavy apps</li>
            </ul>
          </section>


        </div>
      </div>
    </div>
  );
}