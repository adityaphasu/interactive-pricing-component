import PriceCard from "./components/PriceCard";

function App() {
  return (
    <main>
      <div className="intro">
        <h1>Simple, traffic-based pricing</h1>
        <p className="intro__text">Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <PriceCard />
    </main>
  );
}

export default App;
