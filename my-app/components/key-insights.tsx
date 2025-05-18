import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function KeyInsights() {
  return (
    <section className="container py-4 md:py-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">Panoramic View</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Our analysis revealed several important insights about Airbnb listings and pricing factors.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Location Premium</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hexbin_price_map_strong_reds-kf09n952A4eS52XqZqQ10P6dDcHkr0.png"
                alt="Geographic Distribution of Properties by Price (Boston Map)"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-sm text-muted-foreground">
                This heat map reveals clear pricing patterns across Boston neighborhoods:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Downtown Boston and waterfront areas command the highest prices (yellow/orange hexagons)</li>
                <li>Central neighborhoods like Back Bay and Beacon Hill show consistently high prices</li>
                <li>Prices gradually decrease as you move away from the city center</li>
                <li>
                  Some isolated pockets of higher prices appear in otherwise moderate-priced areas, likely representing
                  premium properties
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                The color gradient represents average nightly rates, with darker purple indicating lower prices (~$50)
                and bright yellow showing the highest prices (above $350).
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Property Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scatter_map_by_property_type-hAE8BfSsP5WDQyT0zpoGY8mH70tVwJ.png"
                alt="Geographic Distribution of Properties by Type (Boston Map)"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-sm text-muted-foreground">
                The distribution of property types across Boston reveals interesting patterns:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Apartments (dark purple) dominate the urban core, especially in downtown Boston</li>
                <li>Houses (blue) are more prevalent in residential neighborhoods and suburban areas</li>
                <li>Condominiums (light purple) appear throughout the city but cluster in certain neighborhoods</li>
                <li>Other property types (red) are scattered throughout, with no clear geographic pattern</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                This distribution reflects Boston&apos;s urban development patterns and helps explain some of the price
                variations seen in the previous map.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
