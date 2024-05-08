import { useState } from "react"

interface CardInformationProsp{
    title:string
    subTitle:string
}

export const CardInformation:React.FC<CardInformationProsp> = ({title,subTitle}) =>{
    const [onHover,setOnHover] = useState<boolean>(true)

    const showKnowMore = () =>{
        setOnHover(true)
    }
    
    const showSubtitle = () =>{
        setOnHover(false)
    }

    return (
        <>
        <div className="cardInformation__container"
            onMouseEnter={showSubtitle}
            onMouseLeave={showKnowMore}
        >
            <p className="CardInformation__title">{title}</p>
            <p className="CardInformation__subtitle"
            >{onHover ? subTitle : 'Leia Mais'}</p>
        </div>
        </>
    )
}