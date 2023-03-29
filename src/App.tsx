import './App.css'

import { Navbar } from './Components/Navbar/Navbar'
import { Layout } from './Components/Layout/Layout'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const App = () => {
  const [hue, setHue] = useState('red')
  const [mode, setMode] = useState('light')
  const [theme, setTheme] = useState(`theme__${mode}--${hue}`)
  const {
    t,
    i18n: { changeLanguage, language }
  } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState('translationEN')

  useEffect(() => {
    setTheme(`theme__${mode}--${hue}`)
    document.body.className = theme
  }, [theme, hue, mode])

  return (
    <>
      <Navbar
        setTheme={setTheme}
        theme={theme}
        hue={hue}
        setHue={setHue}
        mode={mode}
        setMode={setMode}
        currentLanguage={currentLanguage}
        changeLanguage={changeLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <Layout theme={theme} hue={hue} currentLanguage={currentLanguage} />
    </>
  )
}
