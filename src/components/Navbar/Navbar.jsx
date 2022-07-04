import CartNavButton from "./CartNavButton/CartNavButton";
const Navbar = () => {
  return (
    <div className="w-full h-14 bg-gray-200 flex justify-center items-center">
      <div className="container">
        <div className="flex justify-between">
          <div>Navbar Logo</div>
          <div>Links</div>
          <CartNavButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
