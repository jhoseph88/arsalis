import Content from "./content.json"

export function scrollToRef(ref) {
  window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })
}

export function getContent() {
  return JSON.parse(Content)
}
