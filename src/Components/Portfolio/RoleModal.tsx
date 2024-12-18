import { useRoleModal } from "../../hooks/useRoleModal"
import { Button } from "./Button"
import teste from '../../assets/image/photos/image2-croped.png'
import github from '../../assets/image/icons/github.svg'
import external from '../../assets/image/icons/link-externo-preto.png'
import close from '../../assets/image/icons/close.png'
import { Modal } from "./Modal"
import {techOptions, techOptionsArray} from '../Portfolio/Portfolio'
import { TagBadge } from "./TagBadge"

export default function RoleModal() {

const roleModal = useRoleModal()

const handleClose = () =>roleModal.onClose()


const body = (
  <>
        <h3 className="modal__subtitle">Esse é o subtitulo</h3>
        <div className="modal__tagGroup">
          <TagBadge img={techOptions[1].image} title={techOptions[1].label} key={techOptions[1].label}/>
          <TagBadge img={techOptions[1].image} title={techOptions[1].label} key={techOptions[1].label}/>
          <TagBadge img={techOptions[1].image} title={techOptions[1].label} key={techOptions[1].label}/>
          <TagBadge img={techOptions[1].image} title={techOptions[1].label} key={techOptions[1].label}/>
        </div>
        <p className="modal__description">O Refinances nasceu de uma necessidade observada pelo grupo: a organização financeira. O projeto foi desenvolvido como nosso Trabalho de Conclusão de Curso na ETEC de Guaianazes.
O app conta com o gerenciamento completo das finanças: entradas, saídas, contas, metas financeiras e possui uma dashboard para acompanhar os gastos por categoria!</p>
    <div className="button__container">
        <Button label="Ver Código" iconSrc={github}/>
        <Button label="Ver Projeto" iconSrc={external}/>
    </div>
    <img src={teste} alt="" className="modal__video"/>
  </>
)

const header = (
  <div className="modal__header">
    
                      <h2 className="modal__title">title</h2>
                      <img src={close} alt="" className="button__closeButton" onClick={handleClose}/>
  </div>
)

  return (
    <Modal
          header={header}
          body={body}
    />
  )
}
