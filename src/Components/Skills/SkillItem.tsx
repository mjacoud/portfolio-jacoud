import { motion } from "framer-motion"
import { useState } from "react"



interface SkillItemProps{
    title:string
    logo:string
    description:string
}

export const SkillItem:React.FC<SkillItemProps> = ({title,logo,description}) => {
const [onHover,setOnHover] = useState<boolean>(false)

const showToolTip = () =>{
    setOnHover(true)
}

const disableToolTip = () =>{
    setOnHover(false)
}

  return (
    <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 }
                }}
                className={`skills__item ${onHover ? 'skills__tooltip' : ''}`}
               onMouseEnter={showToolTip}
               onMouseLeave={disableToolTip}
              >
                <img className="skills__item-logo" src={logo} alt={`logo-${title}`}/>
                <p className="skills__item-title">{title}</p>
                <div className="skills__tooltip-modal">
                { onHover && 
                    <div className="skills__tooltip-data"> 
                    <p>
                      {description}
                      </p>
                      </div>
                }
                </div>
              </motion.div>
  )
}