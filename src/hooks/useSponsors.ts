import { useEffect, useState } from "react";

export type TSponsor = {
  description: string;
  title: string;
  logo: string;
  website: string;
  address: string
}

export const useSponsors = () => {
  const [sponsors, setSponsors] = useState<TSponsor[]>([]);
  const [clubSponsors, setClubSponsors] = useState<TSponsor[]>([]);
  const [playerSponsors, setPlayerSponsors] = useState<TSponsor[]>([]);

  useEffect(() => {
    const loadSponsors = async () => {
      const modules = import.meta.glob("../content/sponsors/*.json");
      const imports = await Promise.all(
        Object.values(modules).map((load: any) => load())
      );
      const items = imports.map((mod) => mod.default || mod);

      const unique = (arr: any[]) =>
        arr.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.title === item.title)
        );

      setSponsors(unique(items));
      setClubSponsors(unique(items.filter((i) => i.sponsoring === "club")));
      setPlayerSponsors(unique(items.filter((i) => i.sponsoring === "player")));
    };

    loadSponsors();
  }, []);

  return { clubSponsors, playerSponsors, sponsors };
};
