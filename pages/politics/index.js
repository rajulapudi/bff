import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../../src/components/home/Header";
import MainFeaturedPost from "../../src/components/home/MainFeaturedPost";
import Footer from "../../src/components/home/Footer";
import Feed from "../../src/components/home/Feed";
import sections from "../../src/constants/sections.json";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "Fashion, Movies and Sports",
  description: "Get the best curated content!",
  image:
    "https://images.unsplash.com/photo-1537123547273-e59f4f437f1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
  imgText: "the BFF",
};

function Business({ posts }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="theBFF" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Feed posts={posts} />
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  var url =
    "https://newsapi.org/v2/everything?q=politics&" +
    "apiKey=0240a9dd31d04b97bf86032f73859a6a";
  const res = await fetch(url);
  const response = await res.json();
  const posts = response.articles;
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default Business;
