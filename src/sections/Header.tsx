import Coin from "@/components/Coin";
import Loader from "@/components/Loader";
import useFetch from "@/hooks/useFetch";
import User from "@/types/User";

const Header = () => {
  const { loading, data } = useFetch<User[]>(
    "https://fouaille.bde-tps.fr/api/challenge/top"
  );

  const color = (index: number) => {
    switch (index) {
      case 0:
        return "gold";
      case 1:
        return "silver";
      case 2:
        return "bronze";
      default:
        return "red";
    }
  };

  return (
    <section className="bg-header">
      <h1>Défis de l'intégration</h1>
      <div className="flex justify-center items-center w-full gap-44 md:flex-row flex-col">
        <div className="flex-1 flex justify-end md:order-1 order-2">
          <img src="./images/bus.png" width={400} height={400} loading="lazy" />
        </div>
        <div className="flex flex-col gap-4 w-fit relative flex-1 md:order-2 order-1">
          {loading || !data ? (
            <Loader />
          ) : (
            data.map((user, index) => (
              <div key={user.id} className="flex items-center gap-8">
                <Coin content={index + 1} color={color(index)} />
                <div>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <span className="text-lg">{user.points} points</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
