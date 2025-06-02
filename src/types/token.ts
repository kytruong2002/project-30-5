export interface FilterTokens {
  __typename: string
  change24: string
  liquidity: string
  marketCap: string
  priceUSD: string
  token: Token
  volume24: string
}

export interface Token {
  __typename: string
  name: string
  symbol: string
  address: string
  networkId: number
  creatorAddress: string
  imageThumbUrl: string
}
