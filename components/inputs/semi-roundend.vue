<template>
  
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: [
        {
          value: {
            type: String,
            required: true,
          },
          label: {
            type: String,
            required: true,
          },
        },
      ],
    },
  },
}
</script>
