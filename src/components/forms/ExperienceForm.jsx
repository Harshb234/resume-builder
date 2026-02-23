import React from 'react';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { Button, Input, TextArea, Card } from '../shared/uikit';
import { useResume } from '../../context/ResumeContext';

export const ExperienceForm = () => {
    const { resumeData, addItem, removeItem, updateItem } = useResume();

    const handleAdd = () => {
        addItem('experience', {
            company: '',
            role: '',
            startDate: '',
            endDate: '',
            description: ''
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Work Experience</h3>
                <Button onClick={handleAdd} size="sm" className="gap-2">
                    <Plus className="w-4 h-4" /> Add Experience
                </Button>
            </div>

            <div className="space-y-4">
                {resumeData.experience.map((exp, idx) => (
                    <Card key={exp.id} className="relative group overflow-hidden border-l-4 border-l-blue-500">
                        <button
                            onClick={() => removeItem('experience', exp.id)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>

                        <div className="grid grid-cols-2 gap-4 mb-4 pr-10">
                            <Input
                                label="Company"
                                value={exp.company}
                                onChange={(e) => updateItem('experience', exp.id, { company: e.target.value })}
                                placeholder="Google"
                            />
                            <Input
                                label="Location"
                                value={exp.location}
                                onChange={(e) => updateItem('experience', exp.id, { location: e.target.value })}
                                placeholder="Mountain View, CA"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <Input
                                label="Role"
                                value={exp.role}
                                onChange={(e) => updateItem('experience', exp.id, { role: e.target.value })}
                                placeholder="Senior Engineer"
                            />
                            <div className="grid grid-cols-2 gap-2">
                                <Input
                                    label="Start Date"
                                    value={exp.startDate}
                                    onChange={(e) => updateItem('experience', exp.id, { startDate: e.target.value })}
                                    placeholder="Jan 2022"
                                />
                                <Input
                                    label="End Date"
                                    value={exp.endDate}
                                    onChange={(e) => updateItem('experience', exp.id, { endDate: e.target.value })}
                                    placeholder="Present"
                                />
                            </div>
                        </div>

                        <TextArea
                            label="Description"
                            value={exp.description}
                            onChange={(e) => updateItem('experience', exp.id, { description: e.target.value })}
                            placeholder="Desribe your responsibilities and achievements..."
                        />
                    </Card>
                ))}
            </div>
        </div>
    );
};
