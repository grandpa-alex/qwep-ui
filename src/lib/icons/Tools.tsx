import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type ToolsProps = IconSVGContainerProps;

export const Tools: React.FC<ToolsProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M6.66252 4.08876C7.44258 3.81047 8.28561 3.75933 9.09359 3.94126C9.90158 4.12319 10.6413 4.53073 11.2268 5.1165C11.8123 5.70226 12.2195 6.44219 12.4011 7.25025C12.5827 8.05832 12.5312 8.90132 12.2525 9.68126L25.8088 23.2375L23.1563 25.8888L9.60002 12.3338C8.81996 12.612 7.97694 12.6632 7.16895 12.4813C6.36097 12.2993 5.62123 11.8918 5.03572 11.306C4.45022 10.7203 4.04301 9.98033 3.86144 9.17226C3.67987 8.3642 3.73139 7.52119 4.01002 6.74126L6.80502 9.53751C6.97799 9.71659 7.18488 9.85943 7.41364 9.9577C7.6424 10.056 7.88843 10.1077 8.1374 10.1099C8.38636 10.112 8.63326 10.0646 8.86369 9.9703C9.09412 9.87602 9.30347 9.7368 9.47951 9.56075C9.65556 9.3847 9.79479 9.17535 9.88906 8.94492C9.98334 8.71449 10.0308 8.46759 10.0286 8.21863C10.0265 7.96967 9.97473 7.72363 9.87646 7.49487C9.7782 7.26612 9.63536 7.05922 9.45627 6.88626L6.66127 4.08751L6.66252 4.08876ZM19.6213 6.44376L23.5988 4.23376L25.3663 6.00126L23.1563 9.97876L20.9463 10.4213L18.2963 13.0725L16.5275 11.305L19.1788 8.65376L19.6213 6.44376V6.44376ZM10.7825 16.1663L13.4338 18.8188L7.24627 25.0063C6.90507 25.3443 6.44717 25.5385 5.967 25.5488C5.48683 25.5591 5.02101 25.3848 4.66559 25.0617C4.31017 24.7387 4.09227 24.2916 4.05681 23.8126C4.02136 23.3337 4.17105 22.8594 4.47502 22.4875L4.59627 22.3538L10.7838 16.1663H10.7825Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
