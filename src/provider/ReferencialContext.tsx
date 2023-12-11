import i18next from 'i18next';
import React, { createContext, useContext, useState } from 'react';

const useReferencialService = () => {
    const [language, setLanguage] = useState(i18next.resolvedLanguage);

    return {
        language,
        setLanguage
    };
};

export const ReferencialContext = createContext<ReturnType<typeof useReferencialService> | null>(null);

export const ReferencialProvider = ({ children }: { children: React.ReactNode }) => {
    const Referencials = useReferencialService();

    return <ReferencialContext.Provider value={Referencials}>{children}</ReferencialContext.Provider>;
};

export const useReferencials = () => useContext(ReferencialContext);
