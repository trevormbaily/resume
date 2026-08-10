import { spawn } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { preview } from 'vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(rootDir, '..')
const outputDir = path.join(projectRoot, 'exports')
const outputPdf = path.join(outputDir, 'Trevor-Baily-Resume.pdf')
const chrome =
  process.env.CHROME_PATH ??
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const server = await preview({
  root: projectRoot,
  preview: {
    host: '127.0.0.1',
    port: 4179,
    strictPort: true,
  },
})

const printUrl = 'http://127.0.0.1:4179/print.html'

await mkdir(outputDir, { recursive: true })

await new Promise((resolve, reject) => {
  const child = spawn(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--virtual-time-budget=10000',
      `--print-to-pdf=${outputPdf}`,
      printUrl,
    ],
    { stdio: 'inherit' },
  )

  child.on('error', reject)
  child.on('exit', (code) => {
    if (code === 0) resolve()
    else reject(new Error(`Chrome exited with code ${code}`))
  })
})

await server.close()
console.log(`Wrote ${outputPdf}`)
