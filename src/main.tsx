import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalDataProvider } from './contexts/globalData.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalDataProvider>
      <App />
    </GlobalDataProvider>
  </StrictMode>
)
