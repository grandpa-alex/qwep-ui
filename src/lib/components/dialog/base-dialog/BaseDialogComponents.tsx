import { styled } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';

const SOverlay = styled(Dialog.Overlay)<React.ComponentPropsWithRef<typeof Dialog.Overlay>>`
    position: fixed;
    inset: 0;
    animation: overlayShow_BaseDialog 150ms cubic-bezier(0.16, 1, 0.3, 1);
    @keyframes overlayShow_BaseDialog {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const SContent = styled(Dialog.Content)<React.ComponentPropsWithRef<typeof Dialog.Content>>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: contentShow_BaseDialog 150ms cubic-bezier(0.16, 1, 0.3, 1);
    @keyframes contentShow_BaseDialog {
        from {
            opacity: 0;
            transform: translate(-50%, -48%) scale(0.96);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;

//export component
export const SBaseDialogComponent = {
    Overlay: SOverlay,
    Content: SContent,
};

//export type
export namespace TBaseDialogComponent {
    export type SOverlay = React.ComponentPropsWithRef<typeof Dialog.Overlay>;
    export type SContent = React.ComponentPropsWithRef<typeof Dialog.Content>;
}
