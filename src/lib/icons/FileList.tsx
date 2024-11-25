import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type FileListProps = IconSVGContainerProps;

export const FileList: React.FC<FileListProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M25 27.5H5C4.66848 27.5 4.35054 27.3683 4.11612 27.1339C3.8817 26.8995 3.75 26.5815 3.75 26.25V3.75C3.75 3.41848 3.8817 3.10054 4.11612 2.86612C4.35054 2.6317 4.66848 2.5 5 2.5H25C25.3315 2.5 25.6495 2.6317 25.8839 2.86612C26.1183 3.10054 26.25 3.41848 26.25 3.75V26.25C26.25 26.5815 26.1183 26.8995 25.8839 27.1339C25.6495 27.3683 25.3315 27.5 25 27.5ZM23.75 25V5H6.25V25H23.75ZM10 8.75H20V11.25H10V8.75ZM10 13.75H20V16.25H10V13.75ZM10 18.75H20V21.25H10V18.75Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
