import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle, Check, X, ChevronRight, RotateCcw } from 'lucide-react';
import MathEquation from '../shared/MathEquation';

interface ProblemType {
  id: number;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  count: number;
  timeLimit: number;
}

const problemTypes: ProblemType[] = [
  {
    id: 1,
    name: 'AMC 10 Practice',
    description: 'A set of problems similar to those on the AMC 10 competition',
    difficulty: 'medium',
    count: 5,
    timeLimit: 15
  },
  {
    id: 2,
    name: 'MathCounts Sprint',
    description: 'Quick-solve problems from MathCounts competitions',
    difficulty: 'medium',
    count: 10,
    timeLimit: 20
  },
  {
    id: 3,
    name: 'AIME Preparation',
    description: 'Challenging problems to prepare for the AIME',
    difficulty: 'hard',
    count: 3,
    timeLimit: 15
  },
  {
    id: 4,
    name: 'Algebra Fundamentals',
    description: 'Essential algebra problems for competition preparation',
    difficulty: 'easy',
    count: 7,
    timeLimit: 15
  },
  {
    id: 5,
    name: 'Geometry Challenge',
    description: 'Geometry problems focusing on triangles, circles, and polygons',
    difficulty: 'medium',
    count: 5,
    timeLimit: 15
  },
  {
    id: 6,
    name: 'Number Theory Basics',
    description: 'Foundational number theory problems for competitions',
    difficulty: 'easy',
    count: 8,
    timeLimit: 15
  }
];

// Mock problem data
const mockProblem = {
  id: 1,
  text: 'A rectangular box has dimensions 10 cm, 15 cm, and 8 cm. What is the distance from one corner of the box to the opposite corner?',
  latex: '\\text{A rectangular box has dimensions } 10 \\text{ cm}, 15 \\text{ cm, and } 8 \\text{ cm. What is the distance from one corner of the box to the opposite corner?}',
  answers: [
    { id: 'A', text: '17 cm' },
    { id: 'B', text: '19.7 cm' },
    { id: 'C', text: '21.4 cm' },
    { id: 'D', text: '23 cm' },
    { id: 'E', text: '25 cm' }
  ],
  correctAnswer: 'B',
  solution: {
    steps: [
      "We need to find the distance between opposite corners of a rectangular box.",
      "This is a three-dimensional application of the Pythagorean theorem.",
      "If we denote the dimensions as a = 10 cm, b = 15 cm, and c = 8 cm, then the distance d between opposite corners is given by:",
      "d = \\sqrt{a^2 + b^2 + c^2}",
      "d = \\sqrt{10^2 + 15^2 + 8^2}",
      "d = \\sqrt{100 + 225 + 64}",
      "d = \\sqrt{389} \\approx 19.7 \\text{ cm}"
    ]
  }
};

const PracticeModePage: React.FC = () => {
  const [selectedPractice, setSelectedPractice] = useState<ProblemType | null>(null);
  const [practiceStarted, setPracticeStarted] = useState<boolean>(false);
  const [currentProblem, setCurrentProblem] = useState<number>(1);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const handleSelectPractice = (practice: ProblemType) => {
    setSelectedPractice(practice);
    setTimeLeft(practice.timeLimit * 60); // Convert minutes to seconds
  };

  const startPractice = () => {
    if (!selectedPractice) return;
    setPracticeStarted(true);
    setIsTimerRunning(true);
    setCurrentProblem(1);
    setSelectedAnswer(null);
    setShowSolution(false);
  };

  const submitAnswer = () => {
    setShowSolution(true);
    setIsTimerRunning(false);
  };

  const nextProblem = () => {
    if (!selectedPractice) return;
    if (currentProblem < selectedPractice.count) {
      setCurrentProblem(currentProblem + 1);
      setSelectedAnswer(null);
      setShowSolution(false);
      setIsTimerRunning(true);
    }
  };

  const resetPractice = () => {
    setPracticeStarted(false);
    setSelectedPractice(null);
    setSelectedAnswer(null);
    setShowSolution(false);
    setIsTimerRunning(false);
  };

  // Format time in MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Difficulty badge color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'hard':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300';
    }
  };

  React.useEffect(() => {
    let timer: number | undefined;
    
    if (isTimerRunning && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsTimerRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      setShowSolution(true);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning, timeLeft]);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl md:text-3xl font-display font-semibold text-slate-900 dark:text-white mb-2">
          Practice Mode
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Test your skills with timed problem sets from various math competitions
        </p>
      </motion.div>

      {!practiceStarted ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemTypes.map((practice) => (
            <motion.div
              key={practice.id}
              className={`card cursor-pointer overflow-hidden transition-shadow hover:shadow-lg ${
                selectedPractice?.id === practice.id ? 'ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-slate-900' : ''
              }`}
              onClick={() => handleSelectPractice(practice)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{practice.name}</h2>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getDifficultyColor(practice.difficulty)}`}>
                    {practice.difficulty.charAt(0).toUpperCase() + practice.difficulty.slice(1)}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{practice.description}</p>
                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> {practice.timeLimit} mins
                  </span>
                  <span>{practice.count} problems</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{selectedPractice?.name}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Problem {currentProblem} of {selectedPractice?.count}
              </p>
            </div>
            <div className="flex items-center">
              {timeLeft <= 30 && isTimerRunning ? (
                <span className="text-red-600 dark:text-red-400 font-medium flex items-center animate-pulse">
                  <Clock className="h-5 w-5 mr-1" /> {formatTime(timeLeft)}
                </span>
              ) : (
                <span className="text-slate-700 dark:text-slate-300 font-medium flex items-center">
                  <Clock className="h-5 w-5 mr-1" /> {formatTime(timeLeft)}
                </span>
              )}
            </div>
          </div>
          
          <div className="mb-8">
            <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50 mb-2">
              <MathEquation formula={mockProblem.latex} />
            </div>
          </div>
          
          <div className="space-y-3 mb-8">
            {mockProblem.answers.map((answer) => (
              <div 
                key={answer.id}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors
                  ${selectedAnswer === answer.id 
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 dark:border-primary-500/70' 
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800/50'
                  }
                  ${showSolution && answer.id === mockProblem.correctAnswer 
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/30 dark:border-green-500/70' 
                    : ''}
                  ${showSolution && selectedAnswer === answer.id && selectedAnswer !== mockProblem.correctAnswer 
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/30 dark:border-red-500/70' 
                    : ''}
                `}
                onClick={() => !showSolution && setSelectedAnswer(answer.id)}
              >
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-white border border-slate-300 flex items-center justify-center mr-3 dark:bg-slate-800 dark:border-slate-700">
                  {answer.id}
                </div>
                <span className="text-slate-800 dark:text-white">{answer.text}</span>
                {showSolution && answer.id === mockProblem.correctAnswer && (
                  <Check className="ml-auto h-5 w-5 text-green-500" />
                )}
                {showSolution && selectedAnswer === answer.id && selectedAnswer !== mockProblem.correctAnswer && (
                  <X className="ml-auto h-5 w-5 text-red-500" />
                )}
              </div>
            ))}
          </div>
          
          {!showSolution ? (
            <div className="flex justify-end">
              <button 
                className="btn-primary" 
                onClick={submitAnswer}
                disabled={!selectedAnswer}
              >
                Submit Answer
              </button>
            </div>
          ) : (
            <div className="border-t border-slate-200 dark:border-slate-700 pt-6 mt-6">
              <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-white">Solution</h3>
              <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50 mb-6">
                {mockProblem.solution.steps.map((step, index) => (
                  <div key={index} className="mb-2">
                    {step.includes('=') || step.includes('\\sqrt') ? (
                      <MathEquation formula={step} />
                    ) : (
                      <p className="text-slate-700 dark:text-slate-300">{index + 1}. {step}</p>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between">
                <button 
                  className="flex items-center text-slate-700 hover:text-red-600 dark:text-slate-300 dark:hover:text-red-400"
                  onClick={resetPractice}
                >
                  <RotateCcw className="h-4 w-4 mr-1" /> Quit Practice
                </button>
                
                {currentProblem < (selectedPractice?.count || 0) ? (
                  <button 
                    className="btn-primary flex items-center"
                    onClick={nextProblem}
                  >
                    Next Problem <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                ) : (
                  <button 
                    className="btn-secondary"
                    onClick={resetPractice}
                  >
                    Finish Practice
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      
      {selectedPractice && !practiceStarted && (
        <motion.div 
          className="mt-8 card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              {selectedPractice.name}
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              {selectedPractice.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-between mb-6">
            <div>
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Practice Details</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="w-40">Difficulty</span>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getDifficultyColor(selectedPractice.difficulty)}`}>
                    {selectedPractice.difficulty.charAt(0).toUpperCase() + selectedPractice.difficulty.slice(1)}
                  </span>
                </li>
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="w-40">Problems</span>
                  <span>{selectedPractice.count}</span>
                </li>
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="w-40">Time Limit</span>
                  <span>{selectedPractice.timeLimit} minutes</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col justify-between">
              <div className="bg-yellow-50 p-4 rounded-lg dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/50 mb-4">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Timer will start as soon as you begin the practice. You'll have {selectedPractice.timeLimit} minutes to complete all problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <button 
              className="btn-outline"
              onClick={() => setSelectedPractice(null)}
            >
              Cancel
            </button>
            <button 
              className="btn-primary"
              onClick={startPractice}
            >
              Start Practice
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PracticeModePage;