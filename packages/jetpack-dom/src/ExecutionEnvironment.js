const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

export const ExecutionEnvironment = {
  canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
}

export default ExecutionEnvironment
