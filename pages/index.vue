<script>
    
    import '~/assets/scss/login.scss';
</script>

<template>
    <div class='login-page'>
        <div class="login-panel">
            <img src="~/assets/images/bk_logo.png">
            <div class='login-panel-buttons'>
                <div class='login-button'>
                    <Icon name="line-md:account" size="4em"/>
                    <div>
                        Login as Guest
                    </div>
                </div>
                <div class='login-button'>
                    <Icon name="material-symbols:person" size="4em"/>
                    <div>
                        Login as Student/Teacher
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>