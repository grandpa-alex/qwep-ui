import { getColor } from '@src/lib/common/getColor';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EItemIconPosition, TItemIconPosition, EVariantColor, EVariantSize } from '@src/lib/types/TypeBase';
import { EInpVariant } from '@src/lib/types/TypeInp';
import React, { useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { renderIconTextField } from '@src/lib/common/renderIconItem';
import { SBaseTextField, TBaseTextField } from '../base-text-field/BaseTextField';

type SimpleTextFieldProps = {
    icon?: React.ReactNode;
    iconPosition?: TItemIconPosition;
    iconOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;
} & TBaseTextField.Main;

type SIconContProps = {
    $iconPosition: TItemIconPosition;
    $useBtn: boolean;
    $disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const SIconContainer = styled.div<SIconContProps>`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    ${(props) =>
        props.$disabled &&
        css`
            pointer-events: none;
        `};
    ${(props) =>
        props.$useBtn &&
        css`
            cursor: pointer;
        `};
    ${(props) => {
        if (props.$iconPosition === EItemIconPosition.RIGHT) {
            return css`
                order: 1;
                margin-left: 6px;
            `;
        } else {
            return css`
                order: 0;
                margin-right: 6px;
            `;
        }
    }}
`;

export const SRoot = styled(SBaseTextField.Root)<TBaseTextField.SRoot>`
    display: inline-flex;
    align-items: center;
    min-width: 100px;
    ${SIconContainer} {
        svg {
            color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.$disabled,
                    variant: props.$colorVariant,
                    hover: props.$_isFocused,
                })};
        }
    }
    &:hover {
        ${SIconContainer} {
            svg {
                color: ${(props) =>
                    getColor({
                        cs: props.$colors,
                        color: props.$color,
                        disabled: props.$disabled,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                    })};
            }
        }
    }
`;

export const SInput = styled(SBaseTextField.Input)<TBaseTextField.SInput>`
    &:disabled {
        color: ${(props) => props.$colors.disabled};
    }
    &::placeholder {
        color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
            })};
    }
    &:not([disabled]) {
        color: ${(props) => props.$colors.prompt};
    }
`;

export const SimpleTextField = React.memo(
    React.forwardRef<HTMLInputElement, SimpleTextFieldProps>(
        (
            {
                mr,
                icon,
                color,
                iconOnClick,
                _isActiveHover = true,
                iconPosition = EItemIconPosition.LEFT,
                variant = EInpVariant.OUTLINED,
                sizeVariant = EVariantSize.L,
                colorVariant = EVariantColor.DEFAULT,
                $colors,
                $styles,
                rootProps,
                iconContainerProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'inp', 'typography', 'mr'], $styles);
            const [isFocused, setIsFocused] = useState(false);
            const handleFocus = useCallback(() => !rest.disabled && setIsFocused(true), [rest.disabled]);
            const handleBlur = useCallback(() => !rest.disabled && setIsFocused(false), [rest.disabled]);

            const renderIcon = useMemo(() => {
                return renderIconTextField({ icon: icon, size: styles.inp, sizeVariant, rest: { $colors: colors } });
            }, [icon, colors, styles, sizeVariant]);

            return (
                <SRoot
                    $mr={mr}
                    $colors={colors}
                    $styles={styles}
                    $color={color}
                    $colorVariant={colorVariant}
                    $sizeVariant={sizeVariant}
                    $variant={variant}
                    $disabled={rest.disabled}
                    $blocked={rest.blocked}
                    $_isActiveHover={_isActiveHover}
                    $_isFocused={isFocused}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rootProps}
                >
                    {icon && (
                        <SIconContainer
                            as={iconOnClick ? 'button' : 'div'}
                            onClick={iconOnClick}
                            $disabled={rest.disabled}
                            $iconPosition={iconPosition}
                            $useBtn={Boolean(iconOnClick)}
                            type={'button'}
                            {...iconContainerProps}
                        >
                            {renderIcon}
                        </SIconContainer>
                    )}
                    <SInput
                        ref={ref}
                        $styles={{ typography: styles.typography }}
                        $colors={colors}
                        $color={color}
                        $colorVariant={colorVariant}
                        {...rest}
                    />
                </SRoot>
            );
        }
    )
);

//export component
export const SSimpleTextField = {
    Root: SRoot,
    IconContainer: SIconContainer,
    Input: SInput,
};

//export type
export namespace TSimpleTextField {
    export type Main = SimpleTextFieldProps;
    export type SIconContainer = SIconContProps;
    export type SInput = TBaseTextField.SInput;
    export type SRoot = TBaseTextField.SRoot;
}
