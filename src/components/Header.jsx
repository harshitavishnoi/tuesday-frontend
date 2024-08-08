function Header(){

    return(
        <header>
        <div className="bg-gray-100 shadow-slate-700 5px">
          <div className="flex items-left p-3">
            <div className="flex">
              <img src="/logoipsum-295.svg" alt="logo" className="p-1" />
            </div>
            <div className="flex ">
              <h1 className="text-4xl p-1 font-bold caret-gray-500">tuesday</h1>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;