import React, { useState } from 'react';

const TranscriptEditor = ({ initialTranscript }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [edit, setEdit] = useState(false);
  const [inputEditValue, setInputEditValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const playTranscript = () => {
    setIsPlaying(true);
    const start = new Date().getTime();
    const timer = setInterval(() => {
      const elapsedTime = new Date().getTime() - start;
      setCurrentTime(elapsedTime);
    }, 100);

    setTimeout(() => {
      clearInterval(timer);
      setIsPlaying(false);
      setCurrentTime(0);
    }, initialTranscript[initialTranscript.length - 1].start_time + initialTranscript[initialTranscript.length - 1].duration);
  };

  const handleWordClick = (index) => {
    setEdit(true);
    setEditIndex(index);
    setInputEditValue(initialTranscript[index].word);
  };

  const handleInputChange = (event) => {
    setInputEditValue(event.target.value);
  };

  const handleSetWord = () => {
    if (editIndex !== null) {
      initialTranscript[editIndex].word = inputEditValue;
      setEdit(false); 
      setCurrentTime(currentTime); 
    }
  };

 

  return (
    <div className="p-4 max-w-2xl mx-auto mt-8">
      <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg shadow-md mt-4">
        <h2 className="text-2xl font-bold text-blue-500 font-comfortaa">Transcript Reader/Editor</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
        <div className="flex flex-wrap mb-4">
          {initialTranscript.map((wordObj, index) => (
            <span
              key={index}
              onClick={() => handleWordClick(index)}
              className={`mr-2 p-1 ${
                currentTime >= wordObj.start_time && currentTime < wordObj.start_time + wordObj.duration
                  ? 'bg-blue-100'
                  : ''
              } cursor-pointer font-comfortaa rounded-lg`}
            >
              {wordObj.word}
            </span>
          ))}
        </div>
        <button
          onClick={playTranscript}
          disabled={isPlaying}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 font-comfortaa"
        >
          {isPlaying ? 'Playing...' : 'Play'}
        </button>
        {edit ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
            <div className="relative w-80 p-4 bg-gray-100 rounded-lg shadow-md">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
                onClick={() => setEdit(false)}
              >
                &times;
              </button>
              <input
                value={inputEditValue}
                onChange={handleInputChange}
                style={{ fontFamily: 'Comfortaa' }}
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg font-comfortaa mt-6"
                placeholder="Enter text"
              />
              <div className="flex justify-between mt-8">
                <button
                  onClick={handleSetWord}
                  className="bg-blue-500 mx-auto text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-comfortaa"
                > Set Word</button>
                {/* <button
                  onClick={handleSetAll}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-comfortaa"
                >
                  Set All
                </button> */}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TranscriptEditor;
