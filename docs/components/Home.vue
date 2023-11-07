<template>
    <div class="home">
        <div class="home-body">
            <div class="container">
                <h1 class="title">Hey, I'm {{ name || "Novrizal" }}.</h1>
                <p class="subtitle">
                    {{ subtitle }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
    },
}
</script>

<style>
p.subtitle {
    font-size: 1.2rem;
    border-top: none;
}
</style>