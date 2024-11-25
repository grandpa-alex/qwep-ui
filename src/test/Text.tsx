import { BaseBox, BaseParagraph, BaseText, BaseTitle } from '@src/lib';

function Text() {
    return (
        <BaseBox style={{ paddingBottom: '300px' }}>
            <h2>BASE TEXT</h2>
            <BaseText style={{ width: '300px' }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloribus delectus exercitationem
                quaerat quidem error, nesciunt amet, architecto, fugiat reprehenderit eum obcaecati voluptate. Dolore
                necessitatibus omnis maiores. Recusandae, maiores ipsam!
            </BaseText>
            <BaseText style={{ width: '300px' }} color={'#d111e2'}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloribus delectus exercitationem
                quaerat quidem error, nesciunt amet, architecto, fugiat reprehenderit eum obcaecati voluptate. Dolore
                necessitatibus omnis maiores. Recusandae, maiores ipsam!
            </BaseText>
            <BaseBox mr={'m-3'}>
                <BaseTitle mr={'my-3'} as={'h5'}>
                    BASE Paragraph
                </BaseTitle>
                <BaseParagraph mr={'mb-3'} style={{ width: '600px' }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente veritatis corrupti necessitatibus
                    officia eligendi! Sunt fugiat quasi corporis magnam nihil, ad, dicta cum quisquam perferendis
                    provident, vel sint eum repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                    voluptatum vero voluptates. Mollitia dolores tempore assumenda expedita magni iure alias amet saepe
                    delectus esse fuga, aliquid quidem molestias nostrum voluptatum.
                </BaseParagraph>
                <BaseParagraph mr={'mb-3'} color={'#4d4d4da7'} style={{ width: '600px' }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente veritatis corrupti necessitatibus
                    officia eligendi! Sunt fugiat quasi corporis magnam nihil, ad, dicta cum quisquam perferendis
                    provident, vel sint eum repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                    voluptatum vero voluptates. Mollitia dolores tempore assumenda expedita magni iure alias amet saepe
                    delectus esse fuga, aliquid quidem molestias nostrum voluptatum.
                </BaseParagraph>
                <BaseParagraph style={{ width: '600px' }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente veritatis corrupti necessitatibus
                    officia eligendi! Sunt fugiat quasi corporis magnam nihil, ad, dicta cum quisquam perferendis
                    provident, vel sint eum repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                    voluptatum vero voluptates. Mollitia dolores tempore assumenda expedita magni iure alias amet saepe
                    delectus esse fuga, aliquid quidem molestias nostrum voluptatum.
                </BaseParagraph>
            </BaseBox>
            <BaseTitle mr={'m-3'} as={'h1'}>
                Base Title H1
            </BaseTitle>
            <BaseTitle mr={'m-3'} as={'h2'}>
                Base Title H2
            </BaseTitle>
            <BaseTitle mr={'m-3'} as={'h3'}>
                Base Title H3
            </BaseTitle>
            <BaseTitle mr={'m-3'} as={'h4'}>
                Base Title H4
            </BaseTitle>
            <BaseTitle mr={'m-3'} as={'h5'}>
                Base Title H5
            </BaseTitle>

            <BaseTitle mr={'m-3'} as={'h6'}>
                Base Title H6
            </BaseTitle>

            <div style={{ width: '100px' }}>
                {/* <BaseParagraph mr={'m-3'} isEllipsis>
                Base Title H2
                Loremipsumdolorsitmetconsecteturadipisicingelit
            </BaseParagraph> */}

                <BaseTitle mr={'m-3'} as={'h6'} isEllipsis>
                    Loremipsumdolorsitmetconsecteturadipisicingelit
                </BaseTitle>
            </div>
        </BaseBox>
    );
}

export default Text;
