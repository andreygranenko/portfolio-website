import Andrew from '../../../public/andrew.jpg';
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 py-10">
      <h2 className={'hidden md:block text-3xl md:text-6xl lg:text-8xl xl:text-9xl'}>Andrew</h2>
      <h2 className={'text-3xl block md:hidden '}>Andrew Granenko</h2>
      <div className={'break-normal w-64'}>
        <img className={'rounded-xl'} src={Andrew} alt="andrew"/>
        <p className={'break-normal'}>I’m a web developer, passionate about diving into new initiatives</p>
      </div>
      <h2 className={'text-3xl md:text-6xl lg:text-8xl xl:text-9xl hidden md:block'}>Granenko</h2>
    </div>
  );
}

export default Hero;