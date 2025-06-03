import { useGlobalDataContext } from '@/contexts/globalData'
import { TOP_TRENDING_QUERY } from '@/queries/token'
import { useEffect } from 'react'
import { useQuery } from 'urql'

export function useTrendingTokens(tab: string) {
  const [result] = useQuery({
    query: TOP_TRENDING_QUERY,
    variables: {
      networkId: [tab],
      rankings: [
        {
          attribute: 'trendingScore24',
          direction: 'DESC'
        }
      ],
      limit: 50
    }
  })

  const { setIsLoading } = useGlobalDataContext()
  const { data, fetching } = result

  useEffect(() => {
    setIsLoading(fetching)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching])

  return {
    listTrendingTokens: data?.filterTokens?.results || []
  }
}
