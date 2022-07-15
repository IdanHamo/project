const Footer = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <span>&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </div>
    
  );
};

export default Footer;
