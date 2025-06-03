import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import TokenInfo from '@/components/tokenInfo'
import TableHeadCustom from '@/pages/home/tableHeadCustom'
import usePageTitle from '@/hooks/usePageTitle'
import { PATH } from '@/utils/const'
import { shortenAddress, formatCurrency } from '@/utils/helpers'
import type { FilterTokens } from '@/types/token'
import IconX from '@/assets/icons/X.png'
import IconDiscount from '@/assets/icons/discount.png'
import IconTop from '@/assets/icons/top.png'
import { Copy } from 'lucide-react'
import { CopyText } from '@/components/copyText'
import { useTrendingTokens } from '@/hooks/useTrendingTokens'

interface TokenTable {
  rank: number
  name: string
  symbol: string
  avatar: string
  creator: string
  price: string
  marketCap: string
  volume24h: string
  key: string
  change24: string
  address: string
}

const Home = () => {
  usePageTitle()

  const [searchParams] = useSearchParams()
  const tab = (searchParams.get('tab') ?? 'bsc').trim().toLowerCase()
  const { listTrendingTokens } = useTrendingTokens(tab)

  const dataTable: TokenTable[] = useMemo(() => {
    return listTrendingTokens.map((item: FilterTokens, index: number) => ({
      rank: index + 1,
      name: item.token.name,
      symbol: item.token.symbol,
      avatar: item.token.imageThumbUrl,
      creator: item.token.creatorAddress,
      price: formatCurrency(+item.priceUSD),
      marketCap: formatCurrency(+item.marketCap),
      volume24h: formatCurrency(+item.volume24),
      key: `${item.token.address}:${item.token.networkId}`,
      change24: parseFloat(item.change24).toFixed(6),
      address: item.token.address
    }))
  }, [listTrendingTokens])

  return (
    <>
      <section className='flex flex-col items-center justify-center pt-10 pb-6'>
        <h1 className='text-5xl font-medium'>ACW3 Leaderboard</h1>
        <p className='mt-2 mb-4 text-xl'>
          Discover the top cults on <span className='font-bold text-primary'>ACW3</span>
        </p>
        <Button
          variant='outline'
          className='flex items-center justify-center gap-1 border-primary text-primary hover:bg-white hover:text-primary'
        >
          <img src={IconX} alt='Icon X' />
          Made by ACW3
        </Button>
        <Button className='my-3 flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-2 font-bold text-white hover:bg-primary'>
          This dashboard has been coined <span>ACW3</span>
          <Copy />
        </Button>
        <p className='flex items-center justify-between gap-5 text-xs'>
          <span>
            <span className='font-bold'>MC: </span>$162.77K
          </span>
          <span className='flex items-center gap-1 text-[#FF6467]'>
            <img src={IconDiscount} alt='Discount icon' />
            <span className='font-bold'>1h: </span>-3.34%
          </span>
          <span>
            <span className='font-bold'>24h Vol: </span>$8.55K
          </span>
        </p>
      </section>

      <section className='mt-4 rounded-2xl border border-primary p-6'>
        <div className='flex items-center justify-between'>
          <p className='flex items-center gap-2 text-lg font-medium'>
            <img src={IconTop} alt='Top icon' />
            Top 50 Creators
          </p>
          <div className='flex gap-2'>
            <Link to={PATH.HOME + '?tab=bsc'}>
              <Button
                variant={tab === 'bsc' ? 'default' : 'ghost'}
                className='rounded-lg px-2 py-1 text-sm font-medium'
              >
                BNB Chain
              </Button>
            </Link>
            <Link to={PATH.HOME + '?tab=base'}>
              <Button
                variant={tab === 'base' ? 'default' : 'ghost'}
                className='rounded-lg px-3 py-1 text-sm font-medium'
              >
                Base
              </Button>
            </Link>
          </div>
        </div>

        <div className='relative mt-4 max-h-[754px] overflow-y-auto'>
          <Table className='text-center text-sm'>
            <TableHeader className='sticky top-0 z-10 bg-white'>
              <TableRow className='h-[54px] bg-[rgba(0,158,153,0.1)] hover:bg-[rgba(0,158,153,0.1)]'>
                <TableHeadCustom text='Rank' />
                <TableHeadCustom text='Token' position='left' />
                <TableHeadCustom text='Creator' />
                <TableHeadCustom text='24h Chg' />
                <TableHeadCustom text='Market Cap' />
                <TableHeadCustom text='Volume (24h)' />
                <TableHeadCustom text='Token Price' />
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataTable.map((token) => (
                <TableRow key={token.key} className='h-[70px]'>
                  <TableCell className='p-4 font-medium text-[#787575]'>#{token.rank}</TableCell>
                  <TableCell className='p-4'>
                    <TokenInfo name={token.name} symbol={token.symbol} avatar={token.avatar} address={token.address} />
                  </TableCell>
                  <TableCell className='p-4'>
                    {token.creator ? (
                      <span className='flex items-center justify-center gap-1'>
                        {shortenAddress(token.creator)} <CopyText text={token.creator} />
                      </span>
                    ) : (
                      'N/A'
                    )}
                  </TableCell>
                  <TableCell className={`p-4 ${+token.change24 < 0 ? 'text-[#FF6467]' : 'text-[#34C759]'}`}>
                    {token.change24}%
                  </TableCell>
                  <TableCell className='p-4'>{token.marketCap}</TableCell>
                  <TableCell className='p-4'>{token.volume24h}</TableCell>
                  <TableCell className='p-4'>{token.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  )
}

export default Home
