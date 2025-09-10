
export default function archiveLayout({archive, letest}) {
  return (
    <div>
        <h1>News Archive</h1>
        <section id="archive-filter">{archive}</section>
        <section id="archive-letest">{letest}</section>
      
    </div>
  )
}
