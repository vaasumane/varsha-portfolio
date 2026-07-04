import React from "react";

const FooterSection = () => {
  return (
<section
  className="relative z-20 bg-slate-950 border-t border-slate-700 py-6 px-4"
>
  <div className="max-w-6xl mx-auto text-center">
    <p className="text-sm md:text-base text-xs text-slate-400">
      Built  
      by{" "}
      <span className="text-cyan-400 text-xs font-semibold">
        Varsharani Mane
      </span>{" "}
      <a href="https://github.com/vaasumane/" target="_blank" className="text-xs text-slate-400">
        · github.com/vaasumane
      </a>
    </p>
  </div>
</section>
  );
};

export default FooterSection;