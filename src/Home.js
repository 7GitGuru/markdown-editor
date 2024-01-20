import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Documentation from './Documentation';
import './Home.css';

const Home = () => {
  const [markdown, setMarkdown] = useState('# Hello, I am 7GitGuru!');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const goToDocumentation = () => {
    // Navigate to the GitHub documentation URL
    window.location.href = 'https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
      <div className="w-full max-w-screen-md p-8 bg-gray-900 rounded-md border border-gray-700 text-white relative">
        <button className="btn-documentation" onClick={goToDocumentation}>
         Documentation
        </button>
        <h1 className="text-2xl mb-4 text-center">Markdown Editor</h1>
        <textarea
          className="w-full p-4 mb-4 border rounded-md resize-none bg-gray-700 text-white"
          rows="15"
          cols="100"
          value={markdown}
          onChange={handleInputChange}
        />
        <hr className="my-6 border-t border-gray-600" />
        <div className="prose">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </Router>
  );
};

export default App;
