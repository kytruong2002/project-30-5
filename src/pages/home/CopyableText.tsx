import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function CopyableText({ text, copyText }: { text: string; copyText?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(copyText || text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <span className='inline-flex items-center gap-2 cursor-pointer group select-text'>
      <span>{text}</span>
      <button
        onClick={handleCopy}
        className='text-muted-foreground hover:text-foreground transition-all'
        aria-label='Copy text'
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </span>
  )
}
