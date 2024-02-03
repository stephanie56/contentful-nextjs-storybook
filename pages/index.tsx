import Image from "next/image";
import { Inter } from "next/font/google";
import { Profiles } from "../components/ui/profiles";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [profilesData, setProfilesData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const isEmpty = profilesData.length === 0;

  const fetchProfiles = async () => {
    try {
      const result = await fetch("http://localhost:3000/api/profiles");
      const data = await result.json();
      setProfilesData(data);
    } catch (error) {
      setError(error as any);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >
      {loading ? (
        <h2 className="text-2xl mt-4">Loading...</h2>
      ) : error ? (
        <h2 className="text-2xl mt-4">Oops, there is an error.</h2>
      ) : isEmpty ? (
        <div>
          <h2 className="text-2xl mt-4">
            Hmm...This Space is Currently Empty.
          </h2>
          <p>There are no profiles to display at this time.</p>
        </div>
      ) : (
        <Profiles profiles={profilesData} />
      )}
    </main>
  );
}
