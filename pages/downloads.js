const Downloads = () => {
    return (
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-4">Download Our App</h1>
        <p className="mb-6">Get the latest version of our app below:</p>
        <a 
          href="https://example.com/download" 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Download for Windows
        </a>
        <a 
          href="https://example.com/download" 
          className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
        >
          Download for Mac
        </a>
      </div>
    );
  };
  
  export default Downloads;
  