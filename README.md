![](https://github.com/dmijatovic/github-ci-demo/workflows/DEV_TEST/badge.svg?branch=dev&event=push)

# Github actions

This repo is testing some github action approaches based on [this Udemy training](https://udemy.com/course/github-actions/learn)

## Features actions

- simple.yml: running some basic shell commands on latest ubuntu

## Leasson lerned

Jobs run in parallel by default. To define sequence/dependencies use `needs`.

## Actions

The actions can be written in Javascript., for some other programming language you can use docker action. It can use from action repo or custom action can be created in the local repository.

When reffering to action you need to specify branch of the repo or version. Version is prefferd as it is more stable than a branch.

### Custom private actions

You can create private action in your project. This action is only available for this project. The custom private actions are stored in ./github/actions folder.

```bash
# install actions packages
npm i -D @actions/core @actions/github
npm i -D @vercel/ncc
```

NOTE! The action will require these modules to run. You can install everything first or you can use @vercel/ncc module to compile the action and have single file that can run in github action.

For more information about core actions [see this repo](https://github.com/actions/toolkit)

## Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

### Testing

Use vue testing library. NOT AVALIABLE FOR Vue v3

```bash

npm i -D jest @types/jest ts-jest @vue/test-utils@next @vue/vue3-jest

```

## Semantic Release

This tools enables automatic version control and CHANGELOG file generation based on the commit messages. Commit message do need to be in specific format in order to automate this process. For [more info see here](https://github.com/semantic-release/semantic-release/tree/685d2b5455bd55611e0581672a899631f06beb90)

```bash
npm i -D semantic-release
```

### Github action for tagging and CHANGELOG

I expectiemented with github actions to automatically create release.

- TriPSs/conventional-changelog-action@latest: makes changelog and tags release. Have problems triggering major release using BREAKING CHANGES in commit. Use in release-tag-conventional-commits.yml file

- marvinpinto/action-automatic-releases@latest: createds github relase. It is used it on tag push.

### Other action to try

- [GH release](https://github.com/marketplace/actions/gh-release): thisone sounds OK, but not sure how well it fits my needs
- [Release change log builder](https://github.com/marketplace/actions/release-changelog-builder)