// scripts/test-scrape.mjs
// Probando simulación de Googlebot y raspado de Google Search para opiniones

import * as cheerio from 'cheerio'

// User-Agent oficial de Googlebot para saltar firewalls de Cloudflare
const GOOGLEBOT_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
}

async function testInstagramGooglebot() {
  console.log('🔄 Probando Instagram (Imginn) simulando GOOGLEBOT...')
  
  const url = 'https://imginn.com/estilo_barbaro/'
  
  try {
    const res = await fetch(url, { headers: GOOGLEBOT_HEADERS })
    console.log(`  Status: ${res.status}`)
    if (res.ok) {
      const html = await res.text()
      const $ = cheerio.load(html)
      
      const post = $('.item').first()
      if (post.length > 0) {
        console.log('  🎉 Instagram raspado con ÉXITO en Imginn simulando Googlebot!')
        console.log('  Caption:', post.find('.desc').text().trim().substring(0, 100))
        return true
      } else {
        console.log('  ⚠ HTML obtenido, pero no se encontró la cuadrícula. Googlebot fue detectado o imginn requiere JS.')
      }
    }
  } catch (e) {
    console.log(`  ❌ Error con Imginn: ${e.message}`)
  }
  return false
}

async function testInstagramPicukiGooglebot() {
  console.log('🔄 Probando Instagram (Picuki) simulando GOOGLEBOT...')
  
  const url = 'https://www.picuki.com/profile/estilo_barbaro'
  
  try {
    const res = await fetch(url, { headers: GOOGLEBOT_HEADERS })
    console.log(`  Status: ${res.status}`)
    if (res.ok) {
      const html = await res.text()
      const $ = cheerio.load(html)
      
      const post = $('.box-photo').first()
      if (post.length > 0) {
        console.log('  🎉 Instagram raspado con ÉXITO en Picuki simulando Googlebot!')
        console.log('  Caption:', post.find('.photo-description').text().trim().substring(0, 100))
        return true
      } else {
        console.log('  ⚠ HTML obtenido, pero no se encontró la cuadrícula en Picuki.')
      }
    }
  } catch (e) {
    console.log(`  ❌ Error con Picuki: ${e.message}`)
  }
  return false
}

async function testGoogleSearchReviews() {
  console.log('🔄 Probando raspado de Google Search para opiniones de Estilo Bárbaro Huancayo...')
  
  // Buscar en Google con headers de navegador
  const url = 'https://www.google.com/search?q=Estilo+B%C3%A1rbaro+Huancayo&hl=es&gl=pe'
  
  try {
    const res = await fetch(url, { headers: GOOGLEBOT_HEADERS })
    console.log(`  Status: ${res.status}`)
    if (res.ok) {
      const html = await res.text()
      const $ = cheerio.load(html)
      
      // Buscar elementos de opiniones. Google Search suele inyectar la calificación "4.9" o "5.0" y opiniones.
      // Las opiniones en la tarjeta lateral de Google Search se inyectan en divs con clase específica
      // O podemos buscar frases que contengan opiniones reales.
      const text = $('body').text()
      
      const ratingMatch = text.match(/Calificación:\s*([0-9.,]+)/)
      console.log(`  ¿Calificación encontrada?: ${ratingMatch ? ratingMatch[0] : 'NO'}`)
      
      // Buscar opiniones destacadas. A veces se muestran textos entre comillas en la ficha de Google.
      const reviews = []
      $('span, div').each((i, el) => {
        const txt = $(el).text().trim()
        if (txt.startsWith('"') && txt.endsWith('"') && txt.length > 30 && txt.length < 250) {
          reviews.push(txt)
        }
      })
      
      console.log(`  Opiniones entrecomilladas encontradas en la búsqueda: ${reviews.length}`)
      if (reviews.length > 0) {
        reviews.slice(0, 3).forEach((r, idx) => console.log(`    [${idx + 1}] ${r}`))
        return true
      }
    }
  } catch (e) {
    console.log(`  ❌ Error en Google Search: ${e.message}`)
  }
  return false
}

async function run() {
  await testInstagramGooglebot()
  console.log('------------------')
  await testInstagramPicukiGooglebot()
  console.log('------------------')
  await testGoogleSearchReviews()
}

run()
