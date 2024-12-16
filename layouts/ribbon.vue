<script>
    import { Icon } from '#build/components';
import '~/assets/scss/ribbon.scss';

</script>

<template>
    <div>
        <div id="header">
            <div id="header-ribbon" />
            <div id="collapse-sidebar-header">
                <Icon name="zondicons:menu"/>
            </div>
        </div>
        <div>
            <div id="sidebar">
                <NuxtLink to="/app/reservation">
                    <div>
                        reservation
                    </div>
                </NuxtLink>
            </div>
            <slot />
        </div>
    </div>
</template>