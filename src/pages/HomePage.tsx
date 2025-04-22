import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Book, Clock, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MathEquation from '../shared/MathEquation';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Calculator className="h-6 w-6 text-primary-600" />,
      title: 'Advanced Problem Solver',
      description: 'Get step-by-step solutions to complex mathematical problems with detailed explanations.',
      link: '/solver'
    },
    {
      icon: <Book className="h-6 w-6 text-primary-600" />,
      title: 'Formula Reference',
      description: 'Access a comprehensive library of formulas and techniques used in math competitions.',
      link: '/formulas'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: 'Timed Practice',
      description: 'Prepare for competitions with timed practice sessions mirroring real test conditions.',
      link: '/practice'
    },
    {
      icon: <Award className="h-6 w-6 text-primary-600" />,
      title: 'Competition Topics',
      description: 'Problems categorized by competition type and difficulty level from AMC to AIME and beyond.',
      link: '/solver'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-3xl md:text-5xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Solve Complex Math Problems with AI
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl opacity-90 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get step-by-step solutions for MathCounts, AMC 10/12, ARML, AIME and other math competitions
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                to="/solver" 
                className="bg-white text-primary-700 hover:bg-slate-100 shadow-lg font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Try Problem Solver
              </Link>
              <Link 
                to="/practice" 
                className="bg-primary-700/30 hover:bg-primary-700/40 text-white border border-white/20 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Practice Mode
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Example Problem Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-slate-900 dark:text-white mb-4">
                See MathSolver AI in Action
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Watch how our AI solves complex competition problems step-by-step
              </p>
            </div>
            
            <div className="card p-6 md:p-8">
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">AMC 10 Sample Problem</h3>
                <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50">
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    The product of two positive numbers is 1000. Their sum is minimum. Find the sum.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-white">Solution</h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50">
                    <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-2">Step 1: Set up the problem</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">Let's denote the two numbers as x and y. We know that:</p>
                    <div className="my-2">
                      <MathEquation formula="xy = 1000" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">We want to minimize the sum S = x + y.</p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50">
                    <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-2">Step 2: Apply AM-GM inequality</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">By the AM-GM inequality, we know that:</p>
                    <div className="my-2">
                      <MathEquation formula="\frac{x + y}{2} \geq \sqrt{xy}" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">The equality holds when x = y. Therefore:</p>
                    <div className="my-2">
                      <MathEquation formula="x + y \geq 2\sqrt{xy} = 2\sqrt{1000} = 2 \cdot 10\sqrt{10}" />
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50">
                    <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-2">Step 3: Find the minimum sum</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">The minimum sum occurs when x = y, which means:</p>
                    <div className="my-2">
                      <MathEquation formula="x^2 = 1000" />
                      <MathEquation formula="x = \sqrt{1000} \approx 31.623" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">So the minimum sum is:</p>
                    <div className="my-2">
                      <MathEquation formula="x + y = 2x = 2\sqrt{1000} = 2 \cdot 10\sqrt{10} \approx 63.246" />
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50">
                    <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-2">Answer</h4>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold">
                      The minimum sum is exactly <MathEquation formula="2\sqrt{1000} = 20\sqrt{10}" display={false} />.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-slate-900 dark:text-white mb-4">
              Features Built for Math Champions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to excel in mathematical competitions
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="card p-6 hover:shadow-lg transition-shadow"
                variants={item}
              >
                <div className="bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center mb-4 dark:bg-primary-900/30">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{feature.description}</p>
                <Link to={feature.link} className="text-primary-600 dark:text-primary-400 font-medium flex items-center hover:underline">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-slate-900 dark:text-white mb-4">
              Ready to Master Math Competitions?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Start solving complex math problems with step-by-step explanations
            </p>
            <Link 
              to="/solver" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;