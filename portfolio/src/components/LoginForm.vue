<template>
    <div class="login-form">
        <form @submit.prevent="login">
            <h2>Вход</h2>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" autocomplete="email" v-model="email" required>
            </div>

            <div class="form-group">
                <label for="password">Пароль:</label>
                <input type="password" id="password" name="password" v-model="password" required>
            </div>
            <div class="form-group">
                <button type="submit">Войти</button>
            </div>
        </form>
    </div>
</template>
  
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'LoginForm',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    this.$store.dispatch('logIn');
                    const user = userCredential.user;
                    console.log(user);
                    this.$router.replace('/');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode);
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        },
    },
};
</script>
  
<style scoped>
body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f4f4f4;
    text-align: center;
    padding: 50px;
}

.login-form {
    max-width: 300px;
    margin: auto;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

.form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-group button {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-group button[type="submit"] {
    background: #4caf50;
    color: #fff;
    cursor: pointer;
}
</style>
  