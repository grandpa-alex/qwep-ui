import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSBox, TypeSSMR, TypeSSSelect, TypeSSTypography } from '@src/lib/general/styleScheme';
import { TVariantColor, TMargin, TVariantSize, EVariantColor, EVariantSize } from '@src/lib/types/TypeBase';
import { TBtnPosition, EBtnPosition } from '@src/lib/types/TypeBtn';
import React from 'react';
import styled, { css } from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { TBoxPaddingVariant, TBoxShadowVariant } from '@src/lib/types/TypeBox';
import { BOX_PADDING_VARIANT, BOX_SHADOW_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import { Arrow } from '@src/lib/icons';
import { SBaseSelectComponent, TBaseSelectComponent } from './BaseSelectComponent';
import { SBaseSelectGroup } from './BaseSelectGroup';
import { StyledScrollbarItem } from '@src/lib/common-styled-component/StyledBase';
import { ArrowProps } from '@src/lib/icons/Arrow.tsx';
import { SRoot } from '@src/lib/components/input/simple-text-field/SimpleTextField.tsx';

type TypeStyles = {
    base: TypeSSBase;
    select: TypeSSSelect;
    typography: TypeSSTypography;
    mr: TypeSSMR;
    box: TypeSSBox;
};

type BaseSelectContentProps = {
    children?: React.ReactNode;
    mr?: TMargin;
    width?: string;
    sizeVariant?: TVariantSize;
    colorVariant?: TVariantColor;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    boxShadowVariant?: TBoxShadowVariant;
    boxPaddingVariant?: TBoxPaddingVariant;
    color?: Hex;
    blocked?: boolean;
    positionTrigger?: TBtnPosition;
    maxHeight?: string;
    placeholder?: React.ReactNode;
    _isActiveHover?: boolean;
    triggerProps?: React.ComponentPropsWithRef<typeof Select.Trigger>;
    valueProps?: React.ComponentPropsWithRef<typeof Select.Value>;
    iconProps?: TBaseSelectComponent.SIcon;
    iconArrowProps?: ArrowProps;
    portalProps?: React.ComponentPropsWithRef<typeof Select.Portal>;
    contentProps?: React.ComponentPropsWithRef<typeof Select.Content>;
    viewportProps?: React.ComponentPropsWithRef<typeof Select.Viewport>;
} & React.ComponentPropsWithRef<typeof Select.Root>;

type STriggerProps = {
    $mr?: TMargin;
    $color?: Hex;
    $width?: string;
    $blocked?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $positionTrigger: TBtnPosition;
    $sizeVariant: TVariantSize;
    $colorVariant: TVariantColor;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof Select.Trigger>;

const SELECT_SIZE = {
    [EVariantSize.L]: (props: TypeSSSelect) => css`
        height: ${props.selectHeight_L};
        padding: ${`${props.selectPadding_Y_L} ${props.selectPadding_X_L}`};
    `,
    [EVariantSize.M]: (props: TypeSSSelect) => css`
        height: ${props.selectHeight_M};
        padding: ${`${props.selectPadding_Y_M} ${props.selectPadding_X_M}`};
    `,
};

const POSITION_TRIGGER = {
    [EBtnPosition.CENTER]: 'center',
    [EBtnPosition.LEFT]: 'space-between',
    [EBtnPosition.RIGHT]: 'right',
};

const STrigger = styled(Select.Trigger)<STriggerProps>`
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: ${(props) => POSITION_TRIGGER[props.$positionTrigger]};
    border-radius: ${(props) => props.$styles.base.borderRadiusItem};
    font-weight: ${(props) => props.$styles.typography.fontWeightItem};
    border: 1px solid
        ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
            })};
    color: ${(props) =>
        getColor({
            cs: props.$colors,
            color: props.$color,
            disabled: props.disabled,
            variant: props.$colorVariant,
        })};
    transition: all 0.3s ease-in-out;
    background-color: transparent;
    outline: none;
    font-size: ${({ $styles }) => $styles.typography.fontSizeItem};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    line-height: normal;
    width: ${(props) => props.$width};
    &:not([disabled]):hover {
        color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        border-color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        &[data-placeholder] {
            color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.disabled,
                    variant: props.$colorVariant,
                    hover: props.$_isActiveHover,
                })};
        }
        ${SBaseSelectComponent.Icon} {
            transition: all 0.3s ease-in-out;
            svg {
                color: ${(props) =>
                    getColor({
                        cs: props.$colors,
                        color: props.$color,
                        disabled: props.disabled,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                    })};
            }
        }
    }
    &[data-placeholder] {
        color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
            })};
    }

    ${SBaseSelectComponent.Icon} {
        transform: rotate(180deg);
        svg {
            color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.disabled,
                    variant: props.$colorVariant,
                })};
        }
    }
    &[data-state='open'] {
        color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        border-color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        &[data-placeholder] {
            color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.disabled,
                    variant: props.$colorVariant,
                    hover: props.$_isActiveHover,
                })};
        }

        ${SBaseSelectComponent.Icon} {
            transform: rotate(0deg);
            svg {
                color: ${(props) =>
                    getColor({
                        cs: props.$colors,
                        color: props.$color,
                        disabled: props.disabled,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                    })};
            }
        }
    }
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${(props) => SELECT_SIZE[props.$sizeVariant](props.$styles.select)};
    span {
        &:nth-child(1) {
            user-select: none;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

type SContentProps = {
    $color?: Hex;
    $width?: string;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TVariantColor;
    $boxShadowVariant: TBoxShadowVariant;
    $boxPaddingVariant: TBoxPaddingVariant;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof Select.Content>;

const SContent = styled(Select.Content)<SContentProps>`
    overflow: hidden;
    background-color: ${(props) => props.$colors.backgroundBox};
    font-size: ${(props) => props.$styles.typography.fontSizeItem};
    border-radius: ${(props) => props.$styles.base.borderRadiusItem};
    width: ${(props) => props.$width};
    ${SBaseSelectComponent.Item} {
        &[data-disabled] {
            color: ${(props) => props.$colors.disabled};
            svg {
                color: ${(props) => props.$colors.disabled};
            }
        }

        color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};

        svg {
            color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    variant: props.$colorVariant,
                    hover: props.$_isActiveHover,
                })};
        }

        &:not([data-disabled]):hover {
            transition: all 0.1s ease-in-out;
            background-color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    variant: props.$colorVariant,
                    hover: props.$_isActiveHover,
                })};
            color: ${(props) => props.$colors.backgroundBox};
            svg {
                color: ${(props) => props.$colors.backgroundBox};
            }
        }
    }
    ${(props) => BOX_PADDING_VARIANT[props.$boxPaddingVariant](props.$styles.box)};
    ${(props) =>
        props.$boxShadowVariant &&
        BOX_SHADOW_VARIANT[props.$boxShadowVariant]({
            $box: props.$styles.box,
            $colors: props.$colors,
        })}

    ${SBaseSelectGroup.Group} {
        color: ${(props) => props.$colors.disabled};
        border-color: ${(props) => props.$colors.disabled};
    }
`;

type SViewportProps = {
    $color?: Hex;
    $maxHeight?: string;
    $colors: TypeColorScheme;
    $colorVariant: TVariantColor;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof Select.Viewport>;

const SViewport = styled.div<SViewportProps>`
    max-height: ${(props) => props.$maxHeight ?? '300px'};
    overflow-y: auto;
    margin: 0 -4px;
    padding: 0 3px;
    ${(props) =>
        StyledScrollbarItem({
            $colors: props.$colors,
            $color: props.$color,
            $colorVariant: props.$colorVariant,
            $hover: props.$_isActiveHover,
        })}
`;

export const BaseSelectContent = React.memo(
    React.forwardRef<HTMLButtonElement, BaseSelectContentProps>(
        (
            {
                mr,
                color,
                width,
                maxHeight,
                placeholder,
                positionTrigger = EBtnPosition.CENTER,
                sizeVariant = EVariantSize.L,
                colorVariant = EVariantColor.DEFAULT,
                boxPaddingVariant = 'p-1',
                boxShadowVariant = 'shd-1',
                blocked,
                $colors,
                $styles,
                _isActiveHover = true,
                triggerProps,
                valueProps,
                iconProps,
                iconArrowProps,
                portalProps,
                contentProps,
                viewportProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'box', 'select', 'typography', 'mr'], $styles);

            return (
                <Select.Root {...rest}>
                    <STrigger
                        ref={ref}
                        $mr={mr}
                        $colors={colors}
                        $styles={styles}
                        $color={color}
                        $width={width}
                        $sizeVariant={sizeVariant}
                        $colorVariant={colorVariant}
                        $positionTrigger={positionTrigger}
                        $_isActiveHover={_isActiveHover}
                        $blocked={blocked}
                        disabled={rest.disabled}
                        {...triggerProps}
                    >
                        <Select.Value placeholder={placeholder} {...valueProps} />
                        <SBaseSelectComponent.Icon {...iconProps}>
                            <Arrow {...iconArrowProps} />
                        </SBaseSelectComponent.Icon>
                    </STrigger>
                    <Select.Portal {...portalProps}>
                        <SContent
                            side={'bottom'}
                            position="popper"
                            $colorVariant={colorVariant}
                            $colors={colors}
                            $styles={styles}
                            $color={color}
                            $width={width}
                            sideOffset={5}
                            $boxPaddingVariant={boxPaddingVariant}
                            $boxShadowVariant={boxShadowVariant}
                            $_isActiveHover={_isActiveHover}
                            {...contentProps}
                        >
                            <SViewport
                                $colors={colors}
                                $color={color}
                                $colorVariant={colorVariant}
                                $maxHeight={maxHeight}
                                $_isActiveHover={_isActiveHover}
                                {...viewportProps}
                            >
                                {rest.children}
                            </SViewport>
                        </SContent>
                    </Select.Portal>
                </Select.Root>
            );
        }
    )
);

// //export component
export const SBaseSelectContent = {
    Root: SRoot,
    Value: Select.Value,
    Icon: SBaseSelectComponent.Icon,
    Portal: Select.Portal,
    Trigger: STrigger,
    Viewport: SViewport,
    Content: SContent,
};

// //export type
export namespace TBaseSelectContent {
    export type Styles = TypeStyles;
    export type Main = BaseSelectContentProps;
    export type SRoot = React.ComponentPropsWithRef<typeof Select.Root>;
    export type SValue = React.ComponentPropsWithRef<typeof Select.Value>;
    export type SIcon = TBaseSelectComponent.SIcon;
    export type SPortal = React.ComponentPropsWithRef<typeof Select.Portal>;
    export type SViewport = SViewportProps;
    export type STrigger = STriggerProps;
    export type SContent = SContentProps;
}
