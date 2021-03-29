import gameMath from "../utils/math";

const StarsDisplay = (props: any) => (
  <>
    {gameMath.range(1, props.count).map((starId) => (
      <div key={props.starId} className="star" />
    ))}
  </>
);

export default StarsDisplay;
