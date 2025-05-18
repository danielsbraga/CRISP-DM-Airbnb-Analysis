import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ConclusionSection() {
  return (
    <section className="container py-4 md:py-8">
      <div className="container py-4 md:py-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Conclusion & Recommendations</h2>
          <p className="mt-4 text-lg text-muted-foreground">Key findings from our analysis of Boston Airbnb data</p>
        </div>

        {/* Highlighted Conclusion Boxes */}
        <div className="mt-12 space-y-3">
          <div className="bg-white rounded-lg border border-primary/20 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Badge className="mt-0.5 whitespace-nowrap" variant="outline">
                Competitive Landscape
              </Badge>
              <p className="text-sm text-muted-foreground">
                The first thing you should look for is what does the competition in your city look like. If you have an
                apartment, compare what you provide with these types of properties.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-primary/20 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Badge className="mt-0.5 whitespace-nowrap" variant="outline">
                Pricing Strategy
              </Badge>
              <p className="text-sm text-muted-foreground">
                Pricing tends to be relatively consistent across different property types. The value you provide has
                more impact in other features.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-primary/20 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Badge className="mt-0.5 whitespace-nowrap" variant="outline">
                Pricing Trends
              </Badge>
              <p className="text-sm text-muted-foreground">
                Middle-range prices are the most common in Boston, while higher and lower prices are less frequent,
                suggesting a market preference for moderately priced accommodations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-primary/20 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Badge className="mt-0.5 whitespace-nowrap" variant="outline">
                Location Value
              </Badge>
              <p className="text-sm text-muted-foreground">
                Location significantly impacts value. The most expensive areas are typically close to key attractions
                such as the city center, tourist spots, the airport, and the coast.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-primary/20 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Badge className="mt-0.5 whitespace-nowrap" variant="outline">
                Guest Capacity
              </Badge>
              <p className="text-sm text-muted-foreground">
                The number of guests a property can accommodate is the most critical feature. If you have an extra room,
                add a bed! Properties with more beds, bedrooms, and higher guest capacity generally command higher
                prices.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-primary/20 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Badge className="mt-0.5 whitespace-nowrap" variant="outline">
                Host Experience
              </Badge>
              <p className="text-sm text-muted-foreground">
                Hosts with more listings tend to charge higher prices, possibly due to a more professional approach.
                Consider asking experienced hosts for tips on attracting high-quality clients.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-primary/20 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Badge className="mt-0.5 whitespace-nowrap" variant="outline">
                Quality Expectations
              </Badge>
              <p className="text-sm text-muted-foreground">
                Information like summary, host details, and review scores are expected at any price point. These are
                baseline requirements rather than price differentiators.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>For Hosts</CardTitle>
              <CardDescription>Optimize your listing strategy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                Focus on adding high-impact amenities like fast WiFi, dedicated workspaces, and premium kitchen
                appliances to justify higher rates.
              </p>
              <p className="text-sm">
                It is not always about number of rooms! Add beds or convert extra space to accommodate more guests.
              </p>
              <p className="text-sm">
                Learn from experienced hosts to improve service quality and attract higher-paying guests.
              </p>
            </CardContent>
            <CardFooter>{/* Button removed as requested */}</CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Investors</CardTitle>
              <CardDescription>Make data-driven investment decisions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                Target neighborhoods with high price-to-cost ratios - Brooklyn shows the best ROI potential in analysis.
              </p>
              <p className="text-sm">
                Focus on 2-bedroom properties, which show the optimal balance between acquisition cost and rental
                income.
              </p>
              <p className="text-sm">
                Invest in spaces that can be adapted for future expansion (e.g., turning a living room into another
                sleeping area).
              </p>
            </CardContent>
            <CardFooter>{/* Button removed as requested */}</CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Property Managers</CardTitle>
              <CardDescription>Enhance your management strategy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">Offer packages that include internet, AC, and entertainment options.</p>
              <p className="text-sm">
                Implement automated pricing tools that adjust rates based on our prediction model factors.
              </p>
              <p className="text-sm">
                The more properties you manage well, the higher your professional reputation and pricing power.
              </p>
            </CardContent>
            <CardFooter>{/* Button removed as requested */}</CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
