import { defineConfig } from 'vite'
import dns from 'node:dns'
import {PORT_FRONT} from "../config.js"
dns.setDefaultResultOrder('verbatim')



export default defineConfig({
  server: {
    port: PORT_FRONT || 3232
  }
})