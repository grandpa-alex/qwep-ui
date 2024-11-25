import React from 'react';
import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { BaseCheck } from '@src/lib/icons';
import { SBaseSelectComponent, TBaseSelectComponent } from './BaseSelectComponent';
import { BaseCheckProps } from '@src/lib/icons/BaseCheck.tsx';

type BaseSelectItemProps = {
    indicatorProps?: React.ComponentPropsWithRef<typeof Select.ItemIndicator>;
    iconProps?: BaseCheckProps;
    itemTextProps?: React.ComponentPropsWithRef<typeof Select.ItemText>;
} & TBaseSelectComponent.SItem;

const SItem = styled(SBaseSelectComponent.Item)<BaseSelectItemProps>`
    padding: 6px 20px 6px 20px;
    border-radius: 4px;
`;

const SIndicator = styled(Select.ItemIndicator)<React.ComponentPropsWithRef<typeof Select.ItemIndicator>>`
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    svg {
        min-width: 14px;
        max-width: 14px;
        width: 14px;
        height: 14px;
    }
`;

const BaseSelectItemRef: React.ForwardRefRenderFunction<HTMLDivElement, BaseSelectItemProps> = (
    { indicatorProps, iconProps, itemTextProps, ...rest },
    ref
) => {
    return (
        <SItem ref={ref} {...rest}>
            <SIndicator {...indicatorProps}>
                <BaseCheck {...iconProps} />
            </SIndicator>
            <Select.ItemText {...itemTextProps}>{rest.children}</Select.ItemText>
        </SItem>
    );
};

export const BaseSelectItem = React.forwardRef(BaseSelectItemRef);

//export component
export const SBaseSelectItem = {
    Item: SItem,
    Indicator: SIndicator,
    ItemText: Select.ItemText,
};

//export type
export namespace TBaseSelectItem {
    export type Main = BaseSelectItemProps;
    export type SIndicator = React.ComponentPropsWithRef<typeof Select.ItemIndicator>;
    export type SItemText = React.ComponentPropsWithRef<typeof Select.ItemText>;
}
