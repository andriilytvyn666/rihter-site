<template>
  <header class="flex items-center justify-between" id="header">
    <nav class="hidden gap-4" id="left">
      <NuxtLink
        :to="getLink(header.navLinks[0].link)"
        class="hover:-translate-y-1"
      >
        {{ getLocalizedString($i18n.locale, header.navLinks[0].name) }}
      </NuxtLink>
      <span class="separator">/</span>
      <NuxtLink
        :to="getLink(header.navLinks[1].link)"
        class="hover:-translate-y-1"
      >
        {{ getLocalizedString($i18n.locale, header.navLinks[1].name) }}
      </NuxtLink>
    </nav>
    <NuxtLink :to="localePath('/', $i18n.locale)" aria-label="Homepage">
      <SanityImage
        rel="preload"
        :asset-id="header.logo.asset._ref"
        width="96"
        height="96"
        id="logo"
        class="rounded-full w-9 h-9"
        alt="logo"
      />
    </NuxtLink>
    <button
      id="right-mobile"
      @click="$i18n.setLocale('uk')"
      v-if="$i18n.locale === 'en'"
    >
      укр
    </button>
    <button id="right-mobile" @click="$i18n.setLocale('en')" v-else>eng</button>
    <nav class="hidden gap-4" id="right">
      <button
        @click="$i18n.setLocale('uk')"
        v-if="$i18n.locale === 'en'"
        class="hover:-translate-y-1"
      >
        укр
      </button>
      <button
        @click="$i18n.setLocale('en')"
        v-else
        class="hover:-translate-y-1"
      >
        eng
      </button>
      <span class="separator">/</span>
      <NuxtLink
        target="_blank"
        :to="header.listenLink"
        class="hover:-translate-y-1"
        >{{ $t('header.listen') }}</NuxtLink
      >
      <span class="separator">/</span>
      <NuxtLink
        target="_blank"
        :to="header.socialsLink"
        class="hover:-translate-y-1"
        >{{ $t('header.socials') }}</NuxtLink
      >
    </nav>
  </header>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
const localePath = useLocalePath()

const sanityStore = useSanityStore()
const header = await sanityStore.getHeader()

const getLink = (link: string) => {
  if (link.startsWith('https://')) {
    return link
  } else return localePath(link, locale.value)
}
</script>

<style lang="postcss">
.separator {
  @apply text-dark-secondary;
}

#right-mobile {
  @apply text-body-md-500;
}

#header {
  @apply px-2 py-6;
  @apply text-body-md-600 mb-8 sm:mb-12;
}

@screen md {
  #logo {
    @apply w-12 h-12;
  }

  #header {
    @apply px-0 py-5;
  }

  #left,
  #right {
    @apply flex;
  }

  #right-mobile {
    @apply hidden;
  }
}
</style>
