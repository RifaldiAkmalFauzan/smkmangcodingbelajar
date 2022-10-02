<template>
    <Hero1 />
    <Partner1 />
    <Video1 />
    <Principal1 />
    <News1 />
    <Quote1 />
    <Galery1 />
</template>
<script>
import Video1 from '~~/components/content/video.vue';
import Principal1 from '~~/components/content/principal.vue';
import Quote1 from '~~/components/quote.vue';
import Partner1 from '../components/content/partner.vue';
import News1 from '~~/components/content/news.vue';
import Galery1 from '../components/content/galery.vue';
import Hero1 from '~~/components/content/hero.vue';


export default {
    components: { Video1, Principal1, Quote1, Partner1, News1, Galery1, Hero1 }
}

</script>
   
<style>

</style>