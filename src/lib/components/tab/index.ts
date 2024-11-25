import { Copy } from '@src/lib/types/CopyType';
import { BaseTab, SBaseTab, TBaseTab } from './base-tab/BaseTab';
import { BaseTabContent, SBaseTabContent, TBaseTabContent } from './base-tab/BaseTabContent';
import { BaseTabWrapper, SBaseTabWrapper, TBaseTabWrapper } from './base-tab/BaseTabWrapper';

export { BaseTabWrapper, BaseTab, BaseTabContent };

export const TabStyledComponent = {
    BaseTab: SBaseTab,
    BaseTabWrapper: SBaseTabWrapper,
    BaseTabContent: SBaseTabContent,
};

export namespace TypeTab {
    export namespace BaseTab {
        export type Main = Copy<TBaseTab.Main>;
        export type Styles = Copy<TBaseTab.Styles>;
        export type STab = Copy<TBaseTab.STab>;
    }

    export namespace BaseTabWrapper {
        export type Main = Copy<TBaseTabWrapper.Main>;
        export type Styles = Copy<TBaseTabWrapper.Styles>;
        export type SRoot = Copy<TBaseTabWrapper.SRoot>;
        export type SList = Copy<TBaseTabWrapper.SList>;
    }

    export namespace BaseTabContent {
        export type Main = Copy<TBaseTabContent.Main>;
        export type Styles = Copy<TBaseTabContent.Styles>;
        export type SRoot = Copy<TBaseTabContent.SRoot>;
    }
}
