<script setup>
    import { ref } from 'vue'
    const displayMenu = ref(false)
</script>

<template>
    <header class="header">
        <div class="container header__wrapper">
            <div class="header__logo">
                <router-link to="./">
                    <img src="@/assets/images/logo.png" alt="">
                </router-link>
                <div class="header__logo--slogan">Hieu Tran</div>
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
            <div
                :class="['header__bar', { active: displayMenu }]"
                @click="displayMenu = !displayMenu"
            >
                <span class="one"></span>
                <span class="two"></span>
                <span class="three"></span>
            </div>
            <div :class="['header__mobile', { active: displayMenu }]">
                <div class="header__mobile--logo">
                    <img src="@/assets/images/logo.png" alt="">
                </div>
                <ul class="header__mobile--btn">
                    <li @click="displayMenu = !displayMenu">
                        <router-link to="/indie-game">
                            Indie Game
                        </router-link>
                    </li>
                    <li @click="displayMenu = !displayMenu">
                        <router-link to="/entry-game">
                            Entry Game
                        </router-link>
                    </li>
                    <li @click="displayMenu = !displayMenu">
                        <router-link to="/community">
                            Community
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    .header {
        background-color: #02cc99;
        padding: 15px 0;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        &__logo {
            display: flex;
            align-items: center;
            gap: 0 10px;
            a {
                display: block;
                width: 80px;
            }
            img {
                width: 100%;
            }
            &--slogan {
                color: white;
                font-size: 16px;
            }
        }
        &__wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
        }
        &__btn {
            display: flex;
            gap: 0 15px;
            li {
                border: 1px solid #FFFFFF;
                border-radius: 5px;
                transition: all 0.5s;
                &:hover {
                    opacity: 0.5;
                }
                a {
                    color: #FFFFFF;
                    text-decoration: none;
                    font-size: 16px;
                    height: 30px;
                    line-height: 30px;
                    padding: 0 10px;
                    display: block;
                }
            }
        }

        &__bar {
            width: 22px;
            height: 22px;
            cursor: pointer;
            padding: 5px;
            border: 1px solid #FFFFFF;
            border-radius: 5px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right:0;
            display: none;
            span {
                width: 100%;
                height: 2px;
                background: white;
                margin: 4px auto;
                transition: all 0.3s;
                backface-visibility: hidden;
                display: block;
            }
            &.active {
                .one {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                .two {
                    opacity: 0;
                }
                .three {
                    transform: rotate(-45deg) translate(3px, -4px);
                }
            }
        }

        &__mobile {
            position: fixed;
            top: 0;
            left: -100%;
            width: 70%;
            height: 100%;
            background: #FFFFFF;
            transition: all .5s;
            padding: 20px;
            z-index: 1;
        }

        @media (max-width: 600px) {
            .header {
                &__bar {
                    display: block;
                }
                &__btn {
                    display: none;
                }
                &__mobile {
                    &.active {
                        left: 0;
                    }
                    &--logo {
                        margin: 0 0 20px;
                    }
                    ul {
                        margin: 0;
                        padding: 0;
                        li {
                            width: 100%;
                            a {
                                color: #02cc99;
                                border-bottom: 1px solid #02cc99;
                                padding: 10px 0;
                                display: block;
                                text-decoration: none;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
