'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                {children}
            </ThemeProvider>
        </LanguageProvider>
    );
}
