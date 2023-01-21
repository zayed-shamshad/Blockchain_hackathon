<template>
    <q-ajax-bar />
    <q-layout view="hhh LpR fFf">
        <q-header reveal elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-toolbar-title> Block chain portal </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <q-page class="row justify-center">
                <div class="row justify-center items-center">
                    <q-card class="my-card">
                        <q-card-section class="bg-primary text-white">
                            <div class="text-h6">admin</div>
                        </q-card-section>
                        <q-separator />
                       
                    </q-card>
                    <q-card class="my-card">
                        <q-card-section class="bg-primary text-white">
                            <div class="text-h6">student</div>
                        </q-card-section>
                        <q-separator />
                        
                    </q-card>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>

export default {
    name: "home",
    data() {
        return {};
    }
};
</script>

