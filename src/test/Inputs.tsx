import { BaseBox, BaseTextField, BaseTextarea, Icon, SimpleTextField, SubmitTextField } from '@src/lib';
import { useState } from 'react';

function Inputs() {
    const [l, setL] = useState(false);
    const [val, setVal] = useState('');

    const testH = async (e: string) => {
        setL(true);

        setTimeout(() => {
            setVal(e);
            setL(false);
        }, 300);
    };

    return (
        <div style={{ paddingBottom: '100px' }}>
            <h2>BASE INPUT</h2>
            <h4>BASE INPUT L COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseTextField blocked mr={'m-3'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} colorVariant={'info'} placeholder={'Placeholder'} />
                <BaseTextField
                    mr={'m-3'}
                    defaultValue={'defaultValue'}
                    colorVariant={'success'}
                    placeholder={'Placeholder'}
                />
                <BaseTextField mr={'m-3'} colorVariant={'warning'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} colorVariant={'error'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} colorVariant={'error'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} color={'#d80097'} colorVariant={'error'} placeholder={'Placeholder custom'} />
            </div>
            <h4>BASE INPUT M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseTextField mr={'m-3'} disabled sizeVariant={'M'} placeholder={'Placeholder'} />
                <BaseTextField
                    mr={'m-3'}
                    disabled
                    sizeVariant={'M'}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <BaseTextField mr={'m-3'} sizeVariant={'M'} colorVariant={'success'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} sizeVariant={'M'} colorVariant={'warning'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} sizeVariant={'M'} colorVariant={'error'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} sizeVariant={'M'} colorVariant={'error'} placeholder={'Placeholder'} />
                <BaseTextField
                    mr={'m-3'}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    colorVariant={'error'}
                    placeholder={'Placeholder disabled'}
                />
            </div>
            <h2>SIMPLE INPUT</h2>
            <h4>SIMPLE INPUT ICON</h4>
            <div style={{ display: 'flex' }}>
                <SimpleTextField blocked mr={'m-3'} icon={<Icon.Settings />} placeholder={'Placeholder'} />
                <SimpleTextField
                    mr={'m-3'}
                    iconOnClick={() => console.log('+++')}
                    icon={<Icon.Settings />}
                    value={'value'}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    iconOnClick={() => console.log('+++')}
                    icon={<Icon.Settings />}
                    disabled
                    value={'value'}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    icon={<Icon.Settings />}
                    defaultValue={'defaultValue'}
                    colorVariant={'success'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    colorVariant={'warning'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    colorVariant={'error'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    colorVariant={'error'}
                    placeholder={'Placeholder custom'}
                />
            </div>
            <h4>SIMPLE INPUT ICON RIGHT</h4>
            <div style={{ display: 'flex' }}>
                <SimpleTextField
                    mr={'m-3'}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    colorVariant={'success'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    colorVariant={'warning'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    colorVariant={'error'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    colorVariant={'error'}
                    placeholder={'Placeholder custom'}
                />
            </div>
            <h2>SUBMIT INPUT</h2>
            <h4>SUBMIT INPUT ICON</h4>
            <div style={{ display: 'flex' }}>
                <SubmitTextField mr={'m-3'} isLoading={true} icon={<Icon.Settings />} placeholder={'Placeholder'} />
                <SubmitTextField
                    iconOnClick={() => console.log('+++')}
                    mr={'m-3'}
                    isLoading={true}
                    disabled
                    icon={<Icon.Settings />}
                    value={'value'}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    iconOnClick={() => console.log('+++')}
                    mr={'m-3'}
                    isLoading={false}
                    icon={<Icon.Settings />}
                    value={'value'}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    iconOnClick={() => console.log('+++')}
                    mr={'m-3'}
                    isLoading={true}
                    icon={<Icon.Settings />}
                    value={'value'}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    icon={<Icon.Settings />}
                    defaultValue={'defaultValue'}
                    colorVariant={'success'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    colorVariant={'warning'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    colorVariant={'error'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    colorVariant={'error'}
                    placeholder={'Placeholder custom'}
                />
            </div>
            <h4>SUBMIT INPUT ICON RIGHT</h4>
            <div style={{ display: 'flex' }}>
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    colorVariant={'success'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    colorVariant={'warning'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    colorVariant={'error'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    colorVariant={'error'}
                    placeholder={'Placeholder custom'}
                />
            </div>
            <h4>SUBMIT INPUT TYPE</h4>
            <div style={{ display: 'flex' }}>
                <SubmitTextField
                    blocked
                    mr={'m-3'}
                    isLoading={false}
                    type={'email'}
                    icon={<Icon.Settings />}
                    placeholder={'email'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={false}
                    type={'password'}
                    icon={<Icon.Settings />}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={false}
                    type={'date'}
                    colorVariant={'success'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={false}
                    type={'time'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    colorVariant={'warning'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={false}
                    type={'color'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    colorVariant={'error'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={false}
                    type={''}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    colorVariant={'error'}
                    placeholder={'Placeholder custom'}
                />
            </div>
            <h4>SUBMIT INPUT CUSTOM</h4>
            <div style={{ display: 'flex' }}>
                <SubmitTextField
                    mr={'m-3'}
                    value={val}
                    onChange={(e) => testH(e.target.value)}
                    isLoading={l}
                    iconPosition={'left'}
                    icon={<Icon.Settings />}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    style={{ width: '100%' }}
                    isLoading={false}
                    iconPosition={'left'}
                    icon={<Icon.Settings />}
                    placeholder={'Placeholder'}
                />
            </div>

            <h4>SUBMIT INPUT Base Textarea</h4>
            <BaseBox style={{ display: 'flex' }} mr={'m-3'} boxGapVariant={'g-3'}>
                <BaseTextarea colorVariant={'success'} placeholder={'Test placeholder'} />
                <BaseTextarea colorVariant={'error'} placeholder={'Test placeholder'} />
                <BaseTextarea color={'#e600c7'} resize={true} sizeVariant={'M'} placeholder={'Test placeholder'} />
                <BaseTextarea color={'#e600c7'} disabled sizeVariant={'M'} placeholder={'Test placeholder'} />
            </BaseBox>

            <BaseBox style={{ width: '400px', background: 'red' }}>
                <BaseTextField style={{ width: '100%' }} />
                <SubmitTextField
                    // mr={'m-3'}
                    style={{ width: '100%' }}
                    isLoading={false}
                    iconPosition={'left'}
                    icon={<Icon.Settings />}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    style={{ width: '100%' }}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    colorVariant={'error'}
                    placeholder={'Placeholder custom'}
                />
            </BaseBox>
        </div>
    );
}

export default Inputs;
