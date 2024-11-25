import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type BookMarkProps = IconSVGContainerProps;

export const BookMark: React.FC<BookMarkProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M6.25 2.5H23.75C24.0815 2.5 24.3995 2.6317 24.6339 2.86612C24.8683 3.10054 25 3.41848 25 3.75V27.6787C25.0001 27.7905 24.9703 27.9003 24.9136 27.9966C24.8569 28.0929 24.7755 28.1722 24.6777 28.2264C24.5799 28.2805 24.4694 28.3074 24.3577 28.3043C24.246 28.3012 24.1371 28.2682 24.0425 28.2087L15 22.5375L5.9575 28.2075C5.86296 28.2669 5.75423 28.2999 5.64263 28.303C5.53102 28.3062 5.42061 28.2794 5.32287 28.2254C5.22513 28.1714 5.14363 28.0923 5.08685 27.9961C5.03007 27.9 5.00008 27.7904 5 27.6787V3.75C5 3.41848 5.1317 3.10054 5.36612 2.86612C5.60054 2.6317 5.91848 2.5 6.25 2.5ZM22.5 5H7.5V24.29L15 19.5887L22.5 24.29V5Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
