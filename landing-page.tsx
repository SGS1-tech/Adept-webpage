import { useState } from 'react'
import { ArrowRight, CheckCircle, Mail, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#1da1f2]/10">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADEPTLINK%20(2)%20(1)-8XB3H1z1pNmroR2eJDV1jTGCgUipuu.png"
            alt="Adept Link"
            className="h-12 w-auto"
          />
        </div>
      </header>
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0c1c55] sm:text-5xl md:text-6xl">
          Your Hub for Seamless B2B Connections
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Empowering vendors and businesses with AI-driven insights and streamlined order management.
        </p>
        <Button className="text-lg bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white">
          Learn More
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
      <section className="bg-[#0c1c55]/5 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-semibold">About Adept Link</h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            Adept Link is revolutionizing B2B connections by leveraging AI technology to create a seamless, 
            efficient platform for vendors and businesses to connect, manage orders, and gain valuable insights.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {['Multivendor Support', 'AI Integration', 'Real-time Analytics'].map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <CheckCircle className="mb-4 h-12 w-12 text-[#1da1f2]" />
                <h3 className="mb-2 text-xl font-semibold">{feature}</h3>
                <p className="text-center text-gray-600">
                  Streamlining B2B operations with cutting-edge technology and user-centric design.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center text-3xl font-semibold">Product Sneak Peek</h2>
        <div className="mb-12 overflow-hidden rounded-lg bg-gray-200">
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="Adept Link Platform Preview"
            className="w-full object-cover"
          />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {['Vendor Onboarding', 'Product Catalog Management', 'B2B Order Processing'].map((feature, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold">{feature}</h3>
              <p className="text-gray-600">
                Simplifying complex B2B processes with intuitive interfaces and powerful backend systems.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#0c1c55]/5 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-semibold">Benefits for Users</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">For Buyers</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-600">
                <li>Simplified sourcing process</li>
                <li>AI-powered product recommendations</li>
                <li>Streamlined purchasing workflow</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">For Sellers</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-600">
                <li>Efficient inventory management</li>
                <li>Automated order processing</li>
                <li>Real-time market insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-8 text-center text-3xl font-semibold">Stay Updated</h2>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col items-center space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Button type="submit" className="w-full bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white">
            Subscribe for Updates
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </form>
        <div className="mt-12 flex justify-center space-x-8">
          <img src="/placeholder.svg?height=50&width=100" alt="Partner Logo" className="h-12 w-auto" />
          <img src="/placeholder.svg?height=50&width=100" alt="Partner Logo" className="h-12 w-auto" />
          <img src="/placeholder.svg?height=50&width=100" alt="Partner Logo" className="h-12 w-auto" />
        </div>
      </section>
      <footer className="bg-[#0c1c55] py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex items-center">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADEPTLINK%20(2)%20(1)-8XB3H1z1pNmroR2eJDV1jTGCgUipuu.png"
                alt="Adept Link"
                className="h-8 w-auto"
              />
            </div>
            <div className="text-sm">
              © 2023 Adept Link. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#1da1f2]">Privacy Policy</a>
              <a href="#" className="hover:text-[#1da1f2]">Terms of Service</a>
              <a href="#" className="hover:text-[#1da1f2]">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}