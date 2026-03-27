import Link from "next/link";

const concept = [
     {name: "What is Node js?", path:"/concepts/what-is-Nodejs"},
     {name: "Difference Between Node Vs BrowserJS?", path:"/concepts/NodeVsBrowserJS"}, 
     {name: "What is V8 Engine?", path:"/concepts/WhatIsV8Engine"},
     {name: "Is Node.js Single-threaded or Multi-threaded??", path:"/concepts/SingleOrMultiThreaded"},
     {name: "How does Node.js handle Concurrency?", path:"/concepts/NodeConcurrency"},
     {name: "What is Non-blocking I/O?", path:"/concepts/NonBlockingIO"},
     {name: "What is libuv??", path:"/concepts/libuv"},
     {name: "What is Event Loop??", path:"/concepts/WhatIsEventLoop"},
     {name: "What is Event Lopp Phase?", path:"/concepts/EventLoopPhases"},
     {name: "Difference between setTimeout and setImmediate?", path:"/concepts/SetTimeoutVsSetImmediate"},
     {name: "Difference between process.nextTick and setImmediate?", path:"/concepts/NextTickVsSetImmediate"},
     {name: "What are Callback?", path:"/concepts/WhatAreCallbacks"},
     {name: "What are Callback Hell?", path:"/concepts/WhatIsCallbackHell"},
     {name: "What are Promises?", path:"/concepts/WhatArePromises"},
     {name: "What are PromiseVsAsyncAwait?", path:"/concepts/PromiseVsAsyncAwait"},
     {name: "What are MicrotaskVsMacrotask?", path:"/concepts/MicrotaskVsMacrotask"},
     {name: "What are Modules?", path:"/concepts/WhatAreModules"},
     {name: "Difference between CommonJS vs ES Modules?", path:"/concepts/CommonJSvsESModules"},
     {name: "What are Module Export Vs Export?", path:"/concepts/ModuleExportsVsExports"},
     {name: "Difference between require and import?", path:"/concepts/RequireVsImport"},
     {name: "How to Read Files in Node.js??", path:"/concepts/HowToReadFiles"},
     {name: "How to Write Files in Node.js??", path:"/concepts/HowToWriteFiles"},
     {name: "Difference between Sync and Async File Methods?", path:"/concepts/SyncVsAsyncFileMethods"},
     {name: "What is a Stream in Node.js?", path:"/concepts/WhatIsStream"},
     {name: "What are type of Stream in Node.js?", path:"/concepts/TypesOfStreams"},
     {name: "What is a Piping in stream?", path:"/concepts/WhatIsPiping"},
     {name: "What is Buffer?", path:"/concepts/WhatIsBuffer"},
     {name: "Type of Error in nodejs?", path:"/concepts/TypesOfErrors"},
     {name: "How does try/catch work with async/await?", path:"/concepts/TryCatchAsyncAwait"},
     {name: "How to Handle Async Errors in Node.js?", path:"/concepts/HandleAsyncErrors"},
     {name: "How to Create an HTTP Server in Node.js?", path:"/concepts/CreateHTTPServerConcept"},
     {name: "What is REST API??", path:"/concepts/WhatIsRestAPI"},
     {name: "How does Node.js handle HTTP requests??", path:"/concepts/NodeJsHttpRequests"},
     {name: "What is CORS?", path:"/concepts/WhatIsCROS"},
];

export default function Concepts(){
    
    return(
    
        <section>
         <h1 className="text-3xl font-bold m-8 text-blue-600">Nodejs Concepts</h1>
         <ul className="grid gap-4 sm:grid-cols-3 m-12">
        {concept.map(c => (
          <li key={c.name} className="bg-blue-50 p-4 rounded shadow">
            <Link href={c.path} className="font-semibold">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
      </section>
      
    )
}