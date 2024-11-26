import { CSSBoxLayout } from '@src/lib/common-styled-component/StyledComponentBox';
import { getMargin } from '@src/lib/common/getMargin';
import { useColorScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBoxLayout, TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TMargin } from '@src/lib/types/TypeBase';
import React from 'react';
import { styled } from 'styled-components';

type TypeStyles = {
    boxLayout: TypeSSBoxLayout;
    mr: TypeSSMR;
};

type BaseBoxProps = {
    mr?: TMargin;
    bg?: Hex;
    as?: keyof JSX.IntrinsicElements;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SBoxProps = {
    $bg?: Hex;
    $mr?: TMargin;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SRoot = styled.div<SBoxProps>`
    margin: 0 auto;
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    ${(props) => CSSBoxLayout(props.$styles.boxLayout)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const BoxLayout = React.memo(
    React.forwardRef<HTMLDivElement, BaseBoxProps>(
        ({ mr, bg, as: Component = 'div', $styles, $colors, ...rest }, ref) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['boxLayout', 'mr'], $styles);

            return (
                <SRoot ref={ref} as={Component} $bg={bg} $styles={styles} $colors={colors} $mr={mr} {...rest}>
                    {rest.children}
                </SRoot>
            );
        }
    )
);

// //export component
// export const SBaseBox = {
//     Box: SBox,
// };

// //export type
// export namespace TBaseBox {
//     export type Main = BaseBoxProps;
//     export type Styles = TypeStyles;
//     export type SBox = SBoxProps;
// }
