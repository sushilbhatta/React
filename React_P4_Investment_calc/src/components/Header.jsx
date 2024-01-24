import { useState } from "react";

export default function Header({ onChange, userInput }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Inintial Investment</label>
          <input
            value={userInput.initialInvestment}
            type='number'
            required
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            value={userInput.annualInvestment}
            type='number'
            required
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Expected return</label>
          <input
            value={userInput.expectedReturn}
            type='number'
            onChange={(e) => onChange("expectedReturn", e.target.value)}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            value={userInput.duration}
            type='number'
            required
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
