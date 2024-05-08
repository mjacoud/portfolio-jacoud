import { TagBadge } from "./TagBadge"

interface tag{
    label:string
    image:string
}

interface TagGroupProps{
    tags:tag[]
}

export const TagGroup:React.FC<TagGroupProps> = ({tags}) => {
    return(
        <>
        <div className="TagGroup__container">
            {tags.slice(0,3).map(tag=><TagBadge img={tag.image} title={tag.label} key={tag.label}/>)}
            {tags.length<=3 ? <div className="tag__container" style={{display:"none"}}></div> : <div className="tag__container">`+${tags.length-3}`</div> }
        </div>
        </>
    )
}