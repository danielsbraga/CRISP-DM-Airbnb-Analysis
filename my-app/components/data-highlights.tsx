"use client"

import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const propertyTypeData = [
  { type: "Apartment", count: 72.86, fill: "hsl(var(--chart-1))" },
  { type: "House", count: 15.68, fill: "hsl(var(--chart-2))" },
  { type: "Condominium", count: 6.44, fill: "hsl(var(--chart-3))" },
  { type: "Others", count: 5.02, fill: "hsl(var(--chart-4))" },
]

export function DataHighlights() {
  return (
    <section className="container py-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Initial Findings</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Key takeaways identified during the first pass of the data review.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Property Types Distribution</CardTitle>
            <CardDescription>Breakdown of homestays by property type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bar_chart_distribution_property_types_summary-VOHuE6a3JdBjlM4lkLKVoaBUm5cy7n.png"
                alt="Distribution of Property Types"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              As a highly urban city like Boston, it is difficult to continue expanding horizontally. This is why
              apartments dominate the Airbnb market, making up 73% of homestays, followed by houses at 16% and
              condominiums at 6%. Other property types account for the remaining 5%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Price Distribution by Property Type</CardTitle>
            <CardDescription>How prices vary across different property types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vinil_of_prices_by_property_type-2H3YpMaSl3AVI4lKLpZNZGdBV0Qgma.png"
                alt="Price Distribution by Property Type"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Apartments and Condominiums have median prices around $150, while Houses and Others have median prices
              around $75. All property types show a wide range of prices, with significant outliers above $400.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
