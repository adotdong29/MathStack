import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 dark:bg-slate-900 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-4">MathSolver AI</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs">
              Advanced AI for solving complex mathematics problems from competitions including MathCounts, AMC, ARML, and AIME.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solver" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 text-sm">
                  Problem Solver
                </Link>
              </li>
              <li>
                <Link to="/formulas" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 text-sm">
                  Formula Reference
                </Link>
              </li>
              <li>
                <Link to="/practice" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 text-sm">
                  Practice Mode
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} MathSolver AI. All rights reserved.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for math enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;