import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function CopyText({ text, size = 16 }: { text: string; size?: number }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button onClick={handleCopy} className='text-inherit transition-all cursor-pointer' aria-label='Copy text'>
      {copied ? <Check size={size} /> : <Copy size={size} />}
    </button>
  )
}
