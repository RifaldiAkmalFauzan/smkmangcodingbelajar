<template>
    <div>
        <section class="mb-20">
            <div class="container mx-auto w-fit">
                <TitleGalery1 title="News" />
                <p class="text-p3 text-content">Berikut ini merupakan berita berita yang ada di Smk Negeri 1
                    Cibadak</p>
                <NewsImg1 />
                <Button1 />
            </div>
        </section>
    </div>
</template>
<script>
import TitleGalery1 from './partials/titleGalery.vue';
import NewsImg1 from './partials/newsImg.vue';
import Button1 from './partials/button.vue';
export default {
    components: { TitleGalery1, NewsImg1, Button1 }
}
</script>
<style>

</style>