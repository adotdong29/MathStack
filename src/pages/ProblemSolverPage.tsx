import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, ChevronDown, ChevronUp, Clock, RefreshCw } from 'lucide-react';
import MathEquation from '../components/shared/MathEquation';

// Mock data for competition types and topics
const competitionTypes = [
  'MathCounts', 'AMC 8', 'AMC 10', 'AMC 12', 'ARML', 'AIME', 'USAJMO', 'IMO',
];

const mathTopics = [
  'Algebra', 'Geometry', 'Number Theory', 'Combinatorics', 'Probability', 
  'Sequences', 'Inequalities', 'Complex Numbers'
];

const ProblemSolverPage: React.FC = () => {
  const [inputMethod, setInputMethod] = useState<'text' | 'latex'>('text');
  const [competitionType, setCompetitionType] = useState<string>('');
  const [mathTopic, setMathTopic] = useState<string>('');
  const [problemText, setProblemText] = useState<string>('');
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // Mock solution object that would come from an API
  const mockSolution = {
    original_problem: 'The sum of the first 100 positive integers is 5050. What is the sum of the first 100 positive odd integers?',
    steps: [
      {
        title: "Identify what we're looking for",
        explanation: "We need to find the sum of the first 100 positive odd integers: 1 + 3 + 5 + ... + 199.",
        formulas: ["S = 1 + 3 + 5 + ... + 199"]
      },
      {
        title: "Use the formula for the sum of an arithmetic sequence",
        explanation: "The sum of an arithmetic sequence can be calculated using the formula S = n(a₁ + aₙ)/2, where n is the number of terms, a₁ is the first term, and aₙ is the last term.",
        formulas: ["S = \\frac{n(a_1 + a_n)}{2}"]
      },
      {
        title: "Find the last (100th) odd integer",
        explanation: "The 100th odd integer can be found using the formula for the nth term of an arithmetic sequence: aₙ = a₁ + (n-1)d, where d is the common difference.",
        formulas: [
          "a_n = a_1 + (n-1)d",
          "a_{100} = 1 + (100-1) \\cdot 2",
          "a_{100} = 1 + 99 \\cdot 2",
          "a_{100} = 1 + 198",
          "a_{100} = 199"
        ]
      },
      {
        title: "Apply the arithmetic sequence sum formula",
        explanation: "Now we can substitute the values into the formula for the sum.",
        formulas: [
          "S = \\frac{n(a_1 + a_n)}{2}",
          "S = \\frac{100(1 + 199)}{2}",
          "S = \\frac{100 \\cdot 200}{2}",
          "S = \\frac{20000}{2}",
          "S = 10000"
        ]
      },
      {
        title: "Alternative approach using the formula for the sum of odd numbers",
        explanation: "We can also use the fact that the sum of the first n odd numbers equals n².",
        formulas: [
          "\\sum_{i=1}^{n} (2i-1) = n^2",
          "\\text{For n = 100:}",
          "\\sum_{i=1}^{100} (2i-1) = 100^2",
          "\\sum_{i=1}^{100} (2i-1) = 10000"
        ]
      }
    ],
    answer: "The sum of the first 100 positive odd integers is 10000."
  };

  const handleSolve = () => {
    if (!problemText.trim()) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setShowSolution(true);
      setIsGenerating(false);
    }, 1500);
  };

  const handleReset = () => {
    setProblemText('');
    setShowSolution(false);
    setCompetitionType('');
    setMathTopic('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl md:text-3xl font-display font-semibold text-slate-900 dark:text-white mb-2">
          Math Problem Solver
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Enter your math competition problem to get a detailed step-by-step solution
        </p>
      </motion.div>

      <div className="card p-6">
        <div className={`${isCollapsed ? 'hidden' : 'block'}`}>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Input method:</span>
              <button
                className={`text-sm px-3 py-1 rounded-full ${
                  inputMethod === 'text'
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
                onClick={() => setInputMethod('text')}
              >
                Text
              </button>
              <button
                className={`text-sm px-3 py-1 rounded-full ${
                  inputMethod === 'latex'
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
                onClick={() => setInputMethod('latex')}
              >
                LaTeX
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="competition-type" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Competition Type (Optional)
              </label>
              <select
                id="competition-type"
                className="w-full border border-slate-300 rounded-lg p-2.5 bg-white text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={competitionType}
                onChange={(e) => setCompetitionType(e.target.value)}
              >
                <option value="">Select competition</option>
                {competitionTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="math-topic" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Math Topic (Optional)
              </label>
              <select
                id="math-topic"
                className="w-full border border-slate-300 rounded-lg p-2.5 bg-white text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={mathTopic}
                onChange={(e) => setMathTopic(e.target.value)}
              >
                <option value="">Select topic</option>
                {mathTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="problem-text" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Enter Your Problem
            </label>
            <textarea
              id="problem-text"
              rows={5}
              className="w-full border border-slate-300 rounded-lg p-3 bg-white text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder={
                inputMethod === 'text'
                  ? 'Type your math problem here...'
                  : 'Enter LaTeX formatted problem here (e.g., \\sum_{i=1}^{n} i^2 = ?)'
              }
              value={problemText}
              onChange={(e) => setProblemText(e.target.value)}
            ></textarea>
            {inputMethod === 'latex' && problemText && (
              <div className="mt-2 p-3 border border-slate-200 rounded-lg bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Preview:</p>
                <MathEquation formula={problemText} />
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="btn-primary flex items-center"
              onClick={handleSolve}
              disabled={!problemText.trim() || isGenerating}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> Generating Solution...
                </>
              ) : (
                'Solve Problem'
              )}
            </button>
            <button className="btn-outline" onClick={handleReset}>
              Clear
            </button>
          </div>
        </div>

        <button 
          className="w-full flex justify-center items-center text-sm text-slate-500 dark:text-slate-400 mt-4 hover:text-slate-700 dark:hover:text-slate-300"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <>
              <ChevronDown className="h-4 w-4 mr-1" /> Show Problem Input
            </>
          ) : (
            <>
              <ChevronUp className="h-4 w-4 mr-1" /> Hide Problem Input
            </>
          )}
        </button>
      </div>

      {showSolution && (
        <motion.div
          className="mt-8 card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Solution</h2>
                <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                  {competitionType && (
                    <span className="inline-flex items-center bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded-full text-xs font-medium dark:bg-primary-900/30 dark:text-primary-300">
                      {competitionType}
                    </span>
                  )}
                  {mathTopic && (
                    <span className="inline-flex items-center bg-secondary-50 text-secondary-700 px-2.5 py-0.5 rounded-full text-xs font-medium dark:bg-secondary-900/30 dark:text-secondary-300">
                      {mathTopic}
                    </span>
                  )}
                  <span className="inline-flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1" /> Generated in 1.5s
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-2 text-slate-900 dark:text-white">Original Problem</h3>
              <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50">
                <p className="text-slate-700 dark:text-slate-300">{mockSolution.original_problem}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-lg mb-4 text-slate-900 dark:text-white">Step-by-Step Solution</h3>
              <div className="space-y-4">
                {mockSolution.steps.map((step, index) => (
                  <div key={index} className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-2">{step.title}</h4>
                        <p className="text-slate-700 dark:text-slate-300 mb-3">{step.explanation}</p>
                        {step.formulas.map((formula, fIndex) => (
                          <div key={fIndex} className="my-2">
                            <MathEquation formula={formula} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 p-4 rounded-lg dark:bg-primary-900/20 border border-primary-100 dark:border-primary-900/50">
              <h3 className="font-semibold text-primary-800 dark:text-primary-300 mb-2">Answer</h3>
              <p className="text-primary-700 dark:text-primary-300">{mockSolution.answer}</p>
            </div>
          </div>
        </motion.div>
      )}

      {!showSolution && !isGenerating && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Tips for Best Results</h2>
            <ul className="space-y-3">
              {[
                'Be as specific and clear as possible when stating the problem',
                'Include all relevant information (constants, variables, constraints)',
                'For geometry problems, specify coordinate systems or measurements',
                'Select the competition type for specialized solving techniques',
                'Choose a mathematical topic for more focused solutions'
              ].map((tip, index) => (
                <li key={index} className="flex">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Supported Problem Types</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
              {[
                'Algebra & Equations',
                'Geometry & Trigonometry',
                'Number Theory',
                'Combinatorics',
                'Probability & Statistics',
                'Sequences & Series',
                'Calculus',
                'Inequalities',
                'Complex Numbers',
                'Functional Equations',
                'Linear Algebra',
                'Polynomials'
              ].map((topic, index) => (
                <div key={index} className="flex items-center">
                  <Circle className="h-5 w-5 mr-2 text-primary-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemSolverPage;