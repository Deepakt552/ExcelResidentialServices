import React from 'react';
import { Head, usePage } from '@inertiajs/react';

const Seo = ({
    title,
    description,
    keywords,
    image,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    schema
}) => {
    const { url } = usePage();
    const siteName = 'Excel Residential Services';
    const baseUrl = import.meta.env.VITE_APP_URL || 'https://excelresidential.com'; // Fallback or env
    const fullUrl = `${baseUrl}${url}`;
    const defaultImage = `${baseUrl}/images/og-default.jpg`; // Placeholder or actual default
    const metaImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : defaultImage;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaImage} />

            {/* Article Specific */}
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            {author && <meta property="article:author" content={author} />}

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Head>
    );
};

export default Seo;
