import { BaseSelectContent, SBaseSelectContent, TBaseSelectContent } from './base-select/BaseSelectContent';
import { BaseSelectItem, SBaseSelectItem, TBaseSelectItem } from './base-select/BaseSelectItem';
import { BaseSelectGroup, SBaseSelectGroup, TBaseSelectGroup } from './base-select/BaseSelectGroup';
import { SBaseSelectComponent, TBaseSelectComponent } from './base-select/BaseSelectComponent';
import { Copy } from '@src/lib/types/CopyType';

export { BaseSelectItem, BaseSelectGroup, BaseSelectContent };

export const SelectStyledComponent = {
    BaseSelectComponent: SBaseSelectComponent,
    BaseSelectItem: SBaseSelectItem,
    BaseSelectGroup: SBaseSelectGroup,
    BaseSelectContent: SBaseSelectContent,
};

export namespace TypeSelect {
    export namespace BaseSelectComponent {
        export type SIcon = Copy<TBaseSelectComponent.SIcon>;
        export type SItem = Copy<TBaseSelectComponent.SItem>;
    }

    export namespace BaseSelectGroup {
        export type Main = Copy<TBaseSelectGroup.Main>;
        export type SGroup = Copy<TBaseSelectGroup.SGroup>;
        export type SLabel = Copy<TBaseSelectGroup.SLabel>;
    }

    export namespace BaseSelectItem {
        export type Main = Copy<TBaseSelectItem.Main>;
        export type SIndicator = Copy<TBaseSelectItem.SIndicator>;
        export type SItemText = Copy<TBaseSelectItem.SItemText>;
    }

    export namespace BaseSelectContent {
        export type Main = Copy<TBaseSelectContent.Main>;
        export type Styles = Copy<TBaseSelectContent.Styles>;
        export type SRoot = Copy<TBaseSelectContent.SRoot>;
        export type SValue = Copy<TBaseSelectContent.SValue>;
        export type SIcon = Copy<TBaseSelectContent.SIcon>;
        export type SPortal = Copy<TBaseSelectContent.SPortal>;
        export type SContent = Copy<TBaseSelectContent.SContent>;
        export type STrigger = Copy<TBaseSelectContent.STrigger>;
        export type SViewport = Copy<TBaseSelectContent.SViewport>;
    }
}
