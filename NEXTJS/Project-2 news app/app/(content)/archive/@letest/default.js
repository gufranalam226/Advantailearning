import NewsList from "@/src/components/news-list"
import { getLatestNews } from "@/src/lib/news"

export default async function letestPage() {
  const letestNews = await getLatestNews()
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={letestNews} />
    </>
  )
}
