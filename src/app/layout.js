import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SocialWidget from "@/components/widget/SocialWidget";
import DateTimeWidget from "@/components/widget/DateTimeWidget";
import FloatingBookAppointment from "@/components/widget/FloatingBookAppointment";
import ExitIntentPopup from "@/components/partials/ExitIntentPopup";
import TopBanner from "@/components/partials/TopBanner";
import ThemeToggle from "@/components/widget/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Structured data for Person (SEO)
const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Abhishek Singh",
  "jobTitle": "Applied AI Engineer | AI Automation Architect",
  "url": "https://abhishekthatguy.in",
  "sameAs": [
    "https://github.com/abhishekthatguy",
    "https://linkedin.com/in/abhishekthatguy",
    "https://twitter.com/abhishekthatguy"
  ],
  "knowsAbout": [
    "Multi-Agent Systems",
    "RAG",
    "Vector Search",
    "pgvector",
    "LLM Routing",
    "FastAPI",
    "Celery",
    "Redis",
    "Next.js",
    "React",
    "Performance Optimization"
  ],
  "description": "Applied AI Engineer building production-grade AI systems: multi-agent workflows, RAG pipelines, and cost-optimized LLM infrastructure. AI Automation Architect specializing in Zaytri and high-performance web applications."
};

// WebSite structured data for sitelinks search
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Abhishek Singh Portfolio",
  "url": "https://abhishekthatguy.in",
  "author": { "@type": "Person", "name": "Abhishek Singh" },
  "description": "Portfolio of Abhishek Singh — Applied AI Engineer, Multi-Agent Systems, AI Automation, RAG, LLM infrastructure."
};

export const metadata = {
  title: {
    default: "Abhishek Singh | Applied AI Engineer | Multi-Agent Systems | AI Automation",
    template: "%s | Abhishek Singh",
  },
  description: "Applied AI Engineer & AI Automation Architect. Production-grade multi-agent systems, RAG pipelines, pgvector, Celery/Redis, multi-LLM routing. Zaytri AI platform. 90+ Lighthouse performance.",
  keywords: [
    "Abhishek Singh",
    "Applied AI Engineer",
    "AI Automation Architect",
    "Multi-Agent Systems",
    "RAG",
    "pgvector",
    "LLM Routing",
    "FastAPI",
    "Celery",
    "Redis",
    "Next.js",
    "React",
    "AI Systems Engineer",
    "portfolio",
    "abhishekthatguy",
  ],
  authors: [{ name: "Abhishek Singh", url: "https://abhishekthatguy.in" }],
  creator: "Abhishek Singh",
  publisher: "Abhishek Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://abhishekthatguy.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abhishek Singh | Applied AI Engineer | Multi-Agent Systems & AI Automation",
    description: "Applied AI Engineer building multi-agent workflows, RAG pipelines, and cost-optimized LLM infrastructure. Zaytri AI platform. 90+ Lighthouse.",
    url: "https://abhishekthatguy.in",
    siteName: "Abhishek Singh Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Singh — Applied AI Engineer | AI Automation Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Singh | Applied AI Engineer | AI Automation",
    description: "Multi-agent systems, RAG, LLM routing. Zaytri AI platform. 90+ Lighthouse.",
    images: ["/twitter-image.png"],
    creator: "@abhishekthatguy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
  category: "technology",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        {/* Performance: preconnect to critical origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Theme initialization script - prevents flash of unstyled content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const getSystemTheme = () => {
                  if (typeof window !== 'undefined') {
                    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  return 'light';
                };
                
                const getTheme = () => {
                  try {
                    const stored = localStorage.getItem('theme-preference');
                    if (stored && ['light', 'dark', 'system'].includes(stored)) {
                      return stored === 'system' ? getSystemTheme() : stored;
                    }
                  } catch (e) {}
                  return 'light';
                };
                
                const theme = getTheme();
                document.documentElement.classList.add(theme);
                document.documentElement.setAttribute('data-theme', theme);
                
                const metaThemeColor = document.querySelector('meta[name="theme-color"]');
                if (metaThemeColor) {
                  metaThemeColor.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff');
                }
              })();
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q3GB11NJ1S"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q3GB11NJ1S');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <TopBanner />
        {children}
        <SocialWidget />
        <FloatingBookAppointment />
        <DateTimeWidget />
        <ThemeToggle />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
