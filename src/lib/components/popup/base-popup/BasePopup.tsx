import * as Popover from '@radix-ui/react-popover';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import React from 'react';
import styled from 'styled-components';
import { TMargin } from '@src/lib/types/TypeBase';

type BasePopupProps = {
    trigger: React.ReactNode;
    mr?: TMargin;
    bg?: Hex;
    isArray?: boolean;
    $colors?: TypeColorScheme;
    triggerProps?: React.ComponentPropsWithRef<typeof Popover.Trigger>;
    portalProps?: React.ComponentPropsWithRef<typeof Popover.Portal>;
    contentProps?: React.ComponentPropsWithRef<typeof Popover.Content>;
    arrowProps?: React.ComponentPropsWithRef<typeof Popover.Arrow>;
} & React.ComponentPropsWithRef<typeof Popover.Root>;

const STrigger = styled(Popover.Trigger)<React.ComponentPropsWithRef<typeof Popover.Trigger>>`
    all: unset;
    width: fit-content;
`;

const SArrow = styled(Popover.Arrow)<React.ComponentPropsWithRef<typeof Popover.Arrow>>``;

type SContentProps = {
    $colors: TypeColorScheme;
    $bg?: Hex;
} & React.ComponentPropsWithRef<typeof Popover.Content>;

const SContent = styled(Popover.Content)<SContentProps>`
    position: relative;
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    ${SArrow} {
        fill: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    }
`;

export const BasePopup = React.memo(
    React.forwardRef<HTMLButtonElement, BasePopupProps>(
        ({ trigger, isArray, bg, $colors, triggerProps, portalProps, contentProps, arrowProps, ...rest }, ref) => {
            const colors = useColorScheme($colors);

            return (
                <Popover.Root {...rest}>
                    <STrigger ref={ref} {...triggerProps}>
                        {trigger}
                    </STrigger>
                    <Popover.Portal {...portalProps}>
                        <SContent $colors={colors} $bg={bg} sideOffset={8} {...contentProps}>
                            {rest.children}
                            {isArray && <SArrow {...arrowProps} />}
                        </SContent>
                    </Popover.Portal>
                </Popover.Root>
            );
        }
    )
);

//export component
export const SBasePopup = {
    Root: Popover.Root,
    Portal: Popover.Portal,
    Content: SContent,
    Trigger: STrigger,
    Arrow: SArrow,
};

//export type
export namespace TBasePopup {
    export type Main = BasePopupProps;
    export type SContent = SContentProps;
    export type SRoot = React.ComponentPropsWithRef<typeof Popover.Root>;
    export type SPortal = React.ComponentPropsWithRef<typeof Popover.Portal>;
    export type STrigger = React.ComponentPropsWithRef<typeof Popover.Trigger>;
    export type SArrow = React.ComponentPropsWithRef<typeof Popover.Arrow>;
}
