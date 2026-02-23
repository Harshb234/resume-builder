import React from 'react';
import { Check } from 'lucide-react';
import { cn } from './uikit';

export const Stepper = ({ steps, currentStep }) => {
    return (
        <div className="relative flex justify-between w-full px-2 py-4">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2" />
            <div
                className="absolute top-1/2 left-0 h-0.5 bg-blue-600 -translate-y-1/2 transition-all duration-500"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />

            {steps.map((step, index) => {
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;

                return (
                    <div key={index} className="relative z-10 flex flex-col items-center group">
                        <div
                            className={cn(
                                'flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white transition-all duration-300 dark:bg-slate-900',
                                isActive && 'border-blue-600 ring-4 ring-blue-500/10',
                                isCompleted && 'border-blue-600 bg-blue-600 text-white',
                                !isActive && !isCompleted && 'border-slate-200 dark:border-slate-800'
                            )}
                        >
                            {isCompleted ? (
                                <Check className="h-5 w-5" />
                            ) : (
                                <span className={cn(
                                    'text-sm font-bold',
                                    isActive ? 'text-blue-600' : 'text-slate-400'
                                )}>
                                    {index + 1}
                                </span>
                            )}
                        </div>
                        <span className={cn(
                            'absolute top-12 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider transition-all duration-300',
                            isActive ? 'text-blue-600' : 'text-slate-400 opacity-60'
                        )}>
                            {step}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
