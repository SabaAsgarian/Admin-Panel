/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    images: {
        unoptimized: true,
        domains: ['https://www.linkedin.com/', 'https://media.licdn.com', 'https://encrypted-tbn3.gstatic.com', 'https://encrypted-tbn0.gstatic.com', 'https://img.theweek.in', 'https://static1.srcdn.com', 'https://upload.wikimedia.org', 'https://m.media-amazon.com', 'https://dkstatics-public.digikala.com'],
    },
};

export default nextConfig;
