import { getColor } from '@src/lib/common/getColor';
import { TypeSSSwitch } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EVariantColor, EVariantSize } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';
import { SBaseSwitch, TBaseSwitch } from '../base-switch/BaseSwitch';

type SubmitSwitchProps = {
    isLoading: boolean;
} & TBaseSwitch.Main;

type SRootProps = {
    $isLoading: boolean;
} & TBaseSwitch.SRoot;

const LOADING_SIZE = {
    [EVariantSize.L]: (props: TypeSSSwitch) => css`
        width: ${props.switchThumbSize_L};
        height: ${props.switchThumbSize_L};
    `,
    [EVariantSize.M]: (props: TypeSSSwitch) => css`
        width: ${props.switchThumbSize_M};
        height: ${props.switchThumbSize_M};
    `,
};

const SRoot = styled(SBaseSwitch.Root)<SRootProps>`
    ${(props) => {
        if (props.$isLoading && !props.disabled) {
            return css`
                pointer-events: none;
                &::after {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    top: 0;
                    ${props.checked || props.defaultChecked ? 'right: 0' : 'left: 0'};
                    ${LOADING_SIZE[props.$sizeVariant](props.$styles.switch)}
                    border: 1px solid ${getColor({
                        cs: props.$colors,
                        color: props.$color,
                        variant: props.$colorVariant,
                    })};
                    animation: 0.8s linear infinite show_Switch;
                    @keyframes show_Switch {
                        0% {
                            transform: scale(0);
                        }
                        100% {
                            transform: scale(1);
                        }
                    }
                }
            `;
        }
    }}
`;

export const SubmitSwitch = React.memo(
    React.forwardRef<HTMLButtonElement, SubmitSwitchProps>(
        (
            {
                mr,
                color,
                isLoading,
                blocked,
                colorVariant = EVariantColor.DEFAULT,
                sizeVariant = EVariantSize.L,
                $colors,
                $styles,
                _isActiveHover = true,
                thumbProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['switch', 'mr'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $color={color}
                    $mr={mr}
                    $colors={colors}
                    $styles={styles}
                    $colorVariant={colorVariant}
                    $sizeVariant={sizeVariant}
                    $_isActiveHover={_isActiveHover}
                    $isLoading={isLoading}
                    $blocked={blocked}
                    {...rest}
                >
                    <SBaseSwitch.Thumb $colors={colors} $styles={styles} $sizeVariant={sizeVariant} {...thumbProps} />
                </SRoot>
            );
        }
    )
);

//export component
export const SSubmitSwitch = {
    Root: SRoot,
    Thumb: SBaseSwitch.Thumb,
};

//export type
export namespace TSubmitSwitch {
    export type Main = SubmitSwitchProps;
    export type SRoot = SRootProps;
    export type SThumb = TBaseSwitch.SThumb;
}
