import React, { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false)

  return (
    <Component {...pageProps} dark={dark} setDark={setDark} />
  )
}

export default MyApp
