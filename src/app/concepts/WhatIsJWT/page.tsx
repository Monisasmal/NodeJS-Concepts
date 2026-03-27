export default function WhatIsJWT() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is JWT (JSON Web Token)?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          JWT (JSON Web Token) is a secure way to transmit information between
          client and server as a JSON object. It is commonly used for
          authentication and authorization.
        </p>
      </section>

      {/* Structure */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Structure of JWT
        </h2>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Header.Payload.Signature`}
        </pre>

        <ul className="list-disc ml-5 mt-2 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>Header:</b> Algorithm & token type</li>
          <li><b>Payload:</b> User data (id, email)</li>
          <li><b>Signature:</b> Security verification</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. How it Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>User logs in with credentials</li>
          <li>Server generates JWT</li>
          <li>Token is sent to client</li>
          <li>Client sends token in future requests</li>
          <li>Server verifies token</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: 1 },
  "secretKey",
  { expiresIn: "1h" }
);

console.log(token);`}
        </pre>
      </section>

      {/* Usage */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Where JWT is Used
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>User authentication</li>
          <li>Authorization (protected routes)</li>
          <li>Secure API communication</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Stateless authentication</li>
          <li>Compact and secure</li>
          <li>Works across different platforms</li>
          <li>Easy to implement</li>
        </ul>
      </section>

    </div>
  );
}