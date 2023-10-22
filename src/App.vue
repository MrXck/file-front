<template>
    <n-message-provider>
        <div class="app">
            <n-config-provider :theme="mainStore.isDark ? darkTheme : undefined">
                <router-view/>
            </n-config-provider>
        </div>
    </n-message-provider>
</template>

<style>

</style>
<script>
import {NConfigProvider, darkTheme, NMessageProvider} from 'naive-ui';

import Menu from './components/Menu'
import Header from './components/Header'
import {useMainStore} from './store'

export default {
    components: {Header, Menu, NConfigProvider, NMessageProvider},
    setup() {

        let mainStore = useMainStore()

        return {
            darkTheme,
            mainStore,
        }
    }
}
</script>
<style scoped>
</style>
