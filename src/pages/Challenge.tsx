import Loader from "@/components/Loader";
import UserScore from "@/components/UserScore";
import useFetch from "@/hooks/useFetch";
import User from "@/types/User";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Challenge = () => {
  const { data, loading } = useFetch<User[]>(
    "https://fouaille.bde-tps.fr/api/challenge/leaderboard"
  );
  const navigate = useNavigate();
  return (
    <div className="text-white flex flex-col gap-24 items-center p-24">
      <div className="flex justify-between items-center w-full">
        <button onClick={() => navigate("/")}>
          <FaAngleLeft /> Accueil
        </button>
        <h1>Classement</h1>
        <div />
      </div>
      <div className="flex flex-col gap-5">
        {loading || !data ? (
          <Loader />
        ) : (
          <>
            {data.map((user, index) => (
              <UserScore user={user} index={index} key={user.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Challenge;
