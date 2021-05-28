/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5b802a68dabef8a1ece5dbd880109594"
  },
  {
    "url": "assets/css/0.styles.f52552f8.css",
    "revision": "c5223b37eac7caf9f8f2983cfbd7ac1f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b84025ed.js",
    "revision": "3b60ed34469ead79e1991f0fe2bff930"
  },
  {
    "url": "assets/js/11.7c58c5d6.js",
    "revision": "384265b1536c1dba6424dff696627ce6"
  },
  {
    "url": "assets/js/12.de2d8102.js",
    "revision": "95cd4878168de102ad7390245438f3c8"
  },
  {
    "url": "assets/js/13.fe377b65.js",
    "revision": "f9306f13fb2b6c6be54491e6213aa1cb"
  },
  {
    "url": "assets/js/14.f1cd7aa2.js",
    "revision": "ffd354d623f23270911e0d92f691c171"
  },
  {
    "url": "assets/js/15.4f75d4bb.js",
    "revision": "56a0258836834f62c2b4241276a3b694"
  },
  {
    "url": "assets/js/16.906d6d4a.js",
    "revision": "17b9fa7be98091964bf30db2c9a5d0af"
  },
  {
    "url": "assets/js/17.d95554d5.js",
    "revision": "d02f8b22c0acb4ad56eef84dc04842c2"
  },
  {
    "url": "assets/js/18.9dede249.js",
    "revision": "86c9df1211c5b88f8d01223155ab51ef"
  },
  {
    "url": "assets/js/19.0621538b.js",
    "revision": "e1633122afe1ef3997bfafa46f9b89d4"
  },
  {
    "url": "assets/js/2.92947368.js",
    "revision": "546ba837b9b416df2b3c35dfbbf3946f"
  },
  {
    "url": "assets/js/20.13e018e3.js",
    "revision": "88fe8ab2e10333ac599daaaff2b5baad"
  },
  {
    "url": "assets/js/21.e4a06620.js",
    "revision": "71a405126752bf6a6c1a8f5c526e19da"
  },
  {
    "url": "assets/js/22.59f52ec6.js",
    "revision": "fd3e4568b8c58d7b997f72e101962895"
  },
  {
    "url": "assets/js/23.4375f24d.js",
    "revision": "3801dd14db4af1b19fec188d38af3027"
  },
  {
    "url": "assets/js/24.60cdd050.js",
    "revision": "ff94de67f1fba1c34ad01c1555cadd17"
  },
  {
    "url": "assets/js/25.4d704b8b.js",
    "revision": "10d9c33fdd7cbae55f63e6b19a8a32c9"
  },
  {
    "url": "assets/js/26.e631c778.js",
    "revision": "3a2a8d5ef66e04994f466727f05c2061"
  },
  {
    "url": "assets/js/27.d89a92fd.js",
    "revision": "e185616d222609ae28c77c56005906fd"
  },
  {
    "url": "assets/js/28.9fb2b865.js",
    "revision": "17ef6d65718fb90287699a20f94102e2"
  },
  {
    "url": "assets/js/29.e6c33b9a.js",
    "revision": "4a47952b86b277a41deef7a55550a5da"
  },
  {
    "url": "assets/js/3.74592acf.js",
    "revision": "7e0949cd3f334f7853b9aa4a19d3fa3e"
  },
  {
    "url": "assets/js/30.5072f4fc.js",
    "revision": "221879380b80d868662c387fa86c8332"
  },
  {
    "url": "assets/js/31.3788aee1.js",
    "revision": "3fd2b9cf355d2b2f9e7b3364a014b809"
  },
  {
    "url": "assets/js/32.6dca2967.js",
    "revision": "2f2f7e8817761180bf2cafba9532050c"
  },
  {
    "url": "assets/js/33.d4f526b6.js",
    "revision": "6d5fb7139b0ebfec123ed4eb2d8468cf"
  },
  {
    "url": "assets/js/34.85f6fbec.js",
    "revision": "d58e4c6b2ce69c9e518c52664dcdddbe"
  },
  {
    "url": "assets/js/35.c3af1511.js",
    "revision": "2bfa8dee93c273ed3bf92cc17774605b"
  },
  {
    "url": "assets/js/36.e5984d80.js",
    "revision": "ad5095448e16b2252582cd265b267dc2"
  },
  {
    "url": "assets/js/37.665a9578.js",
    "revision": "095918378fc2449fc8eb4e22b745c7d9"
  },
  {
    "url": "assets/js/38.21ba26ad.js",
    "revision": "a75489e4543f68c0ef31d2c89df59738"
  },
  {
    "url": "assets/js/39.0a876c87.js",
    "revision": "06c0263b08d017acaa6b2d5719783c98"
  },
  {
    "url": "assets/js/4.47214791.js",
    "revision": "9087c62fe0945f6e028454446c9a46d4"
  },
  {
    "url": "assets/js/40.89e82318.js",
    "revision": "cfd9ba56f3f52ebc012bc12512db3db7"
  },
  {
    "url": "assets/js/41.2a85a586.js",
    "revision": "21c6a312c66a515c2f42ee217114b9ff"
  },
  {
    "url": "assets/js/42.364f1105.js",
    "revision": "134c22a9329a53a4e8ff657d59177474"
  },
  {
    "url": "assets/js/43.b7afe916.js",
    "revision": "082231f9f24aafb4cde51c65498b87cf"
  },
  {
    "url": "assets/js/44.45cc108b.js",
    "revision": "64f5e51720d0784f9c62676d432ebc84"
  },
  {
    "url": "assets/js/45.8e8c0e3e.js",
    "revision": "0cff740cffc58440c531d25af6357a13"
  },
  {
    "url": "assets/js/46.aec4a7c6.js",
    "revision": "7e8e8a9755444861f8c72e6e9c5f014d"
  },
  {
    "url": "assets/js/47.16de224f.js",
    "revision": "7a782286bfd6516281aa365bf1821eeb"
  },
  {
    "url": "assets/js/48.1764fd61.js",
    "revision": "b8009baa256928c1bf3a245c5d95658c"
  },
  {
    "url": "assets/js/49.996c2583.js",
    "revision": "cb900ecab2c31771c38f9cfe54ba7690"
  },
  {
    "url": "assets/js/5.3113bf0c.js",
    "revision": "7116813402069dfb443b1fa1389c960d"
  },
  {
    "url": "assets/js/50.e7e0b373.js",
    "revision": "1c8c808dc1ae9ecf67431e34f8efe0ff"
  },
  {
    "url": "assets/js/51.1e509337.js",
    "revision": "f7335907cb2aee7a2c570fce26feb724"
  },
  {
    "url": "assets/js/52.9614344e.js",
    "revision": "17cda088ddd42b6e7dbb086d5be8aab3"
  },
  {
    "url": "assets/js/53.2888eeac.js",
    "revision": "97148c8f94ebb9dad41cec9beb47c940"
  },
  {
    "url": "assets/js/54.8e6da259.js",
    "revision": "ab5148355eaf4e74158ca082be2a7054"
  },
  {
    "url": "assets/js/55.a19f7f2c.js",
    "revision": "ff2931c40a7916bb79c08d93ce71c5e1"
  },
  {
    "url": "assets/js/56.2ca5e5ed.js",
    "revision": "0a43e336bb561aa9398b5411e004e16c"
  },
  {
    "url": "assets/js/57.bd9f18b7.js",
    "revision": "4449561e3da3159a7501ef0f8b0918f8"
  },
  {
    "url": "assets/js/58.ba151f1c.js",
    "revision": "cee5aa0168451a51d1c793422cb8d08b"
  },
  {
    "url": "assets/js/59.5fbb5939.js",
    "revision": "83af7efdd09c377d577915b314e2f830"
  },
  {
    "url": "assets/js/6.7265dd24.js",
    "revision": "58b54edc6d8073ad05fb206ac43d97f7"
  },
  {
    "url": "assets/js/60.81acd1a4.js",
    "revision": "3eed06643609449e76f4abe3a906343c"
  },
  {
    "url": "assets/js/61.f7a24079.js",
    "revision": "c9a6d4fe9b2165c471fd441048304bc8"
  },
  {
    "url": "assets/js/62.9bceffe9.js",
    "revision": "50790c159ed5268deb07f6c504c5641a"
  },
  {
    "url": "assets/js/63.e8e639ce.js",
    "revision": "aff6f9cb7bec4c503a7869202dcf83a8"
  },
  {
    "url": "assets/js/64.acff45e3.js",
    "revision": "567bd7b97a897c75c1f70ae4cc649fef"
  },
  {
    "url": "assets/js/65.10d11424.js",
    "revision": "03d5473ce6db159a3eea1ae8b855eeaf"
  },
  {
    "url": "assets/js/66.f0145b9b.js",
    "revision": "e8e38d2da7a418e158372505b2758e2b"
  },
  {
    "url": "assets/js/67.696da77d.js",
    "revision": "0b2f9760e80f22ad4431f779ab41786a"
  },
  {
    "url": "assets/js/68.7e5cd622.js",
    "revision": "8f514b32494a8c7a3bedcf04a4fcbbeb"
  },
  {
    "url": "assets/js/69.1d5a4b4b.js",
    "revision": "a497f0f70a84a0c515f9fddf3ad450c2"
  },
  {
    "url": "assets/js/7.4fd397db.js",
    "revision": "6b28f71e3aabe4957c8903c39ffc2581"
  },
  {
    "url": "assets/js/70.6f77d1a2.js",
    "revision": "cd81b815659f7b58e249ad5705f8e50c"
  },
  {
    "url": "assets/js/71.221c9a4e.js",
    "revision": "07a6c1e4bfc3f829f2498de960c12333"
  },
  {
    "url": "assets/js/72.22c63902.js",
    "revision": "687a085b7dceff748cb70a39ebb31efa"
  },
  {
    "url": "assets/js/73.8f267b72.js",
    "revision": "2169ffa2f3d54f68cc72e6c6813a28f9"
  },
  {
    "url": "assets/js/74.01ccdeab.js",
    "revision": "13e3f4e046dc118a6082b5a0739fb781"
  },
  {
    "url": "assets/js/75.01d4ab49.js",
    "revision": "7cfa4553f53e908e477dcd3fe501f00d"
  },
  {
    "url": "assets/js/76.a90a2120.js",
    "revision": "278a638bc7298985f52949ed7e01d95e"
  },
  {
    "url": "assets/js/8.a89bdf2e.js",
    "revision": "d70512d6241596242f5566059c662df7"
  },
  {
    "url": "assets/js/9.3cd764a1.js",
    "revision": "ac86d7b8d7b36331beaf286161d32683"
  },
  {
    "url": "assets/js/app.d27cd32c.js",
    "revision": "1b34479037237c8d19c473cf83813eba"
  },
  {
    "url": "css-01/index.html",
    "revision": "3ee4e32f1f7f25a16ac87de62ff74180"
  },
  {
    "url": "ele-01/index.html",
    "revision": "b5426a9d2de92b782c4c7253d74cf3ee"
  },
  {
    "url": "ele-02/index.html",
    "revision": "7265d4494fe7e62a3b70732dd2f47954"
  },
  {
    "url": "guide/index.html",
    "revision": "9ef9e6846152ab1e0c650447d91baa74"
  },
  {
    "url": "img/css/BFC-float-01.png",
    "revision": "99cfee5b2720820586266e6eb98f30cf"
  },
  {
    "url": "img/css/BFC-float-02.png",
    "revision": "3a8a51291f7acb1e50dfa78910389362"
  },
  {
    "url": "img/css/BFC-float-03.png",
    "revision": "d2af9e6558a36f231daa465f6f0af0a9"
  },
  {
    "url": "img/css/BFC-float-04.png",
    "revision": "2f35c90dacec40755b5e07de346a5267"
  },
  {
    "url": "img/css/BFC-margin-01.png",
    "revision": "278401da9ef034765db6cd299e8cae2f"
  },
  {
    "url": "img/css/BFC-margin-02.png",
    "revision": "d1105a58cdface22121a2f4d203ae903"
  },
  {
    "url": "img/edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "img/js/proto.jpg",
    "revision": "e46508fbcd140db304232aba89f41c83"
  },
  {
    "url": "img/js/prototypeChain.png",
    "revision": "5fa1915a3676d13accbace386d218273"
  },
  {
    "url": "img/shi.jpg",
    "revision": "2809d6b2d82753fff39157da5528ed28"
  },
  {
    "url": "img/vue/advance-1.png",
    "revision": "d16179c2cfdcae2a1e14084d13d44c5f"
  },
  {
    "url": "img/vue/advance-2.png",
    "revision": "b40caf13cf561c0a79837ad9bb814308"
  },
  {
    "url": "img/vue/dom.png",
    "revision": "956fae75c917b522809be4746e631a1e"
  },
  {
    "url": "img/vue/event-loop.png",
    "revision": "d7a6a5fc68dd86ae39eb2fa7af7429c1"
  },
  {
    "url": "img/vue/lifecycle.png",
    "revision": "6f2c97f045ba988851b02056c01c8d62"
  },
  {
    "url": "img/vue/mind.png",
    "revision": "dfdd90eeeef858c36d593284c068c7bb"
  },
  {
    "url": "img/vue/new-vue.png",
    "revision": "9f257f782dba179b8312f77b7cd29f45"
  },
  {
    "url": "img/vue/parse.png",
    "revision": "38cfc72c9514bf7aacee338a62d22a6f"
  },
  {
    "url": "img/vue/reactive.png",
    "revision": "c9e2ac37da79756f05c65ed8c88880c4"
  },
  {
    "url": "img/vue/stack.png",
    "revision": "ef5b872751fe424f07323df69c388c24"
  },
  {
    "url": "img/vue/update-children-1.png",
    "revision": "877b7fd9cccc033d228eb1c5b744bd85"
  },
  {
    "url": "img/vue/update-children-2.png",
    "revision": "a4ad01cc1ec2deb369c8c3d8377122e9"
  },
  {
    "url": "img/vue/update-children-3.png",
    "revision": "3395a69a272ab7bd13895619619799ff"
  },
  {
    "url": "img/vue/update-children-4.png",
    "revision": "aa762b394d2070bc1174084cab527a1c"
  },
  {
    "url": "img/vue/update-children-5.png",
    "revision": "3c19509aa1431b80750f740f0c2d056a"
  },
  {
    "url": "img/vue/update-children-6.png",
    "revision": "7e3b2e4f210259ff5a7a86ecebea9a7a"
  },
  {
    "url": "img/vue/vuex.png",
    "revision": "983ea11f68f23d6a3229e13eafea6dc7"
  },
  {
    "url": "img/vue/vuex1.png",
    "revision": "288a0dc913bab3fe765baf18fb4bac27"
  },
  {
    "url": "img/zaji/07-1.jpg",
    "revision": "ecdb6e7b59e4cddf6b94dcc45f4e1c93"
  },
  {
    "url": "img/zaji/07-2.jpg",
    "revision": "17b8ef1eba250208ad44acf35f109df5"
  },
  {
    "url": "img/zaji/07-3.jpg",
    "revision": "3b7559ff3a63d07d6a1b5b8c9dad940d"
  },
  {
    "url": "img/zaji/08-1.png",
    "revision": "63d0c82777e4f51f6214175beff4f67a"
  },
  {
    "url": "index.html",
    "revision": "05c147ad9120a7a5b4b14302f53ea14c"
  },
  {
    "url": "js-instanceof/index.html",
    "revision": "6902d60a5e639a462a542516c8926462"
  },
  {
    "url": "js-prototype/index.html",
    "revision": "c52ae0f91491a6679b856bb5694d17b8"
  },
  {
    "url": "js-scope/index.html",
    "revision": "7d2d75b765ef089c81eb4ff1a18f1d03"
  },
  {
    "url": "vue-analysis/compile/codegen/index.html",
    "revision": "19fc4adc3eb9dce13464f88d62919e4e"
  },
  {
    "url": "vue-analysis/compile/entrance/index.html",
    "revision": "bd00e7ef1946f56bf0cb86fbff80c849"
  },
  {
    "url": "vue-analysis/compile/index.html",
    "revision": "a263213fb860d6afebe2ccd97a7c1ae4"
  },
  {
    "url": "vue-analysis/compile/optimize/index.html",
    "revision": "588478fd7a98a41a7a45364ea4af23c0"
  },
  {
    "url": "vue-analysis/compile/parse/index.html",
    "revision": "af10976754a04c43b4597b1745021598"
  },
  {
    "url": "vue-analysis/components/async-component/index.html",
    "revision": "f9d7ae8508ba07781525184cc50a9d7b"
  },
  {
    "url": "vue-analysis/components/component-register/index.html",
    "revision": "215178d0504ba1f2a4597607272bcfde"
  },
  {
    "url": "vue-analysis/components/create-component/index.html",
    "revision": "61f47b402508769a02df48a10410f9cc"
  },
  {
    "url": "vue-analysis/components/index.html",
    "revision": "b3065ae353b8ce96257d7b518678c674"
  },
  {
    "url": "vue-analysis/components/lifecycle/index.html",
    "revision": "623b7b66d23d2197fcb2c3a475f34b31"
  },
  {
    "url": "vue-analysis/components/merge-option/index.html",
    "revision": "8b4f0b959e1d63dad2d7bcae7eeac8a9"
  },
  {
    "url": "vue-analysis/components/patch/index.html",
    "revision": "58cf58adc21ff41064ff10fe49fc00d5"
  },
  {
    "url": "vue-analysis/data-driven/create-element/index.html",
    "revision": "6719d9474767d142186bdd5c4edaf574"
  },
  {
    "url": "vue-analysis/data-driven/index.html",
    "revision": "bfcbe13e611b92ae1dae58ce51e476d6"
  },
  {
    "url": "vue-analysis/data-driven/mounted/index.html",
    "revision": "37bb063283e3f5f88b7c36881f61822c"
  },
  {
    "url": "vue-analysis/data-driven/new-vue/index.html",
    "revision": "81f08ae9c9996bca900a4dcfd4ec6699"
  },
  {
    "url": "vue-analysis/data-driven/render/index.html",
    "revision": "8fe03abe49f5a36c8cd76f91f4e9b1d4"
  },
  {
    "url": "vue-analysis/data-driven/update/index.html",
    "revision": "2c48a6c7a09c18672ed3fabad2052d86"
  },
  {
    "url": "vue-analysis/data-driven/virtual-dom/index.html",
    "revision": "caa487247ae6ca31272fa3d3f5ec50f2"
  },
  {
    "url": "vue-analysis/extend/event/index.html",
    "revision": "52116e5995a01de27e0139cc01f99bf6"
  },
  {
    "url": "vue-analysis/extend/index.html",
    "revision": "a36c574d8e78779a1a173a61caa846e2"
  },
  {
    "url": "vue-analysis/extend/keep-alive/index.html",
    "revision": "3fab3552febf9d29feec76fce09656c5"
  },
  {
    "url": "vue-analysis/extend/slot/index.html",
    "revision": "a0e1ce81959216de73cdc692d5acd569"
  },
  {
    "url": "vue-analysis/extend/transition-group/index.html",
    "revision": "47c4cbe6c0fe93d69a11f557da552158"
  },
  {
    "url": "vue-analysis/extend/transition/index.html",
    "revision": "9acadc2fd9d05e9f60efa93c087bb709"
  },
  {
    "url": "vue-analysis/extend/v-model/index.html",
    "revision": "1ae199faa68fd211c44fe58e69ab79e8"
  },
  {
    "url": "vue-analysis/index.html",
    "revision": "7245e84cee87a0d6a41cf541eb448d32"
  },
  {
    "url": "vue-analysis/prepare/build/index.html",
    "revision": "eb993c27a604e43b9d62854b61ec7e9e"
  },
  {
    "url": "vue-analysis/prepare/directory/index.html",
    "revision": "df3a2329e55cd997f0b6c8d1a2bb24f3"
  },
  {
    "url": "vue-analysis/prepare/entry/index.html",
    "revision": "598153ef2e5f2b886b6ffb1af2cee796"
  },
  {
    "url": "vue-analysis/prepare/flow/index.html",
    "revision": "08b6f55df80580dfa90be3f4e70f744b"
  },
  {
    "url": "vue-analysis/prepare/index.html",
    "revision": "77e87036d2880d7d2cf84fee35680b2d"
  },
  {
    "url": "vue-analysis/reactive/component-update/index.html",
    "revision": "4b0b96ab5a8892347a6f5092dd77bdda"
  },
  {
    "url": "vue-analysis/reactive/computed-watcher/index.html",
    "revision": "60576a9f81f8175d480fba8b6721893b"
  },
  {
    "url": "vue-analysis/reactive/getters/index.html",
    "revision": "e4cafae095f80cfca1519836cdca184d"
  },
  {
    "url": "vue-analysis/reactive/index.html",
    "revision": "4e40b5ceca8664edd2f999c1283c3502"
  },
  {
    "url": "vue-analysis/reactive/next-tick/index.html",
    "revision": "8a45adf55781c1b2adff6c61512aa61d"
  },
  {
    "url": "vue-analysis/reactive/questions/index.html",
    "revision": "965798992f3d33f3270b2b8ba72c1c2a"
  },
  {
    "url": "vue-analysis/reactive/reactive-object/index.html",
    "revision": "69ea80eced6fc7e819c7de512ce4781c"
  },
  {
    "url": "vue-analysis/reactive/setters/index.html",
    "revision": "c432a9188774a92cc8c8bf03993bd1f7"
  },
  {
    "url": "vue-analysis/reactive/summary/index.html",
    "revision": "e65c70867dc629d5b376d396eee1972e"
  },
  {
    "url": "vue-analysis/vue-router/index.html",
    "revision": "e8e83b98912cbeeccfe5e1ca671bec35"
  },
  {
    "url": "vue-analysis/vue-router/install/index.html",
    "revision": "033c7449a64ec2dbd0067134844a50eb"
  },
  {
    "url": "vue-analysis/vue-router/matcher/index.html",
    "revision": "f332619e34994a44e69042f7e858a485"
  },
  {
    "url": "vue-analysis/vue-router/router/index.html",
    "revision": "e93ed73fa665e2d37d11b431c5725628"
  },
  {
    "url": "vue-analysis/vue-router/transition-to/index.html",
    "revision": "0493e21ef3b68f785440c9f4730a4383"
  },
  {
    "url": "vue-analysis/vuex/api/index.html",
    "revision": "d67cd3c77c566f3d98ff0d0b3aaae2b1"
  },
  {
    "url": "vue-analysis/vuex/index.html",
    "revision": "7627d990185cb8160c7e6dc9b2b727f0"
  },
  {
    "url": "vue-analysis/vuex/init/index.html",
    "revision": "f76976de19c0260d8376166649cf7c32"
  },
  {
    "url": "vue-analysis/vuex/plugin/index.html",
    "revision": "0d82bda29a1da36aa72b8d9712fa0431"
  },
  {
    "url": "zaji-01/index.html",
    "revision": "6eae862a052205d120e922fc1f1bb126"
  },
  {
    "url": "zaji-02/index.html",
    "revision": "b1f1ad4eb8f062b751fc9f66046387b8"
  },
  {
    "url": "zaji-03/index.html",
    "revision": "c8788f5fb6654c8635b52a47a6b20900"
  },
  {
    "url": "zaji-04/index.html",
    "revision": "680e83e064d8e99d536745fbb755aca8"
  },
  {
    "url": "zaji-05/index.html",
    "revision": "a972cf335a5a3eda63a96096c6a2cb34"
  },
  {
    "url": "zaji-06/index.html",
    "revision": "966ce0c5570acc184ec573b1dd82e606"
  },
  {
    "url": "zaji-07/index.html",
    "revision": "50a6132064d86d43bd6563d26382dd4d"
  },
  {
    "url": "zaji-08/index.html",
    "revision": "75e1c1f4d45b6cde3ad77e08ebf8bc18"
  },
  {
    "url": "zaji-09/index.html",
    "revision": "ce9983ae88f5c3bb31226228822b5c6d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
