import React from 'react';
import { Input } from '../shared/uikit';
import { useResume } from '../../context/ResumeContext';

export const PersonalInfoForm = () => {
    const { resumeData, updatePersonalInfo } = useResume();

    const handleChange = (e) => {
        const { name, value } = e.target;
        updatePersonalInfo({ [name]: value });
    };

    return (
        <div className="space-y-4">
            <Input
                label="Full Name"
                name="fullName"
                placeholder="John Doe"
                value={resumeData.personalInfo.fullName}
                onChange={handleChange}
            />
            <Input
                label="Professional Title"
                name="title"
                placeholder="Senior Software Engineer"
                value={resumeData.personalInfo.title}
                onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={resumeData.personalInfo.email}
                    onChange={handleChange}
                />
                <Input
                    label="Phone Number"
                    name="phone"
                    placeholder="+1 234 567 890"
                    value={resumeData.personalInfo.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="Location"
                    name="location"
                    placeholder="Pune, Maharashtra"
                    value={resumeData.personalInfo.location}
                    onChange={handleChange}
                />
                <Input
                    label="LinkedIn Profile URL"
                    placeholder="https://linkedin.com/in/username"
                    value={resumeData.socialLinks.linkedin}
                    onChange={(e) => updateSocialLinks({ linkedin: e.target.value })}
                />
            </div>
            <Input
                label="GitHub Profile URL"
                placeholder="https://github.com/username"
                value={resumeData.socialLinks.github}
                onChange={(e) => updateSocialLinks({ github: e.target.value })}
            />
        </div>
    );
};
