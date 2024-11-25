import { BaseBox, BaseTitle, EPropsBase, Icon, SimpleBox, SimpleButton, TPropsBase } from '@src/lib';
import { useState } from 'react';

const Item = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
    return (
        <BaseBox
            mr={'m-2'}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}
        >
            {icon}
            <p style={{ fontSize: '12px', marginTop: '6px' }}>{text}</p>
        </BaseBox>
    );
};

function Icons() {
    const [size, setSize] = useState<TPropsBase.VariantSize>(EPropsBase.VariantSize.L);
    const [colorVariant, setColorVariant] = useState<TPropsBase.VariantColor>(EPropsBase.VariantColor.DEFAULT);

    const sizeHandler = () => {
        if (size === EPropsBase.VariantSize.L) {
            setSize(EPropsBase.VariantSize.M);
        } else {
            setSize(EPropsBase.VariantSize.L);
        }
    };

    const colorVariantHandler = () => {
        if (colorVariant === EPropsBase.VariantColor.DEFAULT) {
            setColorVariant(EPropsBase.VariantColor.INFO);
        } else if (colorVariant === EPropsBase.VariantColor.INFO) {
            setColorVariant(EPropsBase.VariantColor.SUCCESS);
        } else if (colorVariant === EPropsBase.VariantColor.SUCCESS) {
            setColorVariant(EPropsBase.VariantColor.WARNING);
        } else if (colorVariant === EPropsBase.VariantColor.WARNING) {
            setColorVariant(EPropsBase.VariantColor.ERROR);
        } else if (colorVariant === EPropsBase.VariantColor.ERROR) {
            setColorVariant(EPropsBase.VariantColor.DEFAULT);
        }
    };
    return (
        <BaseBox boxPaddingVariant={'p-3'} boxGapVariant={'g-1'} style={{ paddingBottom: '300px' }}>
            <BaseTitle as={'h2'}>Icons</BaseTitle>
            <BaseTitle as={'h6'}>
                size: {size}; colorVariant: {colorVariant}
            </BaseTitle>
            <SimpleBox mr={'mb-3'} boxGapVariant={'g-2'} style={{ display: 'flex' }}>
                <SimpleButton onClick={sizeHandler}>Изменить Размер</SimpleButton>
                <SimpleButton onClick={colorVariantHandler}>Изменить цвет</SimpleButton>
            </SimpleBox>

            <BaseTitle as={'h5'}>General</BaseTitle>
            <BaseBox style={{ display: 'flex' }} boxGapVariant={'g-2'} mr={'mb-3'}>
                <Item icon={<Icon.Error colorVariant={colorVariant} sizeVariant={size} />} text={'Error'} />
                <Item icon={<Icon.Info colorVariant={colorVariant} sizeVariant={size} />} text={'Info'} />
                <Item icon={<Icon.Success colorVariant={colorVariant} sizeVariant={size} />} text={'Success'} />
                <Item icon={<Icon.Warning colorVariant={colorVariant} sizeVariant={size} />} text={'Warning'} />
                <Item icon={<Icon.CloseCircle colorVariant={colorVariant} sizeVariant={size} />} text={'CloseCircle'} />
                <Item icon={<Icon.BaseCheck colorVariant={colorVariant} sizeVariant={size} />} text={'BaseCheck'} />
                <Item icon={<Icon.AddCircle colorVariant={colorVariant} sizeVariant={size} />} text={'AddCircle'} />
                <Item icon={<Icon.Add colorVariant={colorVariant} sizeVariant={size} />} text={'Add'} />
                <Item icon={<Icon.Close colorVariant={colorVariant} sizeVariant={size} />} text={'Close'} />
                <Item icon={<Icon.More colorVariant={colorVariant} sizeVariant={size} />} text={'More'} />
                <Item icon={<Icon.Spam colorVariant={colorVariant} sizeVariant={size} />} text={'Spam'} />
                <Item
                    icon={<Icon.QuestionAnswer colorVariant={colorVariant} sizeVariant={size} />}
                    text={'QuestionAnswer'}
                />
                <Item
                    icon={<Icon.Notification colorVariant={colorVariant} sizeVariant={size} />}
                    text={'Notification'}
                />
                <Item icon={<Icon.Question colorVariant={colorVariant} sizeVariant={size} />} text={'Question'} />
            </BaseBox>
            <BaseTitle as={'h5'}>Search, Filter, Statistic</BaseTitle>
            <BaseBox style={{ display: 'flex' }} boxGapVariant={'g-2'} mr={'mb-3'}>
                <Item icon={<Icon.SearchAlt colorVariant={colorVariant} sizeVariant={size} />} text={'SearchAlt'} />
                <Item icon={<Icon.SearchEye colorVariant={colorVariant} sizeVariant={size} />} text={'SearchEye'} />
                <Item icon={<Icon.Search colorVariant={colorVariant} sizeVariant={size} />} text={'Search'} />
                <Item icon={<Icon.BarChart colorVariant={colorVariant} sizeVariant={size} />} text={'BarChart'} />
                <Item icon={<Icon.SortUp colorVariant={colorVariant} sizeVariant={size} />} text={'SortUp'} />
                <Item icon={<Icon.SortUpAlt colorVariant={colorVariant} sizeVariant={size} />} text={'SortUpAlt'} />
                <Item icon={<Icon.Filter colorVariant={colorVariant} sizeVariant={size} />} text={'Filter'} />
                <Item icon={<Icon.FindReplace colorVariant={colorVariant} sizeVariant={size} />} text={'FindReplace'} />
                <Item icon={<Icon.LineChart colorVariant={colorVariant} sizeVariant={size} />} text={'LineChart'} />
                <Item icon={<Icon.SortSlash colorVariant={colorVariant} sizeVariant={size} />} text={'SortSlash'} />
            </BaseBox>
            <BaseTitle as={'h5'}>Download, File, Folder, List </BaseTitle>
            <BaseBox style={{ display: 'flex' }} boxGapVariant={'g-2'} mr={'mb-3'}>
                <Item icon={<Icon.Attachment colorVariant={colorVariant} sizeVariant={size} />} text={'Attachment'} />
                <Item icon={<Icon.Download colorVariant={colorVariant} sizeVariant={size} />} text={'Download'} />
                <Item icon={<Icon.ListCheck colorVariant={colorVariant} sizeVariant={size} />} text={'ListCheck'} />
                <Item icon={<Icon.FileAdd colorVariant={colorVariant} sizeVariant={size} />} text={'FileAdd'} />
                <Item
                    icon={<Icon.FileDownload colorVariant={colorVariant} sizeVariant={size} />}
                    text={'FileDownload'}
                />
                <Item icon={<Icon.FileExcel colorVariant={colorVariant} sizeVariant={size} />} text={'FileExcel'} />
                <Item icon={<Icon.FileListAlt colorVariant={colorVariant} sizeVariant={size} />} text={'FileListAlt'} />
                <Item icon={<Icon.FileList colorVariant={colorVariant} sizeVariant={size} />} text={'FileList'} />
                <Item icon={<Icon.FolderAdd colorVariant={colorVariant} sizeVariant={size} />} text={'FolderAdd'} />

                <Item
                    icon={<Icon.FolderDelete colorVariant={colorVariant} sizeVariant={size} />}
                    text={'FolderDelete'}
                />
                <Item icon={<Icon.Inbox colorVariant={colorVariant} sizeVariant={size} />} text={'Inbox'} />
            </BaseBox>
            <BaseTitle as={'h5'}>Other</BaseTitle>
            <BaseBox style={{ display: 'flex' }} boxGapVariant={'g-2'} mr={'mb-3'}>
                <Item icon={<Icon.Settings colorVariant={colorVariant} sizeVariant={size} />} text={'Settings'} />
                <Item icon={<Icon.EyeClose colorVariant={colorVariant} sizeVariant={size} />} text={'EyeClose'} />
                <Item icon={<Icon.Eye colorVariant={colorVariant} sizeVariant={size} />} text={'Eye'} />
                <Item icon={<Icon.Email colorVariant={colorVariant} sizeVariant={size} />} text={'Email'} />
                <Item icon={<Icon.Award colorVariant={colorVariant} sizeVariant={size} />} text={'Award'} />
                <Item icon={<Icon.BankCard colorVariant={colorVariant} sizeVariant={size} />} text={'BankCard'} />
                <Item icon={<Icon.Book colorVariant={colorVariant} sizeVariant={size} />} text={'Book'} />
                <Item icon={<Icon.BookMark colorVariant={colorVariant} sizeVariant={size} />} text={'BookMark'} />
                <Item icon={<Icon.Briefcase colorVariant={colorVariant} sizeVariant={size} />} text={'Briefcase'} />
                <Item icon={<Icon.Building colorVariant={colorVariant} sizeVariant={size} />} text={'Building'} />
                <Item icon={<Icon.ChatSmall colorVariant={colorVariant} sizeVariant={size} />} text={'ChatSmall'} />
                <Item icon={<Icon.Global colorVariant={colorVariant} sizeVariant={size} />} text={'Global'} />
                <Item icon={<Icon.Group colorVariant={colorVariant} sizeVariant={size} />} text={'Group'} />
                <Item icon={<Icon.RangeGroup colorVariant={colorVariant} sizeVariant={size} />} text={'RangeGroup'} />
                <Item icon={<Icon.Image colorVariant={colorVariant} sizeVariant={size} />} text={'Image'} />
                <Item icon={<Icon.Chat colorVariant={colorVariant} sizeVariant={size} />} text={'Chat'} />
            </BaseBox>
            <BaseBox style={{ display: 'flex' }} boxGapVariant={'g-2'} mr={'mb-3'}>
                <Item icon={<Icon.Calendar colorVariant={colorVariant} sizeVariant={size} />} text={'Calendar'} />
                <Item
                    icon={<Icon.CustomerService colorVariant={colorVariant} sizeVariant={size} />}
                    text={'CustomerService'}
                />
                <Item
                    icon={<Icon.CheckboxMultipleBlank colorVariant={colorVariant} sizeVariant={size} />}
                    text={'CheckboxMultipleBlank'}
                />
                <Item icon={<Icon.Global colorVariant={colorVariant} sizeVariant={size} />} text={'Global'} />
                <Item icon={<Icon.Group colorVariant={colorVariant} sizeVariant={size} />} text={'Group'} />
                <Item icon={<Icon.RangeGroup colorVariant={colorVariant} sizeVariant={size} />} text={'RangeGroup'} />
                <Item icon={<Icon.Image colorVariant={colorVariant} sizeVariant={size} />} text={'Image'} />

                <Item icon={<Icon.Links colorVariant={colorVariant} sizeVariant={size} />} text={'Links'} />

                <Item icon={<Icon.Lock colorVariant={colorVariant} sizeVariant={size} />} text={'Lock'} />
                <Item icon={<Icon.LogoutBox colorVariant={colorVariant} sizeVariant={size} />} text={'LogoutBox'} />
                <Item icon={<Icon.Mail colorVariant={colorVariant} sizeVariant={size} />} text={'Mail'} />
                <Item
                    icon={<Icon.MenuFold fold colorVariant={colorVariant} sizeVariant={size} />}
                    text={'MenuFold FOLD'}
                />
                <Item
                    icon={<Icon.MenuFold fold={false} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'MenuFold UNFOLD'}
                />
                <Item icon={<Icon.MenuUnfold colorVariant={colorVariant} sizeVariant={size} />} text={'MenuUnfold'} />
                <Item icon={<Icon.Pen colorVariant={colorVariant} sizeVariant={size} />} text={'Pen'} />
            </BaseBox>

            <BaseBox style={{ display: 'flex' }} boxGapVariant={'g-2'} mr={'mb-3'}>
                <Item icon={<Icon.Phone colorVariant={colorVariant} sizeVariant={size} />} text={'Phone'} />

                <Item icon={<Icon.QuillPen colorVariant={colorVariant} sizeVariant={size} />} text={'QuillPen'} />
                <Item icon={<Icon.Refresh colorVariant={colorVariant} sizeVariant={size} />} text={'Refresh'} />
                <Item icon={<Icon.Rocket colorVariant={colorVariant} sizeVariant={size} />} text={'Rocket'} />

                <Item icon={<Icon.StopCircle colorVariant={colorVariant} sizeVariant={size} />} text={'StopCircle'} />
                <Item icon={<Icon.Team colorVariant={colorVariant} sizeVariant={size} />} text={'Team'} />
                <Item icon={<Icon.Tools colorVariant={colorVariant} sizeVariant={size} />} text={'Tools'} />
                <Item icon={<Icon.UserAdd colorVariant={colorVariant} sizeVariant={size} />} text={'UserAdd'} />
                <Item icon={<Icon.UserFollow colorVariant={colorVariant} sizeVariant={size} />} text={'UserFollow'} />
                <Item icon={<Icon.User colorVariant={colorVariant} sizeVariant={size} />} text={'User'} />
                <Item
                    icon={<Icon.UserReceived colorVariant={colorVariant} sizeVariant={size} />}
                    text={'UserReceived'}
                />
                <Item
                    icon={<Icon.UserSettings colorVariant={colorVariant} sizeVariant={size} />}
                    text={'UserSettings'}
                />
                <Item icon={<Icon.UserStar colorVariant={colorVariant} sizeVariant={size} />} text={'UserStar'} />
                <Item icon={<Icon.UserDelete colorVariant={colorVariant} sizeVariant={size} />} text={'UserDelete'} />
            </BaseBox>
            <BaseTitle as={'h5'}>Arrow Line</BaseTitle>
            <BaseBox style={{ display: 'flex' }} boxGapVariant={'g-2'} mr={'mb-3'}>
                <Item
                    icon={<Icon.ArrowLine position={'top'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'ArrowLine TOP'}
                />
                <Item
                    icon={<Icon.ArrowLine position={'left'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'ArrowLine LEFT'}
                />
                <Item
                    icon={<Icon.ArrowLine position={'right'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'ArrowLine RIGHT'}
                />
                <Item
                    icon={<Icon.ArrowLine position={'bottom'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'ArrowLine BOTTOM'}
                />
            </BaseBox>
            <BaseTitle as={'h5'}>Arrow</BaseTitle>
            <BaseBox style={{ display: 'flex' }} boxGapVariant={'g-2'} mr={'mb-3'}>
                <Item
                    icon={<Icon.Arrow position={'top'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'Arrow TOP'}
                />
                <Item
                    icon={<Icon.Arrow position={'left'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'Arrow LEFT'}
                />
                <Item
                    icon={<Icon.Arrow position={'right'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'Arrow RIGHT'}
                />
                <Item
                    icon={<Icon.Arrow position={'bottom'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'Arrow BOTTOM'}
                />
            </BaseBox>
            <BaseTitle as={'h5'}>Download Arrow</BaseTitle>
            <BaseBox style={{ display: 'flex' }} boxGapVariant={'g-2'} mr={'mb-3'}>
                <Item
                    icon={<Icon.DownloadArrow position={'top'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'DownloadArrow TOP'}
                />
                <Item
                    icon={<Icon.DownloadArrow position={'left'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'DownloadArrow LEFT'}
                />
                <Item
                    icon={<Icon.DownloadArrow position={'right'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'DownloadArrow RIGHT'}
                />
                <Item
                    icon={<Icon.DownloadArrow position={'bottom'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'DownloadArrow BOTTOM'}
                />
            </BaseBox>

            <BaseTitle as={'h5'}>Upload Arrow</BaseTitle>
            <BaseBox style={{ display: 'flex' }} boxGapVariant={'g-2'} mr={'mb-3'}>
                <Item
                    icon={<Icon.UploadArrow position={'top'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'UploadArrow TOP'}
                />
                <Item
                    icon={<Icon.UploadArrow position={'left'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'UploadArrow LEFT'}
                />
                <Item
                    icon={<Icon.UploadArrow position={'right'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'UploadArrow RIGHT'}
                />
                <Item
                    icon={<Icon.UploadArrow position={'bottom'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'UploadArrow BOTTOM'}
                />
            </BaseBox>

            <BaseTitle as={'h5'}>Send Arrow</BaseTitle>
            <BaseBox style={{ display: 'flex' }} boxGapVariant={'g-2'} mr={'mb-3'}>
                <Item
                    icon={<Icon.SendArrow position={'top'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'SendArrow TOP'}
                />
                <Item
                    icon={<Icon.SendArrow position={'left'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'SendArrow LEFT'}
                />
                <Item
                    icon={<Icon.SendArrow position={'right'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'SendArrow RIGHT'}
                />
                <Item
                    icon={<Icon.SendArrow position={'bottom'} colorVariant={colorVariant} sizeVariant={size} />}
                    text={'SendArrow BOTTOM'}
                />
            </BaseBox>
        </BaseBox>
    );
}

export default Icons;
