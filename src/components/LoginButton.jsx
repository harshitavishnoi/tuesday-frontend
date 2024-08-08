import { ArrowRight } from "lucide-react";
function LoginButton() {
  return (
    <button
      type="submit"
      className="bg-sky-600 px-4 py-2 text-white hover:bg-sky-800 w-80 p-2 rounded-md"
    >
      <div className="flex  justify-center items-center gap-1 hover:scale-110 ">
        Login <ArrowRight height={20} width={25} />
      </div>
    </button>
  );
}

export default LoginButton;
