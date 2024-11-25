import { Copy } from '@src/lib/types/CopyType';
import { BaseButton, SBaseButton, TBaseButton } from './base-button/BaseButton';
import { IconButton, SIconButton, TIconButton } from './icon-button/IconButton';
import { SSimpleButton, SimpleButton, TSimpleButton } from './simple-button/SimpleButton';
import { SSubmitButton, SubmitButton, TSubmitButton } from './submit-button/SubmitButton';

export { BaseButton, SimpleButton, SubmitButton, IconButton };

export const ButtonStyledComponent = {
    BaseButton: SBaseButton,
    SimpleButton: SSimpleButton,
    SubmitButton: SSubmitButton,
    IconButton: SIconButton,
};

export namespace TypeButton {
    export namespace BaseButton {
        export type Main = Copy<TBaseButton.Main>;
        export type Styles = Copy<TBaseButton.Styles>;
        export type SButton = Copy<TBaseButton.SButton>;
    }

    export namespace SimpleButton {
        export type Main = Copy<TSimpleButton.Main>;
        export type SButton = Copy<TSimpleButton.SButton>;
        export type SContentContainer = Copy<TSimpleButton.SContentContainer>;
        export type SIconContainer = Copy<TSimpleButton.SIconContainer>;
    }

    export namespace SubmitButton {
        export type Main = Copy<TSubmitButton.Main>;
        export type SButton = Copy<TSubmitButton.SButton>;
        export type SLoading = Copy<TSubmitButton.SLoading>;
        export type SContentContainer = Copy<TSubmitButton.SContentContainer>;
        export type SIconContainer = Copy<TSubmitButton.SIconContainer>;
    }

    export namespace IconButton {
        export type Main = Copy<TIconButton.Main>;
        export type SButton = Copy<TIconButton.SButton>;
    }
}
