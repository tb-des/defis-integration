const Coin = ({
  color,
  content,
  size = "large",
}: {
  color: "gold" | "silver" | "bronze" | "red";
  content: number;
  size?: "large" | "small";
}) => {
  const foreground = {
    gold: "#FFC843",
    silver: "#A1A1A1",
    bronze: "#EF9C50",
    red: "#F19C9C",
  };
  const background = {
    gold: "#D38700",
    silver: "#7C7C7C",
    bronze: "#DA6C06",
    red: "#E92252",
  };

  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        backgroundColor: background[color],
        color: foreground[color],
        borderColor: foreground[color],
        height: size === "large" ? 100 : 50,
        width: size === "large" ? 100 : 50,
        fontSize: size === "large" ? 45 : 24,
        borderWidth: size === "large" ? 10 : 5,
      }}
    >
      {content}
    </div>
  );
};

export default Coin;
