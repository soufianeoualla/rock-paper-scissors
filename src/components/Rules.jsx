import Image from "next/image"
import '../Sass/rules.scss'
import rules from './images/image-rules.svg'
import close from './images/icon-close.svg'
const Rules = () => {
  return (
    <div className="rules">
        <div className="top">
      <h1>Rules</h1>
            <Image src={close} alt="close button" width={20} height={20}/>
        </div>
      <Image src={rules} alt="rules" width={305} height={271}/>
    </div>
  )
}

export default Rules
