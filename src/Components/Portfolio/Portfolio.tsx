import { themeProps } from '../../types/types'
import { motion } from 'framer-motion'
import portfolio from './portfolio.scss'
import { useTranslation } from 'react-i18next'
import gym_image from '../../assets/image/projects/gym.png'
import meal_image from '../../assets/image/projects/meals.png'
import role_image from '../../assets/image/projects/role.png'

export const Portfolio = ({currentLanguage }: Partial<themeProps>) => {
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
              href="https://role-frontend.vercel.app/
              "
              target="_blank"
              className="portfolio__link"
            >
              <img
                src={role_image}
                alt="role-page"
                className="portfolio__project"
              />
            </motion.a>
          </div>
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
                src={gym_image}
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
                src={meal_image}
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
