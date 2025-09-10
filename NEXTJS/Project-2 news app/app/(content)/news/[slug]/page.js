import { DUMMY_NEWS } from "@/dummy-news"
import { getNewsItem } from "@/src/lib/news"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function NewsDetailPage({params}) {
    const newsSlug = params.slug
    // const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug == newsSlug)
    const newsItem = await getNewsItem(newsSlug)
    if(!newsItem){
      notFound()
    }
    console.log(newsItem)
  return (
    <article className="news-article">
        <header>
          <Link href={`/news/${newsItem.slug}/image`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </Link>
          <h2>
            {newsItem.title}
          </h2>
          <time dateTime={newsItem.data}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      
    </article>
  )
}
