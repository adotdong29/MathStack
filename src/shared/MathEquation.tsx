import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface MathEquationProps {
  formula: string;
  display?: boolean;
  className?: string;
}

const MathEquation: React.FC<MathEquationProps> = ({ 
  formula, 
  display = true, 
  className = '' 
}) => {
  return display ? (
    <div className={className}>
      <BlockMath math={formula} />
    </div>
  ) : (
    <InlineMath math={formula} />
  );
};

export default MathEquation;