import './App.css';

function App() {
  const play = () => {
    console.log("hi");
    console.log(document.getElementById('selCount').value);
  }
  return (
    <div id="wrap">
      <div className='nav_bar'>
        <h1>동행복권 - lotto 자동번호</h1>
      </div>
      <div className='selArea'>
        <h2 id="questionCount">구매 개수</h2>
        <div>
            <select id="selCount">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
      </div>
      <div className='numArea'>
        <button onClick={() => play()}>행운 번호 조회</button>
      </div>
    </div>
  );
}

export default App;
