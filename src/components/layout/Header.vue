<template>
    <header class="header">
        <div class="container header__wrapper">
            <div class="header__logo">
                <img src="@/assets/images/logo.png" alt="">
            </div>
            <ul class="header__btn">
                <li>
                    <router-link to="/indie-game">
                        Indie Game
                    </router-link>
                </li>
                <li>
                    <router-link to="/entry-game">
                        Entry Game
                    </router-link>
                </li>
                <li>
                    <router-link to="/community">
                        Community
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style scoped lang="scss">
    .header {
        background-color: #02cc99;
        padding: 15px 0;
        &__wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__btn {
            display: flex;
            gap: 0 15px;
            li {
                padding: 0 10px;
                border: 1px solid #FFFFFF;
                border-radius: 5px;
                height: 30px;
                line-height: 30px;
                font-size: 16px;
                a {
                    color: #FFFFFF;
                    text-decoration: none;
                }
            }
        }
    }
</style>
