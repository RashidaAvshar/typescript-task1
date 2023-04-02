import { PersonListProps } from "./model"

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {
        props.fullName.map((item)=>(
            <div>
                <h2>{item.firstName}</h2>
                <h2>{item.lastName}</h2>
                <h2>{item.age}</h2>


            </div>
        ))
      }
    </div>
  )
}

export default PersonList
