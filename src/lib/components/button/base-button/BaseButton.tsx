import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { itemRippleEffect } from '@src/lib/common/itemRippleEffect';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSBtn, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { TVariantColor, TMargin, TVariantSize, EVariantColor, EVariantSize } from '@src/lib/types/TypeBase';
import { TVariantBtn, EVariantBtn } from '@src/lib/types/TypeBtn';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    base: TypeSSBase;
    btn: TypeSSBtn;
    typography: TypeSSTypography;
    mr: TypeSSMR;
};

type BaseButtonProps = {
    mr?: TMargin;
    sizeVariant?: TVariantSize;
    colorVariant?: TVariantColor;
    variant?: TVariantBtn;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    blocked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    _isActiveHover?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type SButtonProps = {
    $mr?: TMargin;
    $color?: Hex;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TVariantSize;
    $colorVariant: TVariantColor;
    $variant: TVariantBtn;
    $_isActiveHover: boolean;
    $blocked?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const BTN_SIZE = {
    [EVariantSize.L]: (btn: TypeSSBtn) => css`
        height: ${btn.btnHeight_L};
        padding: ${`${btn.btnPadding_Y_L} ${btn.btnPadding_X_L}`};
    `,
    [EVariantSize.M]: (btn: TypeSSBtn) => css`
        height: ${btn.btnHeight_M};
        padding: ${`${btn.btnPadding_Y_M} ${btn.btnPadding_X_M}`};
    `,
};

const BTN_VARIANT = {
    [EVariantBtn.CONTAINED]: (props: SButtonProps) => css`
        color: ${props.$colors.textItem};
        background-color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
        })};
        border: 0;

        &:not([disabled]):hover {
            transition: all 0.3s ease-in-out;
            background-color: ${getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        }
    `,
    [EVariantBtn.TEXT]: (props: SButtonProps) => css`
        color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
        })};
        background-color: transparent;
        border: 0;

        &:not([disabled]):hover {
            transition: all 0.3s ease-in-out;
            color: ${getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        }
    `,
    [EVariantBtn.OUTLINED]: (props: SButtonProps) => css`
        color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
        })};
        background-color: transparent;
        border-color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            variant: props.$colorVariant,
        })};
        border-left: 1px solid;
        border-right: 1px solid;
        border-top: 1px solid;
        border-bottom: 1px solid;

        &:not([disabled]):hover {
            transition: all 0.3s ease-in-out;
            color: ${getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
            border-color: ${getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        }
    `,
};

export const SButton = styled.button<SButtonProps>`
    display: block;
    user-select: none;
    position: relative;
    overflow: hidden;
    line-height: normal;
    outline: 0;
    transition: background-color 400ms;
    font-size: ${({ $styles }) => $styles.typography.fontSizeItem};
    font-weight: ${(props) => props.$styles.typography.fontWeightItem};
    border-radius: ${({ $styles }) => $styles.base.borderRadiusItem};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${(props) => BTN_SIZE[props.$sizeVariant](props.$styles.btn)};
    ${(props) => BTN_VARIANT[props.$variant](props)};
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const BaseButton = React.memo(
    React.forwardRef<HTMLButtonElement, BaseButtonProps>(
        (
            {
                mr,
                color,
                sizeVariant = EVariantSize.L,
                colorVariant = EVariantColor.DEFAULT,
                variant = EVariantBtn.CONTAINED,
                onClick,
                $colors,
                $styles,
                blocked,
                _isActiveHover = true,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'btn', 'typography', 'mr'], $styles);

            const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
                itemRippleEffect(
                    event,
                    getColor({
                        cs: colors,
                        color: variant === EVariantBtn.CONTAINED ? colors.alpha : color,
                        variant: colorVariant,
                        opacity: '40',
                    })
                );
                if (onClick) {
                    await onClick(event);
                }
            };

            return (
                <SButton
                    ref={ref}
                    $colors={colors}
                    $styles={styles}
                    $sizeVariant={sizeVariant}
                    $mr={mr}
                    $color={color}
                    $colorVariant={colorVariant}
                    $variant={variant}
                    onClick={handleClick}
                    $blocked={blocked}
                    $_isActiveHover={_isActiveHover}
                    {...rest}
                >
                    {rest.children}
                </SButton>
            );
        }
    )
);

//export component
export const SBaseButton = {
    Button: SButton,
};

//export type
export namespace TBaseButton {
    export type Styles = TypeStyles;
    export type Main = BaseButtonProps;
    export type SButton = SButtonProps;
}
