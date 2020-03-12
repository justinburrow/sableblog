<template>
    <div class="header">
        <div class="header__content container-full">
            <div class="logo">
                <img src="~@/assets/images/sable-logo.svg" width="370" alt="S'able Labs" />
            </div>
            <div class="navigation">
                <TopCategories />
            </div>
        </div>
    </div>
</template>

<script>
import TopCategories from '~/components/TopCategories.vue'

export default {
    name: 'Header',
    components: {
        TopCategories
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
    .header {
        width: 100%;
        &::before {
            display: block;
            content: ' ';
            height: 30px;
            background: black;
            width: 100%;
            margin-bottom: 30px;
        }
        &__content {
            background: white;
            padding: 20px 0;
            .logo {
                text-align: center;
            }
        }
    }
</style>