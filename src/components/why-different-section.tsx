import { Trophy, Shield, Laptop } from "lucide-react";

export default function WhyDifferentSection() {
  const features = [
    {
      icon: Trophy,
      title: "UNIQUE DESIGN",
      description: "Every project is crafted with a unique approach, ensuring your brand stands out in the marketplace."
    },
    {
      icon: Shield,
      title: "QUALITY WORK",
      description: "We maintain the highest standards in every aspect of our work, from concept to completion."
    },
    {
      icon: Laptop,
      title: "MINIMALIST",
      description: "Clean, focused designs that communicate your message effectively without unnecessary complexity."
    }
  ];

  return (
    <section className="py-20 bg-white md:mx-14">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
              WHY WE ARE DIFFERENT
            </h2>
          </div>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
