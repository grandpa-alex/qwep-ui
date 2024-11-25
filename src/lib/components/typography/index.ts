import { BaseText, SBaseText, TBaseText } from './base/BaseText';
import { BaseParagraph, SBaseParagraph, TBaseParagraph } from './base/BaseParagraph';
import { BaseTitle, SBaseTitle, TBaseTitle } from './base/BaseTitle';
import { Copy } from '@src/lib/types/CopyType';
export { BaseText, BaseParagraph, BaseTitle };

export const TypographyStyledComponent = {
    BaseText: SBaseText,
    BaseParagraph: SBaseParagraph,
    BaseTitle: SBaseTitle,
};

export namespace TypeTypography {
    export namespace BaseText {
        export type Main = Copy<TBaseText.Main>;
        export type Styles = Copy<TBaseText.Styles>;
        export type SText = Copy<TBaseText.SText>;
    }

    export namespace BaseParagraph {
        export type Main = Copy<TBaseParagraph.Main>;
        export type Styles = Copy<TBaseParagraph.Styles>;
        export type SParagraph = Copy<TBaseParagraph.SParagraph>;
    }

    export namespace BaseTitle {
        export type Main = Copy<TBaseTitle.Main>;
        export type STitle = Copy<TBaseTitle.STitle>;
        export type Styles = Copy<TBaseTitle.Styles>;
    }
}
