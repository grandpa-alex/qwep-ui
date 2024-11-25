import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EItemIconPosition, TVariantColor, TVariantSize, EVariantColor, EVariantSize } from '@src/lib/types/TypeBase';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { TVariantBtn, EVariantBtn, EBtnPosition } from '@src/lib/types/TypeBtn';
import { SSimpleButton, TSimpleButton } from '../simple-button/SimpleButton';
import { TBaseButton } from '../base-button/BaseButton';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBtn } from '@src/lib/general/styleScheme';
import { StyledLoadingItemEffect } from '@src/lib/common-styled-component/StyledLoadingItem';
import { getColor } from '@src/lib/common/getColor';
import { renderIconButton } from '@src/lib/common/renderIconItem';
import { itemRippleEffect } from '@src/lib/common/itemRippleEffect.ts';

type SubmitButtonProps = {
    isLoading: boolean;
    loadingProps?: React.HTMLAttributes<HTMLSpanElement>;
} & TSimpleButton.Main;

type SButtonProps = {
    $isLoading?: boolean;
} & TBaseButton.SButton;

type SLoadingProps = {
    $color?: Hex;
    $isLoading?: boolean;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TBaseButton.Styles;
    $colorVariant: TVariantColor;
    $sizeVariant: TVariantSize;
    $variant: TVariantBtn;
} & React.HTMLAttributes<HTMLSpanElement>;

const LOADING_SIZE = {
    [EVariantSize.L]: (props: TypeSSBtn) => css`
        width: ${props.btnIconSize_L};
        height: ${props.btnIconSize_L};
    `,
    [EVariantSize.M]: (props: TypeSSBtn) => css`
        width: ${props.btnIconSize_M};
        height: ${props.btnIconSize_M};
    `,
};

const LOADING_BTN_VARIANT = {
    [EVariantBtn.CONTAINED]: (props: SLoadingProps) => css`
        border-color: ${props.$colors.textItem};
    `,
    [EVariantBtn.TEXT]: (props: SLoadingProps) => css`
        border-color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            variant: props.$colorVariant,
        })};
    `,
    [EVariantBtn.OUTLINED]: (props: SLoadingProps) => css`
        border-color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            variant: props.$colorVariant,
        })};
    `,
};

const SButton = styled(SSimpleButton.Button)<SButtonProps>`
    ${(props) =>
        props.$isLoading &&
        css`
            pointer-events: none;
        `}
`;

const SLoading = styled.span<SLoadingProps>`
    position: relative;
    margin: 0 6px 2px 6px;
    ${(props) => LOADING_SIZE[props.$sizeVariant](props.$styles.btn)}
    ${(props) => {
        if (props.$isLoading && !props.$disabled) {
            return css`
                &::after {
                    border: 1px solid;
                    left: 3px;
                    ${LOADING_SIZE[props.$sizeVariant](props.$styles.btn)}
                    ${LOADING_BTN_VARIANT[props.$variant](props)}
                }

                ${StyledLoadingItemEffect}
            `;
        }
    }}
`;

export const SubmitButton = React.memo(
    React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
        (
            {
                isLoading,
                sizeVariant = EVariantSize.L,
                colorVariant = EVariantColor.DEFAULT,
                variant = EVariantBtn.CONTAINED,
                position = EBtnPosition.CENTER,
                iconPosition = EItemIconPosition.LEFT,
                _isActiveHover = true,
                loadingProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme(rest.$colors);
            const styles = useStyleScheme(['base', 'btn', 'typography', 'mr'], rest.$styles);

            const renderIcon = useMemo(() => {
                return renderIconButton({ icon: rest.icon, size: styles.btn, sizeVariant, rest: { $colors: colors } });
            }, [rest.icon, colors, styles, sizeVariant]);

            const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
                itemRippleEffect(
                    event,
                    getColor({
                        cs: colors,
                        color: variant === EVariantBtn.CONTAINED ? colors.alpha : rest.color,
                        variant: colorVariant,
                        opacity: '40',
                    })
                );
                if (rest.onClick) {
                    await rest.onClick(event);
                }
            };

            return (
                <SButton
                    ref={ref}
                    $colors={colors}
                    $styles={styles}
                    onClick={handleClick}
                    $sizeVariant={sizeVariant}
                    $colorVariant={colorVariant}
                    $variant={variant}
                    $mr={rest.mr}
                    $isLoading={isLoading}
                    $blocked={rest.blocked}
                    $color={rest.color}
                    $_isActiveHover={!isLoading && _isActiveHover}
                    {...rest}
                >
                    {renderIcon && (
                        <SSimpleButton.IconContainer $iconPosition={iconPosition} {...rest.iconContainerProps}>
                            {renderIcon}
                        </SSimpleButton.IconContainer>
                    )}
                    <SSimpleButton.ContentContainer $position={position} {...rest.contentProps}>
                        {rest.children}
                    </SSimpleButton.ContentContainer>
                    <SLoading
                        $isLoading={isLoading}
                        $disabled={rest.disabled}
                        $colors={colors}
                        $styles={styles}
                        $sizeVariant={sizeVariant}
                        $colorVariant={colorVariant}
                        $variant={variant}
                        $color={rest.color}
                        {...loadingProps}
                    />
                </SButton>
            );
        }
    )
);

//export component
export const SSubmitButton = {
    Button: SButton,
    Loading: SLoading,
};

//export type
export namespace TSubmitButton {
    export type Main = SubmitButtonProps;
    export type SButton = SButtonProps;
    export type SLoading = SLoadingProps;
    export type SIconContainer = TSimpleButton.SIconContainer;
    export type SContentContainer = TSimpleButton.SContentContainer;
}
