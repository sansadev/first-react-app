//Math.random();

function Button() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter+1);
  return (
    <button onClick={handleClick}>
      +1
    </button>);
}

//Display component

function Display() {
  return (
  <div> ...concept typo
    </div>
  );
}

function App() {
  return (
   <div>
    <Button />
    <Display />
</div>
  )

}

ReactDOM.render(
  App()
,

document.getElementById('mountNode'),
  );
