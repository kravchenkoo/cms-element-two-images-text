import template from './sw-cms-el-config-image-with-text.html.twig';

Shopware.Component.register('sw-cms-el-config-image-with-text', {
    template,

    mixins: [
        'cms-element'
    ],

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
        }
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
    }
});
