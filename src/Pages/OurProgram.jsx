import React, { useState, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';

const OurProgram = () => {
  const [viewer, setViewer] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/path/to/your/pdf.pdf', // Replace with the path to your PDF file
      },
      document.getElementById('viewer'),
    ).then((instance) => {
      setViewer(instance);
    });
  }, []);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onConvertClick = async () => {
    if (viewer && selectedFile) {
      const { Core } = viewer;
      const fileData = await Core.readFile(selectedFile);

      // Use fileData as needed, for example, send it to the server for conversion

      console.log('File data:', fileData);
    }
  };

  return (
    <div>
      <h1>PDF to HTML Converter</h1>
      <div>
        <label htmlFor="pdfFile">Select a PDF file: </label>
        <input type="file" id="pdfFile" accept=".pdf" onChange={onFileChange} />
      </div>
      <div id="viewer" style={{ height: '500px' }}></div>
      <button onClick={onConvertClick} disabled={!selectedFile}>
        Convert
      </button>
    </div>
  );
};

export default OurProgram;
