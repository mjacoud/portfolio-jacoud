import { themeProps } from '../../types/types'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import makeAnimated from 'react-select/animated';
import { useRoleModal } from '../../hooks/useRoleModal'
import { useGymModal } from '../../hooks/useGymModal'
import { useState } from 'react'
import { ProjectWrap } from './ProjectWrap'
import typescript from '../../assets/image/icons/typescript.svg'
import javascript from '../../assets/image/icons/javascript.svg'
import python from '../../assets/image/icons/python.svg'
import java from '../../assets/image/icons/java-icon.svg'
import react from '../../assets/image/icons/react.svg'
import vue from '../../assets/image/icons/vue.svg'
import angular from '../../assets/image/icons/angular-svgrepo-com.svg'
import next from '../../assets/image/icons/nextjs-icon-svgrepo-com.svg'
import spring from '../../assets/image/icons/spring-svgrepo-com.svg'
import jest from '../../assets/image/icons/jest.svg'
import vitest from '../../assets/image/icons/vitest.png'
import git from '../../assets/image/icons/git.svg'


import Select, { MultiValue, SingleValue } from 'react-select'

const animatedComponents = makeAnimated();

export interface tecnologiesTag{
    readonly label:string;
    readonly value:string;
    readonly image:string;
  }
export interface IViewOptions{
  readonly label:string;
  readonly value:string;
}
export const techOptions: tecnologiesTag[] = [
  { value: 'javascript', label: 'JavaScript', image: javascript },
  { value: 'typescript', label: 'TypeScript', image: typescript },
  { value: 'python', label: 'Python', image: python },
  { value: 'java', label: 'Java', image: java },
  { value: 'react', label: 'React', image: react },
  { value: 'vue', label: 'Vue', image: vue },
  { value: 'angular', label: 'Angular', image: angular },
  { value: 'next', label: 'Next', image: next },
  { value: 'spring', label: 'Spring', image: spring },
  { value: 'jest', label: 'Jest', image: jest },
  { value: 'vitest', label: 'Vitest', image: vitest },
  { value: 'git', label: 'Git', image: git },
];

export const Portfolio = ({currentLanguage }: Partial<themeProps>) => {
  const { t } = useTranslation(currentLanguage)

  const [selectedTags,setSelectedTags]=useState<MultiValue<tecnologiesTag> | null>([{ value: 'typescript', label: 'TypeScript', image: typescript }])
  const [selectedView,setSelectedView]=useState<SingleValue<IViewOptions>>({ value: 'relevant', label: 'Mais Relevantes'})
  const roleModal = useRoleModal()
  const gymModal = useGymModal()
  


  const viewOptions:IViewOptions[] = [
    { value: 'latest', label: 'Mais Recentes'},
    { value: 'relevant', label: 'Mais Relevantes'},
    { value: 'all', label: 'Todos'},
  ]

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
        <div>
          <div className="portfolio__search">
            <Select
            options={viewOptions}
            defaultValue={selectedView}
            onChange={(newValue) => setSelectedView(newValue as SingleValue<IViewOptions> | null)}
            components={animatedComponents}
            styles={{
              multiValue:(baseStyles)=>({...baseStyles,
               width:'10rem'
              })
            }}
            />
            <Select 
              options={techOptions}
              isMulti
              isSearchable
              defaultValue={selectedTags}
              hideSelectedOptions
              onChange={setSelectedTags}
              components={animatedComponents}
              styles={{
                multiValue:(baseStyles)=>({
                  ...baseStyles,
                  background:'var(--first-color)',
                  color:'white'
                }),
                multiValueLabel:(baseStyles)=>({
                  ...baseStyles,
                  background:'var(--first-color)',
                  color:'white'
                }),
                container:(baseStyles)=>({
                  ...baseStyles,
                  maxWidth:'20rem',
                  width:'20rem'
                })
               
              }}/>
          </div>
          <ProjectWrap selectedTags={selectedTags} selectedView={selectedView}/>
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
      </section>
    </>
  )
}
