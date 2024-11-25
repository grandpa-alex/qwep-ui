import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import {
    TBoxGapVariant,
    TBoxPaddingVariant,
    TBoxRadiusVariant,
    TBoxShadowVariant,
    TBoxWidthVariant,
} from '@src/lib/types/TypeBox';
import { CSSBaseBox, CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { SBaseDialogComponent, TBaseDialogComponent } from './BaseDialogComponents';

type TypeStyles = {
    box: TypeSSBox;
};

type BaseDialogProps = {
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TBoxShadowVariant;
    boxRadiusVariant?: TBoxRadiusVariant;
    boxWidthVariant?: TBoxWidthVariant;
    boxPaddingVariant?: TBoxPaddingVariant;
    boxGapVariant?: TBoxGapVariant;
    overlayBlur?: string;
    overlayColor?: Hex;
    portalProps?: React.ComponentPropsWithoutRef<typeof Dialog.Portal>;
    overlayProps?: TBaseDialogComponent.SOverlay;
    contentProps?: TBaseDialogComponent.SContent;
} & React.ComponentPropsWithoutRef<typeof Dialog.Root>;

type SOverlayProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $overlayBlur?: string;
    $overlayColor?: Hex;
} & TBaseDialogComponent.SOverlay;

const SOverlay = styled(SBaseDialogComponent.Overlay)<SOverlayProps>`
    backdrop-filter: blur(${(props) => props.$overlayBlur ?? '0px'});
    background-color: ${(props) =>
        getColor({ cs: props.$colors, color: props.$overlayColor ?? props.$colors.omega, opacity: '90' })};
`;

type SContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $boxPaddingVariant: TBoxPaddingVariant;
    $boxShadowVariant?: TBoxShadowVariant;
    $boxRadiusVariant: TBoxRadiusVariant;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxWidthVariant?: TBoxWidthVariant;
    $boxGapVariant?: TBoxGapVariant;
    $bg?: Hex;
} & TBaseDialogComponent.SContent;

const SContent = styled(SBaseDialogComponent.Content)<SContentProps>`
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
        })};
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

export const BaseDialog = React.memo(
    React.forwardRef<HTMLDivElement, BaseDialogProps>(
        (
            {
                bg,
                boxBorderColor,
                boxShadowColor,
                boxShadowVariant,
                boxRadiusVariant = 'br-2',
                boxPaddingVariant = 'p-3',
                boxWidthVariant,
                boxGapVariant,
                overlayBlur,
                overlayColor,
                $colors,
                $styles,
                overlayProps,
                portalProps,
                contentProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['box'], $styles);

            return (
                <Dialog.Root {...rest}>
                    <Dialog.Portal {...portalProps}>
                        <SOverlay
                            $colors={colors}
                            $styles={styles}
                            $overlayColor={overlayColor}
                            $overlayBlur={overlayBlur}
                            {...overlayProps}
                        >
                            <SContent
                                ref={ref}
                                $colors={colors}
                                $styles={styles}
                                $boxPaddingVariant={boxPaddingVariant}
                                $bg={bg}
                                $boxBorderColor={boxBorderColor}
                                $boxShadowColor={boxShadowColor}
                                $boxShadowVariant={boxShadowVariant}
                                $boxRadiusVariant={boxRadiusVariant}
                                $boxWidthVariant={boxWidthVariant}
                                $boxGapVariant={boxGapVariant}
                                {...contentProps}
                            >
                                {rest.children}
                            </SContent>
                        </SOverlay>
                    </Dialog.Portal>
                </Dialog.Root>
            );
        }
    )
);

//export component
export const SBaseDialog = {
    Root: Dialog.Root,
    Overlay: SOverlay,
    Content: SContent,
    Portal: Dialog.Portal,
};

//export type
export namespace TBaseDialog {
    export type Main = BaseDialogProps;
    export type Styles = TypeStyles;
    export type SRoot = React.ComponentPropsWithoutRef<typeof Dialog.Root>;
    export type SPortal = React.ComponentPropsWithoutRef<typeof Dialog.Portal>;
    export type SOverlay = SOverlayProps;
    export type SContent = SContentProps;
}
