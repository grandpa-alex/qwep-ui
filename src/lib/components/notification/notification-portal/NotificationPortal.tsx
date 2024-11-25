import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { useStyleScheme } from '@src/lib/general';
import { TypeSSBase, TypeSSBox } from '@src/lib/general/styleScheme';
import { ENotificationPosition, TNotificationPosition } from '@src/lib/types/TypeBase';
import { TBoxGapVariant, TBoxPaddingVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import ReactDOM from 'react-dom';
import { css, styled } from 'styled-components';
import { BaseNotificationToast } from '../base-notification-toast/BaseNotificationToast';
import { TypeOptions, TypeOptionsBase } from '../notification-provider/NotificationProvider';

type TypeStyles = {
    box: TypeSSBox;
    base: TypeSSBase;
};

type NotificationPortalProps = {
    notifications: TypeOptions[];
    position: TNotificationPosition;
} & BaseProps;

type BaseProps = {
    zIndex?: number;
    boxGapVariant?: TBoxGapVariant;
    boxPaddingVariant?: TBoxPaddingVariant;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $position: TNotificationPosition;
    $zIndex?: number;
    $boxGapVariant?: TBoxGapVariant;
    $boxPaddingVariant?: TBoxPaddingVariant;
    $styles: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

const POSITION = {
    [ENotificationPosition.BOTTOM_RIGHT]: css`
        bottom: 0;
        right: 0;
    `,
    [ENotificationPosition.BOTTOM_CENTER]: css`
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
    `,
    [ENotificationPosition.BOTTOM_LEFT]: css`
        bottom: 0;
        left: 0;
    `,
    [ENotificationPosition.CENTER_RIGHT]: css`
        bottom: 50%;
        right: 0;
        transform: translateY(50%);
    `,
    [ENotificationPosition.CENTER]: css`
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, 0);
    `,
    [ENotificationPosition.CENTER_LEFT]: css`
        bottom: 50%;
        left: 0;
        transform: translateY(50%);
    `,
    [ENotificationPosition.TOP_RIGHT]: css`
        top: 0;
        right: 0;
    `,
    [ENotificationPosition.TOP_CENTER]: css`
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    `,
    [ENotificationPosition.TOP_LEFT]: css`
        top: 0;
        left: 0;
    `,
};

const SRoot = styled.div<SRootProps>`
    position: fixed;
    z-index: ${(props) => props.$zIndex ?? 100000};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    ${(props) => POSITION[props.$position]};
    ${(props) =>
        CSSBaseBox({
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
        })};
`;

export const NotificationPortal: React.FC<NotificationPortalProps> = React.memo(
    ({ notifications, position, boxPaddingVariant = 'p-2', boxGapVariant = 'g-2', zIndex, $styles, ...rest }) => {
        const styles = useStyleScheme(['box', 'base'], $styles);

        return ReactDOM.createPortal(
            <SRoot
                $position={position}
                $zIndex={zIndex}
                $boxPaddingVariant={boxPaddingVariant}
                $boxGapVariant={boxGapVariant}
                $styles={styles}
                {...rest}
            >
                {notifications.map(({ type, id, position, content, ...notification }: TypeOptions) => {
                    switch (type) {
                        case 'base':
                            return (
                                <BaseNotificationToast
                                    title={(notification as TypeOptionsBase)?.title}
                                    message={(notification as TypeOptionsBase)?.message}
                                    key={id}
                                    id={id as string}
                                    position={position}
                                    {...notification}
                                />
                            );
                        case 'custom':
                            return (
                                <div key={id} id={id} {...notification}>
                                    {content}
                                </div>
                            );
                    }
                })}
            </SRoot>,
            document.body
        );
    }
);

//export component
export const SNotificationPortal = {
    Root: SRoot,
};

//export type
export namespace TNotificationPortal {
    export type Base = BaseProps;
    export type Main = NotificationPortalProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
