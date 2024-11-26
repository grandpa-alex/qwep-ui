import { CSSBaseLayout } from '@src/lib/common-styled-component/StyledComponentBox';
import { useStyleScheme } from '@src/lib/general';
import { TypeSSBoxLayout } from '@src/lib/general/styleScheme';
import React from 'react';
import { styled } from 'styled-components';

type TypeStyles = {
    boxLayout: TypeSSBoxLayout;
};

type BaseLayoutProps = {
    as?: keyof JSX.IntrinsicElements;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $styles: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

const SRoot = styled.div<SRootProps>`
    position: relative;
    max-width: 100%;
    min-height: 100%;
    height: 100%;
    ${(props) => CSSBaseLayout(props.$styles.boxLayout)};
`;

export const BaseLayout = React.memo(
    React.forwardRef<HTMLDivElement, BaseLayoutProps>(({ as: Component = 'div', children, $styles, ...rest }, ref) => {
        const styles = useStyleScheme(['boxLayout'], $styles);
        return (
            <SRoot ref={ref} as={Component} $styles={styles} {...rest}>
                {children}
            </SRoot>
        );
    })
);

//export component
export const SBaseLayout = {
    Root: SRoot,
};

//export type
export namespace TBaseLayout {
    export type Main = BaseLayoutProps;
    export type SRoot = React.HTMLAttributes<HTMLDivElement>;
    export type SWrapper = React.HTMLAttributes<HTMLDivElement>;
}
