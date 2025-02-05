import { useEffect, useState } from "react";
import {
  getAreaOfExpertise,
  getArticles,
  getAuthors,
  getBrochures,
  getCompletedProjects,
  getDashboard,
  getData,
  getGallery,
  getSlider,
  getImpactStats,
  getInternships,
  getJobOpenings,
  getOngoingProjects,
  getPartners,
  getPastEvents,
  getPublications,
  getReports,
  getSponsors,
  getTeamMembers,
  getUpcomingEvents,
  getVideos,
  getVolunteers,
  getVideo,
} from "../sanity/utils";
import { client } from "../sanity/sanity";

export function useFetchAreaOfExpertise() {
  const [areaOfExpertise, setAreaOfExpertise] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAreaOfExpertise() {
      try {
        const data = await getAreaOfExpertise();
        setAreaOfExpertise(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAreaOfExpertise();
  }, []);

  return { areaOfExpertise, loading, error };
}

export function useFetchArticles() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return { articles, loading, error };
}

export function useFetchAuthors() {
  const [authors, setAuthors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAuthors() {
      try {
        const data = await getAuthors();
        setAuthors(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAuthors();
  }, []);

  return { authors, loading, error };
}

export function useFetchBrochures() {
  const [brochures, setBrochures] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBrochures() {
      try {
        const data = await getBrochures();
        setBrochures(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBrochures();
  }, []);

  return { brochures, loading, error };
}

export function useFetchCompletedProjects() {
  const [completedProjects, setCompletedProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCompletedProjects() {
      try {
        const data = await getCompletedProjects();
        setCompletedProjects(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCompletedProjects();
  }, []);

  return { completedProjects, loading, error };
}

export function useFetchDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const data = await getDashboard();
        setDashboard(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  return { dashboard, loading, error };
}

export function useFetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}

export function useFetchGallery() {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const data = await getGallery();
        setGallery(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  return { gallery, loading, error };
}

export function useFetchSlider() {
  const [slider, setSlider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSlider() {
      try {
        const data = await getSlider();
        setSlider(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchSlider();
  }, []);

  return { slider, loading, error };
}

export function useFetchImpactStats() {
  const [impactStats, setImpactStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImpactStats() {
      try {
        const data = await getImpactStats();
        setImpactStats(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchImpactStats();
  }, []);

  return { impactStats, loading, error };
}

export function useFetchInternships() {
  const [internships, setInternships] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInternships() {
      try {
        const data = await getInternships();
        setInternships(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchInternships();
  }, []);

  return { internships, loading, error };
}

export function useFetchJobOpenings() {
  const [jobOpenings, setJobOpenings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobOpenings() {
      try {
        const data = await getJobOpenings();
        setJobOpenings(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchJobOpenings();
  }, []);

  return { jobOpenings, loading, error };
}

export function useFetchOngoingProjects() {
  const [ongoingProjects, setOngoingProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOngoingProjects() {
      try {
        const data = await getOngoingProjects();
        setOngoingProjects(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchOngoingProjects();
  }, []);

  return { ongoingProjects, loading, error };
}

export function useFetchPartners() {
  const [partners, setPartners] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPartners() {
      try {
        const data = await getPartners();
        setPartners(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPartners();
  }, []);

  return { partners, loading, error };
}

export function useFetchPastEvents() {
  const [pastEvents, setPastEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPastEvents() {
      try {
        const data = await getPastEvents();
        setPastEvents(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPastEvents();
  }, []);

  return { pastEvents, loading, error };
}

export function useFetchPublications() {
  const [publications, setPublications] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPublications() {
      try {
        const data = await getPublications();
        setPublications(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPublications();
  }, []);

  return { publications, loading, error };
}

export function useFetchReports() {
  const [reports, setReports] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReports() {
      try {
        const data = await getReports();
        setReports(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchReports();
  }, []);

  return { reports, loading, error };
}

export function useFetchSponsors() {
  const [sponsors, setSponsors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSponsors() {
      try {
        const data = await getSponsors();
        setSponsors(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchSponsors();
  }, []);

  return { sponsors, loading, error };
}

export function useFetchTeamMembers() {
  const [teamMembers, setTeamMembers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const data = await getTeamMembers();
        setTeamMembers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTeamMembers();
  }, []);

  return { teamMembers, loading, error };
}

export function useFetchUpcomingEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUpcomingEvents() {
      try {
        const data = await getUpcomingEvents();
        setUpcomingEvents(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchUpcomingEvents();
  }, []);

  return { upcomingEvents, loading, error };
}

export function useFetchVideos() {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const data = await getVideos();
        setVideos(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return { videos, loading, error };
}

export function useFetchVolunteers() {
  const [volunteers, setVolunteers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVolunteers() {
      try {
        const data = await getVolunteers();
        setVolunteers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchVolunteers();
  }, []);

  return { volunteers, loading, error };
}

export function useFetchVideo() {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const data = await getVideo();
        setVideo(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchVideo();
  }, []);

  return { video, loading, error };
}
