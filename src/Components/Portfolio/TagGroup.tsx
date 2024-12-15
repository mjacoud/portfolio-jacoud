import { TagBadge } from "./TagBadge"
import { TecnologiesTag } from "./Portfolio"

interface TagGroupProps{
    tags:TecnologiesTag[]
}

export const TagGroup:React.FC<TagGroupProps> = ({tags}) => {
    const getTags =(tags:TecnologiesTag[])=> {
        let shownTags = []
        for(let i:number =0;i<3;i++) {
            shownTags.push(tags[i])
    }
    console.log(shownTags)
    return shownTags
}
    const shownTags = getTags(tags)
    return(
        <>
        <div className="TagGroup__container">
        {shownTags.map((tag) => (
    <TagBadge img={tag.image} title={tag.label} key={tag.label} />
  ))}
         {tags.length<=3 ? <div className="tag__container" style={{display:"none"}}></div> : <div className="tag__container">+{tags.length-3}</div> }
        </div>
        </>
    )
}