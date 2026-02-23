import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { Download, Monitor, FileText, LayoutTemplate } from 'lucide-react';
import { Button } from '../shared/uikit';
import { ModernTemplate } from '../../templates/ModernTemplate';
import { MinimalTemplate } from '../../templates/MinimalTemplate';
import { useResume } from '../../context/ResumeContext';

export const ResumePreview = () => {
    const { resumeData, updateTheme } = useResume();
    const resumeRef = useRef();

    const handleDownload = () => {
        const element = resumeRef.current;
        const opt = {
            margin: 0,
            filename: `${resumeData.personalInfo.fullName || 'Resume'}_CV.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    };

    const templates = {
        modern: ModernTemplate,
        minimal: MinimalTemplate,
    };

    const SelectedTemplate = templates[resumeData.theme.template] || ModernTemplate;

    return (
        <div className="flex flex-col h-full bg-slate-100 dark:bg-slate-950 p-6 overflow-hidden">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6 bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-4">
                    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                        <button
                            onClick={() => updateTheme({ template: 'modern' })}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${resumeData.theme.template === 'modern' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
                        >
                            Modern
                        </button>
                        <button
                            onClick={() => updateTheme({ template: 'minimal' })}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${resumeData.theme.template === 'minimal' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
                        >
                            Minimal
                        </button>
                    </div>
                </div>

                <Button onClick={handleDownload} className="gap-2" size="sm">
                    <Download className="w-4 h-4" /> Download PDF
                </Button>
            </div>

            {/* Preview Container */}
            <div className="flex-1 overflow-y-auto custom-scrollbar flex justify-center pb-12">
                <div
                    ref={resumeRef}
                    className="resume-page-shadow origin-top transition-transform duration-500 scale-[0.65] lg:scale-[0.8] xl:scale-[0.9] 2xl:scale-100"
                >
                    <SelectedTemplate data={resumeData} />
                </div>
            </div>
        </div>
    );
};
