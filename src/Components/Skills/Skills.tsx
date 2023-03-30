import { themeProps } from '../../types/types'
import skills from './skills.scss'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import framerMotion from '/src/assets/image/icons/framermotioN.png'
import tailwind from '/src/assets/image/icons/tailwind.png'
import vitest from '/src/assets/image/icons/vitest.png'

export const Skills = ({ theme, currentLanguage }: Partial<themeProps>) => {
  const { t } = useTranslation(currentLanguage)

  return (
    <>
      <section className="section" id="skills">
        <div className="section__header">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 }
            }}
            className="section__title"
          >
            {t('SkillsTitle')}
          </motion.h2>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 }
            }}
            className="section__subtitle"
          >
            {t('SkillsSubTitle')}
          </motion.span>
        </div>

        <div className="skills__section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 }
            }}
            className="skills__container"
          >
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 }
              }}
              className="skills__container-title"
            >
              {t('SkillsLanguages')}
            </motion.h3>
            <div className="skills__card">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  className="skills__item-logo"
                >
                  <path
                    fill="#E44D26"
                    d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499 8.096-90.102h-88.862zm72.041 20.471l-.507 5.834-.223 2.695h-42.569l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69-22.79 6.134v-.005l-.027.012-22.777-5.916-1.546-17.055h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649 1.296-13.728h-38.555l-2.734-30.836-.267-3.164h55.724000000000004l-.266 2.471zM27.956 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.738 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.777 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.513 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z"
                  />
                </svg>
                <p className="skills__item-title">HTML</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  className="skills__item-logo"
                >
                  <path
                    fill="#1572B6"
                    d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063 8.078-90.48h-88.66zm69.21 50.488l-2.35 21.892.009 1.875-22.539 6.295v.001l-.018.015-22.719-6.225-1.537-17.341h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495 1.308-14.549h-25.907000000000004l-.222-2.355-.506-5.647-.265-2.998h27.886000000000003l1.014-11h-42.473l-.223-2.589-.506-6.03-.265-3.381h55.597l-.267 3.334-2.685 30.154M89 14.374l-7.149-8.374h7.149v-5h-16v4.363l8.39 7.637h-8.39v5h16zM70 14.374l-6.807-8.374h6.807v-5h-15v4.363l7.733 7.637h-7.733v5h15zM52 13h-8v-7h8v-5h-14v17h14z"
                  />
                </svg>
                <p className="skills__item-title">CSS</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="2500"
                  preserveAspectRatio="xMinYMin meet"
                  viewBox="0 0 256 256"
                  className="skills__item-logo"
                >
                  <path fill="#F7DF1E" d="M0 0h256v256H0V0z" />
                  <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
                </svg>
                <p className="skills__item-title">JavaScript</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.3 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  className="skills__item-logo"
                >
                  <path
                    fill="#007acc"
                    d="M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z"
                  />
                </svg>
                <p className="skills__item-title">TypeScript</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.4 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Sass"
                  viewBox="0 0 512 512"
                  className="skills__item-logo"
                >
                  <rect width="512" height="512" fill="#c69" rx="15%" />
                  <path
                    fill="#fff"
                    d="M258,88c-96,33-158,100-152,140s66,72,93,93h0c-35,18-79,45-78,80,2,48,54,33,76,19s44-53,30-94c31-8,58,2,66,8,31,22,15,47,4,51s-4,6,3,4,22-12,22-29c0-43-46-63-103-48-33-35-78-51-76-89,1-14,6-50,95-95s152-27,144,14c-12,62-120,104-158,68-2-4-9-7-5,4,20,50,182,27,189-79C410,79,329,64,258,88ZM172,408c-25,8-24-8-23-14,3-17,17-38,59-59C220,373,193,402,172,408Z"
                  />
                </svg>
                <p className="skills__item-title">Sass/Scss</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.5 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="2490"
                  preserveAspectRatio="xMinYMin meet"
                  viewBox="0 0 256 255"
                  className="skills__item-logo"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="12.959%"
                      x2="79.639%"
                      y1="12.039%"
                      y2="78.201%"
                    >
                      <stop offset="0%" stopColor="#387EB8" />
                      <stop offset="100%" stopColor="#366994" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="19.128%"
                      x2="90.742%"
                      y1="20.579%"
                      y2="88.429%"
                    >
                      <stop offset="0%" stopColor="#FFE052" />
                      <stop offset="100%" stopColor="#FFC331" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
                  />
                  <path
                    fill="url(#b)"
                    d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
                  />
                </svg>
                <p className="skills__item-title">Python</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 }
            }}
            className="skills__container"
          >
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 }
              }}
              className="skills__container-title"
            >
              {t('Framework')}
            </motion.h3>
            <div className="skills__card">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 128 128"
                  viewBox="0 0 128 128"
                  className="skills__item-logo"
                >
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4" />
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                  </g>
                </svg>
                <p className="skills__item-title">React</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="2158"
                  preserveAspectRatio="xMinYMin meet"
                  viewBox="0 0 256 221"
                  className="skills__item-logo"
                >
                  <path
                    fill="#41B883"
                    d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"
                  />
                  <path
                    fill="#41B883"
                    d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"
                  />
                  <path
                    fill="#35495E"
                    d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"
                  />
                </svg>
                <p className="skills__item-title">Vue</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  width="512px"
                  height="309px"
                  viewBox="0 0 512 309"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid"
                  className="skills__item-logo"
                >
                  <g>
                    <path
                      d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z"
                      fill="#000000"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>

                <p className="skills__item-title">NextJs</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 }
            }}
            className="skills__container"
          >
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 }
              }}
              className="skills__container-title"
            >
              {t('SkillsLibraries')}
            </motion.h3>
            <div className="skills__card">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="2383"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 244"
                  className="skills__item-logo"
                >
                  <path
                    fill="#764ABC"
                    d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
                  />
                </svg>
                <p className="skills__item-title">Redux</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <img src={framerMotion} className="skills__item-logo" alt="" />

                <p className="skills__item-longTitle">Framer Motion</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <img src={tailwind} className="skills__item-logo" alt="" />

                <p className="skills__item-title">Tailwind</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 }
            }}
            className="skills__container"
          >
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 }
              }}
              className="skills__container-title"
            >
              {t('SkillsTest')}
            </motion.h3>
            <div className="skills__card">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="skills__item-logo"
                >
                  <path
                    fill="#99415B"
                    d="M20.97 11.819l-.001.001c0 .965-.791 1.75-1.764 1.75-.974-.003-1.762-.787-1.762-1.753 0-.555.26-1.049.665-1.37l.004-.003.007-.007c.056-.042.119-.084.182-.125 0 0 .008 0 .008-.007.028-.014.056-.035.084-.05.007 0 .014-.006.021-.006.028-.014.063-.028.098-.042.034-.014.071-.027.099-.041.007 0 .013-.007.02-.007.028-.007.056-.021.085-.028.007 0 .02-.007.028-.007.034-.007.063-.014.098-.02h.007l.105-.022c.007 0 .02 0 .028-.007.028 0 .056-.007.084-.007H19.1c.035 0 .071-.007.112-.007h.091c.028 0 .05 0 .078.007h.014c.056.007.112.014.168.028C20.371 10.272 20.968 10.976 20.97 11.819zM10.196 11.813v-.005c0-.812.561-1.495 1.318-1.687l.012-.003v-.001l.098-.02h.02l.084-.015h.028l.077-.007h.273l.07.007.035.007.077.014.028.007.098.02h.007l.083.029.028.007.07.027.021.007.084.035h.007l.091.05-.001-.001h.007l.084.048.013.007.078.049.007.007.238.201.007.007c.299.313.484.736.484 1.203v.007c-.033.942-.811 1.693-1.765 1.693-.954 0-1.732-.751-1.765-1.69V11.813L10.196 11.813z"
                  />
                  <path
                    fill="#99415B"
                    d="M2.496,17.802c0.168-1.015,0.637-1.967,1.086-2.877l0.077-0.16c0.153,0.056,0.315,0.098,0.483,0.126c-0.266,1.473,0.49,2.994,1.962,3.745l0.266,0.139l0.287-0.104c1.225-0.431,2.361-1.132,3.363-2.07c0.545-0.505,1.025-1.068,1.434-1.681l0.023-0.035c0.161,0.027,0.322,0.034,0.484,0.034c1.449-0.003,2.668-0.98,3.027-2.305l0.005-0.022h1.177c0.362,1.349,1.583,2.327,3.033,2.327h0.001c0.581,0,1.119-0.16,1.583-0.43c0.182,0.52,0.238,1.063,0.14,1.605h0.001c-0.17,0.92-0.732,1.682-1.505,2.125l-0.014,0.008c-0.764,0.438-1.703,0.577-2.691,0.716c-0.658,0.084-1.22,0.186-1.772,0.314l0.118-0.023c-1.457,0.355-2.857,1.05-4.216,1.717c-1.738,0.854-3.377,1.66-4.896,1.66H5.927c-0.804,0-1.548-0.256-2.153-0.69C2.237,20.863,2.313,18.885,2.496,17.802L2.496,17.802z"
                  />
                  <path
                    fill="#85394F"
                    d="M12 10.075h-.166l-.077.007h-.028l-.084.015h-.02l-.098.02v.001l-.012.003c-.758.192-1.318.875-1.318 1.687v.005.003c.033.939.811 1.69 1.765 1.69.013 0 .026 0 .039 0V10.075L12 10.075zM3.659 14.765l-.077.16c-.449.91-.917 1.861-1.086 2.877-.182 1.083-.259 3.061 1.279 4.117.605.434 1.349.69 2.153.69h.023c1.519 0 3.158-.805 4.896-1.66.381-.187.765-.376 1.153-.559v-5.473c-.013 0-.027 0-.04 0-.162 0-.323-.007-.484-.034l-.023.035c-.409.614-.889 1.177-1.434 1.681-1.003.938-2.138 1.64-3.363 2.07L6.37 18.775l-.266-.139c-1.472-.751-2.228-2.272-1.962-3.745C3.974 14.863 3.812 14.821 3.659 14.765L3.659 14.765z"
                  />
                  <path
                    fill="#99415B"
                    d="M4.633,10.068c0.974,0,1.765,0.786,1.765,1.751c0,0.965-0.791,1.752-1.764,1.752c-0.973,0-1.766-0.785-1.766-1.75C2.868,10.855,3.66,10.068,4.633,10.068L4.633,10.068z"
                  />
                  <path
                    fill="#85394F"
                    d="M4.633 10.068c-.973 0-1.765.787-1.765 1.753 0 .964.793 1.749 1.765 1.75V10.068L4.633 10.068 4.633 10.068zM19.207 10.068c-.973 0-1.765.787-1.765 1.753 0 .964.793 1.749 1.765 1.75V10.068L19.207 10.068 19.207 10.068z"
                  />
                  <path
                    fill="#99415B"
                    d="M10.028,1.39h11.019l-2.53,7.4c-0.105,0.02-0.21,0.055-0.314,0.09l-2.661-5.385l-2.67,5.35c-0.105-0.034-0.218-0.055-0.33-0.076L10.028,1.39L10.028,1.39z"
                  />
                  <path
                    fill="#85394F"
                    d="M15.537,1.39h-5.509l2.514,7.379c0.112,0.021,0.225,0.042,0.33,0.076l2.666-5.342V1.39L15.537,1.39z"
                  />
                </svg>
                <p className="skills__item-title">Jest</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <img src={vitest} className="skills__item-logo" alt="" />

                <p className="skills__item-title">Vitest</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 }
            }}
            className="skills__container"
          >
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 }
              }}
              className="skills__container-title"
            >
              {t('SkillsVersion')}
            </motion.h3>
            <div className="skills__card">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="2500"
                  preserveAspectRatio="xMinYMin meet"
                  viewBox="0 0 256 256"
                  className="skills__item-logo"
                >
                  <path
                    fill="#DE4C36"
                    d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"
                  />
                </svg>
                <p className="skills__item-title">Git</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="skills__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  className="skills__item-logo"
                >
                  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                </svg>

                <p className="skills__item-title">Github</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
