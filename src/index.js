import React from 'react'
import CreateRoot from 'react-dom'
import App from './App'


const Index = () => {
  return (
    <div>
      <App/>
      
    </div>
  )
}


CreateRoot.render( <Index/>, document.getElementById('root'))


