import * as Select from '@radix-ui/react-select';
import { styled } from 'styled-components';
import React from 'react';

// content
type SIconProps = React.ComponentPropsWithRef<typeof Select.Icon>;
const SIcon = styled(Select.Icon)`
    margin-left: 8px;
    svg {
        width: 20px;
        height: 20px;
    }
`;

// item
type SItemProps = React.ComponentPropsWithRef<typeof Select.Item>;
const SItem = styled(Select.Item)`
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    outline: none;
    line-height: normal;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

//export component
export const SBaseSelectComponent = {
    Icon: SIcon,
    Item: SItem,
};

//export type
export namespace TBaseSelectComponent {
    export type SIcon = SIconProps;
    export type SItem = SItemProps;
}
