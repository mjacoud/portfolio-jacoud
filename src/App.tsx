import './App.css'

import { Navbar } from './Components/Navbar/Navbar'
import { Layout } from './Components/Layout/Layout'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import RoleModal from './Components/Portfolio/RoleModal'
import { useRoleModal } from './hooks/useRoleModal'
import { useGymModal } from './hooks/useGymModal'
import GymModal from './Components/Portfolio/GymModal'

export const App = () => {
  const [hue, setHue] = useState(localStorage.getItem('hue') || 'red')
  const [mode, setMode] = useState(localStorage.getItem('mode') ||'light')
  const [theme, setTheme] = useState(`theme__${mode}--${hue}`)
  const {
    t,
    i18n: { changeLanguage, language }
  } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState('translationEN')

  const roleModal = useRoleModal()
  const gymModal = useGymModal()

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
      {roleModal.isOpen ? <RoleModal/> : ''}
      {gymModal.isOpen ? <GymModal/> : ''}
    </>
  )
}
