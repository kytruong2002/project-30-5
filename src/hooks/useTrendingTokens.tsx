import { TOP_TRENDING_QUERY } from '@/queries/token'
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
  const { data, fetching } = result

  return {
    listTrendingTokens: data?.filterTokens?.results || [],
    isLoading: fetching
  }
}
