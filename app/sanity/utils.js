import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getHomePage() {
  return client.fetch(groq`*[_type == "home"][0]`);
}

export async function getAboutPage() {
  return client.fetch(groq`*[_type == "about"][0]`);
}

export async function getCompaniesPage() {
  return client.fetch(groq`*[_type == "companies"][0]`);
}

export async function getProfessionalsPage() {
  return client.fetch(groq`*[_type == "professional"][0]`);
}

export async function getImpactPage() {
  return client.fetch(groq`*[_type == "impact"][0]`);
}

export async function getContactPage() {
  return client.fetch(groq`*[_type == "contact"][0]`);
}

export async function getPrivacyPage() {
  return client.fetch(groq`*[_type == "privacy"][0]`);
}

export async function getTermsPage() {
  return client.fetch(groq`*[_type == "terms"][0]`);
}
