import template from './sw-cms-el-image-with-text.html.twig';
import './sw-cms-el-image-with-text.scss';
const { Component, Filter } = Shopware;

Component.register('sw-cms-el-image-with-text', {
    template,
    mixins: [
        'cms-element'
    ],

    computed: {
        imageHeader() {
            return this.element.config.imageHeader.value;
        },
        imageText() {
            return this.element.config.imageText.value;
        },
        imageLinkText() {
            return this.element.config.imageLinkText.value;
        },
        imageLink() {
            return this.element.config.imageLink.value;
        },
        mediaUrl() {
            const fallBackImageFileName = 'preview_mountain_small.jpg';
            const staticFallBackImage = this.assetFilter(`administration/static/img/cms/${fallBackImageFileName}`);
            const elemData = this.element.data.media;
            const elemConfig = this.element.config.media;

            if (elemConfig.source === 'mapped') {
                const demoMedia = this.getDemoValue(elemConfig.value);

                if (demoMedia?.url) {
                    return demoMedia.url;
                }

                return staticFallBackImage;
            }

            if (elemConfig.source === 'default') {
                // use only the filename
                const fileName = elemConfig.value.slice(elemConfig.value.lastIndexOf('/') + 1);
                return this.assetFilter(`/administration/static/img/cms/${fileName}`);
            }

            if (elemData?.id) {
                return this.element.data.media.url;
            }

            if (elemData?.url) {
                return this.assetFilter(elemConfig.url);
            }

            return staticFallBackImage;
        },

        assetFilter() {
            return Filter.getByName('asset');
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('image-with-text');
        }
    }
});
