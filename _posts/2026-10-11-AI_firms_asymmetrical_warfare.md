---
layout: post
title: AI firms conduct asymmetrical warfare on science and the adjustments to be considered for bioinformatics and computational biology research
image: assets/post_assets/2026-10-11-AI_firms_asymmetrical_warfare/asymmetrical_warfare.png
---

## The OpenAI maths dump and what AI news is worth paying attention to

I've been reflecting on the recent [OpenAI maths dump](https://github.com/openai/math) [1] and [Google DeepMind's AlphaProof](https://doi.org/10.1126/science.aej2213) [2] from the perspective of a research microbiologist and wanted to figure out and condense my thinking and few main conclusions. These are my reactionary thoughts and I suppose my views may change in the future.

Normally I tend to ignore most AI news, viewing it skeptically as hype driven by parties with conflicting interests including but not limited to:
- Investors
- Techbro-who-were-previously-shilling-crypto-and-NFT-driven
- Clickbait unoriginal copy-paste journalism underscoring the hollowness of the modern web-media landscape
- Over-excited non-experts who have little to no understanding of the things they are hyping who read copy-paste journalism
- Bots/LLMs
    - Which now comprise [the growing majority of internet traffic](https://www.humansecurity.com/learn/resources/2026-state-of-ai-traffic-cyberthreat-benchmarks) [3]
    - And comprise [at least ~20% (underestimation) of all web posts](https://www.nature.com/articles/s41598-025-96372-1) [4]

Simply put, there is a disproportionality of hype vs actual gains + societal improvements with AI. Now I am not anti-AI by any means – I use machine learning for my microbiology/bioinformatic research and believe that AI can and has led to genuine gains in knowledge and real world applications. However, seperating real from hype is...exhausting. The OpenAI maths dump and Google's AlphaProof story really crystallised my perspective into shocked quartz impactite two days ago.

In my opinion, this story is worth paying attention and thinking about for a number of reasons, especially if you work in science.

<figure class="centered-figure">
  <img src="{{ '/assets/post_assets/2026-10-11-AI_firms_asymmetrical_warfare/shocked_quartz.png' | relative_url }}"
       alt="Meteor impacts can result in impactite known as shocked quartz. (a) Shocked quartz found in Haiti showing striations. (c) shows unshocked quartz. Figure adapted from Fig. 4 Kring et al., 1994 (https://doi.org/10.1016/0012-821X(94)90175-9)"
       style="height:350px; width:auto;">
  <figcaption>
    <em>Meteor impacts can result in impactite known as shocked quartz. (a) Shocked quartz found in Haiti showing striations. (c) shows unshocked quartz. Figure adapted from Fig. 4 Kring et al., 1994 (https://doi.org/10.1016/0012-821X(94)90175-9) [5]</em>
  </figcaption>
</figure>
<br />

## Implications for bioinformatics and computational biology 
Dump is a great description of what OpenAI did: totalling 719 AI-generated, unreviewed-by-human proofs and subsequent preprint manuscripts, [withdrawing three manuscripts within the first few days](https://github.com/openai/math/blob/main/history.md) [6] and likely some more to follow once domain-expert mathematicians spend the next few years crawling through 100+ page manuscripts of incomprehensible stuff, being able to pat themselves on the back as the first humans to ever critically review this work. Nonetheless, there appears to be many genuine scientific gains across these manuscripts. Using a similar approach, [Google has solved 9 new Erdős problems, along with expert-vetted, natural-language translations of these proofs](https://doi.org/10.1126/science.aej2213) [4].

The scientific community would be wise to come to terms with the power of agentic AI and its demonstrated application in research. While these solutions took significant amounts of compute, we should acknowledge that Kuhnian paradigm-shifts are usually enabled via [new technologies and techniques](https://doi.org/10.1057/s41599-025-05797-6) [7]. Agentic-driven research leaves the field of bioinformatics and computational biology in a bit of a weird spot, as an obvious target for AI giants.

Similar to most science, much of computational biology research is derivative, trivial, targeting low hanging fruit and offerring little in the way of gains and real world application. But that's okay and doesn't mean it shouldn't be done, and I say this as someone who has been paid as a bioinfomatician [for the last 6 years](https://scholar.google.com.au/citations?hl=en&user=Rf9oh94AAAAJ&view_op=list_works&sortby=pubdate) [8]. Due to it's computational nature, bioinformatics/computational biology is highly amenable to rapid and 'high-impact' publication due to:
- Large-scale datasets enable fishing, which isn't wrong, but it's not the same as benchwork.
- Any finding, whether positive, negative or null is basically publishable as long as you can make it look somewhat decent and tell a good story
- Data is already encoded into structures, making statistics, visualisation and writeup fast
- Never really been particularly difficult to learn
- Cheap and fails fast, allowing lots of hypothesis testing
- Can do basically any analysis you can dream of thanks to an ongoing avalanche of open-access, free-to-use software
- Depending on the scale, even single analyses can act as overarching citation farm/magnet

These data-science qualities are rewarded in the modern scientific landscape. To be clear, I'm not criticising this, it's just important to acknowledge the shape of the thing. There are many advantages of working this way and moving away from an experimental `observation -> characterisation` framework to a `prediction -> validation` one. This approach is a lot faster and targeted, with a cerebral:visceral ratio of ~80:20. But this framework is now being leveraged by private, for-profit AI companies who also understand this, and can leapfrog you at any momement they choose.

## Large agentic AI companies are now clear competitors
Large AI companies are carbon-emitting hostile competitors that can point `n × 24/7` AI agents to tackle any computational problem they happen to turn their gaze to. AI agents (basically LLMs with read, write, communication and tool access) have inherent advantages over bioinformaticians because they never sleep, can test lots of hypotheses rapidly and cooperatively, can implement analysis pipelines faster and know more than any one individual across all domains. Sure, they will get some details and domain-specific knowledge wrong, but they won't be making [Excel spreadsheet mistakes](https://doi.org/10.1186/s13059-016-1044-7) [9]...

Before, we were only considering other labs in the race to ['First!'](https://knowyourmeme.com/sensitive/memes/first) [10], but now we find ourselves in a competitive landscape of asymmetric warfare. Even bioinformatic powerusers are mere pawns compared to what a swarm of AI agents can accomplish an the same timeframe. What this means is that your research area can be agentically leapfrogged at any point in time. You can be scooped and beaten to the punch even if [you've spent years on a problem](https://www.reddit.com/r/mathematics/comments/1wzg35m/openai_sharing_ai_progress_in_mathematics/pebwqn2/) [11] [or your entire PhD](https://www.reddit.com/r/mathematics/comments/1wzg35m/openai_sharing_ai_progress_in_mathematics/pebzhr8/) [12].

<figure class="centered-figure">
  <img src="{{ '/assets/post_assets/2026-10-11-AI_firms_asymmetrical_warfare/asymmetrical_warfare.svg' | relative_url }}"
       alt="Chess board. From the perspective of the reader, the white side onlu has pawns. Pawn has made the move from d7-d6. The black side has >16 AI agents which have already made 10 moves and more agents are streaming onto the chess board"
       style="height:350px; width:auto;">
  <figcaption>
    <em>The asymmetrical warfare that bioinformatic and computational biology researchers are up against (pawns). Oh and you can only make moves between the hours of 9:00 AM–5:30 PM while AI agents can take their turn 24/7</em>
  </figcaption>
</figure>
<br />

There are other factors worth considering, such as whether mass spectrometry/protein/sequence data and experiments are even capturing a biologically-important signal that AI agents can even tease out. If experiments are cooked, or if signal isn't captured properly, then agentic approaches will be limited by this data which they are analysing. It's the same for people, but there is always an option to regenerate data or repeat experiments. AI agents don't yet have this meatspace capability. Additionally, discovery of non-homology-based novel biology may prove more difficult for them. For example, if a pathway is not characterised, or genes are unannotated or do not remotely perform similar functions to known genes, the most these agents will be able to do is take swings, but still be unable to actually validate them. Claims of agentic AI 'solving cancer' fall within the choo-choo hype train in my opinion, but there are definitely elements of the 'solving cancer' pipeline that could benefit from agentic approaches.

Like people, they should be able to identify mutations or genes in immune cascades that could be responsible for certain cancers in certain cell types, then design drugs to target these. These will be predictive, and will be rate-limited by initial experiments to validate targets, then subsequent experiments to test drugs. Agentic AI will likely accelerate target and lead generation, but for biology gains, the meatspace still reigns supreme. It would be great to see this in a head-to-head test though! Get ~10 labs, a 10 agent swarms and give them all the same data and ask for drug targets and drugs. Then, independant labs could be used to validate these. 

Intrusive thought experiments aside, I think we need to acknowledge that the fields of bioinformatics and computational biology are especially susceptible to agentic AI leapfrogging. My thought process that then follows is: how can one come up with pivots and insulating points of difference to de-risk the chance of this happening?

## How should researchers respond?
Agentic AI's advantage only holds for dry lab: the meatspace is still safe and ready to eat in a research setting. It very well may be we end up taking experimental orders from agents though...

<figure class="centered-figure">
  <img src="{{ '/assets/post_assets/2026-10-11-AI_firms_asymmetrical_warfare/meatspace_crop.png' | relative_url }}"
       alt="'Meatspace', spelled out with sausages, ribs and other raw meats"
       style="height:200px; width:auto;">
  <figcaption>
    <em>MEATSPACE</em>
  </figcaption>
</figure>
<br />

That said, in this new age, I can think of at least three options for those of us in the computational space as insulative practices:

### Option 1: AI-proof projects (improvise)
Projects which:
- Tackle low-hanging fruit
- Are flat computational projects
- Not developing novel methods or uncovering novel biology 
should switch things up quickly, pivot and AI-proof their work. This includes anything where the project is published including PhD student projects, job position descriptions and grant applications (which will likely have been ingested by frontier models already since 'scientists' love to breach copyright and upload others' work to LLMs).

So, how can one AI-proof a project? I don't really know for sure, but I've been thinking about what I can do that large companies with unprecedented AI agent resources can't. A few ideas I came up with include:
- Weaving meatspace experiments into the computational workflow as much as possible [#MoistLab](https://bsky.app/search?q=%23moistlab)
- Design and execute experiments that people haven't done before
- Analyse experiments with non-standard new and old instruments. There are probably a lot of easy gains for your field just in this.
- Avoid derivative iterations of previously published computational work, especially in hot areas. These could likely represent priority targets for AI companies. After all, AI agents will rabidly hunt after what they prompted to.
    - They are capable of [surprising and lateral decisions](https://www.howdoaiagentswork.com/hugging-face-incident) [13]
    - That said, while biology doesn't have formal 'open problems' like maths, derivative work may prove an easy target

Personally, I'm still mulling other angles - fortunately science is a creative endeavour, so I'll just have to keep using my imagination - and pressure test them with colleagues (and not with commercial LLM services).
As of now, agentic AI's advantage only holds for dry lab: the meatspace is still safe and ready to eat in a research setting.

<figure class="centered-figure">
  <img src="{{ '/assets/post_assets/2026-10-11-AI_firms_asymmetrical_warfare/simpsons-gentle_edited.gif' | relative_url }}"
       alt="Gif of Gentle Ben eating the catered food. From The Simpsons"
       style="height:350px; width:auto;">
  <figcaption>
    <em>No Ben, no!</em>
  </figcaption>
</figure>
<br />


### Option 2: Incorporate agentic AI into your workflow (adapt)
What we're really talking about here is a function of time, i.e. if you can you turn your research around quicker than a commercial company can scoop you, there's no real issue. Therefore, instead of pivoting you could leverage agentic AI for your computational workflows. Now this isn't really a democratising solution, because not all labs have access to either the compute or the cash required for this. Note that agentic AI requires compute for the agents, along with any bioinformatic compute on top of this. However if you do have access to these resources, one could solve their projects quickly before the AI corpo giants turn their intergalactic spacelaser gaze to the research area and ARCHIMEDES II it.

There are a bunch of downsides I can think of for this approach:
- Removing one's ability to discover, learn and pave their own way through methods, pipelines and decisions.
    - I find this to be one of the most important and personally-rewarding aspects of scientific research. Using agentic AI means you are probably unlikely to check the work nor understand it in great enough detail.
    - Basically this is weighing up whether `destination > journey`. This equation looks different for different people.
- Students and the next generation may be inappropriately trained, or lack experience within the discipline.
    - Thinking into the future, without a pool of upcoming trained people that are able to critically respond to and interpret decisions made by agentic workflows may not be ideal. Long term, this could lead to bioinformatics operating as a dead language.
- Is the project worth the carbon emissions and water one would burn to get an answer? Is the reserach question one worth asking?
    - Research computation already burns a huge amount of energy, and agentic workflows would increase this considerably.
- One could argue that feeling forced to use AI agents is exactly what AI companies are banking on - they are dependant upon cross-sectorial buy-in and want us to hand over our bicycles for a subscription-based car. No tears shed if [we forget how to cycle](https://doi.org/10.48550/arXiv.2506.08872) [14] 
- Is more science throughput actually what we need right now? Are people even reading what is put out? I suspect that the amount that researchers actually engage with the primary scientific literature is dropping. There are a number of factors that drive this including the:
    - Tidal wave of publications to keep up with
    - Increasing use of LLMs
    - The majority of papers are incremental and not worth reading
    - Time should be spent on doing research and other essential administrative tasks

Maybe there is a hybrid model to consider, where these downsides are acceptible for some key high-interest projects, while low-interest projects are done in the OG manual way? For example, giving research students a mix of agentic and lower-interest standard bioinformatic agentic projects. This would mitigate some of the highlighed shortcomings.

At some stage, I hypothesise that funding bodies (at least the ones run by milk-drinkers) will want this question answered too:
- Why can't this project be rapidly completed with agentic AI?
    - Should large AI companies be directly contracted to handle this work?
    - Why should funders be paying salaries instead of tokens?

We should have an answers for this. Existentially, we need answers for this. It could be that the research question simply isn't worth the emissions cost of running AI agents. But make no mistake, as people outside of computational biology and bioinformatics start valuing our expertise less, this is something I predict we will need to reckon with.


### Option 3: March on for the people (overcome)
If large AI companies are gonna leapfrog research and rush to patent to maximise shareholder value, I believe it is reasonable to continue working on alternative strategies and solutions to solved problems - especially in the biotech and translational space.

The obvious downside to this is potential therapies could price out normies and be exclusively for the rich. As my podcast-attuned friend often says: <i>"When AI discovers how to cure ageing, do you think they will make it available to the great unwashed?"</i>. Hyperbole aside, I think the point largely stands - AI firms are unlikely to redistribute wealth or democratise medicine in my opinion. So let's say they "cure ageing", I think it would be scientifically valid and reasonable to continue working on the problem and attempting novel drug design or discovery of novel targets. There would be a reasonable moral case for this. That said, acquiring funding may prove difficult if something has 'already been solved', so in conclusion: I dunno!


## AI-generated manuscripts
My opinion is that bots have no place in the production of academic or scientific manuscripts, be it writing or reviewing. I am sick of reading generative-AI slop masquerading as science, which is full of ≥tri-syllabic jargon stitched togther into incomprehensible sentences. If someone can't be bothered writing out their findings, then I can't be bothered reading it.

Writing is an important human pursuit, not just for the reader but the writer as well. Writing is an unparalleled cheat code for developing, organising and presenting ideas. Structuring concepts and arguments into a narrative is 👌👌. Bonus points for doing this using the clearest and most interesting language you can. We do this because storytelling is an inherant human pursuit probably older than >100,000 years, spanning the oral tradition, the written word and now all sorts of media (including podcasts with hosts and guests afflicted with AI-psychosis). The delivery of science through the written record gives us the opportunity to have conversations that span generations. For scientists to actively not participate in this wondrous process is bewildering to me and seems fundementallly anti-scientific. 

I personally find writing a valuable way to spend my time - and why I spent the last few hours writing this blog today.

<figure class="centered-figure">
  <img src="{{ '/assets/post_assets/2026-10-11-AI_firms_asymmetrical_warfare/banjo_kazooie.png' | relative_url }}"
       alt="Inside the sandcastle found in Treasure Trove Cove, within Banjo Kazooie. Floor shows tiles with all letters of the alphabet"
       style="height:350px; width:auto;">
  <figcaption>
    <em>How I type out blog posts out. First I load up Banjo Kazooie, get into Treasure Trove Cove, drain the water, then enter the sandcastle</em>
  </figcaption>
</figure>
<br />


## References

<b>[1]</b> https://github.com/openai/math<br />
<b>[2]</b> https://doi.org/10.1126/science.aej2213<br />
<b>[3]</b> https://www.humansecurity.com/learn/resources/2026-state-of-ai-traffic-cyberthreat-benchmarks<br />
<b>[4]</b> https://www.nature.com/articles/s41598-025-96372-1<br />
<b>[5]</b> https://doi.org/10.1016/0012-821X(94)90175-9<br />
<b>[6]</b> https://github.com/openai/math/blob/main/history.md<br />
<b>[7]</b> https://doi.org/10.1057/s41599-025-05797-6<br />
<b>[8]</b> https://scholar.google.com.au/citations?hl=en&user=Rf9oh94AAAAJ&view_op=list_works&sortby=pubdate<br />
<b>[9]</b> https://doi.org/10.1186/s13059-016-1044-7<br />
<b>[10]</b> https://knowyourmeme.com/sensitive/memes/first<br />
<b>[11]</b> https://www.reddit.com/r/mathematics/comments/1wzg35m/openai_sharing_ai_progress_in_mathematics/pebwqn2/<br />
<b>[12]</b> https://www.reddit.com/r/mathematics/comments/1wzg35m/openai_sharing_ai_progress_in_mathematics/pebzhr8/<br />
<b>[13]</b> https://www.howdoaiagentswork.com/hugging-face-incident/<br />
<b>[14]</b> https://doi.org/10.48550/arXiv.2506.08872<br />
