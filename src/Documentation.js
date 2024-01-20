// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Documentation = () => {
//   const [documentation, setDocumentation] = useState('');

//   useEffect(() => {
//     // Load the documentation content from documentation.md
//     fetch(process.env.PUBLIC_URL + './documentation.txt')
//       .then((response) => response.text())
//       .then((text) => setDocumentation(text))
//       .catch((error) => console.error('Error loading documentation:', error));
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
//       <div className="w-full max-w-screen-md p-8 bg-gray-900 rounded-md border border-gray-700 text-white relative">
//         <Link to="/" className="btn-back">
//           Back
//         </Link>
//         <h1 className="text-2xl mb-4 text-center">Markdown Documentation</h1>
//         <div dangerouslySetInnerHTML={{ __html: documentation }} />
//       </div>
//     </div>
//   );
// };

// export default Documentation;
