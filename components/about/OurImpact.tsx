"use client";

import { Quote } from "lucide-react";

export default function OurImpact() {
  const testimonials = [
    {
      quote: "Nu Al Andalusia has transformed how our community connects with our heritage while providing essential services. Their dedication is truly inspiring.",
      author: "Community Member",
      location: "Orlando, FL",
    },
    {
      quote: "The programs offered have made a real difference in our lives. We're grateful for their commitment to excellence and cultural preservation.",
      author: "Program Participant",
      location: "Central Florida",
    },
    {
      quote: "Working with Nu Al Andalusia has been a privilege. Their innovative approach to community services sets a new standard for excellence.",
      author: "Community Partner",
      location: "Florida",
    },
  ];

  const achievements = [
    { year: "2020", event: "Organization Founded" },
    { year: "2021", event: "Launched First Community Programs" },
    { year: "2022", event: "Reached 200+ Community Members" },
    { year: "2023", event: "Expanded Service Offerings" },
    { year: "2024", event: "500+ Members Served Milestone" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-4">Our Impact</h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Measuring success through positive change in our community
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-heading font-bold text-deep-teal mb-2">10+</div>
            <p className="text-warm-gray">Years of Service</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-heading font-bold text-deep-teal mb-2">500+</div>
            <p className="text-warm-gray">Community Members Served</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-heading font-bold text-deep-teal mb-2">15+</div>
            <p className="text-warm-gray">Programs & Services</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-heading font-bold text-deep-teal mb-2">98%</div>
            <p className="text-warm-gray">Satisfaction Rate</p>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-h3 mb-8 text-center">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h4 className="text-h4 mb-3 text-deep-teal">Heritage Preservation Program</h4>
              <p className="text-warm-gray mb-4">
                Our cultural preservation initiative has engaged over 150 community members in learning about and celebrating Moorish heritage through workshops, events, and educational programs.
              </p>
              <div className="text-sm text-deep-teal font-semibold">150+ Participants</div>
            </div>
            <div className="card p-6">
              <h4 className="text-h4 mb-3 text-deep-teal">Community Services Expansion</h4>
              <p className="text-warm-gray mb-4">
                We've expanded our service offerings to include consulting, project management, and technology solutions, serving over 200 organizations and individuals in the past year.
              </p>
              <div className="text-sm text-deep-teal font-semibold">200+ Clients Served</div>
            </div>
            <div className="card p-6">
              <h4 className="text-h4 mb-3 text-deep-teal">Training & Development</h4>
              <p className="text-warm-gray mb-4">
                Our professional development programs have empowered community members with new skills, leading to career advancement and increased community engagement.
              </p>
              <div className="text-sm text-deep-teal font-semibold">300+ Trained</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-h3 mb-8 text-center">Community Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 relative">
                <Quote className="w-12 h-12 text-rich-gold/20 absolute top-4 right-4" />
                <p className="text-warm-gray mb-4 italic leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-navy-blue">{testimonial.author}</p>
                  <p className="text-sm text-warm-gray">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-h3 mb-8 text-center">Our Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-rich-gold/30 hidden md:block" />
              
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="w-full md:w-1/2 p-6">
                      <div className="card p-6">
                        <div className="text-2xl font-heading font-bold text-rich-gold mb-2">
                          {achievement.year}
                        </div>
                        <p className="text-warm-gray">{achievement.event}</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-1/2" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rich-gold rounded-full border-4 border-white shadow-md hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

