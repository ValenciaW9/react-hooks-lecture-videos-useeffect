const [time, setTime] = useState(new Date());

useEffect(() => {
  
  const intervalId = setInterval(() => {
    console.log("running")
    setTime(new Date());
  }, 1000);
  
  return function() {
    console.log("cleanup")
    clearInterval(intervalId)
  }
  
}, []);

return <div>{time.toString()}</div>;


function App() {
const [showClock, setShowClock] = useState(true);

return (
  <div>
    {showClock ? <Clock /> : null}
    <button onClick={() => setShowClock(false)}>Hide Clock</button>
  </div>
);
} 

ReactDOM.render(<App />, document.getElementById('root'));