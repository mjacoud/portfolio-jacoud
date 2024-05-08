import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../App.css'
import { themeProps } from '../../types/types'

export const Navbar = ({
  setHue,
  mode,
  setMode,
  currentLanguage,
  changeLanguage,
  setCurrentLanguage
}: themeProps) => {
  const { t } = useTranslation(currentLanguage)
  

  const [language, setLanguage] = useState(localStorage.getItem('language')||'nav__button--english')

  const [isSectionMenuOpen, setIsSectionMenuOpen] = useState(
    'nav__sectionMenu--close'
  )

  const [scrollClass, setScrollClass] = useState('header')

  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState('nav__settingsMenu--close')


  const handleSectionMenu = () => {
    if (isSectionMenuOpen === 'nav__sectionMenu--open') {
      setIsSectionMenuOpen('nav__sectionMenu--close')
    } else {
      setIsSettingsMenuOpen('nav__settingsMenu--close')
      setIsSectionMenuOpen('nav__sectionMenu--open')
    }
  }

  const handleSettingsMenu = () => {
    if (isSettingsMenuOpen === 'nav__settingsMenu--open') {
      setIsSettingsMenuOpen('nav__settingsMenu--close')
    } else {
      setIsSectionMenuOpen('nav__sectionMenu--close')
      setIsSettingsMenuOpen('nav__settingsMenu--open')
    }
  }

  const handleMode = () => {
    if (mode == 'light') {
      setMode('dark')
      localStorage.setItem('mode','dark')
    } else {
      setMode(`light`)
      localStorage.setItem('mode','light')
    }
  }

  const handleLanguage = () => {
    if (language === 'nav__button--portuguese') {
      setLanguage('nav__button--english nav__button--animation')
      changeLanguage('en')
      setCurrentLanguage('translationEN')
      setTimeout(() => {
        setLanguage('nav__button--english')
        localStorage.setItem('language','nav__button--english')
      }, 1000)
    }
    if (language === 'nav__button--english') {
      setLanguage('nav__button--portuguese nav__button--animation')
      changeLanguage('br')
      setCurrentLanguage('translationBR')
      setTimeout(() => {
        setLanguage('nav__button--portuguese')
        localStorage.setItem('language','nav__button--portuguese')
      }, 1000)
    }
  }

  useEffect(() => {
    const handleScroll = (e: Event) => {
      window.scrollY <= 100
        ? setScrollClass('header')
        : setScrollClass(`header scroll__${mode}--header`)
    }
    window.addEventListener('scroll', handleScroll)
  }, [scrollClass])

  return (
    <>
      <header className={scrollClass}>
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Matheus Jacoud
          </a>
          <a href="#" className="nav__logo--mini">
            MJ
          </a>
          <div className={isSectionMenuOpen}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="uil uil-estate"></i> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user-circle"></i> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt"></i> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-briefcase-alt"></i> Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-envelope"></i> Contact
                </a>
              </li>
            </ul>
          </div>

          <div className={isSettingsMenuOpen}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <div
                  className="nav__color--red"
                  onClick={() => {
                  setHue('red')
                  localStorage.setItem('hue','red')}
                  }
                ></div>
              </li>

              <li className="nav__item">
                <div
                  className="nav__color--green"
                  onClick={() => {
                    setHue('green')
                    localStorage.setItem('hue','green')}
                    }
                ></div>
              </li>

              <li className="nav__item">
                <div
                  className="nav__color--purple"
                  onClick={() => {
                    setHue('purple')
                    localStorage.setItem('hue','purple')}
                    }
                ></div>
              </li>

              <li className="nav__item">
                <div
                  className="nav__color--blue"
                  onClick={() => {
                    setHue('blue')
                    localStorage.setItem('hue','blue')}
                    }
                ></div>
              </li>

              <li className="nav__item">
                <div
                  className="nav__color--orange"
                  onClick={() => {
                    setHue('orange')
                    localStorage.setItem('hue','orange')}
                    }
                ></div>
              </li>

              <li className="nav__item">
                <div
                  className="nav__color--yellow"
                  onClick={() => {
                    setHue('yellow')
                    localStorage.setItem('hue','yellow')}
                    }
                ></div>
              </li>
            </ul>
          </div>

          <div
            className={
              isSectionMenuOpen == 'nav__sectionMenu--open'
                ? 'nav__menu active'
                : 'nav__menu'
            }
            onClick={handleSectionMenu}
          >
            <svg
              className="burger"
              version="1.1"
              height="100"
              width="100"
              viewBox="0 0 100 100"
            >
              <path className="line line1" d="M 30,35 H 70 " />
              <path className="line line2" d="M 50,50 H 30 L 34,32" />
              <path className="line line3" d="M 50,50 H 70 L 66,68" />
              <path className="line line4" d="M 30,65 H 70 " />
            </svg>
            <svg
              className="x"
              version="1.1"
              height="100"
              width="100"
              viewBox="0 0 100 100"
            >
              <path className="line" d="M 34,32 L 66,68" />
              <path className="line" d="M 66,32 L 34,68" />
            </svg>
          </div>
          <i className="uil uil-setting" onClick={handleSettingsMenu}></i>
          <input
            className="nav__button--mode"
            type="checkbox"
            onClick={handleMode}
          ></input>
          <div className={language} onClick={handleLanguage}></div>
        </nav>
      </header>
    </>
  )
}
