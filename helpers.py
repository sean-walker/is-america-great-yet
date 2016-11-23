import feedparser

def lookup():
    """Looks up Google News articles about Donald Trump."""

    feed = feedparser.parse("http://news.google.com/news?q=Donald+Trump&output=rss")

    results = [{"link": item["link"], "title": item["title"]} for item in feed["items"]]
    return results
