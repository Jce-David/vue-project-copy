
<script lang="ts">
export default {

}
</script>

<template>
    <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4 " color="grey-darken-1" size="32"></v-avatar>
        <RouterLink to="/" custom v-slot="{navigate}" ><v-btn :active="$route.name === 'home'"  @click="navigate">Home</v-btn></RouterLink>
        <RouterLink to="/cart" custom v-slot="{navigate}" ><v-btn :active="$route.name === 'cart'" @click="navigate" > Cart </v-btn></RouterLink>
        <v-spacer></v-spacer>

        <v-responsive max-width="160">
            <v-text-field density="compact" flat hide-details label="Search" rounded="lg" single-line
                variant="solo-filled"></v-text-field>
        </v-responsive>
    </v-container>
</template>