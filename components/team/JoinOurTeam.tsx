"use client";

import Link from "next/link";

export default function JoinOurTeam() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h2 mb-6">Join Our Team</h2>
          <p className="text-xl text-warm-gray mb-8">
            We&apos;re always looking for passionate individuals who share our commitment to honoring heritage and building community.
          </p>

          <div className="card p-8 md:p-12 mb-8">
            <h3 className="text-h3 mb-6 text-deep-teal">Get Involved</h3>
            <div className="space-y-6 text-left">
              <div>
                <h4 className="text-h4 mb-3 text-deep-teal">Volunteer Opportunities</h4>
                <p className="text-warm-gray mb-4">
                  We welcome volunteers who want to contribute their time and skills to our mission. Whether you&apos;re interested in event planning, community outreach, or program support, there&apos;s a place for you.
                </p>
              </div>

              <div>
                <h4 className="text-h4 mb-3 text-deep-teal">Open Positions</h4>
                <p className="text-warm-gray mb-4">
                  We periodically have openings for full-time and part-time positions. Check back regularly or contact us to learn about current opportunities.
                </p>
              </div>

              <div>
                <h4 className="text-h4 mb-3 text-deep-teal">How to Apply</h4>
                <p className="text-warm-gray">
                  To learn more about volunteer opportunities or open positions, please reach out through our contact form or email us directly. We&apos;d love to hear from you!
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/volunteer/login" className="btn-outline">
              Volunteer Portal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

