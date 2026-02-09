import { Mail, Phone, Hand, Zap, Wrench, DollarSign, Heart, Cpu } from 'lucide-react';

function App() {
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'hand-for-all'
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/30">
              <Hand className="w-6 h-6 text-accent" />
            </div>
            <div>
              <div className="text-sm font-semibold text-accent tracking-wide">HOF - Hand For All</div>
              <div className="text-xs text-muted-foreground">HAND FOR ALL</div>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 transition-colors text-sm font-medium"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
                Soft Robotics Innovation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Prosthetic Hand Using{' '}
                <span className="text-accent">Soft Robots</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Innovating Human Capability with Soft Robotics
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#features"
                  className="px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors"
                >
                  Explore Features
                </a>
                <a
                  href="#how-it-works"
                  className="px-6 py-3 rounded-lg border border-accent/30 text-accent hover:bg-accent/10 transition-colors font-semibold"
                >
                  How It Works
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
              <img
                src="/assets/generated/hof-hero-hand.dim_1600x900.png"
                alt="3D wireframe render of a translucent cyan-blue prosthetic hand showing internal tubing and soft robotic actuators"
                className="relative rounded-2xl shadow-2xl border border-accent/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key <span className="text-accent">Features</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced soft robotics technology designed for natural movement and accessibility
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Natural Movement */}
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Movement</h3>
              <p className="text-muted-foreground">
                Soft robotic actuators for natural movement.
              </p>
            </div>

            {/* Ergonomics */}
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Hand className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ergonomics</h3>
              <p className="text-muted-foreground">
                Easy-to-carry, comfortable shape.
              </p>
            </div>

            {/* Mechanism */}
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Wrench className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mechanism</h3>
              <p className="text-muted-foreground">
                Soft robotic hand using air pump.
              </p>
            </div>

            {/* Customization */}
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customization</h3>
              <p className="text-muted-foreground">
                Affordable & fully customizable.
              </p>
            </div>

            {/* Impact */}
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-muted-foreground">
                Helps individuals with hand loss or impairment.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Cpu className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
              <p className="text-muted-foreground">
                Accessible using Arduino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Illustration */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/assets/generated/hof-usecase-workshop.dim_1400x900.png"
                alt="Workshop scene showing a man struggling to lift a box with one hand, highlighting the need for assistive technology"
                className="rounded-2xl shadow-2xl border border-accent/20"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
                Real-World Impact
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Empowering <span className="text-accent">Daily Tasks</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our prosthetic hand enables individuals to perform everyday activities with confidence and independence, from lifting objects to precise manipulation tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It <span className="text-accent">Works</span>
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  An air pump directs airflow into silicone tubes, causing them to expand and thereby facilitating the movement and bending of fingers. The air pressure and movement are precisely controlled using an Arduino system, allowing for the manipulation of finger angles with accuracy.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
                    Air Pump System
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
                    Silicone Tubes
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
                    Arduino Control
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/assets/generated/hof-prototype-detail.dim_1400x900.png"
                  alt="Physical prototype showing silicone prosthetic hand connected to an air pump with visible tubing and wiring"
                  className="rounded-2xl shadow-2xl border border-accent/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-accent">Applications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Versatile technology serving multiple domains
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-xl bg-card border border-border text-center hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Medical Rehab</h3>
            </div>
            <div className="p-8 rounded-xl bg-card border border-border text-center hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Hand className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Assistive Tech</h3>
            </div>
            <div className="p-8 rounded-xl bg-card border border-border text-center hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">R&D (Research and Development)</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <p className="text-muted-foreground mb-12">
              Have questions or want to learn more? Contact our team
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="mailto:Shubhamjrd@gmail.com"
                className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <div className="font-semibold text-accent break-all">Shubhamjrd@gmail.com</div>
                </div>
              </a>
              <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground mb-1">Phone</div>
                    <a
                      href="tel:+917357473326"
                      className="font-semibold text-accent hover:underline block"
                    >
                      +91 7357473326
                    </a>
                    <a
                      href="tel:+919468086676"
                      className="font-semibold text-accent hover:underline block"
                    >
                      +91 9468086676
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/30">
                <Hand className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold">HAND FOR ALL</div>
                <div className="text-xs text-muted-foreground">HOF - Hand For All</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} HAND FOR ALL. Built with{' '}
              <Heart className="inline w-4 h-4 text-accent" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
