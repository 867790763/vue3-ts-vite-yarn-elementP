export const demoRoutes = [
  {
    path: '/demo/animation',
    component: () => import("@/views/demo/animation.vue"),
    hidden: true,
    name: '动画：Vue中如何实现动画',
  }
]

export default demoRoutes