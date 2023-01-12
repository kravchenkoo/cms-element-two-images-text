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
            value: ''
        },
        imageText: {
            source: 'static',
            value: ''
        },
        imageLinkText: {
            source: 'static',
            value: ''
        },
        imageLink: {
            source: 'static',
            value: ''
        },
    }
});
