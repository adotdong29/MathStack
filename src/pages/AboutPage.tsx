import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Trophy, Calculator, GraduationCap, CodeSquare } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl md:text-3xl font-display font-semibold text-slate-900 dark:text-white mb-2">
          About MathSolver AI
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Learn more about our mission to help students excel in math competitions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card p-6 mb-8">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              MathSolver AI was created to democratize access to high-quality math competition preparation resources. 
              We believe that every student should have the opportunity to develop advanced mathematical problem-solving 
              skills, regardless of their background or resources.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Our platform combines cutting-edge AI technology with pedagogical expertise to provide detailed, 
              step-by-step solutions to complex mathematical problems. We focus specifically on competition 
              mathematics including MathCounts, AMC 10/12, ARML, AIME, and beyond, helping students develop 
              the skills needed to excel in these challenging contests.
            </p>
          </div>

          <div className="card p-6 mb-8">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center dark:bg-primary-900/30">
                    <Calculator className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Advanced Problem Solving</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our AI is trained on thousands of competition problems and can provide detailed, human-like explanations.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center dark:bg-primary-900/30">
                    <GraduationCap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Educational Focus</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We emphasize understanding and learning, not just getting answers. Each solution teaches key concepts.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center dark:bg-primary-900/30">
                    <Trophy className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Competition Focused</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Specialized in the unique requirements and challenges of mathematical competitions.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center dark:bg-primary-900/30">
                    <CodeSquare className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Advanced Technology</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Leveraging state-of-the-art AI to deliver accurate solutions with mathematical precision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Competitions We Cover</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">MathCounts</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  A national middle school competition that promotes mathematics achievement through fun and challenging problems.
                </p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">AMC 8/10/12</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  American Mathematics Competitions for middle and high school students, the gateway to the Math Olympiad program.
                </p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">ARML</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  American Regions Mathematics League, a prestigious team competition for high school students.
                </p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">AIME & Beyond</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Advanced competitions including the American Invitational Mathematics Examination and higher-level contests.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card p-6 mb-8 sticky top-24">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Math Competition Resources</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white">Official Websites</h3>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <a 
                        href="https://www.maa.org/math-competitions" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:underline dark:text-primary-400"
                      >
                        MAA AMC Competitions
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.mathcounts.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:underline dark:text-primary-400"
                      >
                        MathCounts Foundation
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.arml.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:underline dark:text-primary-400"
                      >
                        American Regions Mathematics League
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.imo-official.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:underline dark:text-primary-400"
                      >
                        International Mathematical Olympiad
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white">Recommended Books</h3>
                  <ul className="mt-2 space-y-1">
                    <li className="text-sm text-slate-600 dark:text-slate-400">
                      Art of Problem Solving (Volumes 1 & 2)
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400">
                      Introduction to Counting & Probability
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400">
                      Mathematical Olympiad Challenges
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400">
                      Problem-Solving Strategies
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white">Online Practice</h3>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <a 
                        href="https://artofproblemsolving.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:underline dark:text-primary-400"
                      >
                        Art of Problem Solving
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://artofproblemsolving.com/alcumus" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:underline dark:text-primary-400"
                      >
                        Alcumus
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://brilliant.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:underline dark:text-primary-400"
                      >
                        Brilliant.org
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;