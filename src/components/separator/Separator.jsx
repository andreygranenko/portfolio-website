import './separator.css'
const Separator = ({text}) => {
  return (
    <div className={'relative'}>
      <p className={'sep text-center text-xl'}>{text}</p>
    </div>
  )
}

export default Separator;