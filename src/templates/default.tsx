import Header from '@/layouts/header'
import { Outlet } from 'react-router-dom'

const Default = () => {
  return (
    <>
      <Header />
      <main className='px-20 py-5'>
        <Outlet />
      </main>
    </>
  )
}

export default Default
