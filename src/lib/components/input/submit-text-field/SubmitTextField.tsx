import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EItemIconPosition, TVariantColor, TVariantSize, EVariantColor, EVariantSize } from '@src/lib/types/TypeBase';
import { EInpVariant } from '@src/lib/types/TypeInp';
import React, { useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { SSimpleTextField, TSimpleTextField } from '../simple-text-field/SimpleTextField';
import { renderIconTextField } from '@src/lib/common/renderIconItem';
import { StyledLoadingItemEffect } from '@src/lib/common-styled-component/StyledLoadingItem';
import { TBaseTextField } from '../base-text-field/BaseTextField';

type SubmitTextFieldProps = {
    isLoading: boolean;
    loadingProps?: React.HTMLAttributes<HTMLSpanElement>;
} & TSimpleTextField.Main;

type SInpProps = {
    $isLoading?: boolean;
} & TSimpleTextField.SInput;

type SLoaderProps = {
    $color?: Hex;
    $isLoading?: boolean;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TBaseTextField.Styles;
    $colorVariant: TVariantColor;
    $sizeVariant: TVariantSize;
} & React.HTMLAttributes<HTMLSpanElement>;

const SInput = styled(SSimpleTextField.Input)<SInpProps>`
    ${(props) =>
        props.$isLoading &&
        css`
            pointer-events: none;
        `}
`;

const LOADING_SIZE = {
    [EVariantSize.L]: (props: SLoaderProps) => css`
        width: ${props.$styles.inp.inpIconSize_L};
        height: ${props.$styles.inp.inpIconSize_L};
    `,
    [EVariantSize.M]: (props: SLoaderProps) => css`
        width: ${props.$styles.inp.inpIconSize_M};
        height: ${props.$styles.inp.inpIconSize_M};
    `,
};

const SLoading = styled.span<SLoaderProps>`
    margin: 0 6px 2px 6px;
    ${(props) => LOADING_SIZE[props.$sizeVariant](props)}
    ${(props) => {
        if (props.$isLoading && !props.$disabled) {
            return css`
                &::after {
                    ${LOADING_SIZE[props.$sizeVariant](props)}
                    border: 1px solid ${getColor({
                        cs: props.$colors,
                        color: props.$color,
                        variant: props.$colorVariant,
                    })};
                }
                ${StyledLoadingItemEffect}
            `;
        }
    }}
`;

export const SubmitTextField = React.memo(
    React.forwardRef<HTMLInputElement, SubmitTextFieldProps>(
        (
            {
                mr,
                icon,
                color,
                iconOnClick,
                _isActiveHover = true,
                isLoading = false,
                iconPosition = EItemIconPosition.LEFT,
                variant = EInpVariant.OUTLINED,
                sizeVariant = EVariantSize.L,
                colorVariant = EVariantColor.DEFAULT,
                $colors,
                $styles,
                rootProps,
                iconContainerProps,
                loadingProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'inp', 'typography', 'mr'], $styles);
            const [isFocused, setIsFocused] = useState(false);
            const handleFocus = useCallback(
                () => (!rest.disabled || isLoading) && setIsFocused(true),
                [rest.disabled, isLoading]
            );
            const handleBlur = useCallback(
                () => (!rest.disabled || isLoading) && setIsFocused(false),
                [rest.disabled, isLoading]
            );

            const renderIcon = useMemo(() => {
                return renderIconTextField({ icon: icon, size: styles.inp, sizeVariant, rest: { $colors: colors } });
            }, [icon, colors, styles, sizeVariant]);

            return (
                <SSimpleTextField.Root
                    $mr={mr}
                    $colors={colors}
                    $styles={styles}
                    $color={color}
                    $colorVariant={colorVariant}
                    $sizeVariant={sizeVariant}
                    $variant={variant}
                    $disabled={rest.disabled}
                    $blocked={rest.blocked}
                    $_isFocused={isFocused}
                    $_isActiveHover={!isLoading && _isActiveHover}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rootProps}
                >
                    {icon && (
                        <SSimpleTextField.IconContainer
                            as={iconOnClick ? 'button' : 'div'}
                            onClick={iconOnClick}
                            $iconPosition={iconPosition}
                            $disabled={rest.disabled || isLoading}
                            $useBtn={Boolean(iconOnClick)}
                            type={'button'}
                            {...iconContainerProps}
                        >
                            {renderIcon}
                        </SSimpleTextField.IconContainer>
                    )}

                    <SInput
                        ref={ref}
                        $styles={{ typography: styles.typography }}
                        $colors={colors}
                        $color={color}
                        $colorVariant={colorVariant}
                        $isLoading={isLoading}
                        disabled={rest.disabled}
                        {...rest}
                    />

                    <SLoading
                        $styles={styles}
                        $colors={colors}
                        $color={color}
                        $colorVariant={colorVariant}
                        $isLoading={isLoading}
                        $sizeVariant={sizeVariant}
                        $disabled={rest.disabled}
                        {...loadingProps}
                    />
                </SSimpleTextField.Root>
            );
        }
    )
);

//export component
export const SSubmitTextField = {
    Root: SSimpleTextField.Root,
    Input: SInput,
    Loading: SLoading,
    IconContainer: SSimpleTextField.IconContainer,
};

//export type
export namespace TSubmitTextField {
    export type Main = SubmitTextFieldProps;
    export type SInput = SInpProps;
    export type SLoading = SLoaderProps;
    export type SRoot = TSimpleTextField.SRoot;
    export type SIconContainer = TSimpleTextField.SIconContainer;
}
