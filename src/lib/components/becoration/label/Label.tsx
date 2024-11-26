import { getMargin } from '@src/lib/common/getMargin';
import { useColorScheme, useStyleScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSMR } from '@src/lib/general/styleScheme';
import { TMargin } from '@src/lib/types/TypeBase';
import React, { useMemo } from 'react';
import { styled } from 'styled-components';
import { BaseTitle } from '../../typography';
import { TBaseTitle } from '../../typography/base/BaseTitle';

type TypeStyles = {
    mr: TypeSSMR;
    base: TypeSSBase;
};

type SeparatorProps = {
    mr?: TMargin;
    icon: React.ReactNode;
    title: string;
    bg?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    titleProps?: TBaseTitle.Main;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.HTMLAttributes<HTMLSpanElement>;

type SBoxProps = {
    $mr?: TMargin;
    $bg?: Hex;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLSpanElement>;

const SIconContent = styled.div`
    border-radius: 50%;
    position: relative;
`;

const SRoot = styled.div<SBoxProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    ${SIconContent} {
        background-color: ${(props) => props.$bg ?? props.$colors.secondary};
        width: ${(props) => props.$styles.base.circleDecorationElem};
        height: ${(props) => props.$styles.base.circleDecorationElem};
        min-width: ${(props) => props.$styles.base.circleDecorationElem};
        min-height: ${(props) => props.$styles.base.circleDecorationElem};
    }
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const CircleDecorationTitle = React.memo(
    React.forwardRef<HTMLDivElement, SeparatorProps>(
        ({ mr, title, icon, bg, $colors, $styles, titleProps, iconContainerProps, ...rest }, ref) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'base'], $styles);

            const renderIcon = useMemo(() => {
                return React.cloneElement(icon as React.ReactElement, {
                    style: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    },
                    //@ts-ignore
                    ...icon?.props,
                });
            }, [icon]);

            return (
                <SRoot ref={ref} $bg={bg} $colors={colors} $styles={styles} $mr={mr} {...rest}>
                    <SIconContent {...iconContainerProps}>{renderIcon}</SIconContent>
                    <BaseTitle as={'h4'} {...titleProps}>
                        {title}
                    </BaseTitle>
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
