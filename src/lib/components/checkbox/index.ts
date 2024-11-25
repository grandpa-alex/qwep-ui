import { Copy } from '@src/lib/types/CopyType';
import { BaseCheckbox, SBaseCheckbox, TBaseCheckbox } from './base-checkbox/BaseCheckbox';
import { SSubmitCheckbox, SubmitCheckbox, TSubmitCheckbox } from './submit-checkbox/SubmitCheckbox';

export { BaseCheckbox, SubmitCheckbox };

export const CheckboxStyledComponent = {
    BaseCheckbox: SBaseCheckbox,
    SubmitCheckbox: SSubmitCheckbox,
};

export namespace TypeCheckbox {
    export namespace BaseCheckbox {
        export type Main = Copy<TBaseCheckbox.Main>;
        export type Styles = Copy<TBaseCheckbox.Styles>;
        export type SIndicator = Copy<TBaseCheckbox.SIndicator>;
        export type SRoot = Copy<TBaseCheckbox.SRoot>;
        export type SIcon = Copy<TBaseCheckbox.SIcon>;
    }

    export namespace SubmitCheckbox {
        export type Main = Copy<TSubmitCheckbox.Main>;
        export type SRoot = Copy<TSubmitCheckbox.SRoot>;
        export type SIcon = Copy<TSubmitCheckbox.SIcon>;
        export type SIndicator = Copy<TSubmitCheckbox.SIndicator>;
        export type Styles = Copy<TSubmitCheckbox.Styles>;
    }
}
