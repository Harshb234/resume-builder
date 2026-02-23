import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Button, Input } from '../shared/uikit';
import { useResume } from '../../context/ResumeContext';

export const SkillsForm = () => {
    const { resumeData, updateSkills } = useResume();
    const [newSkill, setNewSkill] = useState({ categoryIdx: 0, text: '' });

    const handleAddSkill = (categoryIdx) => {
        if (!newSkill.text.trim()) return;

        const updatedSkills = [...resumeData.skills];
        updatedSkills[categoryIdx].items = [...updatedSkills[categoryIdx].items, newSkill.text.trim()];
        updateSkills(updatedSkills);
        setNewSkill({ ...newSkill, text: '' });
    };

    const handleRemoveSkill = (categoryIdx, skillIdx) => {
        const updatedSkills = [...resumeData.skills];
        updatedSkills[categoryIdx].items = updatedSkills[categoryIdx].items.filter((_, i) => i !== skillIdx);
        updateSkills(updatedSkills);
    };

    const handleKeyPress = (e, categoryIdx) => {
        if (e.key === 'Enter') {
            handleAddSkill(categoryIdx);
        }
    };

    return (
        <div className="space-y-6">
            {resumeData.skills.map((category, categoryIdx) => (
                <div key={categoryIdx} className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        {category.category}
                    </label>
                    <div className="flex gap-2">
                        <Input
                            placeholder={`Add ${category.category} skill...`}
                            value={newSkill.categoryIdx === categoryIdx ? newSkill.text : ''}
                            onChange={(e) => setNewSkill({ categoryIdx, text: e.target.value })}
                            onKeyPress={(e) => handleKeyPress(e, categoryIdx)}
                        />
                        <Button
                            className="aspect-square p-0 w-11 h-11"
                            onClick={() => handleAddSkill(categoryIdx)}
                        >
                            <Plus className="w-5 h-5" />
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {category.items.map((skill, skillIdx) => (
                            <span
                                key={skillIdx}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-sm font-medium animate-in fade-in zoom-in duration-200 shadow-sm"
                            >
                                {skill}
                                <button
                                    onClick={() => handleRemoveSkill(categoryIdx, skillIdx)}
                                    className="p-0.5 hover:bg-blue-100 rounded-full transition-colors"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
