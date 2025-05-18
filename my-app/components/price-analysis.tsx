import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PriceAnalysis() {
  return (
    <section className="container py-4 md:py-8">
      <div className="container py-4 md:py-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Understanding the key factors that influence Airbnb pricing
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Price Influencers</CardTitle>
              <CardDescription>The most significant factors affecting listing prices</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    1
                  </div>
                  <div>
                    <div className="font-medium">Accommodates</div>
                    <div className="text-sm text-muted-foreground">
                      How many people can stay or be hosted in the home has the strongest correlation (0.56) with price.
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    2
                  </div>
                  <div>
                    <div className="font-medium">Bedrooms & Beds</div>
                    <div className="text-sm text-muted-foreground">
                      Usually there are same number of rooms and Bedrooms. Both show strong correlation (0.42) with
                      price.
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    3
                  </div>
                  <div>
                    <div className="font-medium">Cleaning Fee</div>
                    <div className="text-sm text-muted-foreground">
                      Properties with higher cleaning fees per area in homestays (0.41 correlation) tend to have higher
                      nightly rates
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    4
                  </div>
                  <div>
                    <div className="font-medium">Host Listings Count</div>
                    <div className="text-sm text-muted-foreground">
                      Professional hosts with multiple homestays have more experience and (0.34 correlation) charge
                      premium prices
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    5
                  </div>
                  <div>
                    <div className="font-medium">Location (Latitude/Longitude)</div>
                    <div className="text-sm text-muted-foreground">
                      Geographic position significantly impacts pricing (0.29 correlation) the closer you are to the
                      center and Airport.
                    </div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Price Distribution Histogram</CardTitle>
              <CardDescription>How prices are distributed across property types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hist_of_prices_by_property_type-NNnECMVyGc818gtCKty3Ysfr9NLIWZ.png"
                  alt="Distribution of Prices by Property Type (Without Outliers)"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Apartments (orange) show a relatively even distribution between $50-$250, while Houses (blue) have a
                peak around $75. Condominiums (green) and other property types (red) have similar distributions but with
                fewer total listings.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
