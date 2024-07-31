import Traffic from '../../../public/traffic_img.png'
import Marvel from '../../../public/marvel_img.png'
import Shop from '../../../public/shop.png'
const Work = () => {
  return (
    <div id={'work'} className={'py-10 flex flex-col gap-8'}>
      <a className={'flex items-center justify-start gap-5 md:ml-16 hover:bg-light-blue rounded-xl p-3 cursor-pointer duration-300 ease-in'}>
        <h3 className={'lg:text-8xl md:text-5xl text-3xl  font-bold '}>Traffic App</h3>
        <img
          className={'w-32  lg:w-56 object-cover rounded'}
          src={Traffic}
          alt='traffic'/>
      </a>
      <a className={'flex items-center justify-start gap-5 md:ml-5 hover:bg-light-blue rounded-xl p-3 cursor-pointer duration-300 ease-in'}>
        <img
          className={'w-32  lg:w-56 object-cover rounded'}
          src={Shop}
          alt='traffic'/>
        <h3 className={'lg:text-8xl md:text-5xl text-3xl font-bold' }>Online store</h3>
      </a>
      <a className={'flex items-center justify-start gap-5 md:ml-20 hover:bg-light-blue rounded-xl p-3 cursor-pointer duration-300 ease-in'}>
        <h3 className={'lg:text-8xl md:text-5xl text-3xl  font-bold'}>Marvel app</h3>
        <img
          className={'w-32  lg:w-56 object-cover rounded'}
          src={Marvel}
          alt='traffic'/>
      </a>
    </div>
  )
}

export default Work;