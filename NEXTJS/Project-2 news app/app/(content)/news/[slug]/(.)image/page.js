import { DUMMY_NEWS } from "@/dummy-news"
import { getNewsItem } from "@/src/lib/news"
import { notFound } from "next/navigation"

export default async function ImagePage({params}) {
    const newsItemSlug = params.slug
    const newsItem = await getNewsItem(newsItemSlug)
    if(!newsItem){
      notFound()
    }
  return (
    <div className="fullscreen-image">
        Intercepted
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
      
    </div>
  )
}
