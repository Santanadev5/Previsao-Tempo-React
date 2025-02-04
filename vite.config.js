import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Previsao-Tempo-React/',  // Ajuste o caminho para o nome do seu repositório
})
