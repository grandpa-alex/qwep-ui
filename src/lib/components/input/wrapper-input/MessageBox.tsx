import React from 'react';
import styled from 'styled-components';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { getColor } from '@src/lib/common/getColor';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TVariantColor } from '@src/lib/types/TypeBase';

type TypeMessage = {
    text?: React.ReactNode;
    colorVariant?: TVariantColor;
};

type MessageBoxProps = {
    $colors?: TypeColorScheme;
    message?: TypeMessage;
} & React.HTMLAttributes<HTMLSpanElement>;

type SMessageProps = {
    $colors: TypeColorScheme;
    $colorVariant: TVariantColor;
} & React.HTMLAttributes<HTMLSpanElement>;

const SMessage = styled.span<SMessageProps>`
    position: absolute;
    font-size: 10px;
    top: calc(100% + 2px);
    left: 0;
    color: ${(props) =>
        getColor({
            cs: props.$colors,
            variant: props.$colorVariant,
        })};
`;

export const MessageBox = React.memo(
    React.forwardRef<HTMLSpanElement, MessageBoxProps>(({ $colors, message, ...rest }, ref) => {
        const colors = useColorScheme($colors);
        if (!message) return;
        return (
            <SMessage ref={ref} $colors={colors} $colorVariant={message.colorVariant ?? 'error'} {...rest}>
                {message.text}
            </SMessage>
        );
    })
);

//export component
export const SMessageBox = {
    Message: SMessage,
};

//export type
export namespace TMessageBox {
    export type Message = TypeMessage;
    export type Main = MessageBoxProps;
    export type SMessage = SMessageProps;
}
