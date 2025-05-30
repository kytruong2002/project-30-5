import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface TokenInfoProps {
  avatar?: string
  iconCoppy?: string
  name: string
  sysmbol: string
}

const TokenInfo: React.FC<TokenInfoProps> = ({ avatar, iconCoppy, name, sysmbol }) => {
  return (
    <div className='flex items-center gap-2'>
      <Avatar>
        <AvatarImage src={avatar} alt='avatar' />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <span className='font-medium'>{name}</span>
        <p className='flex items-center gap-2 font-medium text-xs'>
          <span>${sysmbol}</span>
          <span>
            <img src={iconCoppy} alt='Icon representing Coppy' />
          </span>
        </p>
      </div>
    </div>
  )
}

export default TokenInfo
