import { Copy } from '@src/lib/types/CopyType';
import { BaseDialog, SBaseDialog, TBaseDialog } from './base-dialog/BaseDialog';
import { SBaseDialogComponent, TBaseDialogComponent } from './base-dialog/BaseDialogComponents';

export { BaseDialog };

export const DialogStyledComponent = {
    BaseDialogComponent: SBaseDialogComponent,
    BaseDialog: SBaseDialog,
};

export namespace TypeDialog {
    export namespace BaseDialogComponent {
        export type SContent = Copy<TBaseDialogComponent.SContent>;
        export type SOverlay = Copy<TBaseDialogComponent.SOverlay>;
    }

    export namespace BaseDialog {
        export type Main = Copy<TBaseDialog.Main>;
        export type Styles = Copy<TBaseDialog.Styles>;
        export type SContent = Copy<TBaseDialog.SContent>;
        export type SOverlay = Copy<TBaseDialog.SOverlay>;
        export type SPortal = Copy<TBaseDialog.SPortal>;
        export type SRoot = Copy<TBaseDialog.SRoot>;
    }
}
