import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TBoxRadiusVariant, TBoxShadowVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { SBaseBox, TBaseBox } from '../base-box/BaseBox';
import { styled } from 'styled-components';

type SimpleBoxProps = {
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TBoxShadowVariant;
    boxRadiusVariant?: TBoxRadiusVariant;
    $colors?: TypeColorScheme;
} & TBaseBox.Main;

type SBoxProps = {
    $colors: TypeColorScheme;
    $bg?: Hex;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TBoxShadowVariant;
    $boxRadiusVariant?: TBoxRadiusVariant;
} & TBaseBox.SBox;

const SBox = styled(SBaseBox.Box)<SBoxProps>`
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};

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

export const SimpleBox = React.memo(
    React.forwardRef<HTMLDivElement, SimpleBoxProps>(
        (
            {
                as: Component = 'div',
                bg,
                boxBorderColor,
                boxRadiusVariant,
                boxShadowVariant,
                boxShadowColor,
                $colors,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['box', 'mr'], rest.$styles);

            return (
                <SBox
                    ref={ref}
                    as={Component}
                    $styles={styles}
                    $colors={colors}
                    $mr={rest.mr}
                    $boxWidthVariant={rest.boxWidthVariant}
                    $boxPaddingVariant={rest.boxPaddingVariant}
                    $boxGapVariant={rest.boxGapVariant}
                    $boxDisplay={rest.boxDisplay}
                    $bg={bg}
                    $boxBorderColor={boxBorderColor}
                    $boxRadiusVariant={boxRadiusVariant}
                    $boxShadowVariant={boxShadowVariant}
                    $boxShadowColor={boxShadowColor}
                    {...rest}
                >
                    {rest.children}
                </SBox>
            );
        }
    )
);

//export component
export const SSimpleBox = {
    Box: SBox,
};

//export type
export namespace TSimpleBox {
    export type Main = SimpleBoxProps;
    export type SBox = SBoxProps;
}
