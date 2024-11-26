import * as Tabs from '@radix-ui/react-tabs';
import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox.ts';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TMargin, TOrientationContent } from '@src/lib/types/TypeBase';
import { TBoxGapVariant, TBoxPaddingVariant, TBoxWidthVariant } from '@src/lib/types/TypeBox.ts';
import React from 'react';
import styled from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

type Box = {
    boxWidthVariant?: TBoxWidthVariant;
    boxPaddingVariant?: TBoxPaddingVariant;
    boxGapVariant?: TBoxGapVariant;
    mr?: TMargin;
    $styles?: TypeStyles;
};

type TypeTabsListProps = {
    orientation?: TOrientationContent;
} & Box &
    React.ComponentPropsWithRef<typeof Tabs.List>;

type BaseTabWrapperProps = {
    component?: React.ReactNode;
    tabs: React.ReactNode;
    tabsListProps?: TypeTabsListProps;
} & Box &
    React.ComponentPropsWithRef<typeof Tabs.Root>;

type SBox = {
    $mr?: TMargin;
    $boxWidthVariant?: TBoxWidthVariant;
    $boxPaddingVariant?: TBoxPaddingVariant;
    $styles: TypeStyles;
};

type SRootProps = SBox & React.ComponentPropsWithRef<typeof Tabs.Root>;
const SRoot = styled(Tabs.Root)<SRootProps>`
    &[data-orientation='vertical'] {
        display: flex;
        flex-direction: column;
    }

    &[data-orientation='horizontal'] {
        display: flex;
    }

    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $styles: props.$styles.box,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

type SListProps = {
    $orientation: TOrientationContent;
} & SBox &
    React.ComponentPropsWithRef<typeof Tabs.List>;

const SList = styled(Tabs.List)<SListProps>`
    &[data-orientation] {
        display: ${(props) => (props.$orientation === 'vertical' ? 'block' : 'inline-flex')};
    }

    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $styles: props.$styles.box,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const BaseTabWrapper = React.memo(
    React.forwardRef<HTMLDivElement, BaseTabWrapperProps>(
        ({ mr, tabs, component, boxPaddingVariant, tabsListProps, $styles, ...rest }, ref) => {
            const styles = useStyleScheme(['mr', 'box'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $mr={mr}
                    $styles={styles}
                    $boxPaddingVariant={boxPaddingVariant}
                    orientation={'vertical'}
                    {...rest}
                >
                    {component}
                    <Tabs.List {...tabsListProps}>{tabs}</Tabs.List>
                    {rest.children}
                </SRoot>
            );
        }
    )
);

//export component
export const SBaseTabWrapper = {
    Root: SRoot,
    List: SList,
};

//export type
export namespace TBaseTabWrapper {
    export type Main = BaseTabWrapperProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
    export type SList = SListProps;
}
