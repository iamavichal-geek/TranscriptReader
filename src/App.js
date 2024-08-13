import './App.css';
import TranscriptEditor from './Transcipt';

const initialTranscript = [
  { word: 'Hello', start_time: 0, duration: 500 },
  { word: 'world!', start_time: 500, duration: 700 },
  { word: 'This', start_time: 1200, duration: 300 },
  { word: 'is', start_time: 1500, duration: 200 },
  { word: 'a', start_time: 1700, duration: 100 },
  { word: 'test', start_time: 1800, duration: 400 },
  { word: 'transcript', start_time: 2200, duration: 600 },
  { word: 'for', start_time: 2800, duration: 200 },
  { word: 'playback', start_time: 3000, duration: 500 },
  { word: 'and', start_time: 3500, duration: 250 },
  { word: 'editing', start_time: 3750, duration: 800 },
  { word: 'features.', start_time: 4550, duration: 650 },
  { word: 'My', start_time: 5200, duration: 300 },
  { word: 'name', start_time: 5500, duration: 400 },
  { word: 'is', start_time: 5900, duration: 200 },
  { word: 'Avichal', start_time: 6100, duration: 500 },
  { word: 'Trivedi.', start_time: 6600, duration: 500 },
  { word: 'I', start_time: 7100, duration: 200 },
  { word: 'am', start_time: 7300, duration: 200 },
  { word: 'a', start_time: 7500, duration: 100 },
  { word: 'third', start_time: 7600, duration: 300 },
  { word: 'year', start_time: 7900, duration: 300 },
  { word: 'undergraduate', start_time: 8200, duration: 700 },
  { word: 'student', start_time: 8900, duration: 400 },
  { word: 'at', start_time: 9300, duration: 100 },
  { word: 'IIT,', start_time: 9400, duration: 300 },
  { word: 'Kharagpur.', start_time: 9700, duration: 500 },
  { word: 'I', start_time: 10200, duration: 200 },
  { word: 'am', start_time: 10400, duration: 200 },
  { word: 'passionate', start_time: 10600, duration: 600 },
  { word: 'about', start_time: 11200, duration: 300 },
  { word: 'full', start_time: 11500, duration: 200 },
  { word: 'stack', start_time: 11700, duration: 300 },
  { word: 'software', start_time: 12000, duration: 500 },
  { word: 'development', start_time: 12500, duration: 600 },
  { word: 'and', start_time: 13100, duration: 200 },
  { word: 'problem', start_time: 13300, duration: 400 },
  { word: 'solving.', start_time: 13700, duration: 600 },
];


function App() {
  return (
    <div className='App'>
      
       <TranscriptEditor initialTranscript={initialTranscript}/>
    </div>
  );
}

export default App;
