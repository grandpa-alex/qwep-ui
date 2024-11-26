import * as Tabs from '@radix-ui/react-tabs';
import { getMargin } from '@src/lib/common/getMargin';
import { useColorScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSBtn, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EVariantSize, TMargin, TVariantSize } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
    btn: TypeSSBtn;
    box: TypeSSBox;
    typography: TypeSSTypography;
};

type BaseTabProps = {
    mr?: TMargin;
    color?: Hex;
    sizeVariant?: TVariantSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    blocked?: boolean;
} & React.ComponentPropsWithRef<typeof Tabs.Trigger>;

type STabProps = {
    $mr?: TMargin;
    $blocked?: boolean;
    $sizeVariant: TVariantSize;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.ComponentPropsWithRef<typeof Tabs.Trigger>;

const TAB_SIZE = {
    [EVariantSize.L]: (btn: TypeSSBtn) => css`
        height: ${btn.btnHeight_L};
        padding: ${`${btn.btnPadding_Y_L} ${btn.btnPadding_X_L}`};
    `,
    [EVariantSize.M]: (btn: TypeSSBtn) => css`
        height: ${btn.btnHeight_M};
        padding: ${`${btn.btnPadding_Y_M} ${btn.btnPadding_X_M}`};
    `,
};

const STab = styled(Tabs.Trigger)<STabProps>`
    display: block;
    user-select: none;
    position: relative;
    overflow: hidden;
    line-height: ${({ $styles }) => $styles.typography.fontLineHeightItem};
    border: none;
    background-color: transparent;
    outline: 0;
    transition: all 400ms;
    border: 1px solid ${({ $colors }) => $colors.system};
    border-radius: ${({ $styles }) => $styles.box.boxBorderRadius_2};
    font-size: ${({ $styles }) => $styles.typography.fontSizeItem};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    ${(props) => TAB_SIZE[props.$sizeVariant](props.$styles.btn)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};

    &[data-state='active'] {
        background-color: ${(props) => props.$colors.secondary};
        box-shadow: ${(props) => `${props.$styles.box.boxShadow_2} ${props.$colors.lightShadow}`};
        border-color: ${(props) => props.$colors.secondary};
        font-weight: ${({ $styles }) => $styles.typography.fontWeightItem};

        &:disabled {
            border-color: ${(props) => props.$colors.disabled};
        }
    }
    &:not([disabled]):hover {
        box-shadow: ${(props) => `${props.$styles.box.boxShadow_2} ${props.$colors.lightShadow}`};
    }
    &:disabled {
        color: ${(props) => props.$colors.disabled};
    }
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const BaseTab = React.memo(
    React.forwardRef<HTMLButtonElement, BaseTabProps>(
        ({ mr, sizeVariant = EVariantSize.L, blocked, $colors, $styles, ...rest }, ref) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'box', 'btn', 'typography'], $styles);

            return (
                <STab
                    ref={ref}
                    $mr={mr}
                    $styles={styles}
                    $colors={colors}
                    $blocked={blocked}
                    $sizeVariant={sizeVariant}
                    {...rest}
                    value={rest.value}
                >
                    {rest.children}
                </STab>
            );
        }
    )
);

//export component
export const SBaseTab = {
    Tab: STab,
};

//export type
export namespace TBaseTab {
    export type Main = BaseTabProps;
    export type Styles = TypeStyles;
    export type STab = STabProps;
}
