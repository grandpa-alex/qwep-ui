import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import { EOrientationContent, TMargin, TOrientationContent } from '@src/lib/types/TypeBase';
import { SBaseScrollAreaComponent, TBaseScrollAreaComponent } from './BaseScrollAreaComponent';
import { getMargin } from '@src/lib/common/getMargin';
import { getColor } from '@src/lib/common/getColor';

type TypeStyles = {
    mr: TypeSSMR;
};

type BaseScrollAreaProps = {
    mr?: TMargin;
    width?: string;
    height?: string;
    bgScrollbar?: Hex;
    thumbColor?: Hex;
    orientation?: TOrientationContent;
    children?: React.ReactNode;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    viewportProps?: TBaseScrollAreaComponent.SViewport;
    scrollbarProps?: TBaseScrollAreaComponent.SScrollbar;
    thumbProps?: TBaseScrollAreaComponent.SThumb;
    cornerProps?: React.ComponentPropsWithoutRef<typeof ScrollArea.Corner>;
} & TBaseScrollAreaComponent.SRoot;

type SRootProps = {
    $mr?: TMargin;
    $styles: TypeStyles;
    $width?: string;
    $height?: string;
} & TBaseScrollAreaComponent.SRoot;

type SScrollbarProps = {
    $bgScrollbar?: Hex;
    $colors: TypeColorScheme;
} & TBaseScrollAreaComponent.SScrollbar;

type SThumbProps = {
    $colors: TypeColorScheme;
    $thumbColor?: Hex;
} & TBaseScrollAreaComponent.SThumb;

const SRoot = styled(SBaseScrollAreaComponent.Root)<SRootProps>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

const SScrollbar = styled(SBaseScrollAreaComponent.Scrollbar)<SScrollbarProps>`
    transition: background 160ms ease-out;
    &:hover {
        background-color: ${(props) =>
            props.$bgScrollbar ??
            getColor({
                cs: props.$colors,
                color: props.$colors.primaryItem,
                opacity: '60',
            })};
    }

    &[data-orientation='vertical'] {
        width: 3px;
    }
    &[data-orientation='horizontal'] {
        flex-direction: column;
        height: 3px;
    }
`;

const SThumb = styled(SBaseScrollAreaComponent.Thumb)<SThumbProps>`
    background-color: ${(props) => props.$thumbColor ?? props.$colors.primaryItemActive};
    border-radius: 2px;
`;

export const BaseScrollArea = React.memo(
    React.forwardRef<HTMLDivElement, BaseScrollAreaProps>(
        (
            {
                mr,
                orientation = EOrientationContent.VERTICAL,
                width,
                height,
                bgScrollbar,
                thumbColor,
                $colors,
                $styles,
                viewportProps,
                scrollbarProps,
                thumbProps,
                cornerProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr'], $styles);

            return (
                <SRoot ref={ref} $mr={mr} $width={width} $height={height} $styles={styles} {...rest}>
                    <SBaseScrollAreaComponent.Viewport {...viewportProps}>
                        {rest.children}
                    </SBaseScrollAreaComponent.Viewport>
                    <SScrollbar
                        $colors={colors}
                        $bgScrollbar={bgScrollbar}
                        orientation={orientation}
                        {...scrollbarProps}
                    >
                        <SThumb $colors={colors} $thumbColor={thumbColor} {...thumbProps} />
                    </SScrollbar>
                    <ScrollArea.Corner {...cornerProps} />
                </SRoot>
            );
        }
    )
);

//export component
export const SBaseScrollArea = {
    Root: SRoot,
    Viewport: SBaseScrollAreaComponent.Viewport,
    Scrollbar: SScrollbar,
    Thumb: SThumb,
    Corner: ScrollArea.Corner,
};

//export type
export namespace TBaseScrollArea {
    export type Styles = TypeStyles;
    export type Main = BaseScrollAreaProps;
    export type SRoot = SRootProps;
    export type SViewport = TBaseScrollAreaComponent.SViewport;
    export type SCorner = React.ComponentPropsWithoutRef<typeof ScrollArea.Corner>;
    export type SScrollbar = SScrollbarProps;
    export type SThumb = SThumbProps;
}
