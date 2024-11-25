import { BaseInput, SBaseInput, TBaseInput } from './base-text-field/BaseInput';
import { RootTextField, SRootTextField, TRootTextField } from './base-text-field/RootTextField';
import { BaseTextField, SBaseTextField, TBaseTextField } from './base-text-field/BaseTextField';
import { SSimpleTextField, SimpleTextField, TSimpleTextField } from './simple-text-field/SimpleTextField';
import { SubmitTextField, SSubmitTextField, TSubmitTextField } from './submit-text-field/SubmitTextField';
import { WrapperInput, TWrapperInput, SWrapperInput } from './wrapper-input/WrapperInput';
import { BaseTextarea, SBaseTextarea, TBaseTextarea } from './base-textarea/BaseTextarea';
import { SMessageBox, TMessageBox } from './wrapper-input/MessageBox';
import { SBaseInputArea, TBaseInputArea } from '@src/lib/components/input/base-textarea/BaseInputArea.tsx';
import { SRootTextarea, TRootTextarea } from '@src/lib/components/input/base-textarea/RootTextarea.tsx';
import { Copy } from '@src/lib/types/CopyType';

export { BaseInput, RootTextField, BaseTextField, SimpleTextField, SubmitTextField, BaseTextarea, WrapperInput };

export const InputStyledComponent = {
    BaseInput: SBaseInput,
    RootTextField: SRootTextField,
    BaseTextField: SBaseTextField,
    SimpleTextField: SSimpleTextField,
    SubmitTextField: SSubmitTextField,
    BaseTextarea: SBaseTextarea,
    BaseInputTextarea: SBaseInputArea,
    RootTextarea: SRootTextarea,
    MessageBox: SMessageBox,
    WrapperInput: SWrapperInput,
};

export namespace TypeInput {
    export namespace BaseInput {
        export type Main = Copy<TBaseInput.Main>;
        export type Styles = Copy<TBaseInput.Styles>;
        export type SInput = Copy<TBaseInput.SInput>;
    }

    export namespace RootTextField {
        export type Main = Copy<TRootTextField.Main>;
        export type Styles = Copy<TRootTextField.Styles>;
        export type SRoot = Copy<TRootTextField.SRoot>;
    }

    export namespace BaseTextField {
        export type Styles = Copy<TBaseTextField.Styles>;
        export type Main = Copy<TBaseTextField.Main>;
        export type SInput = Copy<TBaseTextField.SInput>;
        export type SRoot = Copy<TBaseTextField.SRoot>;
    }

    export namespace SimpleTextField {
        export type Main = Copy<TSimpleTextField.Main>;
        export type SIconContainer = Copy<TSimpleTextField.SIconContainer>;
        export type SRoot = Copy<TSimpleTextField.SRoot>;
        export type SInput = Copy<TSimpleTextField.SInput>;
    }

    export namespace SubmitTextField {
        export type Main = Copy<TSubmitTextField.Main>;
        export type SInput = Copy<TSubmitTextField.SInput>;
        export type SLoading = Copy<TSubmitTextField.SLoading>;
        export type SRoot = Copy<TSubmitTextField.SRoot>;
        export type SIconContainer = Copy<TSubmitTextField.SIconContainer>;
    }

    export namespace BaseInputTextarea {
        export type Main = Copy<TBaseInputArea.Main>;
        export type Styles = Copy<TBaseInputArea.Styles>;
        export type STextarea = Copy<TBaseInputArea.STextarea>;
    }

    export namespace BaseRootTextarea {
        export type Main = Copy<TRootTextarea.Main>;
        export type Styles = Copy<TRootTextarea.Styles>;
        export type SRoot = Copy<TRootTextarea.SRoot>;
    }

    export namespace BaseTextarea {
        export type Main = Copy<TBaseTextarea.Main>;
        export type Styles = Copy<TBaseTextarea.Styles>;
        export type SRoot = Copy<TBaseTextarea.SRoot>;
    }

    export namespace WrapperInput {
        export type Styles = Copy<TWrapperInput.Styles>;
        export type Main = Copy<TWrapperInput.Main>;
        export type SRoot = Copy<TWrapperInput.SRoot>;
        export type SLabel = Copy<TWrapperInput.SLabel>;
    }

    export namespace MessageBox {
        export type Message = Copy<TMessageBox.Message>;
        export type Main = Copy<TMessageBox.Main>;
        export type SMessage = Copy<TMessageBox.SMessage>;
    }
}
