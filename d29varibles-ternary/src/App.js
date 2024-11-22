import logo from './logo.svg';
import './App.css';
import MarkSheet from './components/MarkSheet';

function App() {
  return (
    <div className="App">
     <div>
      <h1>10th MarkSheet Lists</h1>
     <MarkSheet studentName="saheb" telMarks="30"  hinMarks="80" engMarks="80" matMarks="80" sciMarks="80" socMarks="80"/>
     <MarkSheet studentName="Mahendra" telMarks="60"  hinMarks="80" engMarks="80" matMarks="80" sciMarks="80" socMarks="80"/>
     <MarkSheet studentName="karthik" telMarks="80"  hinMarks="8" engMarks="80" matMarks="80" sciMarks="80" socMarks="80"/>
     </div>


    </div>
  );
}

export default App;
