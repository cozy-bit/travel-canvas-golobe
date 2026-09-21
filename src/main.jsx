import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted Montserrat font weights to eliminate FOUT (font twitching on reload)
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'

import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'
import { FavoritesProvider } from './context/FavoritesContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ThemeProvider>
  </StrictMode>,
)
