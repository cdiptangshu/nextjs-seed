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
  message: string
  bio: string;
  banner: Banner;
  links: Link[];
}

export default async function Home() {
  const { data } = await getHomePageData();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      {/* Top Heading */}
      <h1 className="w-full fixed top-0 left-0 text-center bg-teal-900 text-white text-4xl font-bold py-4 shadow-md z-50">
        {data.message}
      </h1>

      {/* Content Section */}
      <div className="pt-20 w-full">
        <HeroSection data={data} />
      </div>
    </div>
  );
}

async function HeroSection({
  data,
}: {
  readonly data: HomePageProps;
}) {
  const { bio, banner, links } = data;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-6 bg-gray-800 rounded-lg shadow-md">
      {/* Left Column: Banner Image */}
      <div className="w-full md:w-1/2 max-w-4xl">
        <Image
          src={getMediaUrl(banner.url) || "/default-banner.jpg"} // Fallback to a default image
          alt={banner.alternativeText || "Banner Image"}
          width={1200}
          height={600}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Right Column: Text and Links */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6">
        {/* Bio Section */}
        <p className="text-lg text-gray-300 text-center md:text-left max-w-2xl">{bio}</p>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gray-700 rounded-md shadow hover:bg-gray-600 transition"
              href={link.url}
              target={link.isExternal ? "_blank" : "_self"}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}