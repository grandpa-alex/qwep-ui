import { Copy } from '@src/lib/types/CopyType';
import { BaseNotificationToast, TBaseNotificationToast } from './base-notification-toast/BaseNotificationToast';
import { TNotificationPortal } from './notification-portal/NotificationPortal';
import {
    NotificationProvider,
    TypeNotificationContext,
    TypeNotificationProvider,
    TypeOptions,
    TypeOptionsBase,
    TypeOptionsCustom,
    useNotificationContext,
} from './notification-provider/NotificationProvider';

export { useNotificationContext, BaseNotificationToast, NotificationProvider };

export namespace TypeNotification {
    export namespace NotificationContext {
        export type OptionsBase = Copy<TypeOptionsBase>;
        export type OptionsCustom = Copy<TypeOptionsCustom>;
        export type Options = Copy<TypeOptions>;
        export type NotificationContext = Copy<TypeNotificationContext>;
        export type NotificationProvider = Copy<TypeNotificationProvider>;
    }
    export namespace NotificationPortal {
        export type Base = Copy<TNotificationPortal.Base>;
        export type Main = Copy<TNotificationPortal.Main>;
        export type Styles = Copy<TNotificationPortal.Styles>;
        export type SRoot = Copy<TNotificationPortal.SRoot>;
    }

    export namespace BaseNotificationToast {
        export type Main = Copy<TBaseNotificationToast.Main>;
        export type Styles = Copy<TBaseNotificationToast.Styles>;
        export type Base = Copy<TBaseNotificationToast.Base>;
        export type SRoot = Copy<TBaseNotificationToast.SRoot>;
    }
}
