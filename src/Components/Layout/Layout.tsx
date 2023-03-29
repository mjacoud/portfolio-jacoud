import { themeProps } from '../../types/types'
import { About } from '../About/About'
import { Contact } from '../Contact/Contact'
import { Home } from '../Home/Home'
import { Portfolio } from '../Portfolio/Portfolio'
import { Skills } from '../Skills/Skills'

export const Layout = ({ theme, currentLanguage }: Partial<themeProps>) => {
  return (
    <>
      <main className="main">
        <Home theme={theme} currentLanguage={currentLanguage} />
        <About theme={theme} currentLanguage={currentLanguage} />
        <Skills theme={theme} currentLanguage={currentLanguage} />
        <Portfolio theme={theme} currentLanguage={currentLanguage} />
        <Contact theme={theme} currentLanguage={currentLanguage} />
      </main>
    </>
  )
}
