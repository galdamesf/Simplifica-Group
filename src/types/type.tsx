import type { JSX } from "react";

export interface ContactInformation {
  text: string;
  iconUrl: string;
  alt: string;
  link?: string;
}

export interface Media {
  text: string;
  icon: JSX.Element;
}

export interface Feature {
  title: string;
  description: string;
  iconUrl: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface JumbotronProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export interface Slide {
  id: number;
  content: string;
  image: string;
  isAlternate?: boolean;
}
