import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import { SBasePopup, TBasePopup } from '../base-popup/BasePopup';
import { CSSBaseBox, CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { TBoxGapVariant, TBoxPaddingVariant, TBoxRadiusVariant, TBoxShadowVariant } from '@src/lib/types/TypeBox';
import { StyledScrollbarItem } from '@src/lib/common-styled-component/StyledBase';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
    typography: TypeSSTypography;
};

type SimplePopupProps = {
    icon: React.ReactNode;
    title: React.ReactNode;
    boxPaddingVariant?: TBoxPaddingVariant;
    boxGapVariant?: TBoxGapVariant;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TBoxShadowVariant;
    boxRadiusVariant?: TBoxRadiusVariant;
    width?: string;
    height?: string;
    maxHeight?: string;
    color?: Hex;
    $styles?: TypeStyles;
    headerProps?: React.HTMLAttributes<HTMLDivElement>;
    cardProps?: React.HTMLAttributes<HTMLDivElement>;
    iconProps?: React.HTMLAttributes<HTMLDivElement>;
    titleProps?: React.HTMLAttributes<HTMLParagraphElement>;
} & TBasePopup.Main;

type SContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $bg?: Hex;
    $width?: string;
    $height?: string;
    $maxHeight?: string;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TBoxShadowVariant;
    $boxRadiusVariant?: TBoxRadiusVariant;
} & TBasePopup.SContent;

type SHeaderProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
    $boxPaddingVariant: TBoxPaddingVariant;
} & React.HTMLAttributes<HTMLDivElement>;

type SCardProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
    $height?: string;
    $maxHeight?: string;
    $boxPaddingVariant: TBoxPaddingVariant;
    $boxGapVariant?: TBoxGapVariant;
} & React.HTMLAttributes<HTMLDivElement>;

const SContent = styled(SBasePopup.Content)<SContentProps>`
    overflow: hidden;
    width: ${(props) => props.$width ?? '260px'};
    height: ${(props) => props.$height ?? '100%'};
    max-height: ${(props) => props.$maxHeight ?? '300px'};
    ${(props) =>
        CSSSimpleBox({
            $colors: props.$colors,
            $boxBorderColor: props.$boxBorderColor,
            $boxShadowColor: props.$boxShadowColor,
            $boxShadowVariant: props.$boxShadowVariant,
            $boxRadiusVariant: props.$boxRadiusVariant,
            $styles: props.$styles.box,
        })};
`;

const SIcon = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    position: relative;
    padding-right: 8px;
    svg {
        width: 20px;
        height: 20px;
    }
`;

const STitle = styled.p<React.HTMLAttributes<HTMLParagraphElement>>`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`;

const SHeader = styled.div<SHeaderProps>`
    margin-left: 2px;
    width: 100%;
    font-size: ${(props) => props.$styles.typography.h6};
    color: ${(props) => props.$colors.title};
    border-bottom: 1px solid ${(props) => props.$colors.disabled};
    ${(props) =>
        CSSBaseBox({
            $boxPaddingVariant: props.$boxPaddingVariant,
            $styles: props.$styles.box,
            $boxDisplay: 'inline-flex',
        })};
    ${SIcon} {
        svg {
            color: ${(props) => props.$color ?? props.$colors.primaryItem};
        }
    }
`;

const SCard = styled.div<SCardProps>`
    position: relative;
    overflow: auto;
    display: flex;
    align-items: center;
    max-height: calc((${(props) => props.$maxHeight ?? '300px'}) - 50px);
    margin: 4px 0 8px 2px;
    font-size: ${(props) => props.$styles.typography.fontSizeGlobal};
    font-weight: ${(props) => props.$styles.typography.fontWeightGlobal};
    color: ${(props) => props.$colors.text};
    line-height: 20px;
    ${(props) =>
        CSSBaseBox({
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
        })};
    ${(props) =>
        StyledScrollbarItem({
            $colors: props.$colors,
            $color: props.$color ?? props.$colors.primaryItem,
        })}
`;

export const SimplePopup = React.memo(
    React.forwardRef<HTMLButtonElement, SimplePopupProps>(
        (
            {
                icon,
                title,
                trigger,
                bg,
                color,
                width,
                height,
                maxHeight,
                boxPaddingVariant = 'p-1',
                boxGapVariant,
                boxBorderColor,
                boxShadowColor,
                boxShadowVariant = 'shd-1',
                boxRadiusVariant = 'br-1',
                $colors,
                $styles,
                triggerProps,
                portalProps,
                contentProps,
                headerProps,
                cardProps,
                iconProps,
                titleProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'box', 'typography'], $styles);

            return (
                <SBasePopup.Root {...rest}>
                    <SBasePopup.Trigger ref={ref} {...triggerProps}>
                        {trigger}
                    </SBasePopup.Trigger>
                    <SBasePopup.Portal {...portalProps}>
                        <SContent
                            $colors={colors}
                            $styles={styles}
                            $bg={bg}
                            $boxBorderColor={boxBorderColor}
                            $boxShadowColor={boxShadowColor}
                            $boxShadowVariant={boxShadowVariant}
                            $boxRadiusVariant={boxRadiusVariant}
                            $width={width}
                            $height={height}
                            $maxHeight={maxHeight}
                            sideOffset={8}
                            {...contentProps}
                        >
                            <SHeader
                                $colors={colors}
                                $styles={styles}
                                $color={color}
                                $boxPaddingVariant={boxPaddingVariant}
                                {...headerProps}
                            >
                                <SIcon {...iconProps}>{icon}</SIcon>
                                <STitle {...titleProps}>{title}</STitle>
                            </SHeader>
                            <SCard
                                $colors={colors}
                                $styles={styles}
                                $color={color}
                                $boxPaddingVariant={boxPaddingVariant}
                                $boxGapVariant={boxGapVariant}
                                $height={height}
                                $maxHeight={maxHeight}
                                {...cardProps}
                            >
                                {rest.children}
                            </SCard>
                        </SContent>
                    </SBasePopup.Portal>
                </SBasePopup.Root>
            );
        }
    )
);

//export component
export const SSimplePopup = {
    Root: SBasePopup.Root,
    Trigger: SBasePopup.Trigger,
    Portal: SBasePopup.Portal,
    Content: SContent,
    Card: SCard,
    Header: SHeader,
    Title: STitle,
    Icon: SIcon,
};

//export type
export namespace TSimplePopup {
    export type Styles = TypeStyles;
    export type Main = SimplePopupProps;
    export type SRoot = TBasePopup.SRoot;
    export type SPortal = TBasePopup.SPortal;
    export type STrigger = TBasePopup.STrigger;
    export type SContent = SContentProps;
    export type SCard = SCardProps;
    export type SHeader = React.HTMLAttributes<HTMLDivElement>;
    export type STitle = React.HTMLAttributes<HTMLParagraphElement>;
    export type SIcon = React.HTMLAttributes<HTMLDivElement>;
}
