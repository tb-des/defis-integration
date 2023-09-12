import Loader from "@/components/Loader";
import UserScore from "@/components/UserScore";
import useFetch from "@/hooks/useFetch";
import User from "@/types/User";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { loading, data } = useFetch<User[]>(
    "https://fouaille.bde-tps.fr/api/challenge/top"
  );
  const navigate = useNavigate();

  return (
    <section className="bg-header">
      <h1>Défis de l'intégration</h1>
      <div className="flex justify-center items-center w-full gap-44 md:flex-row flex-col">
        <div className="flex-1 flex justify-end md:order-1 order-2">
          <img src="./images/bus.png" width={400} height={400} loading="lazy" />
        </div>
        <div className="flex-1 md:order-2 order-1">
          {loading || !data ? (
            <Loader />
          ) : (
            <div className="w-fit flex flex-col gap-4">
              {data.map((user, index) => (
                <UserScore user={user} index={index} key={user.id} />
              ))}
              <button onClick={() => navigate("/challenge")}>
                Voir plus <FaAngleRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
