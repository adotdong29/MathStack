import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import MathEquation from '../components/shared/MathEquation';

// Mock data for formulas
const formulaData = [
  {
    category: 'Algebra',
    formulas: [
      {
        name: 'Quadratic Formula',
        description: 'For the quadratic equation ax² + bx + c = 0, the solutions are:',
        formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}'
      },
      {
        name: 'Vieta\'s Formulas',
        description: 'For a quadratic equation x² + bx + c = 0 with roots r and s:',
        formula: 'r + s = -b, \\quad rs = c'
      },
      {
        name: 'Binomial Theorem',
        description: 'Expansion of (x + y)ⁿ:',
        formula: '(x+y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k'
      }
    ]
  },
  {
    category: 'Geometry',
    formulas: [
      {
        name: 'Area of a Triangle (Heron\'s Formula)',
        description: 'Area of a triangle with sides a, b, and c:',
        formula: 'A = \\sqrt{s(s-a)(s-b)(s-c)}, \\text{ where } s = \\frac{a+b+c}{2}'
      },
      {
        name: 'Law of Sines',
        description: 'For a triangle with sides a, b, c and opposite angles A, B, C:',
        formula: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R'
      },
      {
        name: 'Law of Cosines',
        description: 'For a triangle with sides a, b, c and angle C opposite to side c:',
        formula: 'c^2 = a^2 + b^2 - 2ab\\cos C'
      }
    ]
  },
  {
    category: 'Number Theory',
    formulas: [
      {
        name: 'Euler\'s Totient Function',
        description: 'The number of integers k in the range 1 ≤ k ≤ n that are coprime to n:',
        formula: '\\phi(n) = n \\prod_{p|n} \\left(1 - \\frac{1}{p}\\right)'
      },
      {
        name: 'Chinese Remainder Theorem',
        description: 'For a system of congruences x ≡ aᵢ (mod mᵢ) where mᵢ are pairwise coprime:',
        formula: 'x \\equiv \\sum_{i=1}^{k} a_i M_i y_i \\pmod{M}, \\text{ where } M = \\prod_{i=1}^{k} m_i, M_i = \\frac{M}{m_i}, \\text{ and } y_i \\equiv (M_i)^{-1} \\pmod{m_i}'
      }
    ]
  },
  {
    category: 'Combinatorics',
    formulas: [
      {
        name: 'Binomial Coefficient',
        description: 'The number of ways to choose k elements from a set of n elements:',
        formula: '\\binom{n}{k} = \\frac{n!}{k!(n-k)!}'
      },
      {
        name: 'Catalan Numbers',
        description: 'Sequence that appears in various counting problems:',
        formula: 'C_n = \\frac{1}{n+1}\\binom{2n}{n} = \\frac{(2n)!}{(n+1)!n!}'
      },
      {
        name: 'Stirling Numbers of the Second Kind',
        description: 'Number of ways to partition a set of n objects into k non-empty subsets:',
        formula: 'S(n,k) = \\frac{1}{k!}\\sum_{i=0}^{k}(-1)^{k-i}\\binom{k}{i}i^n'
      }
    ]
  },
  {
    category: 'Calculus',
    formulas: [
      {
        name: 'Product Rule',
        description: 'Derivative of a product of functions:',
        formula: '\\frac{d}{dx}[f(x)g(x)] = f(x)\\frac{dg}{dx} + g(x)\\frac{df}{dx}'
      },
      {
        name: 'Integration by Parts',
        description: 'Formula for integrating product of functions:',
        formula: '\\int u(x)v\'(x)\\,dx = u(x)v(x) - \\int u\'(x)v(x)\\,dx'
      }
    ]
  }
];

const FormulaReferencePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    formulaData.map(category => category.category)
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const filteredFormulas = searchTerm.trim() === '' 
    ? formulaData 
    : formulaData.map(category => ({
        category: category.category,
        formulas: category.formulas.filter(formula => 
          formula.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          formula.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.formulas.length > 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl md:text-3xl font-display font-semibold text-slate-900 dark:text-white mb-2">
          Formula Reference
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Comprehensive collection of mathematical formulas for competitions
        </p>
      </motion.div>

      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search formulas..."
            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredFormulas.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">No formulas found</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Try adjusting your search or browse all categories.
          </p>
          <button 
            className="mt-4 text-primary-600 dark:text-primary-400 font-medium"
            onClick={() => setSearchTerm('')}
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {filteredFormulas.map((category) => (
            category.formulas.length > 0 && (
              <motion.div 
                key={category.category} 
                className="card overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="bg-slate-50 p-4 flex justify-between items-center cursor-pointer dark:bg-slate-800"
                  onClick={() => toggleCategory(category.category)}
                >
                  <h2 className="text-xl font-display font-semibold text-slate-900 dark:text-white">
                    {category.category}
                  </h2>
                  <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
                    {expandedCategories.includes(category.category) ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
                
                {expandedCategories.includes(category.category) && (
                  <div className="p-1">
                    {category.formulas.map((formula, index) => (
                      <div 
                        key={index} 
                        className="p-4 border-b last:border-b-0 border-slate-200 dark:border-slate-700"
                      >
                        <h3 className="font-semibold text-lg mb-2 text-primary-700 dark:text-primary-400">
                          {formula.name}
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-3">
                          {formula.description}
                        </p>
                        <div className="bg-slate-50 p-4 rounded-lg dark:bg-slate-800/50">
                          <MathEquation formula={formula.formula} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default FormulaReferencePage;