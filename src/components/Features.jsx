import Check from "../assets/images/icon-check.svg";

const features = ["Unlimited websites", "100% data ownership", "Email reports"];

function Features() {
  return (
    <div className="features">
      <ul className="features__list">
        {features.map((feature, index) => (
          <li key={index} className="features__item">
            <img src={Check} alt="" className="features__check" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
