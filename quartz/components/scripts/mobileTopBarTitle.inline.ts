function setupMobileTopBarTitle() {
  const title = document.querySelector(".mobile-home-title")
  const profile = document.querySelector(".profile-header")
  if (!title || !profile) return

  const observer = new IntersectionObserver(([entry]) => {
    title.classList.toggle("is-visible", !entry.isIntersecting)
  })

  observer.observe(profile)
  window.addCleanup(() => observer.disconnect())
}

document.addEventListener("nav", setupMobileTopBarTitle)
