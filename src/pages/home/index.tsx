import { Button } from '@/components/ui/button'
import IconX from '@/assets/icons/X.png'
import IconCoppy from '@/assets/icons/coppy.png'
import IconCoppySolid from '@/assets/icons/coppy-solid.png'
import IconDiscount from '@/assets/icons/discount.png'
import IconTop from '@/assets/icons/top.png'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import avatar from '@/assets/avatar/DUPE.png'
import TokenInfo from '@/components/tokenInfo'

const Home = () => {
  return (
    <>
      <section className='flex justify-center items-center flex-col pt-10 pb-6'>
        <h1 className='font-medium text-5xl'>ACW3 Leaderboard</h1>
        <p className='mb-4 mt-2 text-xl'>
          Discover the top cults on <span className='text-[#009E99] font-bold'>ACW3</span>
        </p>
        <Button
          variant='outline'
          className='flex items-center justify-center gap-1 text-[#009E99] border-[#009E99] hover:text-[#009E99] hover:bg-white'
        >
          <span>
            <img src={IconX} alt='Icon representing X' />
          </span>
          Made by ACW3
        </Button>
        <Button className='flex items-center justify-center gap-2 my-3 rounded-2xl bg-[#009E99] text-white hover:bg-[#009E99] font-bold px-6 py-2'>
          This dashboard has been coined <span>ACW3</span>{' '}
          <span>
            <img src={IconCoppy} alt='Icon representing Coppy' />
          </span>
        </Button>
        <p className='flex justify-between items-center gap-5 text-xs'>
          <span>
            <span className='font-bold'>MC: </span>$162.77K
          </span>
          <span className='flex items-center gap-1 text-[#FF6467]'>
            <span>
              <img src={IconDiscount} alt='Icon representing discount' />
            </span>
            <span className='font-bold'>1h: </span>-3.34%
          </span>
          <span>
            <span className='font-bold'>24h Vol: </span>$8.55K
          </span>
        </p>
      </section>
      <section className='border border-[#009E99] rounded-2xl p-6 mt-4'>
        <div className='flex justify-between items-center'>
          <p className='flex items-center gap-2 font-medium text-lg'>
            <span>
              <img src={IconTop} alt='Icon representing top' />
            </span>{' '}
            Top 50 Creators
          </p>
          <div>
            <Button className='rounded-lg bg-[#009E99] text-white hover:bg-[#009E99] font-medium px-2 py-1 text-sm'>
              BNB Chain
            </Button>
            <Button variant='ghost' className='px-2 py-1 rounded-lg text-sm font-medium'>
              Base
            </Button>
          </div>
        </div>
        <Table className='text-sm mt-4 text-center'>
          <TableHeader className='bg-[rgba(0,158,153,0.1)]'>
            <TableRow>
              <TableHead className='text-[rgba(0,112,110,1)] p-4 w-1/10 text-center'>Rank</TableHead>
              <TableHead className='text-[rgba(0,112,110,1)] p-4 text-left'>Token</TableHead>
              <TableHead className='text-[rgba(0,112,110,1)] p-4 w-1/10 text-center'>Creator</TableHead>
              <TableHead className='text-[rgba(0,112,110,1)] p-4 w-1/10 text-center'>24h Chg</TableHead>
              <TableHead className='text-[rgba(0,112,110,1)] p-4 w-1/10 text-center'>Market Cap</TableHead>
              <TableHead className='text-[rgba(0,112,110,1)] p-4 w-1/10 text-center'>Volume (24h)</TableHead>
              <TableHead className='text-[rgba(0,112,110,1)] p-4 w-1/10 text-right'>Token Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 9 }, (_, i) => (
              <TableRow key={i}>
                <TableCell className='font-medium text-[#787575] p-4'>#{i + 1}</TableCell>
                <TableCell className='p-4'>
                  <TokenInfo name='promptbidder' sysmbol='DUPE' avatar={avatar} iconCoppy={IconCoppySolid} />
                </TableCell>
                <TableCell className='p-4'>N/A</TableCell>
                <TableCell className='text-[#34C759] p-4'>+24%</TableCell>
                <TableCell className='p-4'>$32.88M</TableCell>
                <TableCell className='p-4'>$4.31M</TableCell>
                <TableCell className='text-right p-4'>$0.032878</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className='bg-[rgba(0,158,153,1)] text-white'>
            <TableRow>
              <TableCell>#10</TableCell>
              <TableCell>
                <TokenInfo name='promptbidder' sysmbol='DUPE' avatar={avatar} iconCoppy={IconCoppy} />
              </TableCell>
              <TableCell>N/A</TableCell>
              <TableCell className='text-[#34C759]'>+24%</TableCell>
              <TableCell>$32.88M</TableCell>
              <TableCell>$4.31M</TableCell>
              <TableCell>$0.032878</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
    </>
  )
}

export default Home
