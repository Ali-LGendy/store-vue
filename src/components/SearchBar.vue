<template>
    <div class="mb-6">
      <input
        v-model="localSearch"
        type="text"
        placeholder="Search products..."
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
</template>
  
<script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const localSearch = ref(props.modelValue)
  
  watch(localSearch, (val) => {
    emit('update:modelValue', val)
  })
</script>