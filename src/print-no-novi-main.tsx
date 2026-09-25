import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrintResume } from './PrintResume'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrintResume excludeNovi={true} />
  </StrictMode>,
)
