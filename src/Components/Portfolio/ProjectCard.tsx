import { CardInformation } from "./CardInformation"
import { TagGroup } from "./TagGroup"



interface Tag{
    label:string
    image:string
}

interface ProjectCardProps{
    img:string
    tags:Tag[]
    title:string
    subtitle:string
    onClick:()=>void
}

export const ProjectCard:React.FC<ProjectCardProps> = ({img,tags,title,subtitle,onClick}) =>{


    return (
        <>
        <div className="ProjectCard__container" onClick={onClick}>
            <img className="projectCard__image" 
            src={img} 
            alt={`${img}_img`} 
            height={400} 
            width={400}
            />
                <TagGroup tags={tags}/>
                <CardInformation title={title} subTitle={subtitle}/>
        </div>
        </>
    )
}