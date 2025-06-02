export const shortenAddress = (address: `0x${string}` | string, startLength = 4, endLength = 4) => {
  if (address.length < 10) {
    return address
  }

  const start = address.slice(0, startLength + 2)
  const end = address.slice(-endLength)
  return `${start}...${end}`
}

export function formatCurrency(value: number): string {
  const locale = 'en-US'
  const currencyFormatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  const absValue = Math.abs(value)
  const sign = value < 0 ? '-' : ''

  if (absValue >= 1_000_000_000_000) {
    return `${sign}$${currencyFormatter.format(absValue / 1_000_000_000_000)}T`
  } else if (absValue >= 1_000_000_000) {
    return `${sign}$${currencyFormatter.format(absValue / 1_000_000_000)}B`
  } else if (absValue >= 1_000_000) {
    return `${sign}$${currencyFormatter.format(absValue / 1_000_000)}M`
  } else if (absValue >= 1_000) {
    return `${sign}$${currencyFormatter.format(absValue / 1_000)}K`
  } else {
    return `${sign}$${currencyFormatter.format(absValue)}`
  }
}
