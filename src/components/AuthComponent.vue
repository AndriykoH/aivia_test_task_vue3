<template>
  <div>
    <v-row no-gutters justify="center" style="margin-top: 30svh">
      <v-card color="white" style="padding: 20px" width="600px">
        <v-text-field
          variant="outlined"
          label="Email"
          v-model="user.email"
          :error-messages="emailErrors"
        />
        <v-text-field
          class="mt-5"
          variant="outlined"
          label="Password"
          v-model="user.password"
          :error-messages="passwordErrors"
          type="password"
        />
        <v-card-action>
          <v-row no-gutters justify="end">
            <v-btn height="40px" @click="submitForm">Login</v-btn>
          </v-row>
        </v-card-action>
      </v-card>
    </v-row>
  </div>
</template>
      
  <script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const user = reactive({
      email: "",
      password: "",
    });

    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    };

    const v$ = useVuelidate(rules, user);
    const emailErrors = computed(() => {
      if (!v$?.value || !v$?.value.email) return [];

      if (!v$?.value.email.$dirty) return [];

      if (v$?.value.email.$invalid) {
        if (user.email === "") {
          return ["Email is required"];
        } else {
          return ["Email is invalid"];
        }
      }

      return v$?.value.email?.$errorMessages;
    });

    const passwordErrors = computed(() => {
      if (!v$?.value || !v$?.value.password) return [];

      if (!v$?.value.password.$dirty) return [];

      if (v$?.value.password.$invalid) {
        if (user.password === "") {
          return ["Password is required"];
        } else {
          return ["Password is invalid"];
        }
      }

      return v$?.value.password?.$errorMessages;
    });

    const submitForm = () => {
      v$?.value.$touch();
      if (!v$.$invalid) {
        console.log(router);
        router.push("/game");
      }
    };

    return { emailErrors, passwordErrors, user, submitForm };
  },
};
</script>
  