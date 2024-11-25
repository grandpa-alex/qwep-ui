import { Copy } from '@src/lib/types/CopyType';
import { BaseAvatar, SBaseAvatar, TBaseAvatar } from './base-avatar/BaseAvatar';
export { BaseAvatar };

export const AvatarStyledComponent = {
    BaseAvatar: SBaseAvatar,
};

export namespace TypeAvatar {
    export namespace BaseBox {
        export type Main = Copy<TBaseAvatar.Main>;
        export type SRoot = Copy<TBaseAvatar.SRoot>;
        export type SImg = Copy<TBaseAvatar.SImg>;
        export type SFallback = Copy<TBaseAvatar.SFallback>;
        export type Styles = Copy<TBaseAvatar.Styles>;
    }
}
