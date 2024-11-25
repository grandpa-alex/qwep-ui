import * as Select from '@radix-ui/react-select';
import React from 'react';
import styled from 'styled-components';
import { SelectGroupProps } from '@radix-ui/react-select';

type BaseSelectGroupProps = {
    label?: string;
    labelProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.ComponentPropsWithRef<typeof Select.Group>;

const SGroup = styled(Select.Group)<React.ComponentPropsWithRef<typeof Select.Group>>`
    padding: 10px 0;
    &:not(:last-child) {
        border-bottom: 1px solid;
    }
`;

const SLabel = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    font-size: 13px;
    padding: 2px 20px 6px 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const BaseSelectGroupRef: React.ForwardRefRenderFunction<HTMLDivElement, BaseSelectGroupProps> = (
    { label, labelProps, ...rest },
    ref
) => {
    return (
        <SGroup ref={ref} {...rest}>
            {label && <SLabel {...labelProps}>{label}</SLabel>}
            {rest.children}
        </SGroup>
    );
};

export const BaseSelectGroup = React.forwardRef(BaseSelectGroupRef);

//export component
export const SBaseSelectGroup = {
    Label: SLabel,
    Group: SGroup,
};

//export type
export namespace TBaseSelectGroup {
    export type Main = BaseSelectGroupProps;
    export type SGroup = SelectGroupProps;
    export type SLabel = React.HTMLAttributes<HTMLDivElement>;
}
