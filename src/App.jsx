import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ExternalLink, Star, MapPin, Wifi, Car, Coffee, Utensils, Dumbbell, Waves } from 'lucide-react'
import './App.css'
import nisLogo from './assets/NISdigitalservices-Logo.png'
import nisFavicon from './assets/NISdigitalservices-Favicon.png'

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  const hotelTemplates = [
    {
      id: 1,
      name: "Luxury Resort Template",
      description: "Perfect for high-end resorts and luxury hotels",
      features: ["Full-screen hero images", "Booking integration", "Gallery showcase", "Amenities display"],
      preview: {
        title: "Azure Paradise Resort",
        subtitle: "Escape to Luxury",
        rating: 5,
        location: "Maldives",
        amenities: [
          { icon: Wifi, label: "Free WiFi" },
          { icon: Car, label: "Valet Parking" },
          { icon: Waves, label: "Private Beach" },
          { icon: Utensils, label: "Fine Dining" }
        ],
        heroText: "Experience unparalleled luxury in our overwater villas with stunning ocean views.",
        primaryColor: "#001fa4",
        accentColor: "#527dff"
      },
      images: [
        "/assets/luxury-resort-1.jpg",
        "/assets/luxury-resort-2.jpg",
        "/assets/luxury-resort-3.jpg"
      ]
    },
    {
      id: 2,
      name: "Boutique Hotel Template",
      description: "Ideal for boutique hotels and unique accommodations",
      features: ["Modern minimalist design", "Local experience focus", "Social media integration", "Event booking"],
      preview: {
        title: "The Metropolitan",
        subtitle: "Urban Sophistication",
        rating: 4.8,
        location: "Downtown",
        amenities: [
          { icon: Coffee, label: "Artisan Coffee" },
          { icon: Dumbbell, label: "Fitness Center" },
          { icon: Wifi, label: "High-Speed WiFi" },
          { icon: Car, label: "Parking" }
        ],
        heroText: "Discover the perfect blend of modern comfort and timeless elegance in the heart of the city.",
        primaryColor: "#000930",
        accentColor: "#001fa4"
      },
      images: [
        "/assets/boutique-hotel-1.jpg",
        "/assets/boutique-hotel-2.jpg",
        "/assets/boutique-hotel-3.jpg"
      ]
    },
    {
      id: 3,
      name: "Business Hotel Template",
      description: "Designed for business hotels and conference centers",
      features: ["Meeting room booking", "Business center showcase", "Corporate packages", "Event management"],
      preview: {
        title: "Executive Suites",
        subtitle: "Where Business Meets Comfort",
        rating: 4.7,
        location: "Business District",
        amenities: [
          { icon: Wifi, label: "Business WiFi" },
          { icon: Car, label: "Executive Parking" },
          { icon: Coffee, label: "24/7 Coffee Bar" },
          { icon: Utensils, label: "Conference Catering" }
        ],
        heroText: "Elevate your business travel with our premium facilities and professional services.",
        primaryColor: "#527dff",
        accentColor: "#001fa4"
      },
      images: [
        "/assets/business-hotel-1.jpg",
        "/assets/business-hotel-2.jpg",
        "/assets/business-hotel-3.jpg"
      ]
    }
  ]

  const TemplatePreview = ({ template }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div 
        className="h-64 relative flex items-center justify-center text-white"
        style={{ backgroundColor: template.preview.primaryColor }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative text-center z-10">
          <h2 className="text-3xl font-bold mb-2">{template.preview.title}</h2>
          <p className="text-lg opacity-90">{template.preview.subtitle}</p>
          <div className="flex items-center justify-center mt-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(template.preview.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
              <span className="ml-2 text-sm">{template.preview.rating}</span>
            </div>
            <div className="flex items-center ml-4">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{template.preview.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-6">{template.preview.heroText}</p>
        
        {/* Amenities */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Amenities</h3>
          <div className="grid grid-cols-2 gap-3">
            {template.preview.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center">
                <amenity.icon className="w-4 h-4 mr-2" style={{ color: template.preview.accentColor }} />
                <span className="text-sm">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          className="w-full"
          style={{ backgroundColor: template.preview.primaryColor }}
        >
          Book Now
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1f59f8] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={nisLogo} alt="NIS Digital Services" className="h-20 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#templates" className="text-white hover:text-blue-200 transition-colors">Templates</a>

            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hotel Website Templates
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Showcase your hotel with our professionally designed templates. 
            Each template is crafted to convert visitors into guests with stunning visuals and seamless booking experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">Responsive Design</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Booking Integration</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">SEO Optimized</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Mobile First</Badge>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Template
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each template is designed with your guests in mind, featuring modern aesthetics and proven conversion elements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {hotelTemplates.map((template) => (
              <Card key={template.id} className="cursor-pointer transition-all duration-300 hover:shadow-xl border-2 hover:border-blue-200">
                <div className="grid grid-cols-3 gap-1 overflow-hidden rounded-t-lg">
                  {template.images.map((image, index) => (
                    <img key={index} src={image} alt={`${template.name} preview ${index + 1}`} className="w-full h-24 object-cover" />
                  ))}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold" style={{ color: '#000930' }}>
                    {template.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {template.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    onClick={() => setSelectedTemplate(template.id)}
                    className="w-full"
                    style={{ backgroundColor: '#001fa4' }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Preview Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Template Previews */}
          {selectedTemplate && (
            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Template Preview</h3>
                <p className="text-gray-600">See how your hotel website could look</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <TemplatePreview template={hotelTemplates.find(t => t.id === selectedTemplate)} />
              </div>
            </div>
          )}
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Hotel's Online Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to create a stunning website that drives bookings and showcases your hotel's unique charm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </Button>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={nisFavicon} alt="NIS Digital Services" className="h-6 w-auto" />
              <span className="ml-3 text-lg font-semibold">NIS Digital Services</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Your Partner for web, mobile and automated success.</p>
              <p className="text-sm text-gray-500">"Smart, Scalable, Seamless"</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 NIS Digital Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

