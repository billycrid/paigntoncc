import { useEffect, useState } from "react";

export const useSponsors = () => {
  const [sponsors, setSponsors] = useState<any[]>([]);
  const [clubSponsors, setClubSponsors] = useState<any[]>([]);
  const [playerSponsors, setPlayerSponsors] = useState<any[]>([]);

  useEffect(() => {
    const context = require.context("../content/sponsors", false, /\.json$/);
    const items = context.keys().map((key) => context(key));

    const unique = (arr: any[]) =>
      arr.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.title === item.title)
      );
    setSponsors(unique(items));
    setClubSponsors(unique(items.filter((i) => i.sponsoring === "club")));
    setPlayerSponsors(unique(items.filter((i) => i.sponsoring === "player")));
  }, []);

  return { clubSponsors, playerSponsors, sponsors };
};
