
import '../Shared/Shared.css';
import { Helmet } from "react-helmet";
import { SponsorsPage as SponsorsComponent } from '../../components/SponsorsV2/Sponsors.tsx'
import { useSponsors } from '../../hooks/useSponsors.ts';

export const Sponsors = () => {
    const { sponsors } = useSponsors();
    // Build JSON-LD object
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Paignton Cricket Club",
        "url": "https://www.paigntoncricketclub.co.uk/",
        "sponsor": sponsors?.map((sponsor) => ({
            "@type": "Organization",
            "name": sponsor.title,
            ...(sponsor.website ? { "url": sponsor.website } : {}),
            ...(sponsor.logo ? {
                "logo": {
                    "@type": "ImageObject",
                    "url": sponsor.logo,
                }
            } : {})
        }))
    };
    return <div className="FullPageContent">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Sponsors - Paignton Cricket Club</title>
            <link href="/sponsors" />
            {sponsors?.map((sponsor, index) => (
                <meta
                    key={index}
                    name="sponsor"
                    content={sponsor.title || `Sponsor ${index + 1}`}
                />
            ))}
            <meta
                name="description"
                content={`Our valued sponsors: ${sponsors?.map(s => s.title).join(', ')}`}
            />
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
        <h3 className="ContentTitle">PAIGNTON CRICKET CLUB SPONSORS!</h3>
        <div className="entry-content">
            <SponsorsComponent />
        </div>
    </div>
}