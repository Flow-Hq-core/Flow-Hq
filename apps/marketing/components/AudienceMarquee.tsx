import { FLOW_AUDIENCES } from "@flow-hq/shared";

/**
 * Breadth band under the hero: who Flow is for, at a glance.
 *
 * The list is rendered twice because the `marquee` keyframe translates by
 * -50% — the second copy is what makes the loop seamless, so it's hidden
 * from assistive tech.
 *
 * The ends do two things at once: the track is masked so items fade out, and
 * a masked backdrop-blur sits on top so they blur as they go. Blur strongest
 * at the edge, gone by the time items reach the middle.
 */
const AudienceMarquee = () => {
  return (
    <section className="py-12 sm:py-16">
      <p className="mb-5 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/50">
        Built for people building something
      </p>

      <div className="relative overflow-hidden">
        {/* Track — masked so items fade in and out at the ends */}
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee [animation-duration:44s] motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
                {FLOW_AUDIENCES.map((audience) => (
                  <li
                    key={audience}
                    className="flex shrink-0 items-center whitespace-nowrap text-xl font-normal tracking-tight text-muted-foreground sm:text-2xl"
                  >
                    {audience}
                    <span
                      aria-hidden
                      className="mx-7 h-[3px] w-[3px] rounded-full bg-muted-foreground/40 sm:mx-10"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Progressive blur — masked so the blur itself ramps off inward */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 backdrop-blur-[2px] [mask-image:linear-gradient(to_right,black,transparent)] sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 backdrop-blur-[2px] [mask-image:linear-gradient(to_left,black,transparent)] sm:w-28" />
      </div>
    </section>
  );
};

export default AudienceMarquee;
