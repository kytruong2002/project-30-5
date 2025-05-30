import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'
import { Provider } from 'urql'
import graphQLClient from './config/graphQL'

function App() {
  return (
    <BrowserRouter>
      <Provider value={graphQLClient}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  )
}

export default App
