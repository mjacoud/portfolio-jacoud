import teste from '../../assets/image/photos/image2-croped.png'
import role from '../../assets/image/projects/role.png'
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

import { ProjectCard } from './ProjectCard'
import typescript from '../../assets/image/icons/typescript.svg'
import { IViewOptions, tecnologiesTag } from './Portfolio'
import { MultiValue, SingleValue } from 'react-select/dist/declarations/src/types'
import { useRoleModal } from '../../hooks/useRoleModal'

interface IProjectWrap{
  selectedTags:MultiValue<tecnologiesTag> | null
  selectedView:SingleValue<IViewOptions>
}
const tags = {
  javascript: { value: 'javascript', label: 'JavaScript', image: javascript },
  typescript: { value: 'typescript', label: 'TypeScript', image: typescript },
  python: { value: 'python', label: 'Python', image: python },
  java: { value: 'java', label: 'Java', image: java },
  react: { value: 'react', label: 'React', image: react },
  vue: { value: 'vue', label: 'Vue', image: vue },
  angular: { value: 'angular', label: 'Angular', image: angular },
  next: { value: 'next', label: 'Next', image: next },
  spring: { value: 'spring', label: 'Spring', image: spring },
  jest: { value: 'jest', label: 'Jest', image: jest },
  vitest: { value: 'vitest', label: 'Vitest', image: vitest },
  git: { value: 'git', label: 'Git', image: git }
};

  export const ProjectWrap = ({selectedTags,selectedView}:IProjectWrap) => {

    const roleModal = useRoleModal()

    const projects = [
      {
        img:role,
        tags:[tags.typescript],
        title:'Role',subtitle:'Role na cidade',
        onclick:()=>{roleModal.onOpen()},
        isRelevant:true,
        date:'2024-05-10T12:00:00Z'},
      {
       img:teste,
       tags:[tags.typescript],
       title:'Role2',
       subtitle:'Role na cidade',
       onclick:()=>{},
      date:"2024-05-25T15:30:00Z"},
      {
        img:teste,
        tags:[tags.typescript],
        title:'Role3',
        subtitle:'Role na cidade',
        onclick:()=>{},
        date:'2024-05-20T08:45:00Z'
      },
    ]

    const projectFiltered =projects.filter(project=> {
     const chosenTags = JSON.stringify(selectedTags)
     const projectTags = JSON.stringify(project.tags)
     if (projectTags.includes(chosenTags)) return project
     if (chosenTags == '[]') return project 
    })

    const latestViewRendering = projectFiltered.sort((a, b) => {
          if (a.date < b.date) {
              return -1; 
          }
          if (a.date > b.date) {
              return 1; 
          }
          return 0; 
      });
      
    const relevantView = projectFiltered.map(project=>{
      if(project.isRelevant == true && selectedView!.value== 'relevant'){
        return project
      }
    })
    

    return (
    <div className="portfolio__project">
 
          {selectedView!.value == 'relevant'&&
          relevantView.map(project =>
            project && <ProjectCard 
            img={project.img}
            tags={project.tags}
            subtitle={project.subtitle}
            title={project.title}
            onClick={project.onclick}
            key={project.title}/> )}
             
            {selectedView?.value == 'latest'&& latestViewRendering.map(project=>
              <ProjectCard 
              img={project.img}
              tags={project.tags}
              subtitle={project.subtitle}
              title={project.title}
              onClick={project.onclick}
              key={project.title}/> )}
              

              {selectedView?.value == 'all'&& projectFiltered.map(project=>
              <ProjectCard 
              img={project.img}
              tags={project.tags}
              subtitle={project.subtitle}
              title={project.title}
              onClick={project.onclick}
              key={project.title}/> )}
          </div>
  )
}

