# Automation, parallelisation and the modern biologist

##### 2025-09-27

As someone who started their scientific career in the wet lab dealing with single strains and cloning, I was never taught to think at scale. Only when I started dealing with large datasets in the computational space, did this become an essential skill and design philosophy that I needed to develop. This sort of thinking has not only improved my capabilities and speed at which I can figure things out, but it has also improved my laboratory planning and execution.

<figure>

<img src="Resources/blue_red_pipette_choice.png"
       alt="Live post viewed on GitHub."
       style="height:400px; width:auto;">
<figcaption>

<em>“You take the blue pipette: the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pipette: you stay in Wonderland, and I show you how deep the rabbit hole goes.”</em>
</figcaption>

</figure>

<br />

## Scale demands automation/parallel processes

Not sure if anyone else feels this way, but when I have to perform tasks which cannot be automated or parallelised, it makes me annoyed and then I start looking for places to shave time and effort. If I have to open Excel or navigate a GUI, each additional click feels like a personal attack on my limited time, often requiring repetitive busywork.

For example, I see single-channel pipetting as a `for` loop:

<figure>

<img src="Resources/pipette_tips.svg"
       alt="Live post viewed on GitHub."
       style="height:100px; width:auto;">
<figcaption>

<em></em>
</figcaption>

</figure>

``` bash
for i in {1..8}; do
    mv "tube_${i}/cells" "new_tube_${i}/media+cells"
done
```

For loops are great because they are automated, but suffer from sequentiality, making them slow. Single-channel pipettes offer the worst of both worlds in that they are both manual and sequential. Nowadays in the lab (when I get to go in), I try to design experiments at scale with multi-channel pipettes, keeping `gnu parallel` in mind:

<figure>

<img src="Resources/pipette_multi_channel_tips.svg"
       alt="Live post viewed on GitHub."
       style="height:125px; width:auto;">
<figcaption>

<em></em>
</figcaption>

</figure>

``` bash
ls -1 tube_*/cells | parallel -j 8 '
  dir=$(dirname {})
  base=$(basename {})
  mv {} new_${dir}/$base
'
```

Yes, I am aware one shouldn’t multi-thread I/O-bound tasks like `mv`, but the *pipette-aphor* works. Importantly, this means I can test more bacterial isolates, more substrates/reagents and gain more statistical power with replicates. It’s a little more complex to set up and perform, but the payoff is worth it. But yes, sometimes you can get *parallelisation paralysation*. But more generally, this serves as a self-reminder that I should spend more time planning and less time executing.

<br />

## Bioinformatics is part of the modern biologists’ toolkit

Go find a few random top biology papers published in the past 5 years. Almost all will have at least some computational/bioinformatic components, be it DNA/RNA sequencing, phylogenetics/evolutionary analysis, structural analysis, molecular dynamics, simulations, modelling etc. There are many reasons for this, but simply put: computational approaches are high-yield science. They produce large amounts of data which can be leveraged in multiple different ways, and guarantee *at mininum*, a minimal publishable unit (as long as experiments were robustly designed). Critically, this workflow generates experimental leads which can then be capitalised on and validated/rejected.

Yet, as far as I am aware, bioinformatics and data science are not core units in many biology/biomedical science degrees. We have faced difficulty recruiting students within our area (computational microbiology) despite the underlying academic sexiness of *infectious diseases* and the inherent global problem of antimicrobial resistance. Napkin math, but I would put antimicrobial resistance somewhere in the top 10 current/future global issues in terms of severity, likelihood and scale of impact, just below:

1. Climate change and it’s myriad of flow-on effects
2. Nuclear annihilation
3. The ongoing holocene mass extinction causing ecosystem collapse
4. Wealth inequality and food/water insecurity (currently exacerbated by 1 and 3)
5. Global conflicts/wars/genocides (exacerbating 2.)

Student I’ve talked to understand that antimicrobial resistance is an important issue, but are not being equipped appropriately in the context of modern science. Their experience with undergraduate bioinformatics envokes eye-rolling groans instead of excitement at the unlimited potential the discipline is capable of (and currently operating at 🔥🔥). When all you’re taught how to do is a web BLAST and manually inspect plasmid restriction sites via eyeball-scanning A’s G’s, T’s and C’s, I don’t blame them. This should change, and hopefully it already has in some places.

This hinders a lot of current wet lab research in my opinion, which could benefit from even small amounts of comptuational/bioinformatic techniques. Because that’s the thing - these are just tools and techniques like everything else in biology. If one needs to clone a gene, they use molecular biology. If one need to look for a gene target within a population, they’d use alignments (or HMMs). If one wants to ensure the allelic variant they intend on cloning isn’t unique to their weird, historically-used lab strain, they’d first analyse this with population genomics. This would not only give them a cool initial result, but could drive experimental design - maybe they might then want to clone a few of the most prevalent allelic protein variants in parallel!

<br />

## My personal, integrated bioinformatics approach

Nowadays, I won’t step foot in the lab until I’ve done the prerequisite bioinformatics. For me, this makes the lab a place of hypothesis validation/rejection rather than meandering discovery (which I have nothing against). This bioinformatically-driven decision-making covers everything from strain selection, substrate/antibiotic/antiseptic choice, power calculations, *in silico* PCR design against populations - all in an effort to maximise experimental discovery while minimising time and effort spent (and plastic waste generated). Though I am a naturally lazy person, so maybe that’s the real reason and everything else is *post hoc* rationalisation.

In terms of postgraduate students, we offer them hybrid wet and dry-lab projects (1–5) (which I have disgustingly heard referred to as *moist*-lab) to address this training gap. This ensures students get cross-disciplinary experience and understand these disciplines are not siloed but regularly bridged to maximise scientific gain.

<br />

## Supplemental methods

Vector images drawn in Inkscape v1.3.2 (6). All figures are available as raw svg files in the [Resources](https://github.com/bananabenana/compu-micro-bioinfo-molecu-net/tree/main/Posts/2025-09-27_Automation_parallelisation_and_the_modern_biologist/Resources) directory.

<br />

# References

<div id="refs" class="references csl-bib-body" entry-spacing="0">

<div id="ref-TacklingCarbapenemResistance" class="csl-entry">

<span class="csl-left-margin">**1**. </span><span class="csl-right-inline">Tackling carbapenem resistance in the Australian setting: Using genomics to understand the spread of deadly superbugs \| Supervisor Connect. <https://supervisorconnect.med.monash.edu/projects/tackling-carbapenem-resistance-australian-setting-using-genomics-understand-spread-deadly></span>

</div>

<div id="ref-BuildingGenomicsFramework" class="csl-entry">

<span class="csl-left-margin">**2**. </span><span class="csl-right-inline">Building a genomics framework for emerging hospital superbugs \| Supervisor Connect. <https://supervisorconnect.med.monash.edu/projects/building-genomics-framework-emerging-hospital-superbugs></span>

</div>

<div id="ref-GenomicExperimentalAnalysis" class="csl-entry">

<span class="csl-left-margin">**3**. </span><span class="csl-right-inline">Genomic and experimental analysis of antimicrobial resistance and hypervirulence convergence in Klebsiella pneumoniae \| Supervisor Connect. <https://supervisorconnect.med.monash.edu/projects/genomic-and-experimental-analysis-antimicrobial-resistance-and-hypervirulence-convergence></span>

</div>

<div id="ref-DevelopmentRapidDiagnostic" class="csl-entry">

<span class="csl-left-margin">**4**. </span><span class="csl-right-inline">Development of a rapid diagnostic assay against antimicrobial resistant pathogens \| Supervisor Connect. <https://supervisorconnect.med.monash.edu/projects/development-rapid-diagnostic-assay-against-antimicrobial-resistant-pathogens></span>

</div>

<div id="ref-IdentifyingNovelAntimicrobials" class="csl-entry">

<span class="csl-left-margin">**5**. </span><span class="csl-right-inline">Identifying novel antimicrobials against bacteria resistant to traditional antibiotics \| Supervisor Connect. <https://supervisorconnect.med.monash.edu/projects/identifying-novel-antimicrobials-against-bacteria-resistant-traditional-antibiotics></span>

</div>

<div id="ref-inkscape-developersInkscape2023" class="csl-entry">

<span class="csl-left-margin">**6**. </span><span class="csl-right-inline">Inkscape-Developers. Inkscape. 2023. <https://inkscape.org></span>

</div>

</div>
