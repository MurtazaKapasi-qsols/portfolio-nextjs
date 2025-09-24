import SectionHeading from "./sectionHeading";
import { Button } from "./ui/button";

export default function CtaConsultingSection() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/get-in-touch-bg.jpg')"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-90"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeading title="GET FREE MARKETING CONSULTING" subtitle="Contact us and get free marketing consultation for your business." className="text-white" />
          
          <Button className="text-white border-white  ">
            GET IN TOUCH
          </Button>
          
        </div>
      </div>
    </section>
  );
}
