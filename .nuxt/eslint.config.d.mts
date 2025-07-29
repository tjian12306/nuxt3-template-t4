import type { FlatConfigComposer } from "../node_modules/.pnpm/eslint-flat-config-utils@2.1.1/node_modules/eslint-flat-config-utils/dist/index.mjs"
import { defineFlatConfigs } from "../node_modules/.pnpm/@nuxt+eslint-config@1.7.1_@typescript-eslint+utils@8.38.0_eslint@9.32.0_jiti@2.5.1__typ_65d1ca6df264055701258f3dd6c1c016/node_modules/@nuxt/eslint-config/dist/flat.mjs"
import type { NuxtESLintConfigOptionsResolved } from "../node_modules/.pnpm/@nuxt+eslint-config@1.7.1_@typescript-eslint+utils@8.38.0_eslint@9.32.0_jiti@2.5.1__typ_65d1ca6df264055701258f3dd6c1c016/node_modules/@nuxt/eslint-config/dist/flat.mjs"

declare const configs: FlatConfigComposer
declare const options: NuxtESLintConfigOptionsResolved
declare const withNuxt: typeof defineFlatConfigs
export default withNuxt
export { withNuxt, defineFlatConfigs, configs, options }