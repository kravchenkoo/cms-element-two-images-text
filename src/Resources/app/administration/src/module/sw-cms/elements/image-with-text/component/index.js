import template from './sw-cms-el-image-with-text.html.twig';
import './sw-cms-el-image-with-text.scss';

Shopware.Component.register('sw-cms-el-image-with-text', {
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
        }
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
