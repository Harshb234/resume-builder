import React, { useState } from 'react';
import { User, Briefcase, Code, GraduationCap, ChevronLeft, ChevronRight, Eraser, Github, Moon, Sun, Award } from 'lucide-react';
import { useResume } from './context/ResumeContext';
import { Stepper } from './components/shared/Stepper';
import { Button } from './components/shared/uikit';
import { PersonalInfoForm } from './components/forms/PersonalInfoForm';
import { SkillsForm } from './components/forms/SkillsForm';
import { ExperienceForm } from './components/forms/ExperienceForm';
import { ProjectsForm } from './components/forms/ProjectsForm';
import { EducationForm } from './components/forms/EducationForm';
import { CertificationsForm } from './components/forms/CertificationsForm';
import { ResumePreview } from './components/preview/ResumePreview';

const steps = [
    { title: 'Personal', icon: User, component: PersonalInfoForm },
    { title: 'Education', icon: GraduationCap, component: EducationForm },
    { title: 'Experience', icon: Briefcase, component: ExperienceForm },
    { title: 'Projects', icon: Github, component: ProjectsForm },
    { title: 'Skills', icon: Code, component: SkillsForm },
    { title: 'Certifications', icon: Award, component: CertificationsForm },
];

function App() {
    const [currentStep, setCurrentStep] = useState(0);
    const { resumeData, resetResume, updateTheme } = useResume();

    const stepCount = steps.length;
    const ActiveForm = steps[currentStep].component;

    const handleNext = () => {
        if (currentStep < stepCount - 1) setCurrentStep(v => v + 1);
    };

    const handleBack = () => {
        if (currentStep > 0) setCurrentStep(v => v - 1);
    };

    const toggleDarkMode = () => {
        const isDark = resumeData.theme.mode === 'dark';
        updateTheme({ mode: isDark ? 'light' : 'dark' });
        document.documentElement.classList.toggle('dark', !isDark);
    };

    return (
        <div className={`flex flex-col lg:flex-row h-screen w-full bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300`}>
            {/* Left Sidebar - Form */}
            <div className="w-full lg:w-1/2 xl:w-[45%] h-full flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <header className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl italic shadow-lg shadow-blue-500/20">
                            R
                        </div>
                        <div>
                            <h1 className="text-lg font-black tracking-tight dark:text-white">RESUME<span className="text-blue-600">JS</span></h1>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Engineer Edition</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors overflow-hidden"
                        >
                            {resumeData.theme.mode === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-600" />}
                        </button>
                        <Button variant="ghost" onClick={resetResume} className="text-red-500 hover:text-red-600 hover:bg-red-50 gap-2">
                            <Eraser className="w-4 h-4" /> <span className="hidden sm:inline">Clear</span>
                        </Button>
                    </div>
                </header>

                <div className="px-8 pt-4 pb-2 overflow-x-auto custom-scrollbar">
                    <Stepper steps={steps.map(s => s.title)} currentStep={currentStep} />
                </div>

                <main className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
                    <div className="max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-blue-600">
                                    {React.createElement(steps[currentStep].icon, { className: 'w-6 h-6' })}
                                </div>
                                <h2 className="text-2xl font-bold dark:text-white">{steps[currentStep].title}</h2>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400">Fill in your details to update your resume in real-time.</p>
                        </div>

                        <ActiveForm />
                    </div>
                </main>

                <footer className="px-8 py-6 border-t border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-between">
                    <Button
                        variant="outline"
                        onClick={handleBack}
                        disabled={currentStep === 0}
                        className="gap-2"
                    >
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>

                    <div className="flex items-center gap-1.5 overflow-x-auto hidden sm:flex">
                        {steps.map((_, i) => (
                            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentStep ? 'w-4 bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'}`} />
                        ))}
                    </div>

                    <Button
                        onClick={handleNext}
                        disabled={currentStep === stepCount - 1}
                        className="gap-2 min-w-[120px]"
                    >
                        Next Step <ChevronRight className="w-4 h-4" />
                    </Button>
                </footer>
            </div>

            {/* Right Section - Preview */}
            <div className="w-full lg:w-1/2 xl:w-[55%] h-full">
                <ResumePreview />
            </div>
        </div>
    );
}

export default App;
