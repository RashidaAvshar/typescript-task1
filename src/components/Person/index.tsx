import { PersonProps } from "./model";

const Person = (props: PersonProps) => {
  return (
    <div>
      <h2>{props.name.firstName}</h2>
      <h2>{props.name.lastName}</h2>
      <h2>{props.name.age}</h2>
      <h2>{props.name.address.home}</h2>
      <h2>{props.name.address.street}</h2>
 

      
    </div>
  )
}

export default Person
