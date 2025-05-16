import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Navbar />
            <div className="mt-10 p-8 bg-white rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    Welcome to Our Service!
                </h1>
                <p className="text-gray-600 mb-6">
                    Discover amazing features and enjoy a seamless experience.
                </p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Home;