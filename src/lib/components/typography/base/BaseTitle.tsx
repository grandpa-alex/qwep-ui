import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TMargin } from '@src/lib/types/TypeBase';
import { css } from 'styled-components';
import { TTitleVariant } from '@src/lib/types/TypeText';

type TypeStyles = {
    typography: TypeSSTypography;
    mr: TypeSSMR;
};

type BaseTitleProps = {
    children?: React.ReactNode;
    color?: Hex;
    isEllipsis?: boolean;
    mr?: TMargin;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    as?: TTitleVariant;
} & React.HTMLAttributes<HTMLElement>;

type STitleProps = {
    $mr?: TMargin;
    $isEllipsis?: boolean;
    $as: TTitleVariant;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
} & React.HTMLAttributes<HTMLElement>;

const SIZE_VARIANT = {
    ['h1']: (props: TypeSSTypography) => props.h1,
    ['h2']: (props: TypeSSTypography) => props.h2,
    ['h3']: (props: TypeSSTypography) => props.h3,
    ['h4']: (props: TypeSSTypography) => props.h4,
    ['h5']: (props: TypeSSTypography) => props.h5,
    ['h6']: (props: TypeSSTypography) => props.h6,
};

const STitle = styled.h1<STitleProps>`
    font-size: ${(props) => SIZE_VARIANT[props.$as](props.$styles.typography)};
    font-weight: ${(props) => props.$styles.typography.fontWeightTitle};
    color: ${(props) => props.$color ?? props.$colors.title};
    line-height: normal;
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
    ${(props) =>
        props.$isEllipsis &&
        css`
            align-items: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `};
`;

export const BaseTitle: React.FC<BaseTitleProps> = React.memo(
    ({ mr, as = 'h3', color, isEllipsis, $colors, $styles, ...rest }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['typography', 'mr'], $styles);

        return (
            <STitle
                as={as}
                $as={as}
                $mr={mr}
                $isEllipsis={isEllipsis}
                $colors={colors}
                $styles={styles}
                $color={color}
                {...rest}
            >
                {rest.children}
            </STitle>
        );
    }
);

//export component
export const SBaseTitle = {
    Title: STitle,
};

//export type
export namespace TBaseTitle {
    export type Styles = TypeStyles;
    export type Main = BaseTitleProps;
    export type STitle = STitleProps;
}
