import { TITLE_PAGE } from '@/utils/const'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function usePageTitle(title?: string) {
  const location = useLocation()

  useEffect(() => {
    document.title = title || TITLE_PAGE[location.pathname] || 'Home'
  }, [location.pathname, title])
}
