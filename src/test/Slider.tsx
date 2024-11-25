import { BaseSlider, WrapperInput } from '@src/lib';

function Slider() {
    return (
        <div style={{ paddingBottom: '300px' }}>
            <h2>BASE SLIDER</h2>
            <h4>BASE SLIDER COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSlider mr={'m-3'} />
                <BaseSlider mr={'m-3'} defaultValue={[50]} max={100} step={1} colorVariant={'info'} />
                <BaseSlider mr={'m-3'} defaultValue={[50]} max={100} step={1} colorVariant={'success'} />
                <BaseSlider mr={'m-3'} defaultValue={[50]} max={100} step={1} colorVariant={'warning'} />
                <BaseSlider mr={'m-3'} defaultValue={[50]} max={100} step={1} colorVariant={'error'} />
                <BaseSlider mr={'m-3'} defaultValue={[50]} max={100} step={1} color={'#d80097'} />
                <BaseSlider mr={'m-3'} disabled defaultValue={[50]} max={100} step={1} color={'#d80097'} />
            </div>
            <h4>BASE SLIDER COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSlider mr={'m-3'} defaultValue={[20, 70]} max={100} step={1} />
                <BaseSlider mr={'m-3'} defaultValue={[20, 70]} max={100} step={1} colorVariant={'info'} />
                <BaseSlider mr={'m-3'} defaultValue={[20, 70]} max={100} step={1} colorVariant={'success'} />
                <BaseSlider mr={'m-3'} defaultValue={[20, 70, 90]} max={100} step={1} colorVariant={'warning'} />
                <BaseSlider mr={'m-3'} defaultValue={[20, 70, 90]} max={100} step={1} colorVariant={'error'} />
                <BaseSlider mr={'m-3'} defaultValue={[20, 70, 90]} max={100} step={1} color={'#d80097'} />
                <BaseSlider mr={'m-3'} disabled defaultValue={[20, 70]} max={100} step={1} color={'#d80097'} />
            </div>
            <h4>BASE SLIDER M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSlider mr={'m-3'} sizeVariant={'M'} defaultValue={[20, 70]} max={100} step={1} />
                <BaseSlider
                    mr={'m-3'}
                    sizeVariant={'M'}
                    defaultValue={[20, 70]}
                    max={100}
                    step={1}
                    colorVariant={'info'}
                />
                <BaseSlider
                    mr={'m-3'}
                    sizeVariant={'M'}
                    defaultValue={[20, 70]}
                    max={100}
                    step={1}
                    colorVariant={'success'}
                />
                <BaseSlider
                    mr={'m-3'}
                    sizeVariant={'M'}
                    defaultValue={[20, 70, 90]}
                    max={100}
                    step={1}
                    colorVariant={'warning'}
                />
                <BaseSlider
                    mr={'m-3'}
                    sizeVariant={'M'}
                    defaultValue={[20, 70, 90]}
                    max={100}
                    step={1}
                    colorVariant={'error'}
                />
                <BaseSlider
                    mr={'m-3'}
                    sizeVariant={'M'}
                    defaultValue={[20, 70, 90]}
                    max={100}
                    step={1}
                    color={'#d80097'}
                />
                <BaseSlider
                    mr={'m-3'}
                    sizeVariant={'M'}
                    disabled
                    defaultValue={[20, 70]}
                    max={100}
                    step={1}
                    color={'#d80097'}
                />
            </div>
            <h4>BASE SLIDER VERTICAL</h4>
            <div style={{ display: 'flex' }}>
                <BaseSlider
                    mr={'m-3'}
                    orientation={'vertical'}
                    length={'500px'}
                    defaultValue={[20, 70]}
                    max={100}
                    step={1}
                />
                <BaseSlider
                    mr={'m-3'}
                    orientation={'vertical'}
                    length={'500px'}
                    defaultValue={[20, 70]}
                    max={100}
                    step={1}
                    colorVariant={'info'}
                />
                <BaseSlider
                    mr={'m-3'}
                    orientation={'vertical'}
                    length={'500px'}
                    defaultValue={[20, 70]}
                    max={100}
                    step={1}
                    colorVariant={'success'}
                />
                <BaseSlider
                    mr={'m-3'}
                    orientation={'vertical'}
                    defaultValue={[20, 70, 90]}
                    max={100}
                    step={1}
                    colorVariant={'warning'}
                />
                <BaseSlider
                    mr={'m-3'}
                    orientation={'vertical'}
                    defaultValue={[20, 70, 90]}
                    max={100}
                    step={1}
                    colorVariant={'error'}
                />
                <BaseSlider
                    mr={'m-3'}
                    orientation={'vertical'}
                    defaultValue={[20, 70, 90]}
                    max={100}
                    step={1}
                    color={'#d80097'}
                />

                <WrapperInput positionLabel={'right'} id={'1'} label={'BaseRadioItem'}>
                    <BaseSlider mr={'m-3'} disabled defaultValue={[20, 70]} max={100} step={1} color={'#d80097'} />
                </WrapperInput>
            </div>
        </div>
    );
}

export default Slider;
