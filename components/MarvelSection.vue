<template>
  <div class="h-full">
    <h2 class="title">API MARVEL</h2>

    <div class="grid grid-cols-4 gap-4">
      <div v-for="(character, i) in characters" :key="i">
        <div>
          <img :src="`${character.thumbnail.path}/landscape_small.${character.thumbnail.extension}`" :alt=character.name>
        </div>
        <h5>{{ character.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarvelSection',
  data() {
    return {
      characters: [],
    }
  },
  async mounted() {
    await this.getApi()
  },
  methods: {
    async getApi() {
      try {
        const { data } = await this.$axios.$get(
          "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=90f1042c60cbccb6e12b767a12c3a330&hash=00a29432420dac60ad9aa1ab5b06cb74"
        );

        this.characters = data.results
      } catch (error) {
        console.log('error', error)
      }
    }
  }
}
</script>

<style>
</style>
