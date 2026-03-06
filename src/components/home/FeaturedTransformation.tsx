import Reveal from "@/components/motion/Reveal";
import BeforeAfterSlider from "@/components/motion/BeforeAfterSlider";
import { IMAGES } from "@/data/images";

export default function FeaturedTransformation() {
    return (
        <section className="py-24 bg-white border-t border-grey-200">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="text-center mb-16">
                    <Reveal direction="up" delay={0}>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-4">
                            See the <i className="text-primary not-italic italic">Transformation</i>
                        </h2>
                    </Reveal>
                    <Reveal direction="up" delay={0.1}>
                        <p className="text-grey-800 max-w-xl mx-auto text-lg">
                            From bare structural layouts to finished luxury. Witness the manufacturing edge in action.
                        </p>
                    </Reveal>
                </div>

                <Reveal direction="up" delay={0.2} className="max-w-5xl mx-auto relative group">
                    <div>
                        <BeforeAfterSlider
                            beforeImage={IMAGES.transformations.before1}
                            afterImage={IMAGES.transformations.after1}
                            beforeLabel="Before"
                            afterLabel="After"
                        />
                        <div className="mt-6 text-center text-sm font-medium text-grey-800">
                            Residential Interior Transformation — 3BHK, Vaishali Nagar, Jaipur
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
