import { themeProps } from '../../types/types'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SkillItem } from './SkillItem'

import javascript from '../../assets/image/icons/javascript.svg'
import typescript from '../../assets/image/icons/typescript.svg'
import python from '../../assets/image/icons/python.svg'
import java from '../../assets/image/icons/java-icon.svg'
import react from '../../assets/image/icons/react.svg'
import vue from '../../assets/image/icons/vue.svg'
import next from '../../assets/image/icons/nextjs-icon-svgrepo-com.svg'
import angular from '../../assets/image/icons/angular-svgrepo-com.svg'
import spring from '../../assets/image/icons/spring-svgrepo-com.svg'
import jest from '../../assets/image/icons/jest.svg'
import vitest from '/src/assets/image/icons/vitest.png'
import git from '../../assets/image/icons/git.svg'
import github from '../../assets/image/icons/github.svg'
import wordpress from '../../assets/image/icons/wordpress-svgrepo-com.svg'
import figma from '../../assets/image/icons/figma-svgrepo-com.svg'

const skillLanguages = [
  {title:'JavaScript',logo:javascript,description:'Linguagem para interatividade em páginas web, manipulando elementos e respondendo a eventos.'},
  {title:'TypeScript',logo:typescript,description:'Superset de JavaScript para tipagem estática e construção robusta.'},
  {title:'Python',logo:python,description:'Python é amplamente utilizado em diversas áreas, como desenvolvimento web, ciência de dados e automação de tarefas.'},
  {title:'Java',logo:java,description:'Java é conhecido por sua portabilidade, segurança e capacidade de construir aplicativos escaláveis e robustos.'
  }
]

const skillFramework = [
  {title:'React',logo:react,description:'React é uma biblioteca criada pelo Facebook em JavaScript popular para construir interfaces de usuário.'},
  {title:'Vue',logo:vue,description:'Vue é um Framework progressivo de interfaces de usuário dinâmicas e reativas.'},
  {title:'NextJs',logo:next,description:'Next.js é um framework de desenvolvimento web React que permite construir aplicativos web estáticos e dinâmicos de forma eficiente.'},
  {title:'Spring',logo:spring,description:' Spring é um framework de aplicação Java que fornece uma ampla infraestrutura para desenvolvimento de aplicativos corporativos. '},
  {title:'Angular',logo:angular,description:'Angular é um framework de desenvolvimento front-end TypeScript mantido pelo Google.'
  }
]
const skillTools = [
  {title:'Jest',logo:jest,description:'Jest é um framework de teste de JavaScript. Desenvolvido pelo Facebook, é amplamente utilizado para testar código JavaScript'},
  {title:'Vitest',logo:vitest,description:'Vitest é uma ferramenta de teste leve e rápida projetada especificamente para testar aplicações Vue.js. '},
  {title:'Git',logo:git,description:'Git é um sistema de controle de versão distribuído amplamente utilizado para rastrear mudanças em projetos de software. '},
  {title:'Wordpress',logo:wordpress,description:'WordPress é um sistema de gerenciamento de conteúdo (CMS) feito em PHP e usado para criar e gerenciar websites e blogs.'},
{title:'Figma',logo:figma,description:'Figma é uma ferramenta de design de interface do usuário (UI) colaborativa baseada na web. Ela permite que equipes de design criem, colaborem e prototipem interfaces de usuário de forma eficiente.'},
]




export const Skills = ({ currentLanguage }: Partial<themeProps>) => {
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
              {skillLanguages.map(skill=><SkillItem title={skill.title} description={skill.description} logo={skill.logo} key={skill.title}/>)}
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
              {t('Frameworks & Libraries')}
            </motion.h3>

            <div className="skills__card">

          {skillFramework.map(skill=><SkillItem title={skill.title} description={skill.description} logo={skill.logo} key={skill.title}/>)}
          
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

          {skillTools.map(skill=><SkillItem title={skill.title} description={skill.description} logo={skill.logo} key={skill.title}/>)}
          

            </div>
          </motion.div>

         
        </div>
      </section>
    </>
  )
}
