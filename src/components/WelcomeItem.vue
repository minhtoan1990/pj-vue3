<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
  <form>
    <base-input
      v-model:value="name"
      id="aksjdfhajksdfhjk"
      type="text"
      name="User Name:"
      @update="handleUpdate"
    />
    <BaseInputNew
      v-model="username"
      :value="username"
      label="Username"
      placeholder="Enter your username"
      @update="handleUpdate(username)"
    />
    <p>{{ username }}</p>
    <button @click.prevent="submit">dmcs</button>
  </form>

</template>
<script>
import { ref, computed } from "vue";
import BaseInput from "./register/BaseInput.vue"; // Assuming BaseInput is in the same directory
import BaseInputNew from "./register/BaseInput_new.vue";

export default {
  components: {
    BaseInput,
    BaseInputNew,
  },
  setup() {
    const name = ref("");
    const username = ref("");

    const handleUpdate = (data) => {
      console.log(data);
    };

    const inputElement = computed(() => {
      return this.$refs.myInput; // Access the element using $refs
    });

    const updateInput = () => {
      if (inputElement.value) {
        // Access the element's properties or methods here
        console.log(inputElement.value.value); // Get the current input value
      }
    };

    return {
      handleUpdate,
      name,
      username,
    };
  },
};
</script>
<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
