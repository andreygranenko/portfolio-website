const Footer = () => {
  return (
    <footer className={'flex flex-col gap-2 lg:flex-row lg:justify-between py-5 lg:py-10'}>
      <div className={'flex flex-col lg:flex-row gap-2 lg:gap-8'}>
        <p>All rights reserved</p>
        <p>Designed & Developed by Andrew</p>
      </div>
      <div className={'flex flex-col lg:flex-row gap-2 lg:gap-8 underline'}>
        <a>Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </footer>
  );
}

export default Footer;
