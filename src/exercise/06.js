// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputEl = React.useRef(null)
  const [userName, setUserName] = React.useState('')
  // const [error, setError] = React.useState(null)

  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  function handleSubmit(event) {
    event.preventDefault()
    // event.target.elements.userName.value
    // onSubmitUsername(inputEl.current.value)
    onSubmitUsername(userName)
  }

  function handleChange(event) {
    const value = event.target.value
    setUserName(value.toLowerCase())
    // const isValid = value === value.toLowerCase()
    // setError(isValid ? null : 'Username must be lower case')
  }
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <div role="alert" style={{color: 'red'}}>
          {error}
        </div> */}
        <label htmlFor="userName">Username:</label>
        <input
          ref={inputEl}
          id="userName"
          name="userName"
          type="text"
          onChange={handleChange}
          value={userName}
        />
      </div>
      {/* disabled={!!error} */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
