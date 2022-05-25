
function App() {
  const name = "Code"

  // Operator
  const x = true

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h1>Hello {x ? 'Yes': 'No'}</h1>
    </div>
  );
}

export default App;
