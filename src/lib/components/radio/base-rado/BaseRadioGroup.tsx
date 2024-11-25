import * as RadioGroup from '@radix-ui/react-radio-group';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import React from 'react';
import styled, { css } from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TMargin, TOrientationContent, EOrientationContent } from '@src/lib/types/TypeBase';
import { BOX_GAP_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import { TBoxGapVariant } from '@src/lib/types/TypeBox';
import { MessageBox, TMessageBox } from '../../input/wrapper-input/MessageBox';
import { SBaseText, TBaseText } from '../../typography/base/BaseText';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
    typography: TypeSSTypography;
};

type BaseRadioGroupProps = {
    mr?: TMargin;
    orientation?: TOrientationContent;
    label?: string;
    labelColor?: Hex;
    boxGapVariant?: TBoxGapVariant;
    message?: TMessageBox.Message;
    boxGapVariantLabel?: TBoxGapVariant;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    rootProps?: React.RefAttributes<HTMLDivElement>;
    labelProps?: React.HTMLAttributes<HTMLElement>;
    messageProps?: React.HTMLAttributes<HTMLSpanElement>;
} & React.ComponentPropsWithRef<typeof RadioGroup.Root>;

type SRootProps = {
    $mr?: TMargin;
    $styles: TypeStyles;
    $blocked?: boolean;
    $boxGapVariantLabel: TBoxGapVariant;
} & React.RefAttributes<HTMLDivElement>;

type SGroupProps = {
    $styles: TypeStyles;
    $orientation: TOrientationContent;
    $boxGapVariant: TBoxGapVariant;
} & React.ComponentPropsWithRef<typeof RadioGroup.Root>;

const ORIENTATION = {
    [EOrientationContent.HORIZONTAL]: css`
        flex-direction: row;
        align-items: center;
    `,
    [EOrientationContent.VERTICAL]: css`
        flex-direction: column;
        align-items: start;
    `,
};

const SGroup = styled(RadioGroup.Root)<SGroupProps>`
    position: relative;
    display: flex;
    ${(props) => BOX_GAP_VARIANT[props.$boxGapVariant](props.$styles.box)};
    ${(props) => ORIENTATION[props.$orientation]};
`;

const SRoot = styled.div<SRootProps>`
    position: relative;
    display: grid;
    ${(props) => BOX_GAP_VARIANT[props.$boxGapVariantLabel](props.$styles.box)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)}
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const BaseRadioGroup = React.memo(
    React.forwardRef<HTMLDivElement, BaseRadioGroupProps>(
        (
            {
                mr,
                blocked,
                $colors,
                $styles,
                labelColor,
                label,
                boxGapVariantLabel = 'g-1',
                boxGapVariant = 'g-1',
                orientation = EOrientationContent.VERTICAL,
                message,
                rootProps,
                labelProps,
                messageProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'box', 'typography'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $mr={mr}
                    $styles={styles}
                    $blocked={blocked}
                    $boxGapVariantLabel={boxGapVariantLabel}
                    {...rootProps}
                >
                    <SBaseText.Text $colors={colors} $styles={styles} $color={labelColor} {...labelProps}>
                        {label}
                    </SBaseText.Text>
                    <SGroup $styles={styles} $boxGapVariant={boxGapVariant} $orientation={orientation} {...rest}>
                        {rest.children}
                    </SGroup>
                    <MessageBox $colors={colors} message={message} {...messageProps} />
                </SRoot>
            );
        }
    )
);

//export component
export const SBaseRadioGroup = {
    Root: SRoot,
    Group: SGroup,
    Label: SBaseText.Text,
};

//export type
export namespace TBaseRadioGroup {
    export type Styles = TypeStyles;
    export type Main = BaseRadioGroupProps;
    export type SRoot = SRootProps;
    export type SLabel = TBaseText.SText;
    export type SGroup = SGroupProps;
}
