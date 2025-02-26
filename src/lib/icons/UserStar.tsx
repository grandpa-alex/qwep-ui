import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type UserStarProps = IconSVGContainerProps;

export const UserStar: React.FC<UserStarProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M15 17.5V20C13.0109 20 11.1032 20.7902 9.6967 22.1967C8.29018 23.6032 7.5 25.5109 7.5 27.5H5C5 24.8478 6.05357 22.3043 7.92893 20.4289C9.8043 18.5536 12.3478 17.5 15 17.5V17.5ZM15 16.25C10.8562 16.25 7.5 12.8938 7.5 8.75C7.5 4.60625 10.8562 1.25 15 1.25C19.1438 1.25 22.5 4.60625 22.5 8.75C22.5 12.8938 19.1438 16.25 15 16.25ZM15 13.75C17.7625 13.75 20 11.5125 20 8.75C20 5.9875 17.7625 3.75 15 3.75C12.2375 3.75 10 5.9875 10 8.75C10 11.5125 12.2375 13.75 15 13.75ZM22.5 26.875L18.8262 28.8063L19.5275 24.7163L16.5562 21.8187L20.6638 21.2212L22.5 17.5L24.3375 21.2212L28.4437 21.8187L25.4725 24.7163L26.1725 28.8063L22.5 26.875Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
