import { BlogContent, Container, Retornador } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export function BlogFeed() {
  interface InfoProps {
    id: number;
    title: string;
    completedTitle: string;
    thumbnail: string;
    description: string;
    CompletedText: string;
    publishedDate: string;
  }

  const [info, setInfo] = useState<InfoProps>({} as InfoProps);
  const { blogid } = useParams();

  useEffect(() => {
    async function getNews() {
      const response = await fetch(`http://localhost:3333/news/${blogid}`);
      const convertedResponse = await response.json();
      setInfo(convertedResponse);
      console.log(convertedResponse);
    }
    getNews();
  }, []);

  return (
    <Container>
      <Retornador to={`/`}>
        <h1>
          Ínicio <span>{` > `}</span>
          feed
        </h1>
      </Retornador>

      <BlogContent>
        <h1>{info.completedTitle}</h1>
        <img src={info.thumbnail} alt="Thumbnail da notícia" />
        <p>{info.CompletedText}</p>
      </BlogContent>
    </Container>
  );
}
