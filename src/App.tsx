import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'
import { Provider } from 'urql'
import queryClient from './utils/query-client'
import { useGlobalDataContext } from './contexts/globalData'
import Loading from './components/loading'

function App() {
  const { isLoading } = useGlobalDataContext()

  return (
    <BrowserRouter>
      <Provider value={queryClient}>
        <AppRouter />
        {isLoading && <Loading />}
      </Provider>
    </BrowserRouter>
  )
}

export default App
