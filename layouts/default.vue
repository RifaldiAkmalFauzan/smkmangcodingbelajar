<template>
    <Header1 />
    <main class="min-h-screen">
        <slot></slot>
    </main>
    <Footer1 />
</template>

<script>
import Header1 from '~~/components/content/header.vue';
import Footer1 from '~~/components/content/footer.vue';

export default {
    components: { Header1, Footer1 }
}
</script>