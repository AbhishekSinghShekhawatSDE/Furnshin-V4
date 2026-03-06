import { IMAGES } from "./images";

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: "Guide" | "Case Study" | "Tips" | "Design" | string
  date: string
  readTime: string
  author: string
  authorRole: string
  coverImage: string
  coverImageAlt: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "modular-kitchen-guide-jaipur",
    title: "How to Choose the Right Modular Kitchen for Your Jaipur Home",
    excerpt: "A modular kitchen is the single biggest upgrade you can make to your home. This guide covers materials, finishes, layouts, and what to look for in a Jaipur manufacturer.",
    category: "Guide",
    date: "2025-01-15",
    readTime: "8 min read",
    author: "Furnshin Team",
    authorRole: "Interior & Manufacturing Experts",
    coverImage: IMAGES.blog.kitchen_guide,
    coverImageAlt: "Modern modular kitchen with clean lines and premium finish",
    tags: ["modular kitchen", "jaipur", "interior design", "kitchen design"],
    content: `
<h2>Why a Modular Kitchen Changes Everything</h2>
<p>A modular kitchen is not just a renovation. It changes how you use your home every single day. In Jaipur, where kitchens are central to daily family life, getting this right matters more than any other room in the house.</p>
<p>The problem is that most homeowners in Jaipur approach kitchen renovation with the wrong priorities. They start with the visual — "I want it to look like this Instagram photo" — without understanding what goes into making a kitchen functional, durable, and worth the investment.</p>
<p>This guide covers what actually matters when choosing a modular kitchen, what questions to ask your manufacturer, and what separates a quality build from one that looks good on day one but fails within two years.</p>

<h2>The Three Kitchen Layouts That Work Best in Jaipur Homes</h2>
<p><strong>L-Shape:</strong> Works in most standard apartments and villas. Efficient for 1–2 person cooking. Easy to add an island extension if space allows.</p>
<p><strong>U-Shape:</strong> Ideal for larger kitchens. Maximum storage and counter space. Best for families where multiple people cook.</p>
<p><strong>Parallel (Galley):</strong> Efficient for narrow kitchens. Professional kitchen standard. Works well in builder-floor apartments common in areas like Mansarovar and Pratap Nagar.</p>

<h2>Materials: What Lasts and What Doesn't</h2>
<p><strong>Shutters (Cabinet Doors):</strong></p>
<p>The shutter material defines both the look and the longevity of your kitchen. In Jaipur's climate — high heat in summer, humidity during monsoon — your choice matters more than in most Indian cities.</p>
<ul>
  <li><strong>Acrylic:</strong> High-gloss, easy to clean, resists heat well. Premium look. Cost is higher but worth it for frequently used kitchens.</li>
  <li><strong>Membrane/PVC:</strong> Mid-range. Good moisture resistance. Suitable for Jaipur conditions. More finish options than acrylic.</li>
  <li><strong>Laminate (PU/Matte):</strong> Most common in Jaipur. Durable, cost-effective, huge range of finishes. Quality depends heavily on the laminate grade — always ask for 1mm+ thickness.</li>
</ul>
<p><strong>Cabinet Body (Carcass):</strong></p>
<p>This is the internal structure that everything mounts to. It never gets replaced. Use 18mm BWR (Boiling Water Resistant) plywood minimum. Do not accept particle board or MDF for the carcass in a wet kitchen environment — it will fail.</p>
<p>At Furnshin, every kitchen carcass uses 18mm BWR plywood from verified suppliers. No exceptions.</p>

<h2>Hardware: Where People Go Wrong</h2>
<p>Hinges and drawer channels are the most replaced components in any kitchen. The difference between cheap and quality hardware is significant.</p>
<p>Look for: Hettich, Hafele, or Grass brand hinges. Soft-close on every drawer and door. Full-extension drawer channels. These brands are available in Jaipur and add years to your kitchen's functional life.</p>
<p>Avoid: No-brand hinges from local hardware suppliers. They will fail within 18 months of daily use.</p>

<h2>Counter Material: Granite vs. Quartz vs. SS in Jaipur</h2>
<p><strong>Granite:</strong> Abundant in Rajasthan, extremely durable, heat resistant. Natural stone means each slab is unique. Requires sealing every 2 years. Best value choice for Jaipur.</p>
<p><strong>Quartz:</strong> Engineered stone. Uniform look. No sealing needed. More expensive than granite. Good choice for modern aesthetic kitchens.</p>
<p><strong>Stainless Steel:</strong> Commercial-grade durability. Hygienic. Increasingly used in high-end Jaipur homes. Not for everyone aesthetically but unbeatable in function.</p>

<h2>Five Questions to Ask Any Kitchen Manufacturer in Jaipur</h2>
<ol>
  <li>What plywood thickness and grade do you use for the carcass? (Correct answer: 18mm BWR)</li>
  <li>Which brand of hinges and channels do you use? (Correct answer: Hettich, Hafele, or Grass)</li>
  <li>Do you have a factory or do you outsource fabrication? (Factory-direct = better quality control)</li>
  <li>What is included in the warranty, and for how long? (Minimum: 2 years on hardware, 5 years on structure)</li>
  <li>Can I visit a completed project similar to mine? (Any serious manufacturer should be able to arrange this)</li>
</ol>

<h2>What a Quality Modular Kitchen Costs in Jaipur (2025)</h2>
<p>Pricing in Jaipur for modular kitchens ranges widely. Here is a realistic breakdown per running foot of cabinetry:</p>
<ul>
  <li><strong>Budget (particle board, local hardware):</strong> ₹800–1,200/sq ft. Not recommended for long-term use.</li>
  <li><strong>Mid-range (BWR plywood, standard hardware):</strong> ₹1,400–2,000/sq ft. Good baseline choice.</li>
  <li><strong>Premium (BWR plywood, Hettich/Hafele, acrylic/membrane shutters):</strong> ₹2,200–3,500/sq ft. This is the range where quality and durability align.</li>
</ul>
<p>A standard L-shape kitchen for a 3BHK in Jaipur typically runs 15–22 running feet, putting a premium kitchen at ₹33,000–₹77,000 for cabinetry. Counter, sink, and appliances are additional.</p>

<h2>Get a Free Kitchen Consultation</h2>
<p>Furnshin builds every kitchen in our own Jaipur facility. No outsourcing. We offer free site visits and design consultations for projects across Jaipur and nearby areas. Contact us to schedule yours.</p>
    `,
  },

  {
    slug: "glass-partition-vs-drywall-office-jaipur",
    title: "Glass Partition vs. Drywall: What Works Better for Jaipur Offices?",
    excerpt: "When redesigning office space in Jaipur, the partition choice defines both the look and the function of the workspace. Here is a direct comparison.",
    category: "Guide",
    date: "2025-01-28",
    readTime: "6 min read",
    author: "Furnshin Team",
    authorRole: "Commercial Space Specialists",
    coverImage: IMAGES.blog.glass_guide,
    coverImageAlt: "Modern office with glass partition walls and open workspace",
    tags: ["glass partition", "office interior", "jaipur", "commercial interior"],
    content: `
<h2>The Partition Decision Shapes the Office</h2>
<p>Partition walls define how people move, interact, and feel in an office. Get it wrong and you have a workspace that feels either like a fishbowl or a series of dark boxes. In Jaipur, where commercial space is growing rapidly across areas like Malviya Nagar, C-Scheme, and Vaishali Nagar, this decision comes up for nearly every office fitout we handle.</p>
<p>This guide gives you a direct, practical comparison so you can make the right call for your specific situation.</p>

<h2>Glass Partitions: What They Do Well</h2>
<p><strong>Natural light distribution:</strong> Glass partitions allow daylight to move through the office. In Jaipur's bright climate, this reduces electricity costs and improves the working environment.</p>
<p><strong>Visual openness without acoustic loss:</strong> Framed acoustic glass (double-pane, with acoustic interlayer) gives you visual connectivity while significantly reducing sound transmission between spaces.</p>
<p><strong>Perception of space:</strong> A 1,000 sq ft office with glass partitions feels 30–40% larger than the same office with drywall. This matters for attracting clients and retaining staff.</p>
<p><strong>Modular and reconfigurable:</strong> Aluminium-framed glass partition systems are demountable. You can reconfigure your office layout without demolition, construction waste, or significant cost.</p>
<p><strong>Appropriate for:</strong> Client-facing offices, co-working spaces, tech companies, design studios, any space where appearance and openness matter.</p>

<h2>Drywall Partitions: Where They Make Sense</h2>
<p><strong>Full acoustic privacy:</strong> A well-built gypsum drywall partition with acoustic insulation provides complete sound isolation. Essential for boardrooms, HR offices, legal spaces, or anywhere sensitive conversations happen.</p>
<p><strong>Lower upfront cost:</strong> Standard drywall partitioning is cheaper than framed glass systems on a per-running-foot basis in Jaipur. For large back-office areas where aesthetics matter less, this is a valid consideration.</p>
<p><strong>Branding surface:</strong> Drywall gives you a paintable, wrappable surface for brand graphics, accent walls, and wall-mounted fixtures without complex framing.</p>
<p><strong>Appropriate for:</strong> Server rooms, HR/accounts departments, boardrooms, storage areas, any space where sound privacy is more important than visual openness.</p>

<h2>The Hybrid Approach (What Most Jaipur Offices Use)</h2>
<p>Most well-designed commercial spaces in Jaipur use both. The typical pattern:</p>
<ul>
  <li>Reception and client-facing areas: Full-height glass partitions with aluminium framing</li>
  <li>Individual cabins: Glass upper panel (600–800mm) with solid lower panel for privacy without full enclosure</li>
  <li>Boardroom: Double-pane acoustic glass on client-facing wall, drywall on non-visible walls</li>
  <li>Back office: Standard drywall where cost efficiency matters more than aesthetics</li>
</ul>

<h2>Cost Comparison in Jaipur (2025)</h2>
<p><strong>Aluminium-framed clear glass partition:</strong> ₹650–900 per sq ft installed, depending on glass thickness (6mm vs 10mm) and frame finish.</p>
<p><strong>Acoustic double-pane glass partition:</strong> ₹950–1,400 per sq ft installed. Significant acoustic performance improvement.</p>
<p><strong>Standard gypsum drywall:</strong> ₹180–280 per sq ft installed with single-coat finish. Add ₹60–80 per sq ft for acoustic fill.</p>
<p>For a typical 100 sq ft partition wall: glass runs ₹65,000–90,000, drywall runs ₹18,000–28,000. The premium for glass is real. The visual and functional return justifies it for client-visible spaces.</p>

<h2>What Furnshin Recommends</h2>
<p>We've done glass partition work across Jaipur in offices ranging from 500 sq ft start-ups in Sindhi Camp to 5,000 sq ft corporate floors in Malviya Nagar. Our consistent recommendation: glass for everything client-visible, acoustic drywall for privacy-critical spaces, and a clear hybrid plan from day one.</p>
<p>We handle both glass and drywall work in-house. One contractor. One project timeline. Get in touch for a site assessment.</p>
    `,
  },

  {
    slug: "aluminum-windows-doors-guide-jaipur",
    title: "The Complete Guide to Aluminum Windows and Doors in Jaipur",
    excerpt: "Aluminum windows and doors dominate Jaipur construction for good reasons. This guide covers profiles, glass options, installation standards, and pricing.",
    category: "Guide",
    date: "2025-02-05",
    readTime: "7 min read",
    author: "Furnshin Team",
    authorRole: "Aluminum & Glazing Specialists",
    coverImage: IMAGES.blog.aluminum_guide,
    coverImageAlt: "Modern aluminum sliding door with clean frame in residential home",
    tags: ["aluminum windows", "aluminum doors", "jaipur", "uPVC", "glazing"],
    content: `
<h2>Why Aluminum Dominates Jaipur Construction</h2>
<p>Walk through any new residential or commercial construction in Jaipur — Mansarovar, Jagatpura, Pratap Nagar, C-Scheme — and aluminum fenestration is the standard. Not uPVC, not wood. Aluminum.</p>
<p>The reason is climate. Jaipur sees 45°C+ summers and a dry environment that destroys wood and degrades uPVC over time. Aluminum performs in these conditions, holds dimensional stability across temperature extremes, and lasts 30–40 years with minimal maintenance.</p>
<p>But not all aluminum window and door systems are equal. This guide covers what separates a quality installation from one that will give you problems within five years.</p>

<h2>Understanding Aluminum Profiles</h2>
<p>The "profile" is the extruded aluminum section that forms the frame and sash of your window or door. Profile quality determines everything else.</p>
<p><strong>Section thickness:</strong> Look for a minimum wall thickness of 1.4mm for residential applications. Commercial applications should use 2.0mm+. Thinner profiles flex, cause gasket failure, and lead to air and water infiltration.</p>
<p><strong>Thermal break vs. standard:</strong> A thermal break profile has a polyamide strip between inner and outer aluminum sections, reducing heat transfer. In Jaipur's climate, standard profiles are acceptable for most applications. Thermal break makes sense for air-conditioned spaces where heat gain matters.</p>
<p><strong>Brand note:</strong> In Jaipur, Hindalco and National Aluminum are the most common profile sources. For higher-end projects, systems from Schuco or Technal (European brands distributed in India) offer superior performance but at significantly higher cost.</p>

<h2>Glass Selection for Jaipur's Climate</h2>
<p>The glass you choose has a larger impact on your home's thermal comfort than the frame system.</p>
<p><strong>Single clear glass (4mm–6mm):</strong> The most common in Jaipur. Cheapest. No thermal or acoustic performance. Not recommended for air-conditioned rooms.</p>
<p><strong>Tinted glass:</strong> Bronze, grey, blue tints reduce solar heat gain by 25–40%. Good for west and south-facing windows in Jaipur. Minimal cost premium over clear glass.</p>
<p><strong>Double-glazed units (DGU):</strong> Two panes with an air or argon gap. 40–60% reduction in heat transfer. Significant energy savings for air-conditioned spaces. Cost is 2–3x single glass but justified for bedroom and living room windows facing direct sun.</p>
<p><strong>Reflective/Low-E glass:</strong> Best solar performance. Common in commercial buildings. Increasingly used in premium residential in Jaipur. Consult with us on orientation before specifying.</p>

<h2>System Types: What You Need for Each Application</h2>
<p><strong>Sliding windows:</strong> Most common in Jaipur residential. Easy to operate. Two or three track options. Limit: they only open 50% of the frame area for ventilation.</p>
<p><strong>Casement windows:</strong> Open fully for maximum ventilation. Better air seal when closed. Slightly higher cost. Recommended for bedrooms where full ventilation matters.</p>
<p><strong>Sliding folding doors:</strong> For large openings connecting living spaces to balconies or gardens. Accordion-fold system. Premium but transforms how indoor-outdoor space feels.</p>
<p><strong>Fixed glazing:</strong> Non-opening panels. Used for panoramic views or decorative purposes. Most cost-effective for large glass areas.</p>

<h2>What Good Installation Looks Like</h2>
<p>The best profile and glass combination will fail if the installation is poor. In Jaipur, installation quality varies enormously. Here is what proper installation requires:</p>
<ul>
  <li>Frame fixed to RCC or brick structure with Fisher anchors at 450mm max spacing</li>
  <li>Weather sealant (silicone, not acrylic) applied at all frame-to-wall joints</li>
  <li>Drainage holes clear and positioned correctly for water runoff</li>
  <li>Glass sitting in EPDM gaskets, not direct contact with aluminum</li>
  <li>Hardware (handles, locks, rollers) from Dorma, Hafele, or Enox — not no-brand</li>
</ul>

<h2>Pricing Guide for Aluminum Windows in Jaipur (2025)</h2>
<p><strong>Standard sliding window (single clear glass, basic profile):</strong> ₹350–500 per sq ft installed</p>
<p><strong>Sliding window with tinted glass, quality profile:</strong> ₹550–750 per sq ft installed</p>
<p><strong>Casement window with quality profile:</strong> ₹600–850 per sq ft installed</p>
<p><strong>Double-glazed sliding window:</strong> ₹900–1,300 per sq ft installed</p>
<p><strong>Sliding folding door system:</strong> ₹1,400–2,200 per sq ft installed</p>

<h2>Work With Furnshin for Aluminum Installation in Jaipur</h2>
<p>We handle aluminum window, door, and facade work across Jaipur. Every installation is done by our own trained team — no subcontracting. We source profiles from quality suppliers and provide a minimum 2-year installation warranty. Get a site assessment and quotation for your project.</p>
    `,
  },

  {
    slug: "vaishali-nagar-3bhk-transformation",
    title: "Case Study: Complete 3BHK Interior Transformation in Vaishali Nagar",
    excerpt: "How we transformed a 1,800 sq ft apartment from builder-finish to a fully custom interior — modular kitchen, wardrobes, living room furniture, and complete glass work.",
    category: "Case Study",
    date: "2025-01-10",
    readTime: "5 min read",
    author: "Furnshin Team",
    authorRole: "Interior & Manufacturing Experts",
    coverImage: IMAGES.blog.case_study_1,
    coverImageAlt: "Completed 3BHK interior with custom modular kitchen and living furniture",
    tags: ["case study", "residential interior", "jaipur", "vaishali nagar", "modular kitchen"],
    content: `
<h2>Project Overview</h2>
<p><strong>Location:</strong> Vaishali Nagar, Jaipur</p>
<p><strong>Project type:</strong> Complete residential interior — new possession</p>
<p><strong>Area:</strong> 1,800 sq ft (3BHK)</p>
<p><strong>Duration:</strong> 52 days from design approval to handover</p>
<p><strong>Budget range:</strong> ₹18–22 lakhs (complete package)</p>

<h2>Client Requirement</h2>
<p>The clients — a couple in their mid-30s with two children — had just taken possession of a new apartment in Vaishali Nagar. They needed everything: kitchen, all bedroom wardrobes, living room furniture, TV unit, study area, bathroom vanity, and complete false ceiling and lighting design.</p>
<p>Their primary concerns: quality materials that would last, a clean modern aesthetic without looking dated in five years, and a single contractor they could trust to manage the entire project.</p>

<h2>Our Approach</h2>
<p>We began with a two-hour walkthrough of the apartment with the clients. Rather than presenting a mood board, we asked them to identify three things they loved about spaces they had seen in real life. This gave us more useful direction than any reference image.</p>
<p>The brief that emerged: clean lines, warm wood tones in the kitchen, white wardrobes with minimal handles, and a feature wall in the living room that wasn't a TV wall.</p>

<h2>Kitchen: The Core of the Project</h2>
<p>The kitchen was a parallel layout — two parallel counters facing each other in an 8 ft x 10 ft space. The clients wanted maximum storage with a clean look.</p>
<p>We specified:</p>
<ul>
  <li>18mm BWR plywood carcass throughout</li>
  <li>Acrylic matte shutters in warm white for upper cabinets</li>
  <li>Woodgrain PU shutters in oak finish for lower cabinets</li>
  <li>Black granite counter — Absolute Black from Kishangarh</li>
  <li>Hettich hinges and soft-close drawers throughout</li>
  <li>Hidden profile handles for a handleless look on upper cabinets</li>
</ul>
<p>Result: A kitchen that felt both practical and editorial. The combination of matte white uppers and warm oak lowers is a pairing that ages well and works with multiple lighting conditions throughout the day.</p>

<h2>Wardrobes: All Three Bedrooms</h2>
<p>Master bedroom: A 9-ft sliding wardrobe with mirrored panels on the right half — extending the visual space of the room significantly. Internal organization with 2 hanging sections, 4 pull-out drawer units, and open shelf section for bags and accessories.</p>
<p>Children's bedrooms: Study-integrated wardrobe units in both rooms. Bookshelves, wardrobe, and study desk as a single wall unit. This maximized floor space for play and activity.</p>

<h2>Living Room: The Feature Wall</h2>
<p>The clients wanted a feature wall that wasn't the TV. We designed a full-height fluted panel wall behind the dining table — 9 ft ceiling to floor, warm tone, backlit at the top with warm LED strip.</p>
<p>The TV unit itself was kept intentionally simple: a floating teak veneer cabinet with minimal detailing. The room's statement came from the dining wall, not the TV. This is a design decision we stand by: the dining area should anchor the living space, not the screen.</p>

<h2>Timeline and Handover</h2>
<p>Design finalization: 8 days. Fabrication at our facility: 28 days. Site installation: 16 days. Total: 52 days from client sign-off to final walkthrough.</p>
<p>Handover was on day 52 as committed. The clients moved in four days later.</p>

<h2>Client Feedback</h2>
<p>"We were nervous about giving one contractor the entire project. But Furnshin handled everything without us having to follow up constantly. The quality of the kitchen and wardrobes is excellent, and the team was professional throughout." — Rajesh & Meena Sharma, Vaishali Nagar</p>
    `,
  },

  {
    slug: "commercial-office-glass-partitions-malviya-nagar",
    title: "Case Study: Corporate Office Fitout with Full Glass Partition System, Malviya Nagar",
    excerpt: "A 2,200 sq ft commercial fitout — full-height glass partitions, modular workstations, and a boardroom — delivered in 38 days for a tech company.",
    category: "Case Study",
    date: "2025-02-12",
    readTime: "4 min read",
    author: "Furnshin Team",
    authorRole: "Commercial Space Specialists",
    coverImage: IMAGES.blog.case_study_2,
    coverImageAlt: "Modern corporate office with full height glass partitions and workstations",
    tags: ["case study", "commercial interior", "glass partition", "office fitout", "jaipur"],
    content: `
<h2>Project Overview</h2>
<p><strong>Location:</strong> Malviya Nagar, Jaipur</p>
<p><strong>Project type:</strong> Corporate office fitout — new lease</p>
<p><strong>Area:</strong> 2,200 sq ft</p>
<p><strong>Duration:</strong> 38 days from site handover to occupation</p>

<h2>Client Requirement</h2>
<p>A Jaipur-based technology company had taken a new lease on a raw commercial space in Malviya Nagar. The brief was clear: an office that looked like a serious technology company, not a local services firm. The MD had worked in Bangalore tech campuses and had a specific visual reference point.</p>
<p>The project required: reception and branding wall, glass-enclosed MD cabin, two manager cabins, a 12-seat boardroom with acoustic glass, open floor for 18 workstations, a breakout zone, and server room.</p>

<h2>Design Approach</h2>
<p>We proposed a layout where the glass partition system was the central design element — not just a functional divider. All cabin partitions were full-height (9 ft) aluminium-framed clear glass with a single horizontal 100mm frosted band at eye-level for visual privacy without blocking light.</p>
<p>The boardroom received double-pane acoustic glass on the open-plan side and a solid wall on the server room side. A fully operable glass door with frameless patch fitting for the boardroom entrance.</p>

<h2>Execution: Glass Partition System</h2>
<p>Total glass partition installed: 320 running ft across all cabins and boardroom. System: 75mm aluminium framing with 8mm clear toughened glass throughout. Boardroom: 8mm+8mm acoustic double-pane with argon fill — achieved STC 38 (suitable for confidential discussions).</p>
<p>All glass was cut, tempered, and delivered from our Jaipur facility. No external glass contractor — we controlled quality at every step.</p>

<h2>Workstations and Furniture</h2>
<p>18 workstations manufactured in our factory: 1200mm x 600mm work surface, 25mm thick commercial-grade top, cable management tray under each desk, shared pedestal storage units.</p>
<p>MD cabin: Custom L-shaped executive desk in walnut veneer with leather-inlay top section. Storage credenza with lockable shutters.</p>
<p>Boardroom: 12-seater conference table, 3600mm x 1200mm, wenge veneer with chrome base. Wire management module at center.</p>

<h2>Branding Integration</h2>
<p>The reception feature wall was designed as a brand statement: full-height frosted glass panel with the company logo applied in vinyl, backlit from behind with warm white LED. Simple but high-impact — visible from the main door from 25 meters.</p>

<h2>Result</h2>
<p>Project completed on day 38. The client occupied the space within 48 hours of handover. The MD's comment at handover: "This is exactly the kind of office I wanted when we started in Jaipur. It looks like we've been here for ten years."</p>
    `,
  },
];
