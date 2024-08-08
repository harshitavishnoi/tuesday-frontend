import Header from "../components/Header";
import { Link } from "react-router-dom";
import SignupButton from "../components/SignupButton";
import LoginButton from "../components/LoginButton";

function Home() {
  return (
    <body>
      <Header />
      <section>
        <div>
          <div className="m-5">
            <h1 className="text-3xl font-bold flex justify-center items-center ">
              Welcome to tuesday.com
            </h1>
          </div>
          <div className="flex justify-center m-5">
            <Link to="./Signup">
              <SignupButton />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to="./Login">
              <LoginButton />
            </Link>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Home;
