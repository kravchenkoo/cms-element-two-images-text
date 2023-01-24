import template from './sw-cms-el-config-image-with-text.html.twig';

Shopware.Component.register('sw-cms-el-config-image-with-text', {
    template,
    inject: ['repositoryFactory'],
    mixins: [
        'cms-element'
    ],

    data() {
        return {
            mediaModalIsOpen: false,
            initialFolderId: null,
        };
    },

    computed: {
        imageHeader: {
            get() {
                return this.element.config.imageHeader.value;
            },

            set(value) {
                this.element.config.imageHeader.value = value;
            }
        },
        imageText: {
            get() {
                return this.element.config.imageText.value;
            },

            set(value) {
                this.element.config.imageText.value = value;
            }
        },
        imageLinkText: {
            get() {
                return this.element.config.imageLinkText.value;
            },

            set(value) {
                this.element.config.imageLinkText.value = value;
            }
        },
        imageLink: {
            get() {
                return this.element.config.imageLink.value;
            },

            set(value) {
                this.element.config.imageLink.value = value;
            }
        },
        mediaRepository() {
            return this.repositoryFactory.create('media');
        },

        uploadTag() {
            return `cms-element-media-config-${this.element.id}`;
        },

        previewSource() {
            if (this.element.data && this.element.data.media && this.element.data.media.id) {
                return this.element.data.media;
            }

            return this.element.config.media.value;
        },
    },

    created() {
        this.createdComponent();
    },
    methods: {
        createdComponent() {
            this.initElementConfig('image-with-text');
        },
        onHeaderUpdate(value) {
            this.element.config.imageHeader.value = value;
            this.$emit('element-update', this.element);
        },
        onTextUpdate(value) {
            this.element.config.imageText.value = value;
            this.$emit('element-update', this.element);
        },
        onLinkTextUpdate(value) {
            this.element.config.imageLinkText.value = value;
            this.$emit('element-update', this.element);
        },
        onLinkUpdate(value) {
            this.element.config.imageLink.value = value;
            this.$emit('element-update', this.element);
        },
        async onImageUpload({ targetId }) {
            const mediaEntity = await this.mediaRepository.get(targetId);

            this.element.config.media.value = mediaEntity.id;
            this.element.config.media.source = 'static';

            this.updateElementData(mediaEntity);

            this.$emit('element-update', this.element);
        },

        onImageRemove() {
            this.element.config.media.value = null;

            this.updateElementData();

            this.$emit('element-update', this.element);
        },

        onCloseModal() {
            this.mediaModalIsOpen = false;
        },

        onSelectionChanges(mediaEntity) {
            const media = mediaEntity[0];
            this.element.config.media.value = media.id;
            this.element.config.media.source = 'static';

            this.updateElementData(media);

            this.$emit('element-update', this.element);
        },

        updateElementData(media = null) {
            const mediaId = media === null ? null : media.id;
            if (!this.element.data) {
                this.$set(this.element, 'data', { mediaId, media });
            } else {
                this.$set(this.element.data, 'mediaId', mediaId);
                this.$set(this.element.data, 'media', media);
            }
        },

        onOpenMediaModal() {
            this.mediaModalIsOpen = true;
        },
    }
});
// Shopware.Component.extend('sw-cms-el-config-image-with-text', 'sw-cms-el-config-image', {
//     template,
// });
