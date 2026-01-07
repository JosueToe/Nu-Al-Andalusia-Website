"use client";

import { Search, ClipboardList, Rocket, CheckCircle } from "lucide-react";

export default function OurProcess() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We begin by learning about your needs, goals, and challenges. Through consultations and assessments, we develop a deep understanding of your unique situation.",
    },
    {
      icon: ClipboardList,
      title: "Planning",
      description: "Based on our discovery, we design tailored solutions that align with your objectives. We create detailed plans, timelines, and success metrics.",
    },
    {
      icon: Rocket,
      title: "Implementation",
      description: "We execute the plan with precision and care, maintaining clear communication throughout. Our team works collaboratively to deliver results.",
    },
    {
      icon: CheckCircle,
      title: "Follow-up",
      description: "Our relationship continues beyond delivery. We provide ongoing support, evaluate outcomes, and make adjustments to ensure lasting success.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-4">Our Process</h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            A structured approach to delivering exceptional results
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-rich-gold/30 -z-10" style={{ width: "calc(100% - 4rem)" }} />
                  )}

                  <div className="card p-6 text-center h-full">
                    <div className="w-16 h-16 bg-rich-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-rich-gold" />
                    </div>
                    <div className="text-2xl font-heading font-bold text-deep-teal mb-2">
                      {index + 1}
                    </div>
                    <h3 className="text-h4 mb-3 text-deep-teal">{step.title}</h3>
                    <p className="text-warm-gray leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

