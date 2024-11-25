import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSTypography } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';

type TypeStyles = {
    typography: TypeSSTypography;
};

type BaseTextProps = {
    children?: React.ReactNode;
    color?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    as?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLParagraphElement>;

type STextProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
} & React.HTMLAttributes<HTMLParagraphElement>;

const SText = styled.p<STextProps>`
    font-size: ${(props) => props.$styles.typography.fontSizeGlobal};
    font-weight: ${(props) => props.$styles.typography.fontWeightGlobal};
    color: ${(props) => props.$color ?? props.$colors.text};
    line-height: normal;
`;

export const BaseText: React.FC<BaseTextProps> = React.memo(
    ({ as: Component = 'p', color, $colors, $styles, ...rest }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['typography'], $styles);

        return (
            <SText as={Component} $colors={colors} $styles={styles} $color={color} {...rest}>
                {rest.children}
            </SText>
        );
    }
);

//export component
export const SBaseText = {
    Text: SText,
};

//export type
export namespace TBaseText {
    export type Styles = TypeStyles;
    export type Main = BaseTextProps;
    export type SText = STextProps;
}
