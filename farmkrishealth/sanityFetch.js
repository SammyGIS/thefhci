// // sanityFetch.js

// sanityFetch.js

import { sanityClient } from './sanityClient';  // Import your sanity client

export async function getSlides() {
    const query = `*[_type == "slide"] {
      title,
      description,
      "imageUrl": image.asset->url
    }`;

    try {
      const data = await sanityClient.fetch(query, { next: { revalidate: 10 } });
      return data || [];  // Return the fetched data directly, or an empty array if no data is found
    } catch (error) {
      console.error("Error fetching slides:", error);
      return [];  // Return an empty array in case of error
    }
}

export async function getImpactStats() {
  const query = `*[_type == "impactStat"] {
    title,
    value,
    description
  }`;

  try {
    const data = await sanityClient.fetch(query, { next: { revalidate: 10 } });
    return data || [];  // Return the fetched data directly, or an empty array if no data is found
  } catch (error) {
    console.error("Error fetching impact stats:", error);
    return [];  // Return an empty array in case of error
  }
}

export async function getTestimonials() {
  const query = `*[_type == "testimonial"] {
    text,
    name,
    "imageUrl": image.asset->url
  }`;

  try {
    const data = await sanityClient.fetch(query, { next: { revalidate: 10 } });
    return data || [];  // Return the fetched data directly, or an empty array if no data is found
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];  // Return an empty array in case of error
  }
}

// import { sanityClient } from './sanityClient';  // Import your sanity client


// export async function getSlides() {
//     const query = `*[_type == "slide"] {
//       title,
//       description,
//       "imageUrl": image.asset->url
//     }`;
  
//     const slides = await sanityClient.fetch(query, { next: { revalidate: 10 } }); // Revalidate every 10 seconds
//     return slides;
//   }

  
//   export async function getImpactStats() {
//     const query = `*[_type == "impactStat"] {
//       title,
//       value,
//       description
//     }`;
  
//     const impactStats = await sanityClient.fetch(query, { next: { revalidate: 10 } });
//     return impactStats;
//   }
  
//   export async function getTestimonials() {
//     const query = `*[_type == "testimonial"] {
//       text,
//       name,
//       "imageUrl": image.asset->url
//     }`;
  
//     const testimonials = await sanityClient.fetch(query, { next: { revalidate: 10 } });
//     return testimonials;
//   }
  