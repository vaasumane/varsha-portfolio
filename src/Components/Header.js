import React from "react";
const Header = () => {
  return (
    <>
      <header className="py-8" id="home">
        <div className="container mx-auto">
          <div className="flex justify-between item-center">
            <div className="bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">
              <h1 className="text-4xl font-bold">VARSHA MANE</h1>
            </div>
            <button className="btn btn-sm">Work with me</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
