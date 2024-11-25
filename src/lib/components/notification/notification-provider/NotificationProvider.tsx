import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { NotificationPortal, TNotificationPortal } from '../notification-portal/NotificationPortal';
import { ENotificationPosition, TNotificationPosition, TVariantToast } from '@src/lib/types/TypeBase';
import { TBaseNotificationToast } from '../base-notification-toast/BaseNotificationToast';

type TypeBaseOptions = {
    id?: string;
    count?: number;
    isEternal?: boolean;
    duration?: number;

    onClose?: (id: string, position: TNotificationPosition) => void;
    portalProps?: TNotificationPortal.Base;
};

export type TypeOptionsBase = {
    type: 'base';
    title: string;
    message: string;
    variant: TVariantToast;
    position?: TNotificationPosition;
} & TBaseNotificationToast.Base &
    TypeBaseOptions;

export type TypeOptionsCustom = {
    type: 'custom';
    content: ReactNode;
    position?: TNotificationPosition;
} & TypeBaseOptions;

type NotificationProviderState = Partial<
    Record<ENotificationPosition, { notifications: TypeOptions[]; portalProps: TNotificationPortal.Base }>
>;

export type TypeOptions = TypeOptionsBase | TypeOptionsCustom;

export type TypeNotificationContext = {
    alert: (options: TypeOptions) => void;
};

export type TypeNotificationProvider = {
    children: ReactNode;
    defaultPortalProps?: TNotificationPortal.Base;
    defaultDuration?: number;
    defaultIsEternal?: boolean;
};

const NotificationContext = createContext<TypeNotificationContext | null>(null);

const NotificationProvider = ({
    children,
    defaultPortalProps,
    defaultDuration,
    defaultIsEternal,
}: TypeNotificationProvider) => {
    const [notificationsByPosition, setNotificationsByPosition] = useState<NotificationProviderState>({});

    const onCloseHandler = (id: string, position: TNotificationPosition) => {
        setNotificationsByPosition((prev) => {
            const currentPosition = prev[position];
            if (!currentPosition) return prev;

            return {
                ...prev,
                [position]: {
                    ...currentPosition,
                    notifications: currentPosition.notifications.filter((notification) => notification.id !== id),
                },
            };
        });
    };

    const alert = useCallback(
        ({
            duration,
            isEternal,
            position = ENotificationPosition.BOTTOM_RIGHT,
            portalProps = defaultPortalProps,
            ...options
        }: TypeOptions) => {
            const id: string = Date.now().toString();

            setNotificationsByPosition((prev) => {
                const currentPosition = prev[position] || { notifications: [], portalProps };

                const existingNotification = currentPosition.notifications.find(
                    (notification) =>
                        notification.type === 'base' &&
                        notification.title === (options as TypeOptionsBase).title &&
                        notification.message === (options as TypeOptionsBase).message
                );

                if (existingNotification) {
                    return {
                        ...prev,
                        [position]: {
                            ...currentPosition,
                            notifications: currentPosition.notifications.map((notification) =>
                                notification.id === existingNotification.id
                                    ? { ...notification, count: (notification.count || 1) + 1 }
                                    : notification
                            ),
                        },
                    };
                }

                return {
                    ...prev,
                    [position]: {
                        portalProps,
                        notifications: [
                            ...currentPosition.notifications,
                            {
                                id,
                                position,
                                ...options,
                                onClose: onCloseHandler,
                                count: 1,
                            },
                        ],
                    },
                };
            });
            if (!defaultIsEternal && !isEternal) {
                setTimeout(
                    () => {
                        onCloseHandler(id, position);
                    },
                    timer(duration, defaultDuration)
                );
            }
        },
        [defaultDuration, defaultPortalProps, defaultIsEternal]
    );
    const timer = (duration?: number, defaultDuration?: number) => duration ?? defaultDuration ?? 6000;

    const contextValue: TypeNotificationContext = {
        alert,
    };
    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
            {Object.entries(notificationsByPosition).map(([position, { notifications, portalProps }]) => {
                return (
                    <NotificationPortal
                        key={position}
                        {...portalProps}
                        notifications={notifications}
                        position={position as ENotificationPosition}
                    />
                );
            })}
        </NotificationContext.Provider>
    );
};

const useNotificationContext = (): TypeNotificationContext => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotificationContext must be used within a NotificationProvider');
    }
    return context;
};

export { useNotificationContext, NotificationProvider };
