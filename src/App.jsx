const App = () => {
  return <div>
    <h1 className="text-red-700">Hello from basic boiler plate!</h1>
    <h1>{import.meta.env.VITE_API_KEY}</h1>
  </div>
}

export default App