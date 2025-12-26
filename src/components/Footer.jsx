const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} PassVault — All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
