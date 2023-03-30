import { TranslationProps, useTranslation } from 'react-i18next'
import { themeProps } from '../../types/types'
import home from './home.scss'
import { motion } from 'framer-motion'

export const Home = ({ theme, currentLanguage }: Partial<themeProps>) => {
  const { t } = useTranslation(currentLanguage)

  return (
    <>
      <section className={`${theme} home section`} id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 }
              }}
              className="home__social"
            >
              <a
                href="https://www.linkedin.com/in/matheus-jacoud/"
                target="_blank"
                rel="nofollow"
                className="home__social-icon"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://github.com/mjacoud"
                target="_blank"
                rel="nofollow"
                className="home__social-icon"
              >
                <i className="uil uil-github-alt"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5521981477929"
                target="_blank"
                rel="nofollow"
                className="home__social-icon"
              >
                <i className="uil uil-whatsapp"></i>
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 }
              }}
              className="home__img"
            >
              <div className="home__blob">
                <img
                  className="home__blob-img"
                  src="src\assets\image\photos\image-croped.png"
                />
              </div>
            </motion.div>

            <div className="home__data">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="home__title"
              >
                {t('HomeTitle')}
              </motion.h1>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="home__subtitle"
              >
                {t('HomeSubTitle')}
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="home__description"
              >
                {t('HomeDescription')}
              </motion.p>
              <motion.a
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 }
                }}
                href="#contact"
                className="button button--flex"
              >
                {t('HomeButton')}
                <i className="uil uil-message button__icon"></i>
              </motion.a>
            </div>
          </div>

          <div className="home__scroll">
            <a href="#About" className="home__scroll-button button--flex">
              <i className="uil uil-mouse-alt home__scroll-mouse"></i>
              <span className="home__scroll-name">Scroll Down</span>
              <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
