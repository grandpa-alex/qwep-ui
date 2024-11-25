import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { useColorScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSInp, TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TMargin, TVariantColor, TVariantSize, EVariantColor, EVariantSize } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    base: TypeSSBase;
    inp: TypeSSInp;
    mr: TypeSSMR;
};

type RootTextareaProps = {
    mr?: TMargin;
    sizeVariant?: TVariantSize;
    colorVariant?: TVariantColor;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    disabled?: boolean;
    blocked?: boolean;
    _isActiveHover?: boolean;
    _isFocused?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $styles: TypeStyles;
    $colors: TypeColorScheme;
    $mr?: TMargin;
    $sizeVariant: TVariantSize;
    $colorVariant: TVariantColor;
    $disabled?: boolean;
    $color?: Hex;
    $blocked?: boolean;
    $_isActiveHover?: boolean;
    $_isFocused?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const SIZE = {
    [EVariantSize.L]: (props: TypeSSInp) => css`
        padding: ${props.inpPadding_Y_L} 5px ${props.inpPadding_Y_L} ${props.inpPadding_X_L};
    `,
    [EVariantSize.M]: (props: TypeSSInp) => css`
        padding: ${props.inpPadding_Y_M} 3px ${props.inpPadding_Y_M} ${props.inpPadding_X_M};
    `,
};

const SRoot = styled.div<SRootProps>`
    position: relative;
    display: inline-block;
    overflow: hidden;
    background-color: transparent;
    line-height: normal;
    ${(props) => SIZE[props.$sizeVariant](props.$styles.inp)};
    border-radius: ${(props) => props.$styles.base.borderRadiusItem};
    color: ${(props) => props.$colors.prompt};
    border: 1px solid
        ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.$disabled,
                variant: props.$colorVariant,
            })};

    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${(props) => {
        if (!props.$disabled) {
            return css`
                &:hover {
                    transition: all 0.3s ease-in-out;
                    border-color: ${getColor({
                        cs: props.$colors,
                        color: props.$color,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                    })};
                }
                ${props.$_isFocused &&
                css`
                    transition: all 0.3s ease-in-out;
                    box-shadow: 0 0 3px 0
                        ${getColor({
                            cs: props.$colors,
                            color: props.$color,
                            variant: props.$colorVariant,
                            hover: props.$_isActiveHover,
                        })}
                        inset;
                    border-color: ${getColor({
                        cs: props.$colors,
                        color: props.$color,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                    })};
                `}
            `;
        }
    }};
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const RootTextarea: React.FC<RootTextareaProps> = React.memo(
    ({
        mr,
        color,
        disabled,
        blocked,
        sizeVariant = EVariantSize.L,
        colorVariant = EVariantColor.DEFAULT,
        $colors,
        $styles,
        _isActiveHover = true,
        _isFocused,
        ...rest
    }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['base', 'mr', 'inp'], $styles);
        return (
            <SRoot
                $mr={mr}
                $styles={styles}
                $colors={colors}
                $color={color}
                $blocked={blocked}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $disabled={disabled}
                $_isActiveHover={_isActiveHover}
                $_isFocused={_isFocused}
                {...rest}
            >
                {rest.children}
            </SRoot>
        );
    }
);

//export component
export const SRootTextarea = {
    Root: SRoot,
};

//export type
export namespace TRootTextarea {
    export type Main = RootTextareaProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
