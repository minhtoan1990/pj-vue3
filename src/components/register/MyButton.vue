<template>
    <button :disabled="disabled" :style="{ color, background }">Button</button>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      color: {
        type: String,
        default: 'black', // Provide a default color
      },
      background: {
        type: String,
        default: 'none', // Provide a default background
      },
      disabled: {
        type: Boolean,
        default: false, // Provide a default disabled state
      },
    },
    setup(props) {
      return {
        // No need for additional properties in this case
      };
    },
  };
  </script>
  
  <style scoped>
  /* Same styles as before */
  button {
    background: none;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 10px 40px;
    font-size: 16px;
    cursor: pointer;
  }
  button:hover {
    filter: brightness(105%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  