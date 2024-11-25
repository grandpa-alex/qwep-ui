import { Icon } from '@src/lib';
import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { getColor } from '@src/lib/common/getColor';
import { useColorScheme } from '@src/lib/general';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSBox, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import {
    ENotificationPosition,
    EVariantToast,
    TNotificationPosition,
    TVariantToast,
    TMargin,
    EVariantSize,
} from '@src/lib/types/TypeBase';
import { TBoxGapVariant, TBoxPaddingVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { css, styled } from 'styled-components';

type TypeStyles = {
    typography: TypeSSTypography;
    box: TypeSSBox;
    base: TypeSSBase;
};

type BaseNotificationToastProps = {
    id: string;
    count?: number;
    onClose?: (id: string, position: TNotificationPosition) => void;
    title?: string;
    message?: React.ReactNode;
} & BaseProps;

type BaseProps = {
    position: TNotificationPosition;
    variant?: TVariantToast;
    iconSizeVariant?: EVariantSize;
    isClose?: boolean;
    icon?: React.ReactNode;
    mr?: TMargin;
    boxPaddingVariant?: TBoxPaddingVariant;
    boxGapVariant?: TBoxGapVariant;
    animationDuration?: number;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $variant: TVariantToast;
    $position: TNotificationPosition;
    $boxPaddingVariant?: TBoxPaddingVariant;
    $boxGapVariant?: TBoxGapVariant;
    $animationDuration?: number;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;
//     [ENotificationPosition.BOTTOM_RIGHT]: css`
//         @keyframes ToastBottomRight {
//             from {
//                 opacity: 0;
//                 transform: translateX(50%);
//             }
//             to {
//                 opacity: 0.8;
//                 transform: translateX(0);
//             }
//         }
//         animation: ToastBottomRight;
//     `,
//     [ENotificationPosition.BOTTOM_CENTER]: css`
//         @keyframes ToastBottomCenter {
//             from {
//                 opacity: 0;
//                 transform: translateY(50%);
//             }
//             to {
//                 opacity: 0.8;
//                 transform: translateY(0);
//             }
//         }
//         animation: ToastBottomCenter;
//     `,
//     [ENotificationPosition.BOTTOM_LEFT]: css`
//         @keyframes ToastBottomLeft {
//             from {
//                 opacity: 0;
//                 transform: translateX(-50%);
//             }
//             to {
//                 opacity: 0.8;
//                 transform: translateX(0);
//             }
//         }
//         animation: ToastBottomLeft;
//     `,
//     [ENotificationPosition.CENTER_RIGHT]: css`
//         @keyframes ToastCenterRight {
//             from {
//                 opacity: 0;
//                 transform: translateX(50%);
//             }
//             to {
//                 opacity: 0.8;
//                 transform: translateX(0);
//             }
//         }
//         animation: ToastCenterRight;
//     `,
//     [ENotificationPosition.CENTER]: css`
//         @keyframes ToastCenter {
//             from {
//                 opacity: 0;
//                 transform: scale(0.8);
//             }
//             to {
//                 opacity: 0.8;
//                 transform: scale(1);
//             }
//         }
//         animation: ToastCenter;
//     `,
//     [ENotificationPosition.CENTER_LEFT]: css`
//         @keyframes ToastCenterLeft {
//             from {
//                 opacity: 0;
//                 transform: translateX(-50%);
//             }
//             to {
//                 opacity: 0.8;
//                 transform: translateX(0);
//             }
//         }
//         animation: ToastCenterLeft;
//     `,
//     [ENotificationPosition.TOP_RIGHT]: css`
//         @keyframes ToastTopRight {
//             from {
//                 opacity: 0;
//                 transform: translateX(50%);
//             }
//             to {
//                 opacity: 0.8;
//                 transform: translateX(0);
//             }
//         }
//         animation: ToastTopRight;
//     `,
//     [ENotificationPosition.TOP_CENTER]: css`
//         @keyframes ToastTopCenter {
//             from {
//                 opacity: 0;
//                 transform: translateY(-50%);
//             }
//             to {
//                 opacity: 0.8;
//                 transform: translateY(0);
//             }
//         }
//         animation: ToastTopCenter;
//     `,
//     [ENotificationPosition.TOP_LEFT]: css`
//         @keyframes ToastTopLeft {
//             from {
//                 opacity: 0;
//                 transform: translateX(-50%);
//             }
//             to {
//                 opacity: 0.8;
//                 transform: translateX(0);
//             }
//         }
//         animation: ToastTopLeft;
//     `,
// };

const SCount = styled.p`
    position: absolute;
    top: -2px;
    left: -2px;
    font-size: 8px;
    font-weight: 600;
    width: 13px;
    height: 13px;
    min-height: 13px;
    min-width: 13px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SIconContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    min-height: 36px;
    min-width: 36px;
    border-radius: 50%;
`;

const createKeyframeAnimation = (name: string, transformFrom: string) => css`
    @keyframes ${name} {
        from {
            opacity: 0;
            transform: ${transformFrom};
        }
        to {
            opacity: 0.9;
            transform: translateX(0);
        }
    }
    animation: ${name};
`;

const ANIMATION_VARIANT = {
    [ENotificationPosition.BOTTOM_RIGHT]: createKeyframeAnimation('ToastBottomRight', 'translateX(50%)'),
    [ENotificationPosition.BOTTOM_CENTER]: createKeyframeAnimation('ToastBottomCenter', 'translateY(50%)'),
    [ENotificationPosition.BOTTOM_LEFT]: createKeyframeAnimation('ToastBottomLeft', 'translateX(-50%)'),
    [ENotificationPosition.CENTER_RIGHT]: createKeyframeAnimation('ToastCenterRight', 'translateX(50%)'),
    [ENotificationPosition.CENTER]: css`
        @keyframes ToastCenter {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 0.9;
                transform: scale(1);
            }
        }
        animation: ToastCenter;
    `,
    [ENotificationPosition.CENTER_LEFT]: createKeyframeAnimation('ToastCenterLeft', 'translateX(-50%)'),
    [ENotificationPosition.TOP_RIGHT]: createKeyframeAnimation('ToastTopRight', 'translateX(50%)'),
    [ENotificationPosition.TOP_CENTER]: createKeyframeAnimation('ToastTopCenter', 'translateY(-50%)'),
    [ENotificationPosition.TOP_LEFT]: createKeyframeAnimation('ToastTopLeft', 'translateX(-50%)'),
};

const createGradient = (startColor: string, endColor: string) => `linear-gradient(180deg, ${startColor}, ${endColor})`;

const COLOR_VARIANT = {
    [EVariantToast.INFO]: (colors: TypeColorScheme) => createGradient(colors.backgroundInfo, colors.background),
    [EVariantToast.WARNING]: (colors: TypeColorScheme) => createGradient(colors.backgroundWarning, colors.background),
    [EVariantToast.ERROR]: (colors: TypeColorScheme) => createGradient(colors.backgroundError, colors.background),
    [EVariantToast.SUCCESS]: (colors: TypeColorScheme) => createGradient(colors.backgroundSuccess, colors.background),
};

const applyBoxShadow = ($styles: TypeSSBox, $colors: TypeColorScheme) =>
    `${$styles.boxShadow_1} ${$colors.shadowColor}`;

const applyGradient = ($variant: TVariantToast, $colors: TypeColorScheme) => COLOR_VARIANT[$variant]($colors);

const SRoot = styled.div<SRootProps>`
    box-sizing: border-box;
    position: relative;
    display: flex;
    border-radius: ${({ $styles }) => $styles.base.borderRadiusItem};
    color: ${({ $colors }) => $colors.text};
    font-size: 12px;
    max-width: 400px;
    min-width: 250px;
    height: 100%;
    box-shadow: ${({ $styles, $colors }) => applyBoxShadow($styles.box, $colors)};
    background: ${({ $colors, $variant }) => applyGradient($variant, $colors)};
    ${({ $animationDuration, $position }) => css`
        ${ANIMATION_VARIANT[$position]}
        animation-duration: ${$animationDuration ?? 0.5}s;
        animation-timing-function: ease-in-out;
    `}
    opacity: 0.9;
    &:hover {
        transition: all 0.3s ease-in-out;
        opacity: 1;
    }

    ${SIconContent} {
        background: ${({ $colors, $variant }) => applyGradient($variant, $colors)};
        box-shadow: ${({ $styles, $colors }) => applyBoxShadow($styles.box, $colors)};

        ${SCount} {
            background-color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    variant: props.$variant,
                    opacity: 'dd',
                })};
            color: ${(props) => props.$colors.alpha};
        }
    }

    ${(props) =>
        CSSBaseBox({
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
        })};
`;

const STitle = styled.p`
    font-size: 14px;
    font-weight: 450;
`;

const SContent = styled.div`
    margin-left: 12px;
    width: 100%;
`;

const SHeader = styled.div`
    margin-bottom: 6px;
    display: flex;
    align-items: start;
    justify-content: space-between;
`;

const SCloseBtn = styled.button`
    all: unset;
    cursor: pointer;
`;

const iconVariant = {
    [EVariantToast.ERROR]: (colorVariant: TVariantToast, sizeVariant: EVariantSize) => (
        <Icon.Error colorVariant={colorVariant} sizeVariant={sizeVariant} />
    ),
    [EVariantToast.INFO]: (colorVariant: TVariantToast, sizeVariant: EVariantSize) => (
        <Icon.Info colorVariant={colorVariant} sizeVariant={sizeVariant} />
    ),
    [EVariantToast.SUCCESS]: (colorVariant: TVariantToast, sizeVariant: EVariantSize) => (
        <Icon.Success colorVariant={colorVariant} sizeVariant={sizeVariant} />
    ),
    [EVariantToast.WARNING]: (colorVariant: TVariantToast, sizeVariant: EVariantSize) => (
        <Icon.Warning colorVariant={colorVariant} sizeVariant={sizeVariant} />
    ),
};

export const BaseNotificationToast: React.FC<BaseNotificationToastProps> = React.memo(
    ({
        id = '1',
        title,
        count = 1,
        message,
        position = ENotificationPosition.BOTTOM_RIGHT,
        onClose,
        variant = EVariantToast.ERROR,
        iconSizeVariant = EVariantSize.M,
        boxPaddingVariant = 'p-2',
        isClose = true,
        icon,
        boxGapVariant,
        animationDuration,
        $styles,
        $colors,
        ...rest
    }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['box', 'typography', 'base'], $styles);

        return (
            <SRoot
                $styles={styles}
                $colors={colors}
                $position={position}
                $variant={variant}
                $boxPaddingVariant={boxPaddingVariant}
                $boxGapVariant={boxGapVariant}
                $animationDuration={animationDuration}
                {...rest}
            >
                <SIconContent>
                    {count > 1 && <SCount>{count}</SCount>}
                    {icon ? icon : iconVariant[variant](variant, iconSizeVariant)}
                </SIconContent>
                <SContent>
                    <SHeader>
                        <STitle>{title}</STitle>
                        {isClose && (
                            <SCloseBtn onClick={() => onClose && onClose(id, position)}>
                                <Icon.Close sizeVariant={iconSizeVariant} colorVariant={variant} />
                            </SCloseBtn>
                        )}
                    </SHeader>
                    {message}
                </SContent>
            </SRoot>
        );
    }
);

//export component
export const SBaseNotificationToast = {
    Root: SRoot,
};

//export type
export namespace TBaseNotificationToast {
    export type Base = BaseProps;
    export type Main = BaseNotificationToastProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
