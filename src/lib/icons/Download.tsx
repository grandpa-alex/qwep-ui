import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type DownloadProps = IconSVGContainerProps;

export const Download: React.FC<DownloadProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M16.25 12.5H22.5L15 20L7.5 12.5H13.75V3.75H16.25V12.5ZM5 23.75H25V15H27.5V25C27.5 25.3315 27.3683 25.6495 27.1339 25.8839C26.8995 26.1183 26.5815 26.25 26.25 26.25H3.75C3.41848 26.25 3.10054 26.1183 2.86612 25.8839C2.6317 25.6495 2.5 25.3315 2.5 25V15H5V23.75Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
