<template>
  <form
    @submit.prevent="hanlderRegisger"
    class="form-register"
  >
    <div
      class="register-item"
      :class="errors.firstName ? 'form-error': ''"
    >
      <label for="firstName">First Name:</label>
      <input
        v-model="firstName"
        type="firstName"
        id="firstName"
        @change="changeInput"
      />
      <p v-if="errors.firstName">{{ errors.firstName }}</p>
    </div>

    <!-- Last Name -->
    <div
      class="register-item"
      :class="errors.lastName ? 'form-error': ''"
    >
      <label for="lastName">Last Name:</label>
      <input
        v-model="lastName"
        type="lastName"
        id="lastName"
      />
      <p v-if="errors.lastName">{{ errors.lastName }}</p>
    </div>

    <!-- Phone -->
    <div
      class="register-item"
      :class="errors.phoneNumber ? 'form-error': ''"
    >
      <label for="phoneNumber">Phone:</label>
      <input
        v-model="phoneNumber"
        type="phoneNumber"
        id="phoneNumber"
      />
      <p v-if="errors.phoneNumber">{{ errors.phoneNumber }}</p>
    </div>
    <!-- User Name -->
    <div
      class="register-item"
      :class="errors.username ? 'form-error': ''"
    >
      <label for="userName">Username:</label>
      <input
        v-model="userName"
        type="userName"
        id="userName"
      />
      <p v-if="errors.username">{{ errors.username }}</p>
    </div>

    <!-- Password -->
    <div
      class="register-item"
      :class="errors.password ? 'form-error': ''"
    >
      <label for="password">Password:</label>
      <input
        v-model="passWord"
        type="password"
        id="password"
      />
      <p v-if="errors.password">{{ errors.password }}</p>
    </div>
    <!-- Email -->
    <div
      class="register-item"
      :class="errors.email ? 'form-error': ''"
    >
      <label for="Email">Email:</label>
      <input
        v-model="Email"
        type="Email"
        id="Email"
      />
      <p v-if="errors.email">{{ errors.email }}</p>
    </div>
    <my-button
      color="white"
      label="Valid"
      background="darkseagreen"
      :disabled="!isValid"
    />
    <div
      class="list-error"
      v-if="errorRegister.length > 0"
    >
      <p
        v-for="er in errorRegister"
        :key="er"
      >{{ er.field }}: {{er.msg}}</p>
    </div>
  </form>

</template>

<script>
import { ref, reactive, computed } from "vue";
import MyButton from "./MyButton.vue"; // Assuming MyButton is in the same directory
import BaseInput from "./BaseInput.vue"; // Assuming BaseInput is in the same directory

import { useStore } from "vuex";

export default {
  setup() {
    const Email = ref("");
    const firstName = ref("");
    const lastName = ref("");
    const is_active = ref(true);
    const passWord = ref("");
    const phoneNumber = ref("");
    const role = ref("user");
    const userName = ref("");

    const store = useStore();
    const errorRegister = computed(() => store.getters.userError);
    const isValid = true;

    const errors = reactive({
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    });

    const validateForm = () => {
      errors.username = "";
      errors.email = "";
      errors.password = "";
      errors.firstName = "";
      errors.lastName = "";
      errors.phoneNumber = "";
      let flag = 0;

      if (!userName.value) {
        errors.username = "User Name is required";
        flag++;
      }
      if (!firstName.value) {
        errors.firstName = "First Name is required";
        flag++;
      }
      if (!lastName.value) {
        errors.lastName = "Last Name is required";
        flag++;
      }
      if (!phoneNumber.value) {
        errors.phoneNumber = "Phone is required";
        flag++;
      } else if (!/^0\d{9,10}$/.test(phoneNumber.value)) {
        errors.phoneNumber =
          "Phone is start with 0 and must have 10 or 11 or digits.";
        flag++;
      }

      if (!Email.value) {
        errors.email = "Email is required";
        flag++;
      } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          Email.value
        )
      ) {
        errors.email = "Email must be valid";
        flag++;
      }

      if (!passWord.value) {
        errors.password = "Password is required";
        flag++;
      } else if (passWord.value.length < 6) {
        errors.password = "Password must be at least 6 characters";
        flag++;
      }

      if (flag > 0) {
        return false;
      } else {
        return true;
      }
    };

    const changeInput = () => {
      console.log(11);
    };

    const hanlderRegisger = () => {
      // Handle form submission logic here (e.g., API call, validation)
      const user = store.getters.profileUser;
      if (user && user.role) {
        role.value = user.role;
      }

      if (validateForm()) {
        store.dispatch("register", {
          first_name: firstName.value,
          last_name: lastName.value,
          phone_number: phoneNumber.value,
          email: Email.value,
          is_active: is_active.value,
          role: role.value,
          username: userName.value,
          password: passWord.value,
        });
      }
    };

    return {
      firstName,
      lastName,
      phoneNumber,
      userName,
      passWord,
      Email,
      hanlderRegisger,
      errorRegister,
      isValid,
      errors,
      changeInput,
    };
  },
  components: {
    MyButton,
    BaseInput,
  },
};
</script>

<style lang="scss">
.form-register {
  max-width: 305px;
  margin: 10px auto;
  .wrapper {
    margin-bottom: 10px;
  }
  .register-item {
    margin-bottom: 10px;
  }

  label {
    position: relative;
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    height: 32px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    margin-right: 10px;
    min-width: 100px;
  }

  input {
    box-sizing: border-box;
    margin: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    background-color: #ffffff;
    background-image: none;
    border-width: 1px;
    border-style: solid;
    border-color: #d9d9d9;
    border-radius: 4px;
    transition: all 0.2s;
  }

  button {
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
    outline: none;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    line-height: 1.5714285714285714;
    color: #fff;
    background-color: #4096ff;
  }
  .list-error {
    p {
      color: red;
    }
  }

  .form-error {
    p {
      color: red;
      font-size: 12px;
      margin-top: 5px;
      text-align: right;
    }
    input {
      border: 1px solid red;
    }
  }
}
</style>
