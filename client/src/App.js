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
      <ul
        style={{
          padding: '20 px 50px',
          backgroundColor: '#f4f4f4',
          textAlign: 'center',
        }}
      >
        {data.message.map((message, index) => (
          <li style={{ color: '$f1f1f1' }} key={index}>
            {message}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
