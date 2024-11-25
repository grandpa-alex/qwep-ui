import { getColor } from '@src/lib/common/getColor';
import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TMargin, TVariantColor, TVariantSize, EVariantColor, EVariantSize } from '@src/lib/types/TypeBase';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { SRootTextarea, TRootTextarea } from './RootTextarea';
import { SBaseInputArea, TBaseInputArea } from './BaseInputArea';
import { StyledScrollbarItem } from '@src/lib/common-styled-component/StyledBase';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';

type TypeStyles = {
    typography: TypeSSTypography;
    base: TypeSSBase;
    inp: TypeSSInp;
    mr: TypeSSMR;
};

type BaseTextareaProps = {
    mr?: TMargin;
    resize?: boolean;
    sizeVariant?: TVariantSize;
    colorVariant?: TVariantColor;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    _isActiveHover?: boolean;
    blocked?: boolean;
    propsRoot?: React.HTMLAttributes<HTMLDivElement>;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const STextarea = styled(SBaseInputArea.Textarea)<TBaseInputArea.STextarea>`
    padding: 0 3px 0 0;
`;

const SRoot = styled(SRootTextarea.Root)<TRootTextarea.SRoot>`
    ${STextarea} {
        ${(props) =>
            StyledScrollbarItem({
                $colors: props.$colors,
                $color: props.$color,
                $colorVariant: props.$colorVariant,
                $hover: props.$_isActiveHover,
            })}
        &:disabled {
            color: ${(props) => props.$colors.disabled};
        }
        &::placeholder {
            user-select: none;
            color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.$disabled,
                    variant: props.$colorVariant,
                })};
        }
        &:not([disabled]) {
            color: ${(props) => props.$colors.prompt};
        }
    }
`;

export const BaseTextarea = React.memo(
    React.forwardRef<HTMLTextAreaElement, BaseTextareaProps>(
        (
            {
                mr,
                color,
                sizeVariant = EVariantSize.L,
                colorVariant = EVariantColor.DEFAULT,
                $colors,
                $styles,
                _isActiveHover = true,
                resize,
                blocked,
                propsRoot,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'mr', 'typography', 'inp'], $styles);
            const [isFocused, setIsFocused] = useState(false);
            const handleFocus = useCallback(() => !rest.disabled && setIsFocused(true), [rest.disabled]);
            const handleBlur = useCallback(() => !rest.disabled && setIsFocused(false), [rest.disabled]);

            return (
                <SRoot
                    $mr={mr}
                    $styles={styles}
                    $colors={colors}
                    $color={color}
                    $colorVariant={colorVariant}
                    $sizeVariant={sizeVariant}
                    $_isActiveHover={_isActiveHover}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    $_isFocused={isFocused}
                    $disabled={rest.disabled}
                    $blocked={blocked}
                    {...propsRoot}
                >
                    <STextarea ref={ref} $resize={resize} $styles={styles} {...rest} />
                </SRoot>
            );
        }
    )
);

//export component
export const SBaseTextarea = {
    Root: SRoot,
    Textarea: STextarea,
};

//export type
export namespace TBaseTextarea {
    export type Main = BaseTextareaProps;
    export type Styles = TypeStyles;
    export type SRoot = TRootTextarea.SRoot;
}
