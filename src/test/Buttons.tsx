import { BaseButton, BaseTitle, Icon, IconButton, SimpleButton, SubmitButton, SubmitTextField } from '@src/lib';
import { TVariantColor } from '@src/lib/types/TypeBase';
import { TVariantBtn } from '@src/lib/types/TypeBtn';
import { useState } from 'react';

function Buttons() {
    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState<TVariantColor>('default');
    const [v, setV] = useState<TVariantBtn>('contained');

    const simpleBtnH = () => {
        if (status === 'default') {
            setStatus('success');
            setV('outlined');
        } else {
            setStatus('default');
            setV('contained');
        }
    };

    const [c, setC] = useState<TVariantColor>('default');
    const [l, setL] = useState(false);

    const subCustH = async () => {
        setL(true);
        setTimeout(() => {
            setL(false);
            setTimeout(() => {
                setC('default');
            }, 1000);
            setC('success');
        }, 2000);
    };

    return (
        <div style={{ paddingBottom: '300px' }}>
            <BaseTitle as={'h2'}>BASE BUTTON</BaseTitle>
            <BaseTitle as={'h4'}>BASE BUTTON L COLORS</BaseTitle>
            <div style={{ display: 'flex' }}>
                <BaseButton blocked mr={'m-3'}>
                    BaseButton
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'info'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'success'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'warning'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'error'}>
                    BaseButton error
                </BaseButton>
                <BaseButton mr={'m-3'} color={'#d80097'}>
                    BaseButton custom
                </BaseButton>
            </div>
            <BaseTitle as={'h4'}>BASE BUTTON M COLORS</BaseTitle>
            <div style={{ display: 'flex' }}>
                <BaseButton mr={'m-3'} sizeVariant={'M'}>
                    BaseButton
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'info'} sizeVariant={'M'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'success'} sizeVariant={'M'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'warning'} sizeVariant={'M'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'error'} sizeVariant={'M'}>
                    BaseButton error
                </BaseButton>
                <BaseButton mr={'m-3'} color={'#d80097'} sizeVariant={'M'}>
                    BaseButton custom
                </BaseButton>
            </div>
            <BaseTitle as={'h4'}>BASE BUTTON VARIANT</BaseTitle>
            <div style={{ display: 'flex' }}>
                <BaseButton mr={'m-3'} variant={'contained'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} variant={'outlined'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} variant={'text'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} sizeVariant={'M'} variant={'contained'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} sizeVariant={'M'} variant={'outlined'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} sizeVariant={'M'} variant={'text'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} sizeVariant={'M'} color={'#d80097'} variant={'text'}>
                    BaseButton text custom
                </BaseButton>
                <BaseButton mr={'m-3'} sizeVariant={'M'} color={'#d80097'} variant={'outlined'}>
                    BaseButton outlined custom
                </BaseButton>
            </div>
            <BaseTitle as={'h4'}>BASE BUTTON VARIANT DISABLED</BaseTitle>
            <div style={{ display: 'flex' }}>
                <BaseButton mr={'m-3'} disabled={true} variant={'contained'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} disabled={true} variant={'outlined'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} disabled={true} variant={'text'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} disabled={true} sizeVariant={'M'} variant={'contained'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} disabled={true} sizeVariant={'M'} variant={'outlined'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} disabled={true} sizeVariant={'M'} variant={'text'}>
                    BaseButton outlined
                </BaseButton>
            </div>
            <BaseTitle as={'h2'}>SIMPLE BUTTON</BaseTitle>
            <BaseTitle as={'h4'}>SIMPLE BUTTON POSITION</BaseTitle>
            <div style={{ display: 'flex' }}>
                <SimpleButton blocked mr={'m-3'} style={{ width: '200px' }} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} position={'left'}>
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} sizeVariant={'M'} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} sizeVariant={'M'} position={'left'}>
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} sizeVariant={'M'} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    position={'center'}
                >
                    SimpleButton custom
                </SimpleButton>
            </div>
            <BaseTitle as={'h4'}>SIMPLE BUTTON OUTLIN POSITION</BaseTitle>
            <div style={{ display: 'flex' }}>
                <SimpleButton mr={'m-3'} variant={'outlined'} style={{ width: '200px' }} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton mr={'m-3'} variant={'outlined'} style={{ width: '200px' }} position={'left'}>
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} variant={'outlined'} style={{ width: '200px' }} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    variant={'outlined'}
                    style={{ width: '200px' }}
                    sizeVariant={'M'}
                    position={'center'}
                >
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    variant={'outlined'}
                    style={{ width: '200px' }}
                    sizeVariant={'M'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    variant={'outlined'}
                    style={{ width: '200px' }}
                    sizeVariant={'M'}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    variant={'outlined'}
                    style={{ width: '200px' }}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    position={'center'}
                >
                    SimpleButton custom
                </SimpleButton>
            </div>
            <BaseTitle as={'h4'}>SIMPLE BUTTON DEF ICONS LEFT</BaseTitle>
            <div style={{ display: 'flex' }}>
                <SimpleButton mr={'m-3'} icon={<Icon.Settings />} position={'center'}>
                    SimpleButton
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} icon={<Icon.Settings />} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} icon={<Icon.Phone />} position={'left'}>
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} icon={<Icon.Settings />} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    position={'center'}
                >
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    icon={<Icon.Phone />}
                    sizeVariant={'M'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
            </div>
            <BaseTitle as={'h4'}>SIMPLE BUTTON ICONS RIGHT</BaseTitle>
            <div style={{ display: 'flex' }}>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    position={'center'}
                >
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.Phone />}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    position={'center'}
                >
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.Phone />}
                    sizeVariant={'M'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.Gear style={{ width: '10px' }} />}
                    sizeVariant={'M'}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
            </div>
            <BaseTitle as={'h4'}>SIMPLE BUTTON ICONS DISABLED</BaseTitle>
            <div style={{ display: 'flex' }}>
                <SimpleButton mr={'m-3'} disabled={true} icon={<Icon.Settings />} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton mr={'m-3'} disabled={true} icon={<Icon.Phone />} iconPosition={'right'} position={'left'}>
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} disabled={true} icon={<Icon.Settings />} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton mr={'m-3'} disabled={true} icon={<Icon.Settings />} sizeVariant={'M'} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    icon={<Icon.Phone />}
                    iconPosition={'right'}
                    sizeVariant={'M'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} disabled={true} icon={<Icon.Gear />} sizeVariant={'M'} position={'right'}>
                    SimpleButton right
                </SimpleButton>
            </div>
            <BaseTitle as={'h4'}>SIMPLE BUTTON ICONS OUTLINE DISABLED</BaseTitle>
            <div style={{ display: 'flex' }}>
                <SimpleButton mr={'m-3'} disabled={true} variant={'outlined'} icon={<Icon.Gear />} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'outlined'}
                    icon={<Icon.Phone />}
                    iconPosition={'right'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'outlined'}
                    icon={<Icon.Settings />}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'outlined'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    position={'center'}
                >
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'outlined'}
                    icon={<Icon.Phone />}
                    iconPosition={'right'}
                    sizeVariant={'M'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'outlined'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
            </div>
            <BaseTitle as={'h4'}>SIMPLE BUTTON ICONS TEXT DISABLED</BaseTitle>
            <div style={{ display: 'flex' }}>
                <SimpleButton mr={'m-3'} disabled={true} variant={'text'} icon={<Icon.Settings />} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'text'}
                    icon={<Icon.Phone />}
                    iconPosition={'right'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} disabled={true} variant={'text'} icon={<Icon.Settings />} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'text'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    position={'center'}
                >
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'text'}
                    icon={<Icon.Phone />}
                    iconPosition={'right'}
                    sizeVariant={'M'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'text'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
            </div>
            <BaseTitle as={'h4'}>SIMPLE BUTTON CUSTOM</BaseTitle>
            <div style={{ display: 'flex' }}>
                <SimpleButton
                    mr={'m-3'}
                    color={'#161616'}
                    style={{ color: '#aa06aa' }}
                    icon={<Icon.Settings color={'#aa06aa'} />}
                >
                    SimpleButton
                </SimpleButton>
                <SimpleButton mr={'m-3'} variant={'outlined'} color={'#811f69'}>
                    SimpleButton
                </SimpleButton>
                <SimpleButton mr={'m-3'} color={'#161616'} variant={'text'} icon={<Icon.Settings color={'#aa06aa'} />}>
                    SimpleButton
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    variant={'outlined'}
                    style={{ width: '200px' }}
                    color={'#d80097'}
                    position={'center'}
                >
                    SimpleButton custom
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    onClick={simpleBtnH}
                    colorVariant={status}
                    style={{ width: '200px' }}
                    position={'center'}
                >
                    SimpleButton custom
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    onClick={simpleBtnH}
                    colorVariant={status}
                    variant={v}
                    style={{ width: '200px' }}
                    position={'center'}
                >
                    SimpleButton custom
                </SimpleButton>
            </div>
            <BaseTitle as={'h2'}>SIMPLE BUTTON</BaseTitle>
            <SimpleButton
                mr={'m-3'}
                onClick={() => setLoading(!loading)}
                style={{ width: '200px' }}
                position={'center'}
            >
                LOADING
            </SimpleButton>
            <div style={{ display: 'flex' }}>
                <SubmitButton isLoading={loading} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} variant="outlined" mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} variant={'text'} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} sizeVariant={'M'} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} sizeVariant={'M'} mr={'m-3'} variant="outlined">
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} sizeVariant={'M'} mr={'m-3'} variant="text">
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} sizeVariant={'M'} mr={'m-3'} color={'#d80097'}>
                    SubmitButton custom
                </SubmitButton>
            </div>
            <div style={{ display: 'flex' }}>
                <SubmitButton isLoading={loading} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} icon={<Icon.Settings />} variant="outlined" mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} icon={<Icon.Settings />} variant={'text'} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    iconPosition={'right'}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    mr={'m-3'}
                >
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    mr={'m-3'}
                    variant="outlined"
                >
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} icon={<Icon.Settings />} sizeVariant={'M'} mr={'m-3'} variant="text">
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    iconPosition={'right'}
                    icon={<Icon.Warning />}
                    sizeVariant={'M'}
                    mr={'m-3'}
                    color={'#d80097'}
                >
                    SubmitButton custom
                </SubmitButton>
            </div>
            <div style={{ display: 'flex' }}>
                <SubmitButton isLoading={loading} style={{ width: '200px' }} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    style={{ width: '200px' }}
                    position={'right'}
                    icon={<Icon.Warning />}
                    variant="outlined"
                    mr={'m-3'}
                >
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    style={{ width: '200px' }}
                    icon={<Icon.AddCircle />}
                    variant={'text'}
                    mr={'m-3'}
                >
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.Add />}
                    sizeVariant={'M'}
                    mr={'m-3'}
                >
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    style={{ width: '200px' }}
                    icon={<Icon.Settings />}
                    sizeVariant={'M'}
                    mr={'m-3'}
                    variant="outlined"
                >
                    SubmitButton
                </SubmitButton>
            </div>
            <div style={{ display: 'flex' }}>
                <SubmitButton onClick={subCustH} colorVariant={c} isLoading={l} style={{ width: '200px' }} mr={'m-3'}>
                    CUSTOM SubmitButton
                </SubmitButton>
            </div>
            <div style={{ display: 'flex' }}>
                <SubmitButton isLoading={loading} style={{ width: '200px' }} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    // style={{ width: '300px' }}
                    icon={<div />}
                    variant="outlined"
                    mr={'m-3'}
                >
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    iconPosition={'right'}
                    style={{ width: '300px' }}
                    icon={<Icon.Settings />}
                    variant="outlined"
                    mr={'m-3'}
                >
                    SubmitButton
                </SubmitButton>
                <Icon.SendArrow position={'top'} />
                <SubmitButton
                    isLoading={loading}
                    iconPosition={'right'}
                    style={{ width: '300px' }}
                    icon={<Icon.SendArrow position={'top'} />}
                    variant="outlined"
                    mr={'m-3'}
                >
                    SubmitButton
                </SubmitButton>
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={false}
                    icon={<Icon.ArrowLine position={'top'} />}
                    colorVariant={'error'}
                    placeholder={'Placeholder'}
                />
            </div>

            <div style={{ display: 'flex' }}>
                <IconButton mr={'m-3'}>
                    <Icon.CloseCircle />
                </IconButton>

                <IconButton mr={'m-3'} variant={'outlined'}>
                    <Icon.RangeGroup />
                </IconButton>

                <IconButton mr={'m-3'} variant={'text'}>
                    <Icon.RangeGroup />
                </IconButton>

                <IconButton mr={'m-3'} borderRadius={'round'}>
                    <Icon.RangeGroup />
                </IconButton>

                <IconButton mr={'m-3'} borderRadius={'round'} variant={'outlined'}>
                    <Icon.RangeGroup />
                </IconButton>

                <IconButton mr={'m-3'} borderRadius={'round'} variant={'text'}>
                    <Icon.RangeGroup />
                </IconButton>

                <IconButton mr={'m-3'} sizeVariant={'M'}>
                    <Icon.RangeGroup />
                </IconButton>

                <IconButton mr={'m-3'} sizeVariant={'M'} variant={'outlined'}>
                    <Icon.RangeGroup />
                </IconButton>

                <IconButton mr={'m-3'} sizeVariant={'M'} variant={'text'}>
                    <Icon.RangeGroup />
                </IconButton>

                <IconButton mr={'m-3'} borderRadius={'round'} sizeVariant={'M'}>
                    <Icon.RangeGroup />
                </IconButton>

                <IconButton mr={'m-3'} borderRadius={'round'} sizeVariant={'M'} variant={'outlined'}>
                    <Icon.RangeGroup />
                </IconButton>

                <IconButton mr={'m-3'} borderRadius={'round'} sizeVariant={'M'} variant={'text'}>
                    <Icon.RangeGroup />
                </IconButton>
            </div>
        </div>
    );
}

export default Buttons;
