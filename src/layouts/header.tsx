import { PATH } from '@/utils/const'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='px-4 md:px-20 border-b border-gray-200 h-[58px] flex items-center'>
      <Link to={PATH.HOME} className='text-[20px] font-bold text-primary'>
        ACW3
      </Link>
    </header>
  )
}

export default Header
