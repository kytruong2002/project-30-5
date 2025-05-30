import { Home } from '@/pages'
import Default from '@/templates/default'
import { PATH } from '@/utils/const'
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={PATH.HOME} element={<Default />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter
