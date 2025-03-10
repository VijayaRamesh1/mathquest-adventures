// Game levels with educational content

const levels = {
  // Chapter 1: The Kingdom of Limits
  1: {
    id: 1,
    title: "Welcome to the Kingdom",
    chapter: "limits",
    description: "Your journey begins at the gates of the Kingdom of Limits. To enter, you must understand the basic concept of limits in calculus.",
    objectives: ["Learn the concept of limits", "Solve simple limit problems", "Understand limit notation"],
    theory: `
      <h3>Introduction to Limits</h3>
      <p>In calculus, a limit is the value that a function approaches as the input approaches some value. Limits are essential for understanding calculus concepts like derivatives and integrals.</p>
      
      <div class="math-formula">
        The notation for a limit is: lim<sub>x→a</sub> f(x) = L
      </div>
      
      <p>This means that as x gets closer and closer to a, the function f(x) gets closer and closer to L.</p>
      
      <h3>Example</h3>
      <p>Consider the function f(x) = (x² - 1) / (x - 1)</p>
      <p>Find lim<sub>x→1</sub> f(x)</p>
      
      <p>If we try to evaluate f(1) directly, we get 0/0, which is undefined. However, we can simplify the function:</p>
      
      <div class="math-formula">
        f(x) = (x² - 1) / (x - 1) = ((x - 1)(x + 1)) / (x - 1) = x + 1
      </div>
      
      <p>Now we can evaluate lim<sub>x→1</sub> f(x) = lim<sub>x→1</sub> (x + 1) = 1 + 1 = 2</p>
    `,
    challenges: [
      {
        id: "1-1",
        question: "Calculate the limit: lim<sub>x→2</sub> (x + 3)",
        options: ["4", "5", "6", "Undefined"],
        correctAnswer: "5",
        hint: "Substitute x = 2 into the expression x + 3"
      },
      {
        id: "1-2",
        question: "Calculate the limit: lim<sub>x→0</sub> (sin(x) / x)",
        options: ["0", "1", "∞", "Undefined"],
        correctAnswer: "1",
        hint: "This is a special limit in calculus. As x approaches 0, sin(x)/x approaches 1."
      }
    ],
    visualization: {
      type: "limitGraph",
      function: "x => x + 3",
      point: 2
    }
  },
  
  // Additional levels for Chapter 1: The Kingdom of Limits
  2: {
    id: 2,
    title: "The Bridge of Continuity",
    chapter: "limits",
    description: "You've reached the Bridge of Continuity. To cross, you must understand when functions are continuous and when they have discontinuities.",
    objectives: ["Understand function continuity", "Identify points of discontinuity", "Analyze limits at discontinuities"],
    theory: `
      <h3>Continuity</h3>
      <p>A function is continuous at a point if the limit at that point exists and equals the function value.</p>
      
      <div class="math-formula">
        f(x) is continuous at x = a if:<br>
        1. f(a) is defined<br>
        2. lim<sub>x→a</sub> f(x) exists<br>
        3. lim<sub>x→a</sub> f(x) = f(a)
      </div>
      
      <h3>Types of Discontinuities</h3>
      <ul>
        <li><strong>Removable discontinuity:</strong> The limit exists but doesn't equal the function value (or the function is undefined at that point)</li>
        <li><strong>Jump discontinuity:</strong> The left and right limits exist but are different</li>
        <li><strong>Infinite discontinuity:</strong> The limit is infinite</li>
      </ul>
    `,
    challenges: [
      {
        id: "2-1",
        question: "Is the function f(x) = (x² - 4) / (x - 2) continuous at x = 2?",
        options: ["Yes", "No, it has a removable discontinuity", "No, it has a jump discontinuity", "No, it has an infinite discontinuity"],
        correctAnswer: "No, it has a removable discontinuity",
        hint: "Evaluate the limit at x = 2 and compare with f(2)"
      }
    ],
    visualization: {
      type: "continuityGraph",
      functions: ["x => (x**2 - 4) / (x - 2)", "x => x + 2"],
      points: [2]
    }
  },
  
  // First level from Chapter 2: The Derivative Forest
  6: {
    id: 6,
    title: "Entering the Derivative Forest",
    chapter: "derivatives",
    description: "You've arrived at the mystical Derivative Forest. To proceed, you need to understand the concept of derivatives and their geometric interpretation.",
    objectives: ["Understand the definition of a derivative", "Interpret derivatives geometrically", "Calculate basic derivatives"],
    theory: `
      <h3>What is a Derivative?</h3>
      <p>The derivative of a function represents the rate of change or slope of the function at a given point.</p>
      
      <div class="math-formula">
        The derivative of f(x) is defined as:<br>
        f'(x) = lim<sub>h→0</sub> [f(x+h) - f(x)] / h
      </div>
      
      <h3>Geometric Interpretation</h3>
      <p>The derivative at a point gives the slope of the tangent line to the function's graph at that point.</p>
      
      <h3>Basic Derivative Rules</h3>
      <ul>
        <li>Constant Rule: If f(x) = c, then f'(x) = 0</li>
        <li>Power Rule: If f(x) = x<sup>n</sup>, then f'(x) = n·x<sup>n-1</sup></li>
        <li>Sum Rule: If f(x) = g(x) + h(x), then f'(x) = g'(x) + h'(x)</li>
      </ul>
    `,
    challenges: [
      {
        id: "6-1",
        question: "Find the derivative of f(x) = 3x² + 2x - 5",
        options: ["f'(x) = 6x + 2", "f'(x) = 3x² + 2", "f'(x) = 6x² + 2x", "f'(x) = 6x"],
        correctAnswer: "f'(x) = 6x + 2",
        hint: "Use the power rule and sum rule"
      }
    ],
    visualization: {
      type: "derivativeGraph",
      function: "x => 3*x**2 + 2*x - 5",
      derivative: "x => 6*x + 2",
      point: 1
    }
  },
  
  // First level from Chapter 3: The Integral Mountains
  11: {
    id: 11,
    title: "Scaling the Integral Mountains",
    chapter: "integrals",
    description: "You've reached the base of the Integral Mountains. To climb, you must grasp the concept of integrals and their relation to areas.",
    objectives: ["Understand the concept of integration", "Learn about definite and indefinite integrals", "Calculate basic integrals"],
    theory: `
      <h3>What is an Integral?</h3>
      <p>Integration is the opposite of differentiation. It helps us find the original function (antiderivative) from its derivative.</p>
      
      <div class="math-formula">
        The indefinite integral of f(x) is written as:<br>
        ∫f(x)dx = F(x) + C<br>
        where F'(x) = f(x) and C is a constant
      </div>
      
      <h3>Definite Integrals</h3>
      <p>A definite integral represents the area under a curve between two points.</p>
      
      <div class="math-formula">
        The definite integral from a to b is:<br>
        ∫<sub>a</sub><sup>b</sup>f(x)dx = F(b) - F(a)<br>
        where F is the antiderivative of f
      </div>
      
      <h3>Basic Integration Rules</h3>
      <ul>
        <li>Power Rule: ∫x<sup>n</sup>dx = x<sup>n+1</sup>/(n+1) + C, for n ≠ -1</li>
        <li>Sum Rule: ∫[f(x) + g(x)]dx = ∫f(x)dx + ∫g(x)dx</li>
        <li>Constant Multiple Rule: ∫c·f(x)dx = c·∫f(x)dx</li>
      </ul>
    `,
    challenges: [
      {
        id: "11-1",
        question: "Find the indefinite integral of f(x) = 2x + 3",
        options: ["x² + 3x + C", "x² + 3x", "2x² + 3x + C", "x² + 3x + 5"],
        correctAnswer: "x² + 3x + C",
        hint: "Use the power rule and constant multiple rule"
      }
    ],
    visualization: {
      type: "integralGraph",
      function: "x => 2*x + 3",
      lowerBound: 0,
      upperBound: 2
    }
  }
};

export default levels;
