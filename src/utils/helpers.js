export function scrollToRef(ref) {
  window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })
}
