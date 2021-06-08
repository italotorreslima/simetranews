import { NewsCard } from "../NewsCard";
import { Container, Content } from "./styles";

export function Feed() {
  return (
    <Container>
      <Content>
        <h1>Blog</h1>
        <div></div>
      </Content>
      <NewsCard />
    </Container>
  );
}
