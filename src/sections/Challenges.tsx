import Coin from "@/components/Coin";
import Loader from "@/components/Loader";
import useFetch from "@/hooks/useFetch";
import Challenge from "@/types/Challenge";

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
            <div
              key={challenge.id}
              className="flex bg-challenges2 gap-4 items-center py-3 px-5 rounded-xl"
            >
              <Coin color="gold" content={challenge.points} size="small" />
              <span className="md:text-xl text-lg flex-1">
                {challenge.description}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Challenges;
