import { useState, useCallback } from 'react'

export function useCopyToClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copy = useCallback(async (text: string, id?: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setCopiedId(id || null)
      setTimeout(() => {
        setCopied(false)
        setCopiedId(null)
      }, timeout)
      return true
    } catch {
      // Fallback
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.left = '-9999px'
      document.body.appendChild(ta)
      ta.focus()
      ta.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setCopiedId(id || null)
        setTimeout(() => {
          setCopied(false)
          setCopiedId(null)
        }, timeout)
        return true
      } catch {
        return false
      } finally {
        document.body.removeChild(ta)
      }
    }
  }, [timeout])

  return { copy, copied, copiedId }
}
