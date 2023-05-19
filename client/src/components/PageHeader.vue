<template>
    <header class="col-12 d-flex align-items-center">
        <div
        :class="[
            sidesClasses,
            'justify-content-start'
            ]">
            <h1>{{ title }}</h1>
        </div>
        <div
            :class="[
                sidesClasses,
                'justify-content-end'
            ]">
            <a
            class="btn btn-outline-primary">
                {{ blueButtonText }}
            </a>
            <a
                class="btn btn-outline-danger"
                id="mass-delete-btn">
                    {{ redButtonText }}
            </a>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                sidesClasses: 'col-6 d-flex gap-2'
            }
        },
        props: {
            title: {
                required: 'true'
            },
            blueButtonText: {
                required: 'true'
            },
            redButtonText: {
            required: 'true'
            }
        }
    }
</script>