import { CardProps } from "./model"



const Card = (props: CardProps) => {
  return (
    <div>
     
      {
        props.isLogged ?  `${props.title} ${props.price}` : "Please loggin"
      }
    </div>
  )
}

export default Card
