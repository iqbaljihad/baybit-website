import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Bay of Bengal IT, BayBIT" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About BayBIT" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="portfolio" heading="Portfolio" />
        <ContactSection sectionId="github" heading="Contact Us" />
      </Page>
    </>
  );
}
