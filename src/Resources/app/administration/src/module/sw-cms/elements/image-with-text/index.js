import './component';
import './config';
import './preview';
Shopware.Service('cmsService').registerCmsElement({
    name: 'image-with-text',
    label: 'sw-cms.elements.element.label',
    component: 'sw-cms-el-image-with-text',
    configComponent: 'sw-cms-el-config-image-with-text',
    previewComponent: 'sw-cms-el-preview-image-with-text',
    defaultConfig: {
        imageHeader: {
            source: 'static',
            value: 'Header'
        },
        imageText: {
            source: 'static',
            value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, odit?'
        },
        imageLinkText: {
            source: 'static',
            value: 'Link Text'
        },
        imageLink: {
            source: 'static',
            value: 'Link'
        },
        media: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'media',
            },
        },
    }
});
