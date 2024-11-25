import {
    AdaptiveScrollArea,
    BaseButton,
    BasePopup,
    BaseScrollArea,
    BaseSelectContent,
    BaseSelectGroup,
    BaseSelectItem,
    Icon,
    SimpleBox,
    SimpleButton,
    SimplePopup,
    SimpleTextField,
    SubmitButton,
} from '@src/lib';
import React from 'react';

function Select() {
    return (
        <div style={{ paddingBottom: '300px' }}>
            <h2>BASE SELECT</h2>
            <h4>BASE SELECT L COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSelectContent blocked mr={'m-3'} placeholder={'Default select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent colorVariant={'info'} mr={'m-3'} placeholder={'Info select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent colorVariant={'success'} mr={'m-3'} placeholder={'Successs select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent colorVariant={'warning'} mr={'m-3'} placeholder={'Warning select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent colorVariant={'error'} mr={'m-3'} placeholder={'Error select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
            </div>
            <h4>BASE SELECT M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSelectContent sizeVariant={'M'} mr={'m-3'} placeholder={'Default select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent sizeVariant={'M'} colorVariant={'info'} mr={'m-3'} placeholder={'Info select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent
                    sizeVariant={'M'}
                    colorVariant={'success'}
                    mr={'m-3'}
                    placeholder={'Successs select'}
                >
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent sizeVariant={'M'} colorVariant={'warning'} mr={'m-3'} placeholder={'Warning select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent sizeVariant={'M'} colorVariant={'error'} mr={'m-3'} placeholder={'Error select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
            </div>
            <h4>BASE SCROLL M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSelectContent mr={'m-3'} width={'200px'} placeholder={'Default select'}>
                    <BaseSelectGroup title={'Group 1'}>
                        <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 2'}>
                        <BaseSelectItem value={'6'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'7'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'8'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'9'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'10'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 3'}>
                        <BaseSelectItem value={'11'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'12'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'13'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'14'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'15'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                </BaseSelectContent>
                <BaseSelectContent colorVariant={'success'} mr={'m-3'} width={'200px'} placeholder={'Success select'}>
                    <BaseSelectGroup title={'Group 1'}>
                        <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 2'}>
                        <BaseSelectItem value={'6'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'7'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'8'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'9'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'10'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 3'}>
                        <BaseSelectItem value={'11'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'12'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'13'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'14'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'15'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                </BaseSelectContent>
                <BaseSelectContent
                    positionTrigger={'left'}
                    colorVariant={'warning'}
                    mr={'m-3'}
                    width={'200px'}
                    placeholder={'Warning select'}
                >
                    <BaseSelectGroup title={'Group 1'}>
                        <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                        <BaseSelectItem disabled value={'3'}>
                            Item 3
                        </BaseSelectItem>
                        <BaseSelectItem disabled value={'4'}>
                            Item 4
                        </BaseSelectItem>
                        <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 2'}>
                        <BaseSelectItem value={'6'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'7'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'8'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'9'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'10'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 3'}>
                        <BaseSelectItem value={'11'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'12'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'13'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'14'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'15'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                </BaseSelectContent>
                <BaseSelectContent
                    positionTrigger={'right'}
                    colorVariant={'warning'}
                    mr={'m-3'}
                    width={'200px'}
                    placeholder={'Warning select'}
                >
                    <BaseSelectGroup title={'Group 1'}>
                        <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                        <BaseSelectItem disabled value={'3'}>
                            Item 3
                        </BaseSelectItem>
                        <BaseSelectItem disabled value={'4'}>
                            Item 4
                        </BaseSelectItem>
                        <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 2'}>
                        <BaseSelectItem value={'6'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'7'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'8'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'9'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'10'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 3'}>
                        <BaseSelectItem value={'11'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'12'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'13'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'14'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'15'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                </BaseSelectContent>
                <BaseSelectContent width={'150px'} colorVariant={'error'} mr={'m-3'} placeholder={'Error long select'}>
                    <BaseSelectItem value={'1'}>Item 1 long long long</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2 long long long</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3 long long long</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4 long long long</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5 long long long</BaseSelectItem>
                </BaseSelectContent>
            </div>
            <h4>BASE SCROLL M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSelectContent
                    mr={'m-3'}
                    positionTrigger={'left'}
                    onValueChange={(e) => console.log(e)}
                    width={'200px'}
                    placeholder={'Default select'}
                >
                    <BaseSelectGroup title={'Group 1'}>
                        <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 2'}>
                        <BaseSelectItem value={'6'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'7'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'8'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'9'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'10'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 3'}>
                        <BaseSelectItem value={'11'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'12'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'13'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'14'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'15'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                </BaseSelectContent>
            </div>

            <h2>BASE POPUP L COLORS</h2>
            <div style={{ display: 'flex' }}>
                <BasePopup trigger={<BaseButton>Base</BaseButton>}>gherhgureukhgiueriughrehghreuighrg</BasePopup>
                <SimplePopup
                    // color={'#830088'}
                    icon={<Icon.Settings />}
                    title={'Title Simple Popup '}
                    boxShadowVariant={'shd-3'}
                    trigger={<SimpleButton>Simple Popup</SimpleButton>}
                >
                    bgbgfbfgb bgbgfbgfbg jtrjkhrtjhkrtj hrth rthrth Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Iusto nemo earum commodi nostrum odit harum aliquam quasi assumenda! Reiciendis minima
                    consequuntur omnis quo? Eius vero in nemo, ratione esse unde? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Iusto nemo earum commodi nostrum odit harum aliquam quasi assumenda! Reiciendis
                    minima consequuntur omnis quo? Eius vero in nemo, ratione esse unde? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Iusto nemo earum commodi nostrum odit harum aliquam quasi assumenda!
                    Reiciendis minima consequuntur omnis quo? Eius vero in nemo, ratione esse unde? Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Iusto nemo earum commodi nostrum odit harum aliquam quasi
                    assumenda! Reiciendis minima consequuntur omnis quo? Eius vero in nemo, ratione esse unde? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Iusto nemo earum commodi nostrum odit harum
                    aliquam quasi assumenda! Reiciendis minima consequuntur omnis quo? Eius vero in nemo, ratione esse
                    unde?
                </SimplePopup>
                <SimplePopup
                    // color={'#830088'}
                    width={'150px'}
                    height={'500px'}
                    maxHeight={'400px'}
                    icon={<Icon.Settings />}
                    title={'Title Simple Popup Test longtitle'}
                    mr={'m-3'}
                    trigger={<SimpleButton>Simple Popup</SimpleButton>}
                >
                    bgbgfbfgb bgbgfbgfbg jtrjkhrtjhkrtj hrth Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Placeat quae ipsam laboriosam alias eligendi consequatur perspiciatis et nostrum est? Tempore sint
                    neque minima molestias repellendus aperiam enim hic suscipit laborum. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Placeat quae ipsam laboriosam alias eligendi consequatur perspiciatis
                    et nostrum est? Tempore sint neque minima molestias repellendus aperiam enim hic suscipit laborum.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quae ipsam laboriosam alias
                    eligendi consequatur perspiciatis et nostrum est? Tempore sint neque minima molestias repellendus
                    aperiam enim hic suscipit laborum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
                    quae ipsam laboriosam alias eligendi consequatur perspiciatis et nostrum est? Tempore sint neque
                    minima molestias repellendus aperiam enim hic suscipit laborum.
                </SimplePopup>

                <SimplePopup
                    // color={'#830088'}
                    // width={'150px'}
                    // height={'500px'}
                    maxHeight={'400px'}
                    boxShadowVariant={'shd-3'}
                    icon={<Icon.Settings />}
                    title={'Title Simple Popup Test longtitle'}
                    mr={'m-3'}
                    trigger={<SimpleButton>Simple Popup</SimpleButton>}
                >
                    bgbgfbfgb bgbgfbgfbg
                </SimplePopup>

                <SimplePopup
                    // color={'#830088'}
                    // width={'150px'}
                    // height={'500px'}
                    maxHeight={'200px'}
                    boxGapVariant={'g-2'}
                    icon={<Icon.Settings />}
                    title={'Title Simple'}
                    mr={'m-3'}
                    trigger={<SimpleButton>Simple Popup</SimpleButton>}
                >
                    <input type="text" name="name" placeholder="Name" />
                    <BaseSelectContent
                        boxShadowVariant={'shd-3'}
                        name={'BaseSelectContent'}
                        positionTrigger={'left'}
                        onValueChange={(e) => console.log(e)}
                        width={'100%'}
                        placeholder={'Default select'}
                    >
                        <BaseSelectGroup title={'Group 1'}>
                            <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                            <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                            <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                            <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                            <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                        </BaseSelectGroup>
                        <BaseSelectGroup title={'Group 2'}>
                            <BaseSelectItem value={'6'}>Item 1</BaseSelectItem>
                            <BaseSelectItem value={'7'}>Item 2</BaseSelectItem>
                            <BaseSelectItem value={'8'}>Item 3</BaseSelectItem>
                            <BaseSelectItem value={'9'}>Item 4</BaseSelectItem>
                            <BaseSelectItem value={'10'}>Item 5</BaseSelectItem>
                        </BaseSelectGroup>
                        <BaseSelectGroup title={'Group 3'}>
                            <BaseSelectItem value={'11'}>Item 1</BaseSelectItem>
                            <BaseSelectItem value={'12'}>Item 2</BaseSelectItem>
                            <BaseSelectItem value={'13'}>Item 3</BaseSelectItem>
                            <BaseSelectItem value={'14'}>Item 4</BaseSelectItem>
                            <BaseSelectItem value={'15'}>Item 5</BaseSelectItem>
                        </BaseSelectGroup>
                    </BaseSelectContent>
                    <SimpleTextField name={'SimpleTextField'} placeholder={'test input'} />
                    <SimpleTextField placeholder={'test input'} />
                    <SimpleTextField placeholder={'test input'} />
                    <SimpleTextField placeholder={'test input'} />
                    <SimpleButton type={'submit'}>Submit</SimpleButton>
                </SimplePopup>
            </div>

            <div>
                <AdaptiveScrollArea
                    size={{
                        width: '200px',
                        height: '200px',
                    }}
                    style={{ marginRight: '10px' }}
                >
                    {/* <div style={{textWrap: 'nowrap'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam molestiae eaque aut tempore aliquam libero id esse quia non, suscipit repellat repellendus sit nam praesentium porro ducimus rem. Repudiandae.</div> */}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                    laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum
                    atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa,
                    natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
                    earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
                    molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                    repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                    vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                    laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum
                    atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa,
                    natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
                    earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
                    molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                    repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                    vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                    laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum
                    atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa,
                    natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
                    earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
                    molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                    repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                    vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                    laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum
                    atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa,
                    natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
                    earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
                    molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                    repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                    vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus.
                </AdaptiveScrollArea>

                <BaseScrollArea
                    orientation={'horizontal'}
                    width={'200px'}
                    height={'200px'}
                    type={'always'}
                    scrollHideDelay={20000}
                    mr={'mt-10'}
                    dir={'rtl'}
                >
                    <div style={{ textWrap: 'nowrap' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam molestiae eaque aut
                        tempore aliquam libero id esse quia non, suscipit repellat repellendus sit nam praesentium porro
                        ducimus rem. Repudiandae.
                    </div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                    laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum
                    atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa,
                    natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
                    earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
                    molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                    repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                    vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                    laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum
                    atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa,
                    natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
                    earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
                    molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                    repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                    vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                    laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum
                    atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa,
                    natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
                    earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
                    molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                    repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                    vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                    laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum
                    atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa,
                    natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
                    earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
                    molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                    repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                    vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus.
                </BaseScrollArea>
            </div>
            <div>
                <BasePopup
                    // mr={'m-3'}
                    trigger={<SimpleButton mr={'m-6'}>Popup</SimpleButton>}
                    // triggerProps={{
                    //     asChild: true,
                    // }}
                >
                    <SimpleBox
                        boxGapVariant={'g-2'}
                        boxPaddingVariant={'p-2'}
                        boxShadowVariant={'shd-3'}
                        boxRadiusVariant={'br-1'}
                    >
                        <SimpleTextField placeholder={'Placeholder'} />
                        <SimpleTextField placeholder={'Placeholder'} />
                        <SubmitButton icon={<Icon.Settings />} isLoading={false}>
                            Submit
                        </SubmitButton>
                    </SimpleBox>
                </BasePopup>
            </div>
        </div>
    );
}

export default Select;
