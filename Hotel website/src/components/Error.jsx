import errorimg from '../image/errorimg.jpeg';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <img src={errorimg} alt="Error" className="w-full max-w-sm h-auto object-contain mb-8" />
      <h1 className="text-center text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-center text-xl mb-8">Don't panic, our team of highly trained monkeys is working on it!</p>
      <button
        onClick={() => window.location.href = '/'}
        className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
}

export default Error;
