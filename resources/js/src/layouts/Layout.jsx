import React from "react";

const Layout = ({ children }) => {
  return (
    <main>
      <header className="relative z-30 flex justify-between items-center py-4 px-7">
        <div>
          <span className="">Rental Mobil</span>
        </div>
        <nav className="lg:block hidden">
          <ul className="flex gap-10">
            <li className={`px-2 font-semibold text-md text-white border-b ${window.location.pathname == '/' ? '!font-bold border-white' : 'border-transparent'} cursor-pointer hover:border-b hover:border-white`}>
              <a href="/">Home</a>
            </li>
            <li className={`px-2 font-semibold text-md text-white border-b ${window.location.pathname == '/sewa-mobil' ? '!font-bold border-white' : 'border-transparent'} cursor-pointer hover:border-b hover:border-white`}>
              <a href="/sewa-mobil">Sewa Mobil</a>
            </li>
            <li className={`px-2 font-semibold text-md text-white border-b ${window.location.pathname == '/tentang-kami' ? '!font-bold border-white' : 'border-transparent'} cursor-pointer hover:border-b hover:border-white`}>
              <a href="/tentang-kami">Tentang Kami</a>
            </li>
          </ul>
        </nav>
      </header>
      <article>
        {children}
      </article>
      <footer>
        footer
      </footer>
    </main>
  )
}

export default Layout