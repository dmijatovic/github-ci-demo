# Github actions

This repo is testing some github action approaches based on [this Udemy training](https://udemy.com/course/github-actions/learn)

## Features actions

- simple.yml: running some basic shell commands on latest ubuntu

## Leasson lerned

Jobs run in parallel by default. To define sequence/dependencies use `needs`.

## Actions

The actions can be written in Javascript., for some other programming language you can use docker action. It can use from action repo or custom action can be created in the local repository.

When reffering to action you need to specify branch of the repo or version. Version is prefferd as it is more stable than a branch.

## Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

### Testing

Use vue testing library. NOT AVALIABLE FOR Vue v3

```bash

npm i -D jest @types/jest ts-jest vue-jest@next @vue/test-utils@next

npm i -D jest @types/jest ts-jest @vue/test-utils@next @vue/vue3-jest


```
