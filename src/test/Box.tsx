import { BaseBox, BaseMenuGroup, BaseMenuItem, BaseTitle, SimpleBox, SimpleTextField } from '../lib';
import React, { useEffect, useRef } from 'react';
// import React, { useEffect, useRef } from 'react';

function Box() {
    const boxRef = useRef();

    useEffect(() => {
        console.log('boxRef', boxRef);
    }, [boxRef]);
    return (
        <BaseBox>
            <div></div>
            {/* <BaseAvatar ref={boxRef} /> */}
            {/* <BaseBox ref={boxRef}>gergregreg</BaseBox> */}
            <h2>BASE BOX</h2>
            {/* <BaseBox boxGapVariant={'g-3'} mr={'m-3'} style={{ display: 'flex' }}>
                <BaseBox
                    boxPaddingVariant={'p-1'}
                    boxGapVariant={'g-1'}
                    boxWidthVariant={'w-1'}
                    style={{ background: '#f5eee4' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>

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

            <BaseTitle as={'h2'}>Simple Box</BaseTitle>
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
            </BaseMenuGroup>
        </BaseBox>
    );
}

export default Box;
