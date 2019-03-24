export const titleBlockMixin = {
    data() {
        return {

            title: '',
            slug: '',
            highlights: [],
            highlightFild: '',
            descriptions: [],
            heading: '',
            description: '',
            activator: null,
            attach: null,
            //colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
            editing: null,
            index: -1,
            items: [
                /* { header: 'Select an option or create one' },
                {
                text: 'Foo',
                //color: 'blue'
                },
                {
                text: 'Bar',
               // color: 'red'
                } */
            ],
            nonce: 1,
            menu: false,
            keywords: [],
            keywordText: '',
            x: 0,
            search: null,
            y: 0,
            getInfoToParent: false,
        }
    },

    watch: {
        /* keywords(val, prev) {
            if (this.keywords.length > 7) {
                return;
            } else {

                if (val.length === prev.length) return

                this.keywords = val.map(v => {
                    if (typeof v === 'string') {
                        v = {
                            text: v,
                            // color: this.colors[this.nonce - 1]
                        }

                        this.items.push(v)

                        // this.nonce++
                    }

                    return v
                })
            }
        }, */
        getInfoToParent: function () {

            console.log(
                this.title,
                this.slug,
                this.highlights,
                this.descriptions
            )
        },
        title: function () {
            console.log(this.title)
            this.$emit('title', this.title)
        },
        slug: function () {
            this.$emit('slug', this.slug)
        },
        highlights: function () {
            this.$emit('highlights', this.highlights);
            return;
        },
        descriptions: function () {
            this.$emit('descriptions', this.descriptions)
        },
        keywords: function () {
            this.$emit('keywords', this.keywords)
        },

    },

    methods: {
        edit(index, item) {
            if (!this.editing) {
                this.editing = item
                this.index = index
            } else {
                this.editing = null
                this.index = -1
            }
        },
        filter(item, queryText, itemText) {
            if (item.header) return false

            const hasValue = val => val != null ? val : ''

            const text = hasValue(itemText)
            const query = hasValue(queryText)

            return text.toString()
                .toLowerCase()
                .indexOf(query.toString().toLowerCase()) > -1
        },
        pushHighlight() {
            if (this.highlightFild !== '') {
                this.highlights.push(this.highlightFild)

                this.highlightFild = '';
            } else {
                alert('highlight field can\'t be left empty ')
            }
            //console.log(this.highlightFild);
        },
        deleteHighlight(index) {
            const a = confirm('Are You Sure You Want To Delete!!');
            if (a) {
                this.highlights.splice(index, 1);
            }
            return;
        },
        pushDescription() {

            if (this.heading == '' || this.description == '') {
                alert('Descriptions Field Can Not Be Empty');
                return;
            } else {

                this.descriptions.push({
                    heading: this.heading,
                    description: this.description
                })

                this.heading = '';
                this.description = '';
            }
            return;
        },
        deleteDescription(index) {

            const a = confirm('Are You Sure You Want To Delete!!');
            if (a) {
                this.descriptions.splice(index, 1);
            }
            return;
        },
        makeSlug() {
            let text = this.title
            this.slug = this.slugify(text)

            //console.log(slugifyTitle)
        },
        slugify(text) {
            return text.toString().toLowerCase()
                .replace(/\s+/g, '-') //replace spaces with '-'
                .replace(/[^\w\-]+/g, '') // remove all non-words chars
                .replace(/\-\+/g, '-') //replace multiple '-' with single '-'
                .replace(/^-+/, '') //trim '-' from start of text
                .replace(/-+$/, ''); //trim '-' from end of text

        },
        pushKeyword() {
            if (this.keywords.length <= 6) {

                if (this.keywordText !== '') {
                    this.keywords.push(this.keywordText)

                    this.keywordText = '';
                } else {
                    alert('keyword field can\'t be left empty ')
                }
                console.log(this.keywordText);
            } else {
                this.keywordBtn = false;
            }
        },
        deleteKeyword(index) {
            const a = confirm('Are You Sure You Want To Delete!!');
            if (a) {
                this.keywords.splice(index, 1);
            }
            return;
        },

    }
};
