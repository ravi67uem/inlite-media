import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata = {
  title: 'Inlite Media | Social Media Marketing & Growth Systems',
  description: 'Inlite Media is an outcome-driven creative agency that builds engineered growth systems for brands through social media marketing, digital strategy and content creation.',
  keywords: ['social media marketing agency', 'digital marketing agency', 'content marketing', 'growth systems', 'Inlite Media'],
  authors: [{ name: 'Inlite Media' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Inlite Media - Growth Driven Marketing Agency',
    description: 'We replace random marketing with engineered growth systems.',
    type: 'website',
    url: 'https://inlitemedia.in',
  },
  icons: {
    icon: '/logo.png',
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Inlite Media",
  "url": "https://inlitemedia.in",
  "sameAs": [
    "https://www.instagram.com/inlitemedia/",
    "https://www.facebook.com/people/Inlite-Media/61583128961822/",
    "https://www.linkedin.com/company/inlitemedia/"
  ],
  "description": "Inlite Media is an outcome-driven creative agency that builds marketing growth systems."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
