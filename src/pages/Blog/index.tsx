import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { BlogFeed } from "../../components/BlogFeed";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface InfoProps {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  CompletedText: string;
  publishedDate: string;
}

export function Blog() {
  return (
    <Container>
      <Header />
      <BlogFeed />
      <Footer />
    </Container>
  );
}
