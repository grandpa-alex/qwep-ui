import { BaseBox, SBaseBox, TBaseBox } from './base-box/BaseBox';
import { SimpleBox, SSimpleBox, TSimpleBox } from './simple-box/SimpleBox';
import { BaseContainer, SBaseContainer, TBaseContainer } from './base-container/BaseContainer';
import { BaseLayout, SBaseLayout, TBaseLayout } from './base-layout/BaseLayout';
import { BaseMenuGroup, SBaseMenuGroup, TBaseMenuGroup } from './base-menu/BaseMenuGroup';
import { BaseMenuItem, SBaseMenuItem, TBaseMenuItem } from './base-menu/BaseMenuItem';
import { Copy } from '@src/lib/types/CopyType';
export { BaseBox, SimpleBox, BaseContainer, BaseLayout, BaseMenuGroup, BaseMenuItem };

export const BoxStyledComponent = {
    BaseBox: SBaseBox,
    SimpleBox: SSimpleBox,
    BaseContainer: SBaseContainer,
    BaseLayout: SBaseLayout,
    BaseMenuGroup: SBaseMenuGroup,
    BaseMenuItem: SBaseMenuItem,
};

export namespace TypeBox {
    export namespace BaseBox {
        export type Main = Copy<TBaseBox.Main>;
        export type SBox = Copy<TBaseBox.SBox>;
        export type Styles = Copy<TBaseBox.Styles>;
    }

    export namespace SimpleBox {
        export type Main = Copy<TSimpleBox.Main>;
        export type SBox = Copy<TSimpleBox.SBox>;
    }

    export namespace BaseContainer {
        export type Main = Copy<TBaseContainer.Main>;
        export type SContainer = Copy<TBaseContainer.SContainer>;
    }

    export namespace BaseLayout {
        export type Main = Copy<TBaseLayout.Main>;
        export type SWrapper = Copy<TBaseLayout.SWrapper>;
        export type SRoot = Copy<TBaseLayout.SRoot>;
    }

    export namespace BaseMenuGroup {
        export type Main = Copy<TBaseMenuGroup.Main>;
        export type Styles = Copy<TBaseMenuGroup.Styles>;
        export type SRoot = Copy<TBaseMenuGroup.SRoot>;
    }

    export namespace BaseMenuItem {
        export type Main = Copy<TBaseMenuItem.Main>;
        export type Styles = Copy<TBaseMenuItem.Styles>;
        export type SButton = Copy<TBaseMenuItem.SButton>;
    }
}
