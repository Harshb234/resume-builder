import React from 'react';
import { Plus, Trash2, Award } from 'lucide-react';
import { Button, Input, Card } from '../shared/uikit';
import { useResume } from '../../context/ResumeContext';

export const CertificationsForm = () => {
    const { resumeData, addItem, removeItem, updateItem } = useResume();

    const handleAdd = () => {
        addItem('certifications', {
            name: '',
            issuer: 'Certificate'
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Certifications</h3>
                <Button onClick={handleAdd} size="sm" className="gap-2">
                    <Plus className="w-4 h-4" /> Add Certification
                </Button>
            </div>

            <div className="space-y-4">
                {resumeData.certifications.map((cert, idx) => (
                    <Card key={cert.id} className="relative group border-l-4 border-l-amber-500">
                        <button
                            onClick={() => removeItem('certifications', cert.id)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>

                        <div className="flex gap-4 pr-10">
                            <div className="flex-1">
                                <Input
                                    label="Certification Name"
                                    value={cert.name}
                                    onChange={(e) => updateItem('certifications', cert.id, { name: e.target.value })}
                                    placeholder="AWS Cloud Technical Essentials"
                                    icon={<Award className="w-4 h-4" />}
                                />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
