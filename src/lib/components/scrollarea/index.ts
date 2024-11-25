import { Copy } from '@src/lib/types/CopyType';
import { AdaptiveScrollArea, SAdaptiveScrollArea, TAdaptiveScrollArea } from './adaptive-scrollarea/AdaptiveScrollArea';
import { BaseScrollArea, SBaseScrollArea, TBaseScrollArea } from './base-scrollarea/BaseScrollArea';
import { SBaseScrollAreaComponent, TBaseScrollAreaComponent } from './base-scrollarea/BaseScrollAreaComponent';
export { BaseScrollArea, AdaptiveScrollArea };

export const ScrollAreaStyledComponent = {
    BaseScrollAreaComponent: SBaseScrollAreaComponent,
    SBaseScrollArea: SBaseScrollArea,
    AdaptiveScrollArea: SAdaptiveScrollArea,
};

export namespace TypeScrollArea {
    export namespace BaseScrollAreaComponent {
        export type SRoot = Copy<TBaseScrollAreaComponent.SRoot>;
        export type SScrollbar = Copy<TBaseScrollAreaComponent.SScrollbar>;
        export type SThumb = Copy<TBaseScrollAreaComponent.SThumb>;
        export type SViewport = Copy<TBaseScrollAreaComponent.SViewport>;
    }

    export namespace BaseScrollArea {
        export type Styles = Copy<TBaseScrollArea.Styles>;
        export type Main = Copy<TBaseScrollArea.Main>;
        export type SRoot = Copy<TBaseScrollArea.SRoot>;
        export type SViewport = Copy<TBaseScrollArea.SViewport>;
        export type SCorner = Copy<TBaseScrollArea.SCorner>;
        export type SScrollbar = Copy<TBaseScrollArea.SScrollbar>;
        export type SThumb = Copy<TBaseScrollArea.SThumb>;
    }

    export namespace AdaptiveScrollArea {
        export type Styles = Copy<TAdaptiveScrollArea.Styles>;
        export type Main = Copy<TAdaptiveScrollArea.Main>;
        export type SRoot = Copy<TAdaptiveScrollArea.SRoot>;
    }
}
