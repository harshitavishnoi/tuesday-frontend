import {
  Bell,
  ChevronDown,
  FileQuestion,
  GemIcon,
  HardDrive,
  Puzzle,
  Search,
  User,
  UserRoundPlus,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-green-200">
      <div className="flex p-2 justify-between">
        <div className="flex justify-center items-center">
          <div className="flex items-left justify-left">
            <div className="h-8 w-8 mr-1 mt-1">
              <img src="/logoipsum-295.svg" alt="logo" />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-2xl  font-bold text-green-900">tuesday</p>
              <p className="text-2xl ">dev</p>
            </div>
          </div>
          <div className="flex justify-center items-center p-1 ml-2">
            <button className="border text-green-800 border-green-800 p-1 rounded-md hover:bg-green-700 hover:text-white">
              <div className="flex justify-center items-center">
                <GemIcon className="w-5 h-5 mr-1" /> See plans
              </div>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center p-1">
          <div>
            <button className="hover:bg-gray-300 hover:bg-opacity-50 rounded-md p-2">
              <Bell className="text-green-800" />
            </button>
          </div>
          <div className="p-1">
            <button className="hover:bg-gray-300 hover:bg-opacity-50 rounded-md p-2">
              <HardDrive className="text-green-800" />
            </button>
          </div>
          <div className="p-1">
            <button className="hover:bg-gray-300 hover:bg-opacity-50 rounded-md p-2">
              <UserRoundPlus className="text-green-800" />
            </button>
          </div>
          <div className="p-1">
            <button className="hover:bg-gray-300 hover:bg-opacity-50 rounded-md p-2">
              <Puzzle className="text-green-800" />
            </button>
          </div>
          <div className="p-1">
            <button className="hover:bg-gray-300 hover:bg-opacity-50 rounded-md p-2">
              <Search className="text-green-800" />
            </button>
          </div>
          <div className="p-1">
            <button className="hover:bg-gray-300 hover:bg-opacity-50 rounded-md p-2">
              <FileQuestion className="text-green-800" />
            </button>
          </div>
          <div className=" border-l-gray-400  border-l-2 flex justify-center items-center">
            <div className="p-1">
              <button className="hover:bg-gray-300 hover:bg-opacity-50 rounded-md p-2">
                <ChevronDown className="text-green-800" />
              </button>
            </div>
            <div className="relative">
              <button className="hover:bg-gray-300 hover:bg-opacity-50 rounded-full p-2 group">
                <User className="text-green-800" />
                <div className="z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0 bg-white">
                  <ul className="py-2 text-sm">
                    <li className="py-2 text-sm hover:bg-green-100 rounded-md"><a href="https://react.dev/learn/react-developer-tools">profile</a></li>
                    <li className="py-2 text-sm hover:bg-green-100 rounded-md"><a href="https://react.dev/learn/react-developer-tools">Setting</a></li>
                    <li className="py-2 text-sm hover:bg-green-100 rounded-md"><a href="/Login">Logout</a></li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
