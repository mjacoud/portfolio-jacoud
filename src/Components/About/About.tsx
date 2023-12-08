import { useTranslation } from 'react-i18next'
import { themeProps } from '../../types/types'
import { motion } from 'framer-motion'
import about from './about.scss'

export const About = ({ theme, currentLanguage }: Partial<themeProps>) => {
  const { t } = useTranslation(currentLanguage)

  return (
    <>
      <section className="about section" id="about">
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
            {t('AboutTitle')}
          </motion.h2>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: -80 },
              visible: { opacity: 1, y: 0 }
            }}
            className="section__subtitle"
          >
            {t('AboutSubTitle')}
          </motion.span>
        </div>

        <div className="about__container container grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: -80 },
              visible: { opacity: 1, y: 0 }
            }}
            className="about__rectangle"
          >
            <img
              src="src\assets\image\photos\image2-croped.png"
              className="about__img"
            />
          </motion.div>
          <div className="about__data">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: -80 },
                visible: { opacity: 1, y: 0 }
              }}
              className="about__description"
            >
              {t('AboutDescription')}
            </motion.p>

            {/*    <div className="about__info">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <span className="about__info-title">01+</span>
                <span className="about__info-name">
                  {t('AboutYears')}
                  <br />
                  {t('AboutExperience')}
                </span>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <span className="about__info-title">20+</span>
                <span className="about__info-name">
                  {t('AboutCompleted')}
                  <br />
                  {t('AboutProjects')}
                </span>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <span className="about__info-title">04+</span>
                <span className="about__info-name">
                  {t('AboutCompanies')}
                  <br />
                  {t('AboutWorked')}
                </span>
              </motion.div>
            </div> */}

            <div className="about__buttons">
              <motion.a
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="button button--flex"
                download=""
                href="assets\resume\Matheus_Jacoud.docx"
              >
                {t('AboutButton')}
                <i className="uil uil-download-alt button__icon"></i>
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
