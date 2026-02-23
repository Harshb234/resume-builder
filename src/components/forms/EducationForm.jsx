import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Button, Input, Card } from '../shared/uikit';
import { useResume } from '../../context/ResumeContext';

export const EducationForm = () => {
    const { resumeData, addItem, removeItem, updateItem } = useResume();

    const handleAdd = () => {
        addItem('education', {
            school: '',
            degree: '',
            year: '',
            cgpa: '',
            coursework: ''
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Education</h3>
                <Button onClick={handleAdd} size="sm" className="gap-2">
                    <Plus className="w-4 h-4" /> Add Education
                </Button>
            </div>

            <div className="space-y-4">
                {resumeData.education.map((edu, idx) => (
                    <Card key={edu.id} className="relative group border-l-4 border-l-emerald-500">
                        <button
                            onClick={() => removeItem('education', edu.id)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>

                        <div className="grid grid-cols-2 gap-4 mb-4 pr-10">
                            <Input
                                label="University / School"
                                value={edu.school}
                                onChange={(e) => updateItem('education', edu.id, { school: e.target.value })}
                                placeholder="Vishwakarma University"
                            />
                            <Input
                                label="Degree / Course"
                                value={edu.degree}
                                onChange={(e) => updateItem('education', edu.id, { degree: e.target.value })}
                                placeholder="B-Tech in Computer Science"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <Input
                                label="Year / Duration"
                                value={edu.year}
                                onChange={(e) => updateItem('education', edu.id, { year: e.target.value })}
                                placeholder="Sept 2023 – May 2026"
                            />
                            <Input
                                label="CGPA / Score"
                                value={edu.cgpa}
                                onChange={(e) => updateItem('education', edu.id, { cgpa: e.target.value })}
                                placeholder="7.9/10.0"
                            />
                        </div>

                        <Input
                            label="Coursework (Optional)"
                            value={edu.coursework}
                            onChange={(e) => updateItem('education', edu.id, { coursework: e.target.value })}
                            placeholder="Data Structures, Algorithms, etc."
                        />
                    </Card>
                ))}
            </div>
        </div>
    );
};
