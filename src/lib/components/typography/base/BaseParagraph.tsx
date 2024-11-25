import { TypeSSMR } from '@src/lib/general/styleScheme';
import React from 'react';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import styled from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TMargin } from '@src/lib/types/TypeBase';
import { SBaseText, TBaseText } from './BaseText';
import { css } from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
} & TBaseText.Styles;

type BaseParagraphProps = {
    mr?: TMargin;
    isEllipsis?: boolean;
    $styles?: TypeStyles;
} & TBaseText.Main;

type SParagraphProps = {
    $mr?: TMargin;
    $styles: TypeStyles;
    $isEllipsis?: boolean;
} & TBaseText.SText;

const SParagraph = styled(SBaseText.Text)<SParagraphProps>`
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
    ${(props) =>
        props.$isEllipsis &&
        css`
            align-items: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `};
`;

export const BaseParagraph: React.FC<BaseParagraphProps> = React.memo(
    ({ as: Component = 'p', children, mr, color, isEllipsis, $colors, $styles, ...rest }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['typography', 'mr'], $styles);

        return (
            <SParagraph
                $mr={mr}
                as={Component}
                $colors={colors}
                $styles={styles}
                $isEllipsis={isEllipsis}
                $color={color}
                {...rest}
            >
                {children}
            </SParagraph>
        );
    }
);

//export component
export const SBaseParagraph = {
    Paragraph: SParagraph,
};

//export type
export namespace TBaseParagraph {
    export type Styles = TypeStyles;
    export type Main = BaseParagraphProps;
    export type SParagraph = SParagraphProps;
}
