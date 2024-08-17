import Traffic from "../../../public/traffic_img.png";

const TrafficBtn = ({cl}) => {
  console.log(cl)
  return (
    <button
      onClick={cl}
      // onClick={onClick}
      // data-modal-target="traffic-modal"
      // data-modal-toggle="traffic-modal"
      type="button"
      className={'flex items-center justify-start gap-5 md:ml-16 hover:bg-light-blue rounded-xl p-3 cursor-pointer duration-300 ease-in'}>
      <h3 className={'lg:text-8xl md:text-5xl text-3xl  font-bold '}>Traffic App</h3>
      <img
        className={'w-32  lg:w-56 object-cover rounded'}
        src={Traffic}
        alt='traffic'/>
    </button>
  )
}

export default TrafficBtn;