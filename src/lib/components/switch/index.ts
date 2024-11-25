import { Copy } from '@src/lib/types/CopyType';
import { BaseSwitch, SBaseSwitch, TBaseSwitch } from './base-switch/BaseSwitch';
import { SSubmitSwitch, SubmitSwitch, TSubmitSwitch } from './submit-switch/SubmitSwitch';
export { BaseSwitch, SubmitSwitch };

export const SwitchStyledComponent = {
    BaseSwitch: SBaseSwitch,
    SubmitSwitch: SSubmitSwitch,
};

export namespace TypeSwitch {
    export namespace BaseSwitch {
        export type Main = Copy<TBaseSwitch.Main>;
        export type Styles = Copy<TBaseSwitch.Styles>;
        export type SRoot = Copy<TBaseSwitch.SRoot>;
        export type SThumb = Copy<TBaseSwitch.SThumb>;
    }

    export namespace SubmitSwitch {
        export type Main = Copy<TSubmitSwitch.Main>;
        export type SRoot = Copy<TSubmitSwitch.SRoot>;
        export type SThumb = Copy<TSubmitSwitch.SThumb>;
    }
}
