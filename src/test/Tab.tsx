import { BaseBox, BaseTab, BaseTabContent, BaseTabWrapper } from '@src/lib';

function Tab() {
    return (
        <BaseBox style={{ paddingBottom: '300px' }}>
            <h2>BASE TAB</h2>

            <BaseTabWrapper
                defaultValue={'t-3'}
                component={
                    <div style={{ paddingBottom: '30px' }}>
                        <div>Настройки профиля</div>
                        <div>Вы можете менять свои личные данные, управлять аккаунтом и настройками безопасности</div>
                    </div>
                }
                style={{ background: 'red', display: 'flex', flexDirection: 'column' }}
                // orientation={'horizontal'}
                tabsListProps={{
                    style: {
                        display: 'flex',
                        justifyContent: 'flex-end',

                        alignItems: 'center',
                    },
                }}
                tabs={[
                    <BaseTab key={1} value={'t-1'}>
                        BaseTab_1
                    </BaseTab>,
                    <BaseTab key={2} value={'t-2'}>
                        BaseTab_2
                    </BaseTab>,
                    <BaseTab key={3} value={'t-3'} disabled>
                        BaseTab_3
                    </BaseTab>,
                ]}
            >
                <BaseTabContent value={'t-1'}>BaseTabContent_1</BaseTabContent>
                <BaseTabContent value={'t-2'}>BaseTabContent_2</BaseTabContent>
                <BaseTabContent value={'t-3'}>BaseTabContent_3</BaseTabContent>
            </BaseTabWrapper>
        </BaseBox>
    );
}

export default Tab;
