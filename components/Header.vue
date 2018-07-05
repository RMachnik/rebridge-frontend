<template>
    <header>
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/information">Informacje</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/inspiration">Inspiracje</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/project">Projekt</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/rooms">Pomieszczenia</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/products">Produkty</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/chat">Czat</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<script>

</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        height: 60px;
        align-items: center;
        background: #ccc;
    }
    ul li a {
        color: #000;
        text-decoration: none;
    }
</style>