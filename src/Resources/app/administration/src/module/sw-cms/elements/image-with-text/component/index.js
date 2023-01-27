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
    watch: {
        cmsPageState: {
            deep: true,
            handler() {
                this.$forceUpdate();
            },
        },

        mediaConfigValue(value) {
            const mediaId = this.element?.data?.media?.id;
            const isSourceStatic = this.element?.config?.media?.source === 'static';

            if (isSourceStatic && mediaId && value !== mediaId) {
                this.element.config.media.value = mediaId;
            }
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('image-with-text');
            this.initElementData('image-with-text');
        },

        onHeaderBlur(content) {
            this.emitHeaderChanges(content);
        },
        onHeaderInput(content) {
            this.emitHeaderChanges(content);
        },
        emitHeaderChanges(content) {
            if (content !== this.element.config.imageHeader.value) {
                this.element.config.imageHeader.value = content;
                this.$emit('element-update', this.element);
            }
        },

        onTextBlur(content) {
            this.emitTextChanges(content);
        },
        onTextInput(content) {
            this.emitTextChanges(content);
        },
        emitTextChanges(content) {
            if (content !== this.element.config.imageText.value) {
                this.element.config.imageText.value = content;
                this.$emit('element-update', this.element);
            }
        },

        onLinkBlur(content) {
            this.emitLinkChanges(content);
        },
        onLinkInput(content) {
            this.emitLinkChanges(content);
        },
        emitLinkChanges(content) {
            if (content !== this.element.config.imageLinkText.value) {
                this.element.config.imageLinkText.value = content;
                this.$emit('element-update', this.element);
            }
        },
    }
});
