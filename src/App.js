import React from "react";
import "./styles.css";
import Container from "./components/Container";

import Footer from "./containers/Footer";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <section
          style={{ padding: "5rem", fontSize: "2rem", textAlign: "center" }}
        >
          Sample content
        </section>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
