
import { getHomePageData } from "@/data/loaders";
import { getMediaUrl } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface Link {
  url: string;
  text: string;
  isExternal: boolean;
}

interface Banner {
  alternativeText: string;
  caption: string;
  url: string;
}

interface HomePageProps {
  bio: string;
  banner: Banner;
  links: Link[];
}

async function HeroSection({
  data
}: {
  readonly data: HomePageProps;
}) {
  
  const {bio, banner, links} = data;

  return (
    <div className="items-center justify-center">
      <Image
        src={getMediaUrl(banner.url) || ""} // URL of the banner image
        alt={banner.alternativeText || "Image"} // Alternative text for accessibility
        width={800} // Desired width
        height={400} // Desired height
        className="rounded-md shadow-lg"
      />
      <p>{bio}</p>
      <div className="mt-8 space-x-4 items-center justify-center">
        {links.map((link, index) => (
          <Link
            key={index}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100"
            href={link.url}
            target={link.isExternal ? "_blank" : "_self"}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default async function Home() {
  const {data} = await getHomePageData();

  return (
    <div className="items-center justify-items-center">
      
      <h1>Work in Progress!</h1>
      <HeroSection data={data} />
      
    </div>
  );
}
