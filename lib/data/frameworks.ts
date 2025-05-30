export interface Framework {
  value: string
  label: string
  logo: string
}

export const frameworks: Framework[] = [
  { value: "nextjs", label: "Next.js", logo: "/logos/nextjs.png" },
  { value: "remix", label: "Remix", logo: "/logos/remix.png" },
  { value: "nuxt", label: "Nuxt.js", logo: "/logos/nuxt.png" },
  { value: "sveltekit", label: "SvelteKit", logo: "/logos/sveltekit.png" },
  { value: "astro", label: "Astro", logo: "/logos/astro.png" },
  { value: "react", label: "React", logo: "/logos/react.png" },
  { value: "vue", label: "Vue.js", logo: "/logos/vue.png" },
  { value: "angular", label: "Angular", logo: "/logos/angular.png" },
]
