import NewsList from "@/src/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/src/lib/news";
import Link from "next/link";
import { Suspense } from "react";

export default async function filterNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let news;
  let links = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links =  getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }
  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const availableYear = await getAvailableNewsYears();
  if (
  (selectedYear && !availableYear.includes(selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
    ){
    throw new Error("Invalid filter");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              let href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        {newsContent}
      </Suspense>
    </>
  );
}
