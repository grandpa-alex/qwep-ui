import { BaseBox, BaseTitle, SimpleBox } from '@src/lib';
import { colorsDark, colorsLight } from '@src/lib/general/colors';
import { BaseText } from '../lib/components/typography/base/BaseText';

//@ts-ignore
const Card = ({ title, value }) => {
    return (
        <SimpleBox boxPaddingVariant={'p-3'} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
                style={{
                    borderRadius: '100%',
                    border: '1px solid black',
                    width: '65px',
                    height: '65px',
                    backgroundColor: value,
                    marginBottom: '8px',
                }}
            />
            <p style={{ fontSize: '10px' }}>{value}</p>
            <BaseText>{title}</BaseText>
        </SimpleBox>
    );
};

function Colors() {
    return (
        <BaseBox>
            <BaseTitle>Colors Light</BaseTitle>
            <BaseBox style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Object.entries(colorsLight).map(([key, value]) => {
                    return <Card key={key} title={key} value={value} />;
                })}
            </BaseBox>
            <BaseTitle>Colors Dark</BaseTitle>
            <BaseBox style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Object.entries(colorsDark).map(([key, value]) => {
                    return <Card key={key} title={key} value={value} />;
                })}
            </BaseBox>
        </BaseBox>
    );
}

export default Colors;
