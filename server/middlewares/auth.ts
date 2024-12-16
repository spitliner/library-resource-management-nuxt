export default defineNuxtRouteMiddleware(() =>  {
    const userSession = useCookie('libSession');

    if (null === userSession.value || undefined === userSession.value) {
        return navigateTo('/');
    }
});
