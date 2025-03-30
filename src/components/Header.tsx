const Header = () => {
    const logo = new URL("../assets/header.png", import.meta.url).toString();

    return (
      <div className="w-full px-9 pt-2 flex justify-between items-center">
        <img className="w-45" src={logo} alt="logo" />
        <button className="text-sm font-semibold cursor-pointer bg-white outline-white outline-offset-2 h-min px-4 py-1.5 rounded-full">
          Sign In
        </button>
      </div>
    );
}

export default Header;