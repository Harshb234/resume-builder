import React from 'react';
import { Plus, Trash2, Link as LinkIcon, Code } from 'lucide-react';
import { Button, Input, TextArea, Card } from '../shared/uikit';
import { useResume } from '../../context/ResumeContext';

export const ProjectsForm = () => {
    const { resumeData, addItem, removeItem, updateItem } = useResume();

    const handleAdd = () => {
        addItem('projects', {
            name: '',
            link: '',
            techStack: '',
            description: ''
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Personal Projects</h3>
                <Button onClick={handleAdd} size="sm" className="gap-2">
                    <Plus className="w-4 h-4" /> Add Project
                </Button>
            </div>

            <div className="space-y-4">
                {resumeData.projects.map((proj, idx) => (
                    <Card key={proj.id} className="relative group border-l-4 border-l-purple-500">
                        <button
                            onClick={() => removeItem('projects', proj.id)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>

                        <div className="grid grid-cols-2 gap-4 mb-4 pr-10">
                            <Input
                                label="Project Name"
                                value={proj.name}
                                onChange={(e) => updateItem('projects', proj.id, { name: e.target.value })}
                                placeholder="E-commerce App"
                            />
                            <Input
                                label="Project Link / GitHub"
                                value={proj.link}
                                onChange={(e) => updateItem('projects', proj.id, { link: e.target.value })}
                                placeholder="github.com/user/repo"
                                icon={<LinkIcon className="w-4 h-4" />}
                            />
                        </div>

                        <div className="mb-4">
                            <Input
                                label="Tech Stack (Comma separated)"
                                value={proj.techStack}
                                onChange={(e) => updateItem('projects', proj.id, { techStack: e.target.value })}
                                placeholder="React, Node.js, Tailwid CSS, MongoDB"
                                icon={<Code className="w-4 h-4" />}
                            />
                        </div>

                        <TextArea
                            label="Description"
                            value={proj.description}
                            onChange={(e) => updateItem('projects', proj.id, { description: e.target.value })}
                            placeholder="Desribe what you built and the challenges you solved..."
                        />
                    </Card>
                ))}
            </div>
        </div>
    );
};
