import User from "@/types/User";
import Coin from "./Coin";

const UserScore = ({ user, index }: { user: User; index: number }) => {
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
    <div className="flex items-center gap-8">
      <Coin content={index + 1} color={color(index)} />
      <div>
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <span className="text-lg">{user.points} défis complétés et {user.category} catégories complétées</span>
      </div>
    </div>
  );
};

export default UserScore;
