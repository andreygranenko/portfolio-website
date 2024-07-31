const Contact = () => {
    return (
        <div id={'contact'} className="text-2xl md:text-4xl flex flex-col gap-2 py-5 lg:py-10">
          <a href={'mailto:agranenko@outlook.com'}>agranenko@outlook.com</a>
          <a href={'tel:+37123206050'}>(+371)23206050</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={'underline'}
            href="https://www.linkedin.com/in/andrey-granenko-70414a25a/">
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={'underline'}
            href="https://github.com/andreygranenko">
            Github
          </a>
        </div>
    );
}

export default Contact;