import Coin from "@/components/Coin";
import Loader from "@/components/Loader";
import useFetch from "@/hooks/useFetch";
import Challenge from "@/types/Challenge";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Challenges = () => {
  const { data, loading } = useFetch<Challenge[]>(
    "https://fouaille.bde-tps.fr/api/challenge"
  );
  return (
    <section className="bg-challenges items-center flex flex-col text-white px-10 py-24 gap-24">
      <h1>Les défis</h1>
      {loading || !data ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4">
          {data.map((challenge) => (
            <ChallengeBox challenge={challenge} key={challenge.id} />
          ))}
        </div>
      )}
    </section>
  );
};

const ChallengeBox = ({ challenge }: { challenge: Challenge }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className="rounded-xl overflow-hidden"
      key={challenge.id}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      <div className="flex bg-challenges2 gap-4 items-center py-3 px-5">
        <Coin color="gold" content={challenge.points} size="small" />
        <span className="md:text-xl text-lg flex-1">{challenge.name}</span>
        <span className="text-2xl">
          {active ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </div>
      <div
        className={`overflow-hidden bg-challenges3 text-center max-h-0 transition ${
          active ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="p-2">{challenge.description}</div>
      </div>
    </div>
  );
};

export default Challenges;
