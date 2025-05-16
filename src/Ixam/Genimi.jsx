import React, { useState } from 'react';
import '../Css/3.css';

const GeminiSearch = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSearch = async () => {
        if (!input.trim()) {
            setError('Please enter a valid query.');
            return;
        }

        setLoading(true);
        setError(null);
        setResponse('');

        try {
            const res = await axios.post(
                'https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5:generateText?key=AIzaSyCuUkUrhI-quVfJK6-G_tXxq0Ru7aKOMxY',
                {
                    prompt: {   
                        text: input,
                    },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            setResponse(res.data.candidates[0]?.output || 'No response from API');
        } catch (err) {
            setError('An error occurred while fetching data.');
        } finally {
            setLoading(false);
        }
    };
    
    const handleClear = () => {
        setInput('');
        setResponse('');
        setError(null);
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Gemini Search</h1>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter your query"
                className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex justify-between space-x-4">
                <button
                    onClick={handleSearch}
                    className={`flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Search'}
                </button>
                <button
                    onClick={handleClear}
                    className="flex-1 bg-gray-400 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-500 transition"
                    disabled={loading}
                >
                    Clear
                </button>
            </div>
            {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
            {response && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow">
                    <h2 className="text-xl font-semibold text-gray-700">Response:</h2>
                    <p className="text-gray-600 mt-2">{response}</p>
                </div>
            )}
        </div>
    );
};

export default GeminiSearch;