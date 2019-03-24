<template>
    <div>
        <div
            @click="nodeClicked"
            class="node"
            :style="{'margin-left': `${depth*10}px`}"
            >
            <v-layout wrap>
                    <span
                    v-if="hasChildren"
                        class="type py-1 pointer"
                        >
                            {{ expanded ? '&#9660;' : '&#9658;' }}
                    </span>
                    <span v-else class="py-1">&#9671;</span>
                    <div class="body-2 py-1 pointer">{{ items.name }}</div>

            </v-layout>
        </div>
        <div v-if="expanded">
            <TreeBrowser

                v-for="child in items.child"
                :key="child.name"
                :items="child"
                :depth="depth + 1"
                @onClick="(item) => $emit('onClick', item)"
            ></TreeBrowser>

        </div>
    </div>
</template>

<script>
export default {
    name: 'TreeBrowser',
    props:{
        items: Object,
        depth: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            expanded: false

        }
    },
    computed: {
        hasChildren() {
            if(this.items.child) {

                return this.items.child && this.items.child.length
            }
        }
    },
    methods:{
        nodeClicked() {
            this.expanded = !this.expanded;
            if(this.expanded) {

                this.$emit('onClick', this.items)
            }
            if(!this.hasChildren) {
            }
        }
    }
}
</script>

<style scoped>
.node{
    text-align: left;
}

</style>
