import { Copy } from '@src/lib/types/CopyType';
import { BaseSlider, SBaseSlider, TBaseSlider } from './base-slider/BaseSlider';
export { BaseSlider };

export const SliderStyledComponent = {
    BaseSlider: SBaseSlider,
};

export namespace TypeSlider {
    export namespace BaseSlider {
        export type Main = Copy<TBaseSlider.Main>;
        export type Styles = Copy<TBaseSlider.Styles>;
        export type SRoot = Copy<TBaseSlider.SRoot>;
        export type STrack = Copy<TBaseSlider.STrack>;
        export type SRange = Copy<TBaseSlider.SRange>;
        export type SThumb = Copy<TBaseSlider.SThumb>;
    }
}
