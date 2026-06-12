export default function Instruction() {
  const steps = [
    { id: 1, title: "Download", text: "Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.", img: "/images/instruction-1.png" },
    { id: 2, title: "Connect Wallet", text: "Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.", img: "/images/instruction-2.png" },
    { id: 3, title: "Start Trading", text: "Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.", img: "/images/instruction-3.png" },
    { id: 4, title: "Earn Money", text: "Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.", img: "/images/instruction-4.png" },
  ];

  return (
    <section className="section instruction active" id="instruction" aria-label="instruction" data-section>
      <div className="container">
        <h2 className="h2 section-title">How It Work</h2>
        <p className="section-text">
          Stacks is a production-ready library of stackable content blocks built in React Native.
        </p>
        <ul className="instruction-list">
          {steps.map((step) => (
            <li key={step.id}>
              <div className="instruction-card">
                <figure className="card-banner">
                  <img src={step.img} width="96" height="96" loading="lazy" alt={`Step ${step.id}`} className="img" />
                </figure>
                <p className="card-subtitle">Step {step.id}</p>
                <h3 className="h3 card-title">{step.title}</h3>
                <p className="card-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}