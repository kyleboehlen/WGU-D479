import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
import handlebars from 'vite-plugin-handlebars';
import { Mesa } from '@octamap/mesa'
export default defineConfig({
  plugins: [
    tailwindcss(),
    // handlebars({
    //   partialDirectory: resolve(__dirname, './partials'),
    // }),
    Mesa({
      'header-nav': './partials/header-nav.html',
      'island-summary': './partials/island-summary.html',
      'dining-and-food': './partials/dining-and-food.html',
      'transportation': './partials/transportation.html',
      'accommodations': './partials/accommodations.html',
      'entertainment': './partials/entertainment.html',
      'faqs': './partials/faqs.html',
      'site-map-footer': './partials/site-map-footer.html',
    })
  ]})
