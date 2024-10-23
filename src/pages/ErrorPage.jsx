const ErrorPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-lg text-gray-700 mt-4">Oops! Page not found.</p>
        <a
          href="/"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back to Home
        </a>
      </div>
    );
  };
  
  export default ErrorPage;
  