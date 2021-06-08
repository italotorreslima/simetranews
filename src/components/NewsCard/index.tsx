import { Box, Container, Text } from "./styles";
import { useEffect, useState } from "react";

interface NewsProps {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  CompletedText: string;
  publishedDate: string;
}

export function NewsCard() {
  const [news, setNews] = useState<NewsProps[]>([]);

  useEffect(() => {
    async function getNews() {
      const response = await fetch(`http://localhost:3333/resumedNews`);
      const convertedResponse = await response.json();
      setNews(convertedResponse);
    }
    getNews();
  }, []);

  return (
    <Container>
      {news.map((item) => {
        return (
          <Box to={`/blog/${item.id}`}>
            <img src={item.thumbnail} alt="thumbnail" />
            <Text>
              <h2>{item.title}</h2>
              <p>
                {item.description.length <= 30
                  ? item.description
                  : `${item.description.slice(0, 1000)}...`}
              </p>
              <button>LER MAIS</button>
            </Text>
          </Box>
        );
      })}
    </Container>
  );
}
