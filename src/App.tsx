import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'
import { Provider } from 'urql'
import queryClient from './utils/query-client'

function App() {
  return (
    <BrowserRouter>
      <Provider value={queryClient}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  )
}

export default App
