import { HeadingProps } from "./model";

const Heading = (props: HeadingProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Heading
