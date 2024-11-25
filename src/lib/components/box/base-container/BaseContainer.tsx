import { useColorScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import React from 'react';
import { styled } from 'styled-components';

type BaseContainerProps = {
    as?: keyof JSX.IntrinsicElements;
    bg?: Hex;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SContainerProps = {
    $bg?: Hex;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SContainer = styled.div<SContainerProps>`
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.$bg ?? props.$colors.background};
`;

export const BaseContainer = React.memo(
    React.forwardRef<HTMLDivElement, BaseContainerProps>(({ as: Component = 'div', bg, $colors, ...rest }, ref) => {
        const colors = useColorScheme($colors);
        return (
            <SContainer ref={ref} as={Component} $bg={bg} $colors={colors} {...rest}>
                {rest.children}
            </SContainer>
        );
    })
);

//export component
export const SBaseContainer = {
    Container: SContainer,
};

//export type
export namespace TBaseContainer {
    export type Main = BaseContainerProps;
    export type SContainer = SContainerProps;
}
