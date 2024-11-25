import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import { TMargin, TOrientationContent } from '@src/lib/types/TypeBase';
import { getMargin } from '@src/lib/common/getMargin';
import { StyledScrollbarItem } from '@src/lib/common-styled-component/StyledBase';
import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { TBoxDisplay, TBoxGapVariant, TBoxPaddingVariant, TBoxWidthVariant } from '@src/lib/types/TypeBox';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

type TypeSize = {
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    minWidth?: string;
    minHeight?: string;
};

type AdaptiveScrollAreaProps = {
    mr?: TMargin;
    boxWidthVariant?: TBoxWidthVariant;
    boxPaddingVariant?: TBoxPaddingVariant;
    boxGapVariant?: TBoxGapVariant;
    boxDisplay?: TBoxDisplay;
    thumbColor?: Hex;
    orientation?: TOrientationContent;
    children?: React.ReactNode;
    size?: TypeSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $mr?: TMargin;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
    $size?: TypeSize;
    $thumbColor?: Hex;
    $boxWidthVariant?: TBoxWidthVariant;
    $boxPaddingVariant?: TBoxPaddingVariant;
    $boxGapVariant?: TBoxGapVariant;
    $boxDisplay?: TBoxDisplay;
} & React.HTMLAttributes<HTMLDivElement>;

const SRoot = styled.div<SRootProps>`
    overflow-y: auto;
    ${(props) => props.$size}
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
            $boxDisplay: props.$boxDisplay,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
    ${(props) =>
        StyledScrollbarItem({
            $colors: props.$colors,
            $color: props.$thumbColor ?? props.$colors.primaryItem,
        })}
`;

export const AdaptiveScrollArea = React.memo(
    React.forwardRef<HTMLDivElement, AdaptiveScrollAreaProps>(
        (
            {
                mr,
                children,
                boxWidthVariant,
                boxDisplay,
                boxPaddingVariant,
                boxGapVariant,
                thumbColor,
                size,
                $colors,
                $styles,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'box'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $mr={mr}
                    $colors={colors}
                    $thumbColor={thumbColor}
                    $styles={styles}
                    $size={size}
                    $boxWidthVariant={boxWidthVariant}
                    $boxPaddingVariant={boxPaddingVariant}
                    $boxGapVariant={boxGapVariant}
                    $boxDisplay={boxDisplay}
                    {...rest}
                >
                    {children}
                </SRoot>
            );
        }
    )
);

//export component
export const SAdaptiveScrollArea = {
    Root: SRoot,
};

//export type
export namespace TAdaptiveScrollArea {
    export type Styles = TypeStyles;
    export type Main = AdaptiveScrollAreaProps;
    export type SRoot = SRootProps;
}
