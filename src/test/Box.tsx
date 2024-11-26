import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { BaseBox, BaseButton, BaseTitle, Separator, SimpleBox, SimpleTextField } from '../lib';

const CustomBox = styled(BaseBox)`
    background-color: #f5808093;
`;

function Box() {
    const boxRef = useRef();

    useEffect(() => {
        console.log('boxRef', boxRef);
    }, [boxRef]);
    return (
        <div>
            <BaseTitle mr={'my-3'}>BaseBox</BaseTitle>
            <BaseBox mr={'my-3'} boxDisplay={'flex'} boxGapVariant={'g-2'} style={{ alignItems: 'flex-start' }}>
                <BaseBox
                    boxDisplay={'grid'}
                    boxPaddingVariant={'p-1'}
                    boxGapVariant={'g-1'}
                    boxWidthVariant={'w-1'}
                    style={{ background: '#968b8b9b' }}
                >
                    <BaseButton>Button</BaseButton>
                    <BaseButton>Button</BaseButton>
                    <BaseButton>Button</BaseButton>
                </BaseBox>
                <BaseBox
                    boxDisplay={'grid'}
                    boxPaddingVariant={'p-2'}
                    boxGapVariant={'g-2'}
                    boxWidthVariant={'w-2'}
                    style={{ background: '#968b8b9b' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>
                <BaseBox
                    boxDisplay={'grid'}
                    boxPaddingVariant={'p-3'}
                    boxGapVariant={'g-3'}
                    boxWidthVariant={'w-3'}
                    style={{ background: '#968b8b9b' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>
                <BaseBox
                    boxDisplay={'grid'}
                    boxPaddingVariant={'p-4'}
                    boxGapVariant={'g-4'}
                    boxWidthVariant={'w-4'}
                    style={{ background: '#968b8b9b' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>
                <BaseBox
                    boxDisplay={'grid'}
                    boxPaddingVariant={'p-5'}
                    boxGapVariant={'g-5'}
                    boxWidthVariant={'w-5'}
                    style={{ background: '#968b8b9b' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>
                <BaseBox
                    boxDisplay={'grid'}
                    boxPaddingVariant={'p-6'}
                    boxGapVariant={'g-6'}
                    boxWidthVariant={'w-6'}
                    style={{ background: '#968b8b9b' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>
            </BaseBox>
            <BaseTitle mr={'my-3'}>BaseBox</BaseTitle>
            <BaseBox mr={'my-3'} boxDisplay={'flex'} boxGapVariant={'g-2'} style={{ alignItems: 'flex-start' }}>
                <SimpleBox
                    boxDisplay={'grid'}
                    boxShadowVariant={'shd-1'}
                    boxRadiusVariant={'br-1'}
                    boxPaddingVariant={'p-1'}
                    boxGapVariant={'g-1'}
                    boxWidthVariant={'w-1'}
                >
                    <BaseButton>Button</BaseButton>
                    <BaseButton>Button</BaseButton>
                    <BaseButton>Button</BaseButton>
                </SimpleBox>
                <SimpleBox
                    boxDisplay={'grid'}
                    boxShadowVariant={'shd-2'}
                    boxRadiusVariant={'br-2'}
                    boxPaddingVariant={'p-2'}
                    boxGapVariant={'g-2'}
                    boxWidthVariant={'w-2'}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </SimpleBox>
                <SimpleBox
                    boxShadowVariant={'shd-3'}
                    boxRadiusVariant={'br-3'}
                    boxDisplay={'grid'}
                    boxPaddingVariant={'p-3'}
                    boxGapVariant={'g-3'}
                    boxWidthVariant={'w-3'}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </SimpleBox>
                <SimpleBox
                    boxShadowVariant={'shd-3'}
                    boxRadiusVariant={'br-3'}
                    boxDisplay={'grid'}
                    boxPaddingVariant={'p-4'}
                    boxGapVariant={'g-4'}
                    boxWidthVariant={'w-4'}
                    bg={'#6fd377'}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </SimpleBox>
                <SimpleBox
                    boxBorderColor={'#3e66d3'}
                    boxShadowColor={'#3e66d3'}
                    boxShadowVariant={'shd-3'}
                    boxRadiusVariant={'br-3'}
                    boxDisplay={'grid'}
                    boxPaddingVariant={'p-5'}
                    boxGapVariant={'g-5'}
                    boxWidthVariant={'w-5'}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </SimpleBox>
                <SimpleBox
                    boxShadowVariant={'shd-3'}
                    boxRadiusVariant={'br-3'}
                    boxDisplay={'grid'}
                    boxPaddingVariant={'p-6'}
                    boxGapVariant={'g-6'}
                    boxWidthVariant={'w-6'}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </SimpleBox>
            </BaseBox>

            <BaseBox>
                <Separator mr={'my-9'} color={'#000'} />
            </BaseBox>

            {/* <h2>BASE BOX</h2>
            <BaseBox boxGapVariant={'g-3'} mr={'m-3'} style={{ display: 'flex' }}>
               

                <BaseBox
                    boxPaddingVariant={'p-2'}
                    boxGapVariant={'g-2'}
                    boxWidthVariant={'w-2'}
                    style={{ background: '#f5eee4' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>
                <BaseBox
                    boxPaddingVariant={'p-3'}
                    boxGapVariant={'g-3'}
                    boxWidthVariant={'w-3'}
                    style={{ background: '#f5eee4' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>
                <BaseBox
                    boxPaddingVariant={'p-4'}
                    boxGapVariant={'g-4'}
                    boxWidthVariant={'w-4'}
                    style={{ background: '#f5eee4' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>
            </BaseBox> */}

            {/* <BaseTitle as={'h2'}>Simple Box</BaseTitle>
            <SimpleBox
                mr={'m-3'}
                boxPaddingVariant={'p-4'}
                boxGapVariant={'g-4'}
                boxWidthVariant={'w-4'}
                boxRadiusVariant={'br-3'}
                boxShadowVariant={'shd-3'}
            >
                <SimpleTextField placeholder={'Placeholder'} />
                <SimpleTextField placeholder={'Placeholder'} />
                <SimpleTextField placeholder={'Placeholder'} />
            </SimpleBox>
            <SimpleBox
                mr={'m-3'}
                boxPaddingVariant={'p-4'}
                boxGapVariant={'g-4'}
                boxWidthVariant={'w-null'}
                boxRadiusVariant={'br-3'}
                boxShadowVariant={'shd-3'}
            >
                <SimpleTextField placeholder={'Placeholder'} />
                <SimpleTextField placeholder={'Placeholder'} />
                <SimpleTextField placeholder={'Placeholder'} />
            </SimpleBox>
            <BaseBox
                boxPaddingVariant={'p-4'}
                boxGapVariant={'g-4'}
                boxWidthVariant={'w-6'}
                style={{ background: '#f5eee4' }}
            >
                <SimpleTextField placeholder={'Placeholder'} />
                <SimpleTextField placeholder={'Placeholder'} />
                <SimpleTextField placeholder={'Placeholder'} />
            </BaseBox>

            <BaseMenuGroup
                mr={'m-5'}
                itemSizeVariant={'M'}
                itemTextColorActive={'#ff0000'}
                itemOpacityActive={'40'}
                itemOpacityHover={'20'}
                onChangeActiveItem={(value) => console.log(value)}
            >
                <BaseMenuItem active value={'1'}>
                    item 1
                </BaseMenuItem>
                <BaseMenuItem value={'2'}>item 2</BaseMenuItem>
                <BaseMenuItem value={'3'}>item 3</BaseMenuItem>
            </BaseMenuGroup>

            <BaseMenuGroup orientation={'vertical'} mr={'m-5'}>
                <BaseMenuItem value={'1'}>item 1</BaseMenuItem>
                <BaseMenuItem value={'2'}>item 2</BaseMenuItem>
                <BaseMenuItem value={'3'}>item 3</BaseMenuItem>
            </BaseMenuGroup> */}
        </div>
    );
}

export default Box;
