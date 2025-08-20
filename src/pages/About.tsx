import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '10,000+', icon: Users },
    { label: 'Plants Delivered', value: '50,000+', icon: Leaf },
    { label: 'Years Experience', value: '15+', icon: Award },
    { label: 'Countries Served', value: '25+', icon: Globe }
  ];

  const team = [
    {
      name: 'Sarah Green',
      role: 'Founder & Chief Botanist',
      image: '/src/assets/product-plants.jpg',
      description: 'With over 20 years in horticulture, Sarah leads our plant selection and care expertise.'
    },
    {
      name: 'Michael Plant',
      role: 'Operations Director',
      image: '/src/assets/product-plants.jpg',
      description: 'Michael ensures every plant reaches you in perfect condition with our specialized delivery system.'
    },
    {
      name: 'Emma Bloom',
      role: 'Customer Care Specialist',
      image: '/src/assets/product-plants.jpg',
      description: 'Emma helps customers choose the perfect plants and provides ongoing care support.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-teal/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                About <span className="text-primary">123ID0892</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're passionate about bringing the beauty and benefits of plants into every home. 
                Founded in 2009, we've grown from a small local nursery to a trusted online destination 
                for plant lovers worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center space-y-3">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-teal rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-sage/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    What started as a small passion project in our founder's backyard greenhouse 
                    has blossomed into a thriving community of plant enthusiasts. We believe that 
                    everyone deserves to experience the joy and tranquility that plants bring to our lives.
                  </p>
                  <p>
                    Our mission is simple: to make plant parenthood accessible, enjoyable, and successful 
                    for everyone. Whether you're a seasoned gardener or just starting your green journey, 
                    we're here to support you every step of the way.
                  </p>
                  <p>
                    Every plant in our collection is carefully selected, nurtured, and prepared for its 
                    new home. We partner with sustainable growers and use eco-friendly packaging to ensure 
                    our impact on the planet is as positive as the impact our plants have on your space.
                  </p>
                </div>
              </div>
              
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-sage/20 to-teal/20">
                <img
                  src="/src/assets/hero-plants.jpg"
                  alt="Our greenhouse"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do, from plant selection to customer care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-8 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-teal rounded-full flex items-center justify-center">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We're committed to sustainable practices in everything we do, from sourcing to packaging.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-to-br from-teal/5 to-transparent">
                <CardContent className="p-8 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal to-sage rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Community</h3>
                  <p className="text-muted-foreground">
                    Building a supportive community of plant lovers who share knowledge and inspiration.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-to-br from-sage/5 to-transparent">
                <CardContent className="p-8 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-sage to-primary rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Quality</h3>
                  <p className="text-muted-foreground">
                    Every plant meets our rigorous standards for health, beauty, and long-term success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-sage/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind your plant journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="mx-auto w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-sage/20 to-teal/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;