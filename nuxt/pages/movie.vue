<template>
  <NuxtLayout name="wrapper">
    <div
      class="flex flex-col items-center justify-center gap-8 my-auto [&>*]:md:w-[43.75rem]"
    >
      <div
        class="flex flex-col items-center w-full gap-5 text-center text-body-lg-600"
      >
        <h2 class="section-title">
          {{ getLocalizedString($i18n.locale, movie.title) }}
        </h2>
        <!-- <SanityContent
          :blocks="getLocalizedPortableText($i18n.locale, movie.text)"
          class=""
        /> -->
      </div>
      <iframe
        class="w-full rounded-lg aspect-video shadow-default"
        :src="`https://www.youtube-nocookie.com/embed/${
          movie.youtubeLink.split('/')[3].split('=')[1].split('?')[0]
        }`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div class="flex flex-col sm:flex-row gap-4 [&>*]:w-full w-full">
        <Button
          :name="getLocalizedString($i18n.locale, movie.listenText)"
          class="btn-light"
          :to="localePath('/album', $i18n.locale)"
        >
          <NuxtIcon name="feather/music" filled />
        </Button>
        <Button
          :to="localePath('/magazine', $i18n.locale)"
          :name="getLocalizedString($i18n.locale, movie.magazineText)"
          class="btn-dark-outline"
        >
          <NuxtIcon name="feather/image" filled />
        </Button>
      </div>
    </div>
  </NuxtLayout>
</template>
<script lang="ts" setup>
const localePath = useLocalePath()

const sanityStore = useSanityStore()
const movie = await sanityStore.getMoviePage()
</script>
