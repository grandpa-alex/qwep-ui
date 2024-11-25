import {
    BaseCheckbox,
    BaseRadioGroup,
    BaseRadioItem,
    BaseSwitch,
    SubmitCheckbox,
    SubmitSwitch,
    WrapperInput,
} from '@src/lib';
import { useState } from 'react';

function Checkbox() {
    const [l, setL] = useState(false);
    const [lS, setLS] = useState(false);

    const testH = async (check: boolean | string) => {
        console.log(check);

        setL(true);

        setTimeout(() => {
            setL(false);
        }, 300);
    };

    const testHS = async (check: boolean | string) => {
        console.log(check);

        setLS(true);

        setTimeout(() => {
            setLS(false);
        }, 600);
    };

    return (
        <div style={{ paddingBottom: '300px' }}>
            <h2>BASE CECKBOX</h2>
            <h4>BASE CECKBOX L COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseCheckbox mr={'m-3'} />
                <BaseCheckbox mr={'m-3'} colorVariant={'info'} />
                <BaseCheckbox mr={'m-3'} checked colorVariant={'success'} />
                <BaseCheckbox mr={'m-3'} colorVariant={'warning'} />
                <BaseCheckbox mr={'m-3'} checked colorVariant={'error'} />
                <BaseCheckbox mr={'m-3'} defaultChecked color={'#d80097'} />
                <BaseCheckbox mr={'m-3'} disabled defaultChecked color={'#d80097'} />
            </div>
            <h4>BASE CECKBOX M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} />
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} colorVariant={'info'} />
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} checked colorVariant={'success'} />
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} colorVariant={'warning'} />
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} checked colorVariant={'error'} />
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} defaultChecked color={'#d80097'} />
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} disabled defaultChecked color={'#d80097'} />
            </div>
            <h2>SUBMIT CECKBOX</h2>
            <h4>SUBMIT CECKBOX COLORS</h4>
            <div style={{ display: 'flex' }}>
                <SubmitCheckbox mr={'m-3'} blocked isLoading={false} />
                <SubmitCheckbox mr={'m-3'} isLoading={false} colorVariant={'info'} />
                <SubmitCheckbox mr={'m-3'} isLoading={true} colorVariant={'info'} />
                <SubmitCheckbox mr={'m-3'} isLoading={true} checked colorVariant={'success'} />
                <SubmitCheckbox mr={'m-3'} isLoading={true} colorVariant={'warning'} />
                <SubmitCheckbox mr={'m-3'} isLoading={true} sizeVariant={'M'} checked colorVariant={'error'} />
                <SubmitCheckbox mr={'m-3'} isLoading={true} sizeVariant={'M'} defaultChecked color={'#d80097'} />
                <SubmitCheckbox
                    mr={'m-3'}
                    isLoading={true}
                    sizeVariant={'M'}
                    disabled
                    defaultChecked
                    color={'#d80097'}
                />
            </div>
            <div style={{ display: 'flex' }}>
                <SubmitCheckbox mr={'m-3'} onCheckedChange={(check) => testH(check)} isLoading={l} />
            </div>
            <h2>BASE SWITH</h2>
            <h4>BASE SWITH L COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSwitch mr={'m-3'} />
                <BaseSwitch mr={'m-3'} colorVariant={'info'} />
                <BaseSwitch mr={'m-3'} checked colorVariant={'success'} />
                <BaseSwitch mr={'m-3'} colorVariant={'warning'} />
                <BaseSwitch mr={'m-3'} checked colorVariant={'error'} />
                <BaseSwitch mr={'m-3'} defaultChecked color={'#d80097'} />
                <BaseSwitch mr={'m-3'} disabled defaultChecked color={'#d80097'} />
            </div>
            <h4>BASE SWITH M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} />
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} colorVariant={'info'} />
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} checked colorVariant={'success'} />
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} colorVariant={'warning'} />
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} checked colorVariant={'error'} />
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} defaultChecked color={'#d80097'} />
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} disabled defaultChecked color={'#d80097'} />
            </div>
            <h2>SUBMIT SWITH</h2>
            <h4>SUBMIT SWITH L COLORS</h4>
            <div style={{ display: 'flex' }}>
                <SubmitSwitch mr={'m-3'} isLoading={false} />
                <SubmitSwitch mr={'m-3'} isLoading={true} colorVariant={'info'} />
                <SubmitSwitch mr={'m-3'} isLoading={true} checked colorVariant={'success'} />
                <SubmitSwitch mr={'m-3'} isLoading={true} colorVariant={'warning'} />
                <SubmitSwitch mr={'m-3'} isLoading={true} sizeVariant={'M'} checked colorVariant={'error'} />
                <SubmitSwitch mr={'m-3'} isLoading={true} sizeVariant={'M'} defaultChecked color={'#d80097'} />
                <SubmitSwitch mr={'m-3'} isLoading={true} sizeVariant={'M'} disabled color={'#d80097'} />
            </div>
            <div style={{ display: 'flex' }}>
                <SubmitSwitch mr={'m-3'} onCheckedChange={(check) => testHS(check)} isLoading={lS} />
            </div>
            <h4>BASE RADIO L</h4>
            <div>
                <BaseRadioGroup>
                    <WrapperInput positionLabel={'right'} id={'1'} label={'BaseRadioItem'}>
                        <BaseRadioItem id={'1'} colorVariant={'success'} value={'1'} />
                    </WrapperInput>
                    <WrapperInput positionLabel={'right'} id={'2'} label={'BaseRadioItem'}>
                        <BaseRadioItem id={'2'} colorVariant={'success'} value={'2'} />
                    </WrapperInput>
                    <WrapperInput positionLabel={'right'} id={'3'} label={'BaseRadioItem'}>
                        <BaseRadioItem sizeVariant={'M'} id={'3'} colorVariant={'success'} value={'3'} />
                    </WrapperInput>
                    <WrapperInput positionLabel={'right'} id={'4'} label={'BaseRadioItem'}>
                        <BaseRadioItem sizeVariant={'M'} id={'4'} colorVariant={'success'} value={'4'} />
                    </WrapperInput>
                </BaseRadioGroup>

                <BaseRadioGroup
                    orientation={'horizontal'}
                    label={'hkjrt khr '}
                    message={{ text: ' greg reg regre ger' }}
                >
                    <WrapperInput positionLabel={'right'} id={'1'} label={'BaseRadioItem'}>
                        <BaseRadioItem id={'1'} colorVariant={'success'} value={'1'} />
                    </WrapperInput>
                    <WrapperInput positionLabel={'right'} id={'2'} label={'BaseRadioItem'}>
                        <BaseRadioItem id={'2'} colorVariant={'success'} value={'2'} />
                    </WrapperInput>
                    <WrapperInput positionLabel={'right'} id={'3'} label={'BaseRadioItem'}>
                        <BaseRadioItem sizeVariant={'M'} id={'3'} colorVariant={'success'} value={'3'} />
                    </WrapperInput>
                    <WrapperInput positionLabel={'right'} id={'4'} label={'BaseRadioItem'}>
                        <BaseRadioItem sizeVariant={'M'} id={'4'} colorVariant={'success'} value={'4'} />
                    </WrapperInput>
                </BaseRadioGroup>
            </div>

            <div style={{ width: '1000px', paddingTop: '100px', background: '#afafaf6f' }}>
                <WrapperInput positionLabel={'right'} id={'321421421421421'} label={'BaseRadioItem'}>
                    <SubmitSwitch isLoading={false} />
                </WrapperInput>
            </div>
        </div>
    );
}

export default Checkbox;
