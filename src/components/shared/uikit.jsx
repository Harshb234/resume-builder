import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const Button = ({ className, variant = 'primary', size = 'md', ...props }) => {
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
        outline: 'border-2 border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800',
        ghost: 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg font-medium',
    };

    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
};

export const Input = ({ label, error, className, ...props }) => {
    return (
        <div className="space-y-1.5 w-full">
            {label && (
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {label}
                </label>
            )}
            <input
                className={cn(
                    'w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100',
                    error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10',
                    className
                )}
                {...props}
            />
            {error && <p className="text-xs font-medium text-red-500">{error}</p>}
        </div>
    );
};

export const TextArea = ({ label, error, className, ...props }) => {
    return (
        <div className="space-y-1.5 w-full">
            {label && (
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {label}
                </label>
            )}
            <textarea
                className={cn(
                    'w-full min-h-[120px] rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100',
                    error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10',
                    className
                )}
                {...props}
            />
            {error && <p className="text-xs font-medium text-red-500">{error}</p>}
        </div>
    );
};

export const Card = ({ children, className }) => (
    <div className={cn('rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900', className)}>
        {children}
    </div>
);
