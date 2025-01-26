import { useEffect, useState } from "react";
import {
  getHomePage,
  getAboutPage,
  getCompaniesPage,
  getContactPage,
  getImpactPage,
  getPrivacyPage,
  getProfessionalsPage,
  getTermsPage,
} from "../sanity/utils";

export function useFetchHomePage() {
  const [homepage, setHomepage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHomePage() {
      try {
        const data = await getHomePage();
        setHomepage(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchHomePage();
  }, []);

  return { homepage, loading, error };
}

export function useFetchAboutPage() {
  const [aboutPage, setAboutPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAboutPage() {
      try {
        const data = await getAboutPage();
        setAboutPage(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAboutPage();
  }, []);

  return { aboutPage, loading, error };
}

export function useFetchCompaniesPage() {
  const [companiesPage, setCompaniesPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCompaniesPage() {
      try {
        const data = await getCompaniesPage();
        setCompaniesPage(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCompaniesPage();
  }, []);

  return { companiesPage, loading, error };
}

export function useFetchContactPage() {
  const [contactPage, setContactPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContactPage() {
      try {
        const data = await getContactPage();
        setContactPage(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchContactPage();
  }, []);

  return { contactPage, loading, error };
}

export function useFetchImpactPage() {
  const [impactPage, setImpactPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImpactPage() {
      try {
        const data = await getImpactPage();
        setImpactPage(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchImpactPage();
  }, []);

  return { impactPage, loading, error };
}

export function useFetchPrivacyPage() {
  const [privacyPage, setPrivacyPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPrivacyPage() {
      try {
        const data = await getPrivacyPage();
        setPrivacyPage(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPrivacyPage();
  }, []);

  return { privacyPage, loading, error };
}

export function useFetchProfessionalsPage() {
  const [professionalsPage, setProfessionalsPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfessionalsPage() {
      try {
        const data = await getProfessionalsPage();
        setProfessionalsPage(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProfessionalsPage();
  }, []);

  return { professionalsPage, loading, error };
}

export function useFetchTermsPage() {
  const [termsPage, setTermsPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTermsPage() {
      try {
        const data = await getTermsPage();
        setTermsPage(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTermsPage();
  }, []);

  return { termsPage, loading, error };
}
