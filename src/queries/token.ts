export const TOP_TRENDING_QUERY = `
query GetTrendingTokens($filters: TokenFilters, $rankings: [TokenRanking!], $limit: Int) {
  filterTokens(
    filters: $filters
    rankings: $rankings
    limit: $limit
  ) {
    results {
      token {
        name
        symbol
        address
        networkId
        creatorAddress 
        imageThumbUrl
      }
      priceUSD
      volume24
      liquidity
      marketCap
      change24
    }
  }
}
`
