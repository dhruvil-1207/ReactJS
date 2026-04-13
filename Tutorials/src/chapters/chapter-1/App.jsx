import React from 'react'

const App = () => {
  return (
    // you can only return 1 element, so you should return everything you want to return in one single parent element 
    // <div>
    //   <h1>Hello Domsto</h1>
    //   <h2>Domsto Hello</h2>
    // </div>

    // now if you dont want to do that and want to send sort of two elements separately, then you user fragments - <> (empty tags)
    <>
      <div id="parent1">
        <h1>Hello Domsto</h1>
        <h2>Domsto Hello</h2>
      </div>
      <div id="parent2">
        <h1>Hello Domsto</h1>
        <h2>Domsto Hello</h2>
      </div>
    </>
  )
}

export default App

// function App() {
//   return <h1>Domsto</h1>
// }

// export default App