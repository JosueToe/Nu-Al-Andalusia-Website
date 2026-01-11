import TeamHero from "@/components/team/TeamHero";
import TeamLeadership from "@/components/team/TeamLeadership";
import TeamPhilosophy from "@/components/team/TeamPhilosophy";
import JoinOurTeam from "@/components/team/JoinOurTeam";

export const metadata = {
  title: "Our Team - Nu Al Andalusia",
  description: "Meet the dedicated professionals united by purpose and heritage at Nu Al Andalusia.",
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamLeadership />
      <TeamPhilosophy />
      <JoinOurTeam />
    </>
  );
}


