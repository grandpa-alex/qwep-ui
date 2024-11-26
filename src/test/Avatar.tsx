import { useEffect, useRef } from 'react';
import { BaseAvatar, BaseBox, BaseTitle } from '../lib';
import { url1, url2 } from './avatar-img';

function Avatar() {
    const inputRef = useRef(null);

    useEffect(() => {
        console.log('AAAA', inputRef);
    }, [inputRef]);

    return (
        <BaseBox style={{ paddingBottom: '300px' }}>
            <BaseTitle>BASE AVATAR</BaseTitle>
            <BaseBox style={{ display: 'flex' }}>
                <BaseAvatar src={url1} alt={'Afrf As'} mr={'m-3'} style={{ width: '200px', height: '200px' }} />
                <BaseAvatar alt={'lex v b'} sizeVariant={'large'} src={url1} mr={'m-3'} />
                <BaseAvatar alt={'Hex V B'} sizeVariant={'medium'} src={url1} mr={'m-3'} />
                <BaseAvatar alt={'Wex V B'} src={url1} sizeVariant={'small'} mr={'m-3'} />
            </BaseBox>
            <BaseBox style={{ display: 'flex' }}>
                <BaseAvatar
                    src={url2}
                    alt={'Afrf As'}
                    sizeVariant={'large'}
                    mr={'m-3'}
                    style={{ width: '200px', height: '200px' }}
                />
                <BaseAvatar alt={'W W b'} sizeVariant={'large'} src={url2} mr={'m-3'} />
                <BaseAvatar alt={'w w B'} sizeVariant={'medium'} src={url2} mr={'m-3'} />
                <BaseAvatar alt={'w w B'} src={url2} sizeVariant={'small'} mr={'m-3'} />
            </BaseBox>
        </BaseBox>
    );
}

export default Avatar;
