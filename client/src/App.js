import useFetch from 'react-fetch-hook'

function App() {
  const { data, isLoading, error } = useFetch(
    'http://localhost:4000/api/v1/hello/messages'
  )
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="App">
      <h1>messages from backend</h1>
      {data.message.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </div>
  )
}

export default App
