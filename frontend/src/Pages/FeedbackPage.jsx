import React, { useState } from 'react';
import feedback from "../assets/feedback.jpeg";
import { HomeIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';  
const FeedbackPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }
    setSubmittedName(name);

    setTimeout(() => {
      setFeedbackSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setError('');
    }, 1000);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen relative"
      style={{
        backgroundImage: `url(${feedback})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
      }}
    >
     
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>

     
      <div className="absolute top-4 left-4">
      <Link to="/user"> 
        <button
          className="text-white p-2 rounded-full bg-gray-800 bold hover:bg-gray-600 transition duration-300"
         
        >
          <HomeIcon className="w-6 h-6" />
        </button>
        </Link>
      </div>

      <div className="relative z-10 w-full max-w-2xl p-8">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          We'd Love to Hear About Your Experience!
        </h2>

        {feedbackSubmitted ? (
          <div className="text-center bg-green-100 text-green-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Thank you for your feedback, {submittedName}!</h3>
            <p className="mt-2">We value your input and are committed to improving our services.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 bg-opacity-80 p-8 rounded-lg shadow-lg">
            <div className="space-y-4">
              <label htmlFor="name" className="block text-lg font-semibold text-white">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="email" className="block text-lg font-semibold text-white">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="message" className="block text-lg font-semibold text-white">Your Feedback</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please share your experience or suggestions"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            {/* Updated Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-gray-600 to-gray-400 text-white font-semibold rounded-xl shadow-lg hover:from-gray-500 hover:to-gray-300 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
