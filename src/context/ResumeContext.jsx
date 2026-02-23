import React, { createContext, useContext, useState, useEffect } from 'react';

const ResumeContext = createContext();

const initialState = {
    personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        title: '',
        photo: '',
    },
    summary: '',
    skills: [
        { category: 'Frontend', items: [] },
        { category: 'Backend', items: [] },
        { category: 'Tools', items: [] }
    ],
    experience: [],
    projects: [],
    education: [],
    certifications: [],
    achievements: [],
    socialLinks: {
        linkedin: '',
        github: '',
        portfolio: '',
        twitter: ''
    },
    theme: {
        template: 'modern',
        primaryColor: '#3b82f6',
        mode: 'light'
    }
};

export const ResumeProvider = ({ children }) => {
    const [resumeData, setResumeData] = useState(() => {
        const saved = localStorage.getItem('resume-builder-data');
        return saved ? JSON.parse(saved) : initialState;
    });

    useEffect(() => {
        localStorage.setItem('resume-builder-data', JSON.stringify(resumeData));
    }, [resumeData]);

    const updatePersonalInfo = (info) => {
        setResumeData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, ...info }
        }));
    };

    const updateSummary = (summary) => {
        setResumeData(prev => ({ ...prev, summary }));
    };

    const updateSkills = (skills) => {
        setResumeData(prev => ({ ...prev, skills }));
    };

    const addItem = (section, item) => {
        setResumeData(prev => ({
            ...prev,
            [section]: [...prev[section], { ...item, id: crypto.randomUUID() }]
        }));
    };

    const removeItem = (section, id) => {
        setResumeData(prev => ({
            ...prev,
            [section]: prev[section].filter(item => item.id !== id)
        }));
    };

    const updateItem = (section, id, updatedItem) => {
        setResumeData(prev => ({
            ...prev,
            [section]: prev[section].map(item => item.id === id ? { ...item, ...updatedItem } : item)
        }));
    };

    const updateSocialLinks = (links) => {
        setResumeData(prev => ({
            ...prev,
            socialLinks: { ...prev.socialLinks, ...links }
        }));
    };

    const updateTheme = (themeUpdates) => {
        setResumeData(prev => ({
            ...prev,
            theme: { ...prev.theme, ...themeUpdates }
        }));
    };

    const resetResume = () => {
        setResumeData(initialState);
    };

    return (
        <ResumeContext.Provider value={{
            resumeData,
            updatePersonalInfo,
            updateSummary,
            updateSkills,
            addItem,
            removeItem,
            updateItem,
            updateSocialLinks,
            updateTheme,
            resetResume
        }}>
            {children}
        </ResumeContext.Provider>
    );
};

export const useResume = () => {
    const context = useContext(ResumeContext);
    if (!context) {
        throw new Error('useResume must be used within a ResumeProvider');
    }
    return context;
};
