import contact from './contact.scss'
import { formProps, themeProps } from '../../types/types'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'

export const Contact = ({ theme, currentLanguage }: Partial<themeProps>) => {
  const { t } = useTranslation(currentLanguage)

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <>
      <section className="contact section" id="contact">
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
            {t('ContactTitle')}
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
            {t('ContactSubTitle')}
          </motion.span>
        </div>
        <motion.h4
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 }
          }}
          className="contact__subtitle"
        >
          {t('ContactDescription')}
        </motion.h4>
        <div className="contact__container">
          <form
            onSubmit={onSubmit}
            method="POST"
            action="https://formsubmit.co/el/panavu"
            className="contact__form"
          >
            <div className="contact__data">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="contact__content"
              >
                <label htmlFor="name"></label>
                <motion.input
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: -80 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  type="text"
                  id="name"
                  placeholder={`${t('ContactName')}`}
                  {...register('name', {
                    required: true,
                    maxLength: 100
                  })}
                  className="contact__input"
                />
                {errors.name && (
                  <p className="text-primary-500 mt-1">
                    {errors.name.type === 'required' &&
                      'This field is Required'}
                    {errors.name.type === 'maxLength' &&
                      'Max Length is 100 characters'}
                  </p>
                )}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="contact__content"
              >
                <label htmlFor="email"></label>
                <motion.input
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: -80 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  })}
                  className="contact__input"
                />
                {errors.email && (
                  <p className="text-primary-500 mt-1">
                    {errors.email.type === 'required' &&
                      'This field is Required'}
                    {errors.email.type === 'pattern' && 'Invalid Email Adress'}
                  </p>
                )}
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
              }}
              className="contact__content"
            >
              <label htmlFor="message"></label>
              <motion.textarea
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                rows={4}
                cols={50}
                id="message"
                {...register('message', {
                  required: true,
                  maxLength: 2000
                })}
                placeholder={`${t('ContactMessage')}`}
                className="contact__input"
              />
              {errors.message && (
                <p className="text-primary-500 mt-1">
                  {errors.message.type === 'required' &&
                    'This field is Required'}
                  {errors.message.type === 'maxLength' &&
                    'Max Length is 2000 characters'}
                </p>
              )}
            </motion.div>
            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
              }}
              type="submit"
              className="button button--flex"
            >
              {t('ContactButton')}
            </motion.button>
          </form>

          <div className="contact__stack">
            <div className="contact__container">
              <div className="contact__button">
                <motion.a
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7 }}
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="button button--contact"
                  href="https://www.linkedin.com/in/matheus-jacoud/"
                >
                  <i className="uil uil-linkedin-alt"></i>LinkedIn
                </motion.a>
              </div>
              <div className="contact__button">
                <motion.a
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="button button--contact"
                  href="https://github.com/mjacoud/"
                >
                  <i className="uil uil-github"></i> Github
                </motion.a>
              </div>

              <div className="contact__button">
                <motion.a
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9 }}
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="button button--contact"
                  href="https://wa.me/5521981477929"
                >
                  <i className="uil uil-whatsapp"></i> Whatsapp
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
