import { Copy } from '@src/lib/types/CopyType';
import { BasePopup, SBasePopup, TBasePopup } from './base-popup/BasePopup';
import { SimplePopup, SSimplePopup, TSimplePopup } from './simple-popup/SimplePopup';

export { BasePopup, SimplePopup };

export const PopupStyledComponent = {
    BasePopup: SBasePopup,
    SimplePopup: SSimplePopup,
};

export namespace TypePopup {
    export namespace BasePopup {
        export type Main = Copy<TBasePopup.Main>;
        export type SArrow = Copy<TBasePopup.SArrow>;
        export type SContent = Copy<TBasePopup.SContent>;
        export type STrigger = Copy<TBasePopup.STrigger>;
        export type SRoot = Copy<TBasePopup.SRoot>;
        export type SPortal = Copy<TBasePopup.SPortal>;
    }

    export namespace SimplePopup {
        export type Styles = Copy<TSimplePopup.Styles>;
        export type Main = Copy<TSimplePopup.Main>;
        export type SContent = Copy<TSimplePopup.SContent>;
        export type STrigger = Copy<TSimplePopup.STrigger>;
        export type SRoot = Copy<TSimplePopup.SRoot>;
        export type SPortal = Copy<TSimplePopup.SPortal>;
        export type SCard = Copy<TSimplePopup.SCard>;
        export type SHeader = Copy<TSimplePopup.SHeader>;
        export type STitle = Copy<TSimplePopup.STitle>;
        export type SIcon = Copy<TSimplePopup.SIcon>;
    }
}
