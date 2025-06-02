import type { ReactNode } from 'react'
import { CopyText } from '../copyText'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Link } from 'react-router-dom'

interface IconType {
  url: string
  icon: ReactNode
}

interface TokenInfoProps {
  avatar?: string
  icons?: IconType[]
  name: string
  symbol: string
  address?: string
}

const TokenInfo: React.FC<TokenInfoProps> = ({ avatar, icons, name, symbol, address }) => {
  return (
    <div className='flex items-center gap-2'>
      <Avatar>
        <AvatarImage src={avatar} alt='avatar' />
        <AvatarFallback className='text-black'>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <span className='font-medium'>{name}</span>
        <p className='flex items-center gap-2 font-medium text-xs'>
          <span>${symbol}</span>
          {address && <CopyText text={address} size={14} />}
          {icons?.map((icon, i) => (
            <Link to={icon.url} key={i}>
              {icon.icon}
            </Link>
          ))}
        </p>
      </div>
    </div>
  )
}

export default TokenInfo
