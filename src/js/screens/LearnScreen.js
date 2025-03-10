import React, { useState } from 'react';

const LearnScreen = () => {
  const [selectedTopic, setSelectedTopic] = useState('limits');
  
  const topics = [
    {
      id: 'limits',
      title: 'Limits & Continuity',
      icon: '📈',
      content: `
        <h2>Limits in Calculus</h2>
        <p>
          A limit describes the behavior of a function as its input approaches a specific value. 
          The concept of a limit is the foundation of calculus.
        </p>
        
        <div class="math-formula">
          lim<sub>x→a</sub> f(x) = L
        </div>
        
        <p>
          This notation means: "The limit of f(x) as x approaches a equals L." In other words, 
          as x gets closer and closer to a, the value of f(x) gets closer and closer to L.
        </p>
        
        <h3>One-Sided Limits</h3>
        <p>
          We can approach a value from the left (values less than a) or from the right (values greater than a).
        </p>
        
        <div class="math-formula">
          lim<sub>x→a<sup>-</sup></sub> f(x) = L<sub>1</sub>  (left-hand limit)<br>
          lim<sub>x→a<sup>+</sup></sub> f(x) = L<sub>2</sub>  (right-hand limit)
        </div>
        
        <p>
          For a limit to exist, both the left-hand and right-hand limits must exist and be equal.
        </p>
        
        <h3>Limits and Continuity</h3>
        <p>
          A function f is continuous at a point a if:
        </p>
        <ol>
          <li>f(a) is defined</li>
          <li>lim<sub>x→a</sub> f(x) exists</li>
          <li>lim<sub>x→a</sub> f(x) = f(a)</li>
        </ol>
        
        <p>
          If any of these conditions fail, the function has a discontinuity at point a.
        </p>
      `
    },
    {
      id: 'derivatives',
      title: 'Derivatives',
      icon: '📉',
      content: `
        <h2>Derivatives in Calculus</h2>
        <p>
          The derivative of a function represents its rate of change at a given point. 
          Geometrically, it gives the slope of the tangent line to the function's graph at that point.
        </p>
        
        <div class="math-formula">
          f'(x) = lim<sub>h→0</sub> [f(x+h) - f(x)] / h
        </div>
        
        <h3>Basic Derivative Rules</h3>
        <ul>
          <li><strong>Constant Rule:</strong> If f(x) = c, then f'(x) = 0</li>
          <li><strong>Power Rule:</strong> If f(x) = x<sup>n</sup>, then f'(x) = n·x<sup>n-1</sup></li>
          <li><strong>Sum Rule:</strong> If f(x) = g(x) + h(x), then f'(x) = g'(x) + h'(x)</li>
          <li><strong>Product Rule:</strong> If f(x) = g(x)·h(x), then f'(x) = g'(x)·h(x) + g(x)·h'(x)</li>
          <li><strong>Quotient Rule:</strong> If f(x) = g(x)/h(x), then f'(x) = [g'(x)·h(x) - g(x)·h'(x)] / [h(x)]<sup>2</sup></li>
          <li><strong>Chain Rule:</strong> If f(x) = g(h(x)), then f'(x) = g'(h(x))·h'(x)</li>
        </ul>
        
        <h3>Applications of Derivatives</h3>
        <ul>
          <li><strong>Finding Rates of Change:</strong> Velocity, acceleration, growth rates</li>
          <li><strong>Optimization:</strong> Finding maximum and minimum values</li>
          <li><strong>Curve Sketching:</strong> Determining where functions increase/decrease</li>
          <li><strong>Approximation:</strong> Linear approximation using tangent lines</li>
        </ul>
      `
    },
    {
      id: 'integrals',
      title: 'Integrals',
      icon: '📊',
      content: `
        <h2>Integrals in Calculus</h2>
        <p>
          Integration is the reverse process of differentiation. It helps us find the accumulated effect 
          of a function over an interval.
        </p>
        
        <h3>Indefinite Integrals</h3>
        <p>
          An indefinite integral represents the collection of all antiderivatives of a function.
        </p>
        
        <div class="math-formula">
          ∫f(x)dx = F(x) + C
        </div>
        
        <p>
          where F'(x) = f(x) and C is the constant of integration.
        </p>
        
        <h3>Definite Integrals</h3>
        <p>
          A definite integral represents the net area between the function's graph and the x-axis 
          over a given interval.
        </p>
        
        <div class="math-formula">
          ∫<sub>a</sub><sup>b</sup>f(x)dx = F(b) - F(a)
        </div>
        
        <p>
          where F is an antiderivative of f.
        </p>
        
        <h3>Basic Integration Rules</h3>
        <ul>
          <li><strong>Power Rule:</strong> ∫x<sup>n</sup>dx = x<sup>n+1</sup>/(n+1) + C, for n ≠ -1</li>
          <li><strong>Logarithmic Rule:</strong> ∫(1/x)dx = ln|x| + C</li>
          <li><strong>Exponential Rule:</strong> ∫e<sup>x</sup>dx = e<sup>x</sup> + C</li>
          <li><strong>Sum Rule:</strong> ∫[f(x) + g(x)]dx = ∫f(x)dx + ∫g(x)dx</li>
          <li><strong>Constant Multiple Rule:</strong> ∫c·f(x)dx = c·∫f(x)dx</li>
        </ul>
        
        <h3>Applications of Integration</h3>
        <ul>
          <li><strong>Area Calculation:</strong> Finding areas under curves</li>
          <li><strong>Volume Calculation:</strong> Finding volumes of revolution</li>
          <li><strong>Length of Curves:</strong> Calculating arc length</li>
          <li><strong>Physics Applications:</strong> Work, center of mass, fluid pressure</li>
        </ul>
      `
    },
    {
      id: 'applications',
      title: 'Applications',
      icon: '🔬',
      content: `
        <h2>Applications of Calculus</h2>
        <p>
          Calculus has numerous real-world applications across science, engineering, economics, and more.
        </p>
        
        <h3>Physics Applications</h3>
        <ul>
          <li><strong>Motion:</strong> Velocity is the derivative of position, and acceleration is the derivative of velocity</li>
          <li><strong>Work:</strong> Work is the integral of force over distance</li>
          <li><strong>Electricity and Magnetism:</strong> Maxwell's equations involve derivatives and integrals</li>
        </ul>
        
        <h3>Engineering Applications</h3>
        <ul>
          <li><strong>Optimization:</strong> Finding the most efficient designs</li>
          <li><strong>Control Systems:</strong> Modeling and controlling dynamic systems</li>
          <li><strong>Signal Processing:</strong> Analyzing and transforming signals</li>
        </ul>
        
        <h3>Economics Applications</h3>
        <ul>
          <li><strong>Marginal Analysis:</strong> Studying how small changes affect economic outcomes</li>
          <li><strong>Optimization:</strong> Maximizing profit or minimizing cost</li>
          <li><strong>Growth Models:</strong> Modeling the growth of economies over time</li>
        </ul>
        
        <h3>Biology and Medicine</h3>
        <ul>
          <li><strong>Population Growth:</strong> Modeling how populations change over time</li>
          <li><strong>Epidemiology:</strong> Modeling the spread of diseases</li>
          <li><strong>Pharmacokinetics:</strong> Modeling how drugs are processed in the body</li>
        </ul>
      `
    }
  ];
  
  const currentTopic = topics.find(topic => topic.id === selectedTopic);
  
  return (
    <div className="learn-screen">
      <h1>Learn Calculus</h1>
      
      <div className="topic-selector">
        {topics.map(topic => (
          <button
            key={topic.id}
            className={`topic-button ${selectedTopic === topic.id ? 'active' : ''}`}
            onClick={() => setSelectedTopic(topic.id)}
          >
            <span className="topic-icon">{topic.icon}</span>
            <span className="topic-title">{topic.title}</span>
          </button>
        ))}
      </div>
      
      <div className="topic-content" dangerouslySetInnerHTML={{ __html: currentTopic.content }} />
    </div>
  );
};

export default LearnScreen;
