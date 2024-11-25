import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EItemIconPosition, TItemIconPosition, EVariantColor, EVariantSize } from '@src/lib/types/TypeBase';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { getColor } from '@src/lib/common/getColor';
import { TBtnPosition, EVariantBtn, EBtnPosition } from '@src/lib/types/TypeBtn';
import { renderIconButton } from '@src/lib/common/renderIconItem';
import { SBaseButton, TBaseButton } from '../base-button/BaseButton';
import { itemRippleEffect } from '@src/lib/common/itemRippleEffect.ts';

type SimpleButtonProps = {
    position?: TBtnPosition;
    icon?: React.ReactNode;
    iconPosition?: TItemIconPosition;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
} & TBaseButton.Main;

type VariantProps = {
    hover: boolean;
} & TBaseButton.SButton;

type SIconContainerProps = {
    $iconPosition: TItemIconPosition;
} & React.HTMLAttributes<HTMLDivElement>;

type SContentContainerProps = {
    $position: TBtnPosition;
} & React.HTMLAttributes<HTMLDivElement>;

const SIconContainer = styled.div<SIconContainerProps>`
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

const BTN_VARIANT = {
    [EVariantBtn.CONTAINED]: (props: VariantProps) => css`
        color: ${props.$colors.textItem};
    `,
    [EVariantBtn.TEXT]: (props: VariantProps) => css`
        color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
            hover: props.hover,
        })};
    `,
    [EVariantBtn.OUTLINED]: (props: VariantProps) => css`
        color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            disabled: props.disabled,
            variant: props.$colorVariant,
            hover: props.hover,
        })};
    `,
};

const SButton = styled(SBaseButton.Button)<TBaseButton.SButton>`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    min-width: 70px;
    ${SIconContainer} {
        svg {
            ${(props) => BTN_VARIANT[props.$variant]({ ...props, hover: false })};
        }
    }
    &:not([disabled]):hover {
        ${SIconContainer} {
            svg {
                ${(props) => BTN_VARIANT[props.$variant]({ ...props, hover: props.$_isActiveHover })};
            }
        }
    }
`;

const SContentContainer = styled.div<SContentContainerProps>`
    flex-grow: 1;
    display: inline-block;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: ${(props) => props.$position};
`;

export const SimpleButton = React.memo(
    React.forwardRef<HTMLButtonElement, SimpleButtonProps>(
        (
            {
                icon,
                sizeVariant = EVariantSize.L,
                colorVariant = EVariantColor.DEFAULT,
                variant = EVariantBtn.CONTAINED,
                position = EBtnPosition.CENTER,
                iconPosition = EItemIconPosition.LEFT,
                _isActiveHover = true,
                iconContainerProps,
                contentProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme(rest.$colors);
            const styles = useStyleScheme(['base', 'btn', 'typography', 'mr'], rest.$styles);

            const renderIcon = useMemo(() => {
                return renderIconButton({ icon: icon, size: styles.btn, sizeVariant, rest: { $colors: colors } });
            }, [icon, colors, styles, sizeVariant]);

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
                    $color={rest.color}
                    color={rest.color}
                    $mr={rest.mr}
                    $blocked={rest.blocked}
                    $_isActiveHover={_isActiveHover}
                    {...rest}
                >
                    {renderIcon && (
                        <SIconContainer $iconPosition={iconPosition} {...iconContainerProps}>
                            {renderIcon}
                        </SIconContainer>
                    )}
                    <SContentContainer $position={position} {...contentProps}>
                        {rest.children}
                    </SContentContainer>
                </SButton>
            );
        }
    )
);

//export component
export const SSimpleButton = {
    Button: SButton,
    IconContainer: SIconContainer,
    ContentContainer: SContentContainer,
};

//export type
export namespace TSimpleButton {
    export type Main = SimpleButtonProps;
    export type SButton = TBaseButton.SButton;
    export type SIconContainer = SIconContainerProps;
    export type SContentContainer = SContentContainerProps;
}
