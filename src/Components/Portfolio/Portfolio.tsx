import { themeProps } from '../../types/types'
import { motion } from 'framer-motion'
import portfolio from './portfolio.scss'
import { useTranslation } from 'react-i18next'

export const Portfolio = ({ theme, currentLanguage }: Partial<themeProps>) => {
  const { t } = useTranslation(currentLanguage)

  return (
    <>
      <section className="section portfolio" id="portfolio">
        <div className="section__header">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -80 },
              visible: { opacity: 1, y: 0 }
            }}
            className="section__title"
          >
            Portfolio
          </motion.h2>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65 }}
            variants={{
              hidden: { opacity: 0, y: -80 },
              visible: { opacity: 1, y: 0 }
            }}
            className="section__subtitle"
          >
            {t('PortfolioSubTitle')}
          </motion.span>
        </div>

        <div className=".portfolio__project">
          <div className="portfolio__container">
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 }
              }}
              href="https://1d21c5d8.gym-f3y.pages.dev
              "
              target="_blank"
              className="portfolio__link"
            >
              <img
                src="src\assets\image\projects\gym.png"
                alt="gym-landing-page"
                className="portfolio__project"
              />
            </motion.a>
          </div>
          <div className="portfolio__container">
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 }
              }}
              href="https://project-notes.pages.dev/"
              target="_blank"
              className="portfolio__link"
            >
              <img
                src="src\assets\image\projects\notes.png"
                alt="todo-notes-app"
                className="portfolio__project"
              />
            </motion.a>
          </div>
          <div className="portfolio__container">
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 }
              }}
              href="https://search-meals.pages.dev"
              target="_blank"
              className="portfolio__link"
            >
              <img
                src="src\assets\image\projects\meals.png"
                alt="search-meals"
                className="portfolio__project"
              />
            </motion.a>
          </div>

          <div className="portfolio__text">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 }
              }}
              className="button button--portfolio"
            >
              <a href="https://github.com/mjacoud?tab=repositories">
                {t('PortfolioButton')}
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
