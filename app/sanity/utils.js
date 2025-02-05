import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAreaOfExpertise() {
  return client.fetch(groq`*[_type == "areaOfExpertise"]`);
}
export async function getArticles() {
  return client.fetch(groq`*[_type == "article"]`);
}
export async function getAuthors() {
  return client.fetch(groq`*[_type == "author"]`);
}
export async function getBrochures() {
  return client.fetch(groq`*[_type == "brochure"]`);
}
export async function getCompletedProjects() {
  return client.fetch(groq`*[_type == "completedProjects"]`);
}
export async function getDashboard() {
  return client.fetch(groq`*[_type == "dashboard"]`);
}
export async function getData() {
  return client.fetch(groq`*[_type == "data"]`);
}
export async function getGallery() {
  return client.fetch(groq`*[_type == "gallery"]`);
}
export async function getImpactStats() {
  return client.fetch(groq`*[_type == "impactStats"][0]`);
}
export async function getInternships() {
  return client.fetch(groq`*[_type == "internship"]`);
}
export async function getJobOpenings() {
  return client.fetch(groq`*[_type == "jobOpening"]`);
}
export async function getOngoingProjects() {
  return client.fetch(groq`*[_type == "ongoingProjects"]`);
}
export async function getPartners() {
  return client.fetch(groq`*[_type == "partner"]`);
}
export async function getPastEvents() {
  return client.fetch(groq`*[_type == "pastEvent"]`);
}
export async function getPublications() {
  return client.fetch(groq`*[_type == "publication"]`);
}
export async function getReports() {
  return client.fetch(groq`*[_type == "report"]`);
}
export async function getSlider() {
  return client.fetch(groq`*[_type == "imageSlider"][0]`);
}
export async function getSponsors() {
  return client.fetch(groq`*[_type == "sponsor"]`);
}
export async function getTeamMembers() {
  return client.fetch(groq`*[_type == "teamMember"]`);
}
export async function getUpcomingEvents() {
  return client.fetch(groq`*[_type == "upcomingEvent"]`);
}
export async function getVideos() {
  return client.fetch(groq`*[_type == "video"]`);
}
export async function getVolunteers() {
  return client.fetch(groq`*[_type == "volunteer"]`);
}

export async function getVideo() {
  return client.fetch(groq`*[_type == "videoUpload"][0]`);
}
export async function getArticleBySlug(slug) {
  return client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      title,
      slug,
      image,
      content
    }`,
    { slug },
  );
}
