import { Lightbulb, Palette, Award, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import SectionHeading from "./sectionHeading";

export default function WhoWeAreSection() {
  return (
    <section className="py-10 md:py-20">
      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">INNOVATION</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We bring fresh ideas and cutting-edge solutions to every project, 
                ensuring your brand stays ahead of the competition.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">CREATIVITY</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our creative team combines artistic vision with strategic thinking 
                to deliver designs that captivate and convert.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">QUALITY</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We maintain the highest standards in every aspect of our work, 
                from initial concept to final delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Who We Are Section */}
      <div className="bg-gray-900 py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" 
          style={{
            backgroundImage: "url('/bg2deep.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              
              <SectionHeading title="PASSIONATE THINKERS" subtitle="Who we are" isSideHeading={true} className="text-white" />
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                We are a team of creative professionals who believe in the power of 
                design to transform businesses. Our passion for innovation drives us 
                to create exceptional digital experiences that make a lasting impact.
              </p>
              <Button className="bg-white text-black hover:bg-gray-100">
                READ ABOUT US <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gray-700 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-500 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
