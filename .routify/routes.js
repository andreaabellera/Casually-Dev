
/**
 * @roxi/routify 2.18.7
 * File generated Sat Jul 23 2022 17:22:05 GMT-0500 (Central Daylight Time)
 */

export const __version = "2.18.7"
export const __timestamp = "2022-07-23T22:22:05.458Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "andrea.svelte",
      "filepath": "/andrea.svelte",
      "name": "andrea",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/andrea.svelte",
      "importPath": "../src/pages/andrea.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/andrea",
      "id": "_andrea",
      "component": () => import('../src/pages/andrea.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "blog",
      "filepath": "/blog",
      "name": "blog",
      "ext": "",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/blog",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[showId].svelte",
          "filepath": "/blog/[showId].svelte",
          "name": "[showId]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/blog/[showId].svelte",
          "importPath": "../src/pages/blog/[showId].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/blog/:showId",
          "id": "_blog__showId",
          "component": () => import('../src/pages/blog/[showId].svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/blog/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/blog/index.svelte",
          "importPath": "../src/pages/blog/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/blog/index",
          "id": "_blog_index",
          "component": () => import('../src/pages/blog/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/blog"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "compo",
      "filepath": "/compo",
      "name": "compo",
      "ext": "",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo",
      "children": [
        {
          "isFile": false,
          "isDir": true,
          "file": "art",
          "filepath": "/compo/art",
          "name": "art",
          "ext": "",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/art",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "Bike.svelte",
              "filepath": "/compo/art/Bike.svelte",
              "name": "Bike",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/art/Bike.svelte",
              "importPath": "../src/pages/compo/art/Bike.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/compo/art/Bike",
              "id": "_compo_art_Bike",
              "component": () => import('../src/pages/compo/art/Bike.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "Bison.svelte",
              "filepath": "/compo/art/Bison.svelte",
              "name": "Bison",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/art/Bison.svelte",
              "importPath": "../src/pages/compo/art/Bison.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/compo/art/Bison",
              "id": "_compo_art_Bison",
              "component": () => import('../src/pages/compo/art/Bison.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "Blossom.svelte",
              "filepath": "/compo/art/Blossom.svelte",
              "name": "Blossom",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/art/Blossom.svelte",
              "importPath": "../src/pages/compo/art/Blossom.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/compo/art/Blossom",
              "id": "_compo_art_Blossom",
              "component": () => import('../src/pages/compo/art/Blossom.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "Boba.svelte",
              "filepath": "/compo/art/Boba.svelte",
              "name": "Boba",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/art/Boba.svelte",
              "importPath": "../src/pages/compo/art/Boba.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/compo/art/Boba",
              "id": "_compo_art_Boba",
              "component": () => import('../src/pages/compo/art/Boba.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "CharmingButton.svelte",
              "filepath": "/compo/art/CharmingButton.svelte",
              "name": "CharmingButton",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/art/CharmingButton.svelte",
              "importPath": "../src/pages/compo/art/CharmingButton.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/compo/art/CharmingButton",
              "id": "_compo_art_CharmingButton",
              "component": () => import('../src/pages/compo/art/CharmingButton.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "Hippo.svelte",
              "filepath": "/compo/art/Hippo.svelte",
              "name": "Hippo",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/art/Hippo.svelte",
              "importPath": "../src/pages/compo/art/Hippo.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/compo/art/Hippo",
              "id": "_compo_art_Hippo",
              "component": () => import('../src/pages/compo/art/Hippo.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "Matcha.svelte",
              "filepath": "/compo/art/Matcha.svelte",
              "name": "Matcha",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/art/Matcha.svelte",
              "importPath": "../src/pages/compo/art/Matcha.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/compo/art/Matcha",
              "id": "_compo_art_Matcha",
              "component": () => import('../src/pages/compo/art/Matcha.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "Octopus.svelte",
              "filepath": "/compo/art/Octopus.svelte",
              "name": "Octopus",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/art/Octopus.svelte",
              "importPath": "../src/pages/compo/art/Octopus.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/compo/art/Octopus",
              "id": "_compo_art_Octopus",
              "component": () => import('../src/pages/compo/art/Octopus.svelte').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/art"
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "BentoBox.svelte",
          "filepath": "/compo/BentoBox.svelte",
          "name": "BentoBox",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/BentoBox.svelte",
          "importPath": "../src/pages/compo/BentoBox.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/BentoBox",
          "id": "_compo_BentoBox",
          "component": () => import('../src/pages/compo/BentoBox.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "BlogCover.svelte",
          "filepath": "/compo/BlogCover.svelte",
          "name": "BlogCover",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/BlogCover.svelte",
          "importPath": "../src/pages/compo/BlogCover.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/BlogCover",
          "id": "_compo_BlogCover",
          "component": () => import('../src/pages/compo/BlogCover.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "BlogFeat.svelte",
          "filepath": "/compo/BlogFeat.svelte",
          "name": "BlogFeat",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/BlogFeat.svelte",
          "importPath": "../src/pages/compo/BlogFeat.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/BlogFeat",
          "id": "_compo_BlogFeat",
          "component": () => import('../src/pages/compo/BlogFeat.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "Collection.svelte",
          "filepath": "/compo/Collection.svelte",
          "name": "Collection",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/Collection.svelte",
          "importPath": "../src/pages/compo/Collection.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/Collection",
          "id": "_compo_Collection",
          "component": () => import('../src/pages/compo/Collection.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "Footer.svelte",
          "filepath": "/compo/Footer.svelte",
          "name": "Footer",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/Footer.svelte",
          "importPath": "../src/pages/compo/Footer.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/Footer",
          "id": "_compo_Footer",
          "component": () => import('../src/pages/compo/Footer.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "GalerieFeat.svelte",
          "filepath": "/compo/GalerieFeat.svelte",
          "name": "GalerieFeat",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/GalerieFeat.svelte",
          "importPath": "../src/pages/compo/GalerieFeat.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/GalerieFeat",
          "id": "_compo_GalerieFeat",
          "component": () => import('../src/pages/compo/GalerieFeat.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "GirlCave.svelte",
          "filepath": "/compo/GirlCave.svelte",
          "name": "GirlCave",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/GirlCave.svelte",
          "importPath": "../src/pages/compo/GirlCave.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/GirlCave",
          "id": "_compo_GirlCave",
          "component": () => import('../src/pages/compo/GirlCave.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "Header.svelte",
          "filepath": "/compo/Header.svelte",
          "name": "Header",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/Header.svelte",
          "importPath": "../src/pages/compo/Header.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/Header",
          "id": "_compo_Header",
          "component": () => import('../src/pages/compo/Header.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "Heading.svelte",
          "filepath": "/compo/Heading.svelte",
          "name": "Heading",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/Heading.svelte",
          "importPath": "../src/pages/compo/Heading.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/Heading",
          "id": "_compo_Heading",
          "component": () => import('../src/pages/compo/Heading.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "JournalCover.svelte",
          "filepath": "/compo/JournalCover.svelte",
          "name": "JournalCover",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/JournalCover.svelte",
          "importPath": "../src/pages/compo/JournalCover.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/JournalCover",
          "id": "_compo_JournalCover",
          "component": () => import('../src/pages/compo/JournalCover.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "JournalFeat.svelte",
          "filepath": "/compo/JournalFeat.svelte",
          "name": "JournalFeat",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/JournalFeat.svelte",
          "importPath": "../src/pages/compo/JournalFeat.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/JournalFeat",
          "id": "_compo_JournalFeat",
          "component": () => import('../src/pages/compo/JournalFeat.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "Leaderboard.svelte",
          "filepath": "/compo/Leaderboard.svelte",
          "name": "Leaderboard",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/Leaderboard.svelte",
          "importPath": "../src/pages/compo/Leaderboard.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/Leaderboard",
          "id": "_compo_Leaderboard",
          "component": () => import('../src/pages/compo/Leaderboard.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "ProjectFeat.svelte",
          "filepath": "/compo/ProjectFeat.svelte",
          "name": "ProjectFeat",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/ProjectFeat.svelte",
          "importPath": "../src/pages/compo/ProjectFeat.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/ProjectFeat",
          "id": "_compo_ProjectFeat",
          "component": () => import('../src/pages/compo/ProjectFeat.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "RevueCover.svelte",
          "filepath": "/compo/RevueCover.svelte",
          "name": "RevueCover",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/RevueCover.svelte",
          "importPath": "../src/pages/compo/RevueCover.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/RevueCover",
          "id": "_compo_RevueCover",
          "component": () => import('../src/pages/compo/RevueCover.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "SearchBar.svelte",
          "filepath": "/compo/SearchBar.svelte",
          "name": "SearchBar",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/compo/SearchBar.svelte",
          "importPath": "../src/pages/compo/SearchBar.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/compo/SearchBar",
          "id": "_compo_SearchBar",
          "component": () => import('../src/pages/compo/SearchBar.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/compo"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "content",
      "filepath": "/content",
      "name": "content",
      "ext": "",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/content",
      "children": [],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/content"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "galerie.svelte",
      "filepath": "/galerie.svelte",
      "name": "galerie",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/galerie.svelte",
      "importPath": "../src/pages/galerie.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/galerie",
      "id": "_galerie",
      "component": () => import('../src/pages/galerie.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "intermission.svelte",
      "filepath": "/intermission.svelte",
      "name": "intermission",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/intermission.svelte",
      "importPath": "../src/pages/intermission.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/intermission",
      "id": "_intermission",
      "component": () => import('../src/pages/intermission.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "journals",
      "filepath": "/journals",
      "name": "journals",
      "ext": "",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/journals",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[showId].svelte",
          "filepath": "/journals/[showId].svelte",
          "name": "[showId]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/journals/[showId].svelte",
          "importPath": "../src/pages/journals/[showId].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/journals/:showId",
          "id": "_journals__showId",
          "component": () => import('../src/pages/journals/[showId].svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/journals/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/journals/index.svelte",
          "importPath": "../src/pages/journals/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/journals/index",
          "id": "_journals_index",
          "component": () => import('../src/pages/journals/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/journals"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "laruelle.svelte",
      "filepath": "/laruelle.svelte",
      "name": "laruelle",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/laruelle.svelte",
      "importPath": "../src/pages/laruelle.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/laruelle",
      "id": "_laruelle",
      "component": () => import('../src/pages/laruelle.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "resources.svelte",
      "filepath": "/resources.svelte",
      "name": "resources",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/resources.svelte",
      "importPath": "../src/pages/resources.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/resources",
      "id": "_resources",
      "component": () => import('../src/pages/resources.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "revues.svelte",
      "filepath": "/revues.svelte",
      "name": "revues",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/revues.svelte",
      "importPath": "../src/pages/revues.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/revues",
      "id": "_revues",
      "component": () => import('../src/pages/revues.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "testlab.svelte",
      "filepath": "/testlab.svelte",
      "name": "testlab",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/mnt/c/Users/andre/Documents/GitHub/qtrlex/src/pages/testlab.svelte",
      "importPath": "../src/pages/testlab.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/testlab",
      "id": "_testlab",
      "component": () => import('../src/pages/testlab.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

