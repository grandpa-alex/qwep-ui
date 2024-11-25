import * as Avatar from '@radix-ui/react-avatar';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSAvatar, TypeSSMR } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TMargin } from '@src/lib/types/TypeBase';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { TVariantSizeAvatar, EVariantSizeAvatar } from '@src/lib/types/TypeAvatar';
import { getMargin } from '@src/lib/common/getMargin';

type TypeStyles = {
    avatar: TypeSSAvatar;
    mr: TypeSSMR;
};

type BaseAvatarProps = {
    mr?: TMargin;
    sizeVariant?: TVariantSizeAvatar;
    color?: Hex;
    bg?: Hex;
    rootProps?: React.ComponentPropsWithRef<typeof Avatar.Root>;
    fallbackProps?: React.ComponentPropsWithRef<typeof Avatar.Fallback>;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.ComponentPropsWithRef<typeof Avatar.Image>;

type SRootProps = {
    $color?: Hex;
    $bg?: Hex;
    $mr?: TMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TVariantSizeAvatar;
} & React.ComponentPropsWithRef<typeof Avatar.Root>;

const SIZE = {
    [EVariantSizeAvatar.S]: (props: TypeSSAvatar) => css`
        width: ${props.avatarSize_1};
        min-width: ${props.avatarSize_1};
        height: ${props.avatarSize_1};
        font-size: ${props.avatarFontSize_1};
    `,
    [EVariantSizeAvatar.M]: (props: TypeSSAvatar) => css`
        width: ${props.avatarSize_2};
        min-width: ${props.avatarSize_2};
        height: ${props.avatarSize_2};
        font-size: ${props.avatarFontSize_2};
    `,
    [EVariantSizeAvatar.L]: (props: TypeSSAvatar) => css`
        width: ${props.avatarSize_3};
        min-width: ${props.avatarSize_3};
        height: ${props.avatarSize_3};
        font-size: ${props.avatarFontSize_3};
    `,
};

const SFallback = styled(Avatar.Fallback)<React.ComponentPropsWithRef<typeof Avatar.Fallback>>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-transform: uppercase;
`;

const SImg = styled(Avatar.Image)<React.ComponentPropsWithRef<typeof Avatar.Image>>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const SRoot = styled(Avatar.Root)<SRootProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    border-radius: 100%;
    ${(props) => SIZE[props.$sizeVariant](props.$styles.avatar)}
    ${SFallback} {
        background-color: ${(props) => props.$bg ?? props.$colors.lightElem};
        color: ${(props) => props.$color ?? props.$colors.textItem};
        font-weight: ${(props) => props.$styles.avatar.avatarFontWeight};
    }
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
`;

export const BaseAvatar = React.memo(
    React.forwardRef<HTMLSpanElement, BaseAvatarProps>(
        (
            { mr, color, bg, sizeVariant = EVariantSizeAvatar.L, rootProps, fallbackProps, $colors, $styles, ...rest },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['avatar', 'mr'], $styles);

            const getFallbackText = useCallback((altText?: string) => {
                const words = altText?.split(' ').slice(0, 2);
                return words?.map((word) => word.slice(0, Math.min(1, word.length))).join('');
            }, []);

            return (
                <SRoot
                    ref={ref}
                    $colors={colors}
                    $styles={styles}
                    $color={color}
                    style={rest.style}
                    $mr={mr}
                    $bg={bg}
                    $sizeVariant={sizeVariant}
                    {...rootProps}
                >
                    <SImg {...rest} />
                    <SFallback delayMs={600} {...fallbackProps}>
                        {getFallbackText(rest.alt)}
                    </SFallback>
                </SRoot>
            );
        }
    )
);

//export component
export const SBaseAvatar = {
    Root: SRoot,
    Img: SImg,
    Fallback: SFallback,
};

//export type
export namespace TBaseAvatar {
    export type Styles = TypeStyles;
    export type Main = BaseAvatarProps;
    export type SRoot = SRootProps;
    export type SImg = React.ComponentPropsWithRef<typeof Avatar.Image>;
    export type SFallback = React.ComponentPropsWithRef<typeof Avatar.Fallback>;
}
