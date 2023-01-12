import './component';
import './preview';
Shopware.Service('cmsService').registerCmsBlock({
    name: 'two-images-text',
    category: 'text-image',
    label: 'sw-cms.elements.block.label',
    component: 'sw-cms-block-two-images-text',
    previewComponent: 'sw-cms-preview-two-images-text',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        left: 'image-with-text',
        right: 'image-with-text'
    }
});
