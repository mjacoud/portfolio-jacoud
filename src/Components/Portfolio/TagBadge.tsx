
interface TagProps{
    img:string
    title:string
}

export const TagBadge:React.FC<TagProps> = ({img,title}) => {
    return (
    
    <div className="tag__container">
        <img src={img} alt="" height={17} width={17}/>
        <p className="tag__title-container">{title}</p>
    </div>
   
    )
}