interface ButtonProps{
    label:string
    iconSrc:string
}

export const Button:React.FC<ButtonProps> = ({label,iconSrc}) =>{
    return(
        <button className="portfolio__button">
            <a href="https://search-meals.pages.dev/">
            <p className="portfolio__button--text">{label}</p>
            <img src={iconSrc} alt="label" className="button__image"/>
            </a>
        </button>
    )
}