
interface TagProps{
    img:string
    title:string
}

export const TagBadge:React.FC<TagProps> = ({img,title}) => {
    return (
    
    <div className="tag__container">
        <img className='tag__image' src={img} alt="" height={15} width={15}/>
        <p className="tag__title-container">{title}</p>
    </div>
   
    )
}