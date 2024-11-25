import { TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import styled from 'styled-components';

type TypeStyles = {
    typography: TypeSSTypography;
};

type BaseInputAreaProps = {
    $styles?: TypeStyles;
    resize?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type STextareaProps = {
    $styles: TypeStyles;
    $resize?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const STextarea = styled.textarea<STextareaProps>`
    outline: 0;
    background-color: transparent;
    line-height: 20px;
    font-size: ${(props) => props.$styles.typography.fontSizeItem};
    border: 0;
    height: 100%;
    width: 100%;
    resize: ${(props) => (props.$resize ? 'vertical' : 'none')};
`;

export const BaseInputArea: React.FC<BaseInputAreaProps> = React.memo(
    React.forwardRef<HTMLTextAreaElement, BaseInputAreaProps>(({ resize, $styles, ...rest }, ref) => {
        const styles = useStyleScheme(['typography'], $styles);
        return <STextarea ref={ref} $styles={styles} $resize={resize} {...rest} />;
    })
);

//export component
export const SBaseInputArea = {
    Textarea: STextarea,
};

//export type
export namespace TBaseInputArea {
    export type Main = BaseInputAreaProps;
    export type Styles = TypeStyles;
    export type STextarea = STextareaProps;
}
