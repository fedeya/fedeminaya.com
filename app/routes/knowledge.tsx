import ExperienceSection from '~/components/ExperienceSection';
import SkillsSection from '~/components/SkillsSection';

export default function Knowledge() {
  return (
    <div>
      <h1 className="font-semibold text-3xl">Knowledge</h1>

      <SkillsSection />

      <ExperienceSection />
    </div>
  );
}
