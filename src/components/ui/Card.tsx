import { cva, type VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

const cardVariants = cva('rounded-2xl shadow-lg transition-shadow', {
  variants: {
    variant: {
      default: 'bg-white hover:shadow-xl',
      primary: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: ReactNode;
}

export const Card = ({ variant, className, children, ...props }: CardProps) => {
  return (
    <div className={cardVariants({ variant, className })} {...props}>
      {children}
    </div>
  );
};

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="border-b p-4">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}