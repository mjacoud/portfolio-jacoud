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
              <svg
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="home__blob"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    className="home__blob-img"
                    x="-84"
                    y="-129"
                    href="https://postimg.cc/9wMj77Dm"
                  />
                </g>
              </svg>
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
