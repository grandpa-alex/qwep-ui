import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { ETextVariant, TTextVariant } from '@src/lib/types/TypeText';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    typography: TypeSSTypography;
};

type BaseTextProps = {
    children?: React.ReactNode;
    color?: Hex;
    size?: TTextVariant;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    as?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLParagraphElement>;

type STextProps = {
    $size: TTextVariant;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const TEXT_SIZE = {
    [ETextVariant.L]: (props: TypeSSTypography) => css`
        line-height: ${props.fontLineHeightGlobal_L};
        font-size: ${props.fontSizeGlobal_L};
    `,
    [ETextVariant.M]: (props: TypeSSTypography) => css`
        line-height: ${props.fontLineHeightGlobal_M};
        font-size: ${props.fontSizeGlobal_M};
    `,
};

const SText = styled.p<STextProps>`
    font-size: ${(props) => props.$styles.typography.fontSizeGlobal};
    font-weight: ${(props) => props.$styles.typography.fontWeightGlobal};
    color: ${(props) => props.$color ?? props.$colors.text};
    ${(props) => TEXT_SIZE[props.$size](props.$styles.typography)};
`;

export const BaseText: React.FC<BaseTextProps> = React.memo(
    ({ as: Component = 'p', size = ETextVariant.L, color, $colors, $styles, ...rest }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['typography'], $styles);

        return (
            <SText as={Component} $size={size} $colors={colors} $styles={styles} $color={color} {...rest}>
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
