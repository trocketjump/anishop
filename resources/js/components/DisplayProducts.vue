<template>
<div>
    <h1>Test title</h1>
    <img src="..\..\..\public\img\test.jpg"  style="height: 500px;width: 500px;">
    <p>some text....some some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....some text....text....some text....some text....some text....</p>
</div>
</template>

<script>
import {ref} from 'vue';
export default {
    name: "DisplayProducts",
    setup() {
        const products = ref("");
        return {
            products
        }
    }
}
</script>

