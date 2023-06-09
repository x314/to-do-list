<template>
  <div class="container mx-auto h-screen lg:grid lg:grid-cols-2 gap-4 p-4">
    <to-do-list />
    <hr class="my-10 lg:hidden">
    <marvel-section />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
