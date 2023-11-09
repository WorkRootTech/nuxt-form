<template>
  <div>
    <h1>Forms</h1>

    <WRForm id="first" @submit.prevent="submit">
      <TextInput
        v-model="loginForm.username"
        type="email"
        placeholder="Enter name"
      >
        <template #before>
          <Icon name="material-symbols:alternate-email" color="black" />
        </template>
      </TextInput>
      <PasswordInput v-model="loginForm.password" placeholder="Enter name">
        <template #before>
          <Icon name="carbon:password" color="black" />
        </template>
      </PasswordInput>
      <WRButton type="submit"> Login </WRButton>
    </WRForm>
  </div>
</template>

<script setup>
const loginForm = reactive({
  username: "",
  password: "",
});

const submit = () => {
  console.log(loginForm);
};
</script>
