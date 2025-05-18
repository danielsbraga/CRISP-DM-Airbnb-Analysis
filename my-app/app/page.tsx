import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DataHighlights } from "@/components/data-highlights"
import { KeyInsights } from "@/components/key-insights"
import { PriceAnalysis } from "@/components/price-analysis"
import { ConclusionSection } from "@/components/conclusion-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image src="/airbnb-logo.svg" alt="Airbnb Logo" width={32} height={32} className="h-8 w-8" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#analysis" className="text-sm font-medium">
              Overview
            </Link>
            <Link href="#data-understanding" className="text-sm font-medium">
              Data Understanding
            </Link>
            <Link href="#first-impressions" className="text-sm font-medium">
              Initial Findings
            </Link>
            <Link href="#key-insights" className="text-sm font-medium">
              Panoramic View
            </Link>
            <Link href="#price" className="text-sm font-medium">
              Pricing
            </Link>
            <Link href="#conclusion" className="text-sm font-medium">
              Conclusion
            </Link>
          </nav>
          <div className="flex items-center gap-4"></div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative bg-black text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-jaydenburdick-3397975.jpg-KRzVKMOD27dI8yKAdSdEQgTRahjH0A.jpeg"
              alt="Boston Wharf Co. Industrial Real Estate"
              fill
              className="object-cover opacity-70"
              priority
            />
          </div>
          <div className="container mx-auto relative z-10 py-24 md:py-36">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <div>
                <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Case Study</div>
                <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-6xl">Airbnb</h1>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xl md:text-2xl">
                  Unlocking the secrets of Airbnb pricing and optimizing property listings through data-driven insights
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="analysis" className="container mx-auto py-12 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Analysis of Airbnb homestays in Boston, MA</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Using the Cross-Industry Standard Process for Data Mining (CRISP-DM) methodology, this is an analysis of
              Airbnb data to identify the best investment opportunities. Whether you are an investor, a multi-property
              manager, or a single host, you will find insights here to help you understand pricing patterns,
              neighborhood influences, and develop a predictive model for property pricing.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="rounded-lg border p-4">
              <div className="text-sm font-medium">Dataset</div>
              <div className="mt-1 text-2xl font-bold">14.9M listings</div>
              <div className="mt-1 text-sm text-muted-foreground">from Boston analyzed</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-sm font-medium">Reviews</div>
              <div className="mt-1 text-2xl font-bold">93.4M</div>
              <div className="mt-1 text-sm text-muted-foreground">guest reviews analyzed</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-sm font-medium">Variables</div>
              <div className="mt-1 text-2xl font-bold">50+</div>
              <div className="mt-1 text-sm text-muted-foreground">features analyzed for insights</div>
            </div>
          </div>
        </section>

        <section id="data-understanding" className="bg-muted/50">
          <div className="container mx-auto py-12 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">Data Understanding</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our analysis began with exploring the{' '}
                <a
                  href="https://www.kaggle.com/datasets/airbnb/boston/data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline hover:text-primary"
                >
                  Airbnb dataset
                </a>{' '}
                to understand its structure, identify patterns, and prepare it for modeling.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card className="p-6">
                <div className="text-2xl font-bold">Data Collection</div>
                <p className="mt-2 text-muted-foreground">
                  The dataset contains information about Airbnb listings including location, property type, amenities,
                  pricing, and reviews.
                </p>
              </Card>
              <Card className="p-6">
                <div className="text-2xl font-bold">Data Cleaning</div>
                <p className="mt-2 text-muted-foreground">
                  We handled missing values, removed outliers, and standardized categorical variables to prepare the
                  data for analysis.
                </p>
              </Card>
              <Card className="p-6">
                <div className="text-2xl font-bold">Feature Engineering</div>
                <p className="mt-2 text-muted-foreground">
                  Created new features from existing data, such as amenity counts, review sentiment scores, and
                  neighborhood categorization.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="first-impressions">
          <div className="container mx-auto py-4 md:py-8">
            <DataHighlights />
          </div>
        </section>

        <section id="key-insights" className="bg-gray-50">
          <div className="container mx-auto py-4 md:py-8">
            <KeyInsights />
          </div>
        </section>

        <section id="price">
          <div className="container mx-auto py-4 md:py-8">
            <PriceAnalysis />
          </div>
        </section>

        <section id="conclusion" className="bg-muted/50">
          <div className="container mx-auto py-4 md:py-8">
            <ConclusionSection />
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/airbnb-logo.svg" alt="Airbnb Logo" width={24} height={24} className="h-6 w-6" />
              <span className="text-sm font-semibold">Airbnb Analysis</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/danielsibraga/?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a
                href="https://github.com/danielsbraga/CRISP-DM-Airbnb-Analysis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a href="mailto:contact@example.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
