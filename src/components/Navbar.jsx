import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
      <nav className="bg-slate-900 text-white px-6 py-3 flex items-center justify-around shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-xl">🔐</span>
          <h1 className="text-xl font-semibold tracking-wide">PassVault</h1>
        </div>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
          className="text-2xl hover:text-emerald-400 transition"
          title="GitHub Repository"
        >
          <FaGithub />
        </a>
      </nav>
  );
};

export default Navbar;
