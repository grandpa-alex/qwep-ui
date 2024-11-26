import { styled } from 'styled-components';
import {
    BaseAvatar,
    BaseBox,
    BaseLayout,
    BaseParagraph,
    BaseTab,
    BaseTabContent,
    BaseTabWrapper,
    BaseTitle,
    BoxLayout,
    CircleDecorationTitle,
    Icon,
    Separator,
    SimpleTextField,
    WrapperInput,
} from '../lib';
import { url1 } from './avatar-img';

const LabelRole = styled(BaseBox)`
    width: fit-content;
    background-color: #bbf7d0;
    border-radius: 8px;
`;

const BoxAdaptive = styled(BaseBox)`
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`;

function TextProfile() {
    return (
        <BaseLayout>
            <BoxLayout>
                <BaseTabWrapper
                    defaultValue={'t-1'}
                    tabs={
                        <BaseBox
                            boxDisplay={'flex'}
                            style={{ justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap' }}
                        >
                            <BaseBox>
                                <BaseTitle as={'h4'} mr={'mb-3'}>
                                    Настройки профиля
                                </BaseTitle>
                                <BaseParagraph>Вы можете менять свои личные данные,</BaseParagraph>
                                <BaseParagraph>управлять аккаунтом и настройками безопасности</BaseParagraph>
                            </BaseBox>
                            <BaseBox boxDisplay={'flex'} boxGapVariant={'g-3'} mr={'mt-5'}>
                                <BaseTab key={1} value={'t-1'}>
                                    Общие
                                </BaseTab>
                                <BaseTab key={2} value={'t-2'}>
                                    Пароль
                                </BaseTab>
                                <BaseTab key={3} value={'t-3'} disabled>
                                    Интерфейс
                                </BaseTab>
                            </BaseBox>
                        </BaseBox>
                    }
                >
                    <Separator mr={'my-9'} />

                    <BaseTabContent value={'t-1'} boxDisplay={'block'}>
                        <BoxAdaptive boxDisplay={'grid'}>
                            <CircleDecorationTitle
                                title={'Фото'}
                                icon={<Icon.Photo color={'#000'} />}
                            ></CircleDecorationTitle>
                            <BaseBox boxDisplay={'flex'}>
                                <BaseAvatar sizeVariant={'large'} src={url1} alt={'Сатоши Накамото'} mr={'mr-7'} />
                                <BaseBox
                                    boxDisplay={'flex'}
                                    style={{ flexDirection: 'column', justifyContent: 'space-between' }}
                                >
                                    <LabelRole
                                        boxDisplay={'flex'}
                                        boxGapVariant={'g-1'}
                                        boxPaddingVariant={'p-1'}
                                        mr={'mb-2'}
                                    >
                                        <Icon.StarFill color={'#16A34A'} sizeVariant={'M'} />
                                        <BaseParagraph size={'M'} color={'#16A34A'} mr={'mr-1'}>
                                            Админ
                                        </BaseParagraph>
                                    </LabelRole>
                                    <BaseBox>
                                        <BaseTitle as={'h4'} mr={'mb-2'}>
                                            Сатоши Накамото
                                        </BaseTitle>
                                        <BaseParagraph>Старший разработчик</BaseParagraph>
                                    </BaseBox>
                                </BaseBox>
                            </BaseBox>
                        </BoxAdaptive>
                        <Separator mr={'my-9'} />
                        <BoxAdaptive boxDisplay={'grid'}>
                            <CircleDecorationTitle
                                title={'Учетные данные'}
                                icon={<Icon.Pen color={'#000'} />}
                            ></CircleDecorationTitle>
                            <BaseBox boxDisplay={'flex'} boxGapVariant={'g-4'} style={{ flexDirection: 'column' }}>
                                <BaseBox boxDisplay={'flex'} boxGapVariant={'g-4'}>
                                    <WrapperInput positionLabel={'top'} id={'1'} label={'Имя'}>
                                        <SimpleTextField placeholder={'Сатоши'} />
                                    </WrapperInput>
                                    <WrapperInput positionLabel={'top'} id={'2'} label={'Фамилия'}>
                                        <SimpleTextField placeholder={'Накамото'} />
                                    </WrapperInput>
                                </BaseBox>
                                <WrapperInput positionLabel={'top'} id={'3'} label={'Должность'}>
                                    <SimpleTextField placeholder={'Старший разработчик'} />
                                </WrapperInput>
                                <WrapperInput positionLabel={'top'} id={'4'} label={'Телефон'}>
                                    <SimpleTextField placeholder={'+7 977 999-99-99'} />
                                </WrapperInput>
                                <WrapperInput positionLabel={'top'} id={'5'} label={'Email'}>
                                    <SimpleTextField placeholder={'satoshi_n@example.com'} />
                                </WrapperInput>
                            </BaseBox>
                        </BoxAdaptive>
                    </BaseTabContent>
                    <BaseTabContent value={'t-2'}>BaseTabContent_2</BaseTabContent>
                    <BaseTabContent value={'t-3'}>BaseTabContent_3</BaseTabContent>
                </BaseTabWrapper>
            </BoxLayout>
        </BaseLayout>
    );
}

export default TextProfile;
