import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Main from './test/Main';
import { ThemeProvider, TypeColorTheme } from './lib/general/ThemeContext';
import { StyledProvider } from './lib/general/StyledContext';

const Root = () => {
    const storedThemeName = localStorage.getItem('theme');

    return (
        <ThemeProvider colorThemeName={storedThemeName as TypeColorTheme}>
            <StyledProvider
                addCustomStyles={{
                    customBackground: { backgroundColor: 'lightblue', padding: '10px' },
                    customButton: { color: 'white', backgroundColor: 'darkblue' },
                }}
                // currentStyles={{
                //     base: { borderRadiusItem: '12px' },
                // }}
            >
                <Main />
            </StyledProvider>
        </ThemeProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <>
            <Root />
        </>
    </React.StrictMode>
);
