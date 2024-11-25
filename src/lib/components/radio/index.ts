import { Copy } from '@src/lib/types/CopyType';
import { BaseRadioGroup, SBaseRadioGroup, TBaseRadioGroup } from './base-rado/BaseRadioGroup';
import { BaseRadioItem, SBaseRadioItem, TBaseRadioItem } from './base-rado/BaseRadioItem';
export { BaseRadioItem, BaseRadioGroup };

export const RadioStyledComponent = {
    BaseRadioItem: SBaseRadioItem,
    BaseRadioGroup: SBaseRadioGroup,
};

export namespace TypeRadio {
    export namespace BaseRadioItem {
        export type Main = Copy<TBaseRadioItem.Main>;
        export type Styles = Copy<TBaseRadioItem.Styles>;
        export type SItem = Copy<TBaseRadioItem.SItem>;
        export type SIndicator = Copy<TBaseRadioItem.SIndicator>;
    }

    export namespace BaseRadioGroup {
        export type Main = Copy<TBaseRadioGroup.Main>;
        export type SRoot = Copy<TBaseRadioGroup.SRoot>;
        export type Styles = Copy<TBaseRadioGroup.Styles>;
        export type SGroup = Copy<TBaseRadioGroup.SGroup>;
        export type SLabel = Copy<TBaseRadioGroup.SLabel>;
    }
}
