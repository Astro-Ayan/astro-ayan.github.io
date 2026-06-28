---
layout: page
title: X-Ray Spectral & Timing Studies
permalink: /xray/
---

<section class="xray-hero">
  <p class="xray-kicker">Research archive</p>
  <h1>X-Ray Spectral & Timing Studies</h1>
  <p class="xray-lede">A compact archive of my work on X-ray binaries: spectral fitting, timing analysis, QPO diagnostics, and the use of TCAF/POS-type physical models to connect observed photons to accretion-flow geometry.</p>
</section>

<nav class="xray-jump" aria-label="X-ray page sections">
  <a href="#data-tools">Data & tools</a>
  <a href="#transients">Black-hole transients</a>
  <a href="#persistent">Persistent systems</a>
  <a href="#microquasars">Class-variable microquasars</a>
  <a href="#timing">Timing diagnostics</a>
  <a href="#resources">Resources</a>
</nav>

<section class="xray-note">
  <strong>Scope.</strong> This page is not a full review of X-ray binaries. It is a curated map of the observational and modelling work connected to my papers, thesis chapters, and related analysis pipelines.
</section>

<section id="data-tools" class="xray-section">
  <h2>Data, software & calibration</h2>
  <p>Most of the RXTE-based work used public archival data accessed through HEASARC, reduced with HEASOFT/FTOOLS, and analysed with XSPEC and XRONOS-style timing tools. AstroSat/LAXPC work used LAXPC event data and LaxpcSoft.</p>
  <div class="xray-tool-grid">
    <a class="xray-tool-card" href="https://heasarc.gsfc.nasa.gov/docs/archive.html">HEASARC archive / XAMIN<span>Catalogues and high-energy mission data products.</span></a>
    <a class="xray-tool-card" href="https://heasarc.gsfc.nasa.gov/docs/xte/archive.html">RXTE archive / XTEPUBLIC<span>Public RXTE observations and archive access.</span></a>
    <a class="xray-tool-card" href="https://heasarc.gsfc.nasa.gov/docs/software/lheasoft/">HEASOFT<span>FTOOLS, FITS utilities, XSPEC, XRONOS, XIMAGE.</span></a>
    <a class="xray-tool-card" href="https://heasarc.gsfc.nasa.gov/docs/software/ftools/xronos.html">XRONOS<span>Timing analysis tools, including PDS workflows.</span></a>
    <a class="xray-tool-card" href="https://heasarc.gsfc.nasa.gov/docs/heasarc/caldb/caldb_supported_missions.html">CALDB<span>Mission/instrument calibration files.</span></a>
    <a class="xray-tool-card" href="https://www.tifr.res.in/~astrosat_laxpc/LaxpcSoft.html">LAXPC software<span>AstroSat/LAXPC analysis tools.</span></a>
  </div>
</section>

<section id="transients" class="xray-section xray-split">
  <div>
    <p class="xray-kicker">Black-hole transients</p>
    <h2>H1743-322: outburst evolution with TCAF + POS</h2>
    <p>The H1743-322 study used RXTE/PCA data from the 2004 outburst to track the day-to-day evolution of physical flow parameters: Keplerian disk rate, sub-Keplerian halo rate, shock location, compression ratio, and the size/location of the Comptonizing region. The timing side used the presence and evolution of QPOs, interpreted through the propagating oscillatory shock picture, to connect spectral evolution with shock motion.</p>
    <p>The result is a compact example of the central aim of this part of my work: use spectral and temporal information together, rather than treating them as disconnected diagnostics.</p>
  </div>
  <figure class="xray-figure">
    <img src="/assets/images/xray/h1743_cenbol_evolution.png" alt="Schematic evolution of CENBOL and Keplerian disk across spectral states in TCAF">
    <figcaption>CENBOL and Keplerian-disk evolution across the canonical outburst sequence, as used in the H1743-322 analysis.</figcaption>
  </figure>
</section>

<section id="persistent" class="xray-section xray-split xray-split-reverse">
  <div>
    <p class="xray-kicker">Persistent black-hole systems</p>
    <h2>Cygnus X-1: hard-state flow parameters and mass constraint</h2>
    <p>The Cygnus X-1 work focused on a stable hard-state interval in RXTE/PCA data. Spectra in the 2.5–45 keV range were fitted with a TCAF-based model plus a Gaussian line component, allowing the disk rate, halo rate, shock location, shock strength, normalization, and black-hole mass to be extracted from individual spectra.</p>
    <p>The narrow variation of the fitted flow parameters is the important physical point: the source behaves like a persistent hard-state system with a relatively stable Comptonizing region. Averaging the fitted masses provided an independent mass estimate consistent with dynamical constraints.</p>
  </div>
  <figure class="xray-figure">
    <img src="/assets/images/xray/cygx1_flow_parameters.png" alt="Temporal evolution of TCAF parameters for Cygnus X-1 hard-state RXTE observations">
    <figcaption>TCAF-fitted flow parameters for Cygnus X-1 during the persistent hard phase.</figcaption>
  </figure>
</section>

<section id="microquasars" class="xray-section">
  <p class="xray-kicker">Class-variable microquasars</p>
  <h2>GRS 1915+105 and IGR J17091-3624</h2>
  <div class="xray-card-grid">
    <article class="xray-card">
      <h3>χ class: steady classes, outflow signatures</h3>
      <p>The χ-class study separated the radio-quiet χ₂/χ₄ classes from the radio-loud χ₁/χ₃ classes. The former were fitted with TCAF alone, while the latter required an additional cutoff power-law component, interpreted as a contribution from outflow-related emission not contained in the basic TCAF spectral table.</p>
      <img src="/assets/images/xray/grs1915_chi_flow_config.png" alt="Flow configurations associated with chi subclasses of GRS 1915+105">
    </article>
    <article class="xray-card">
      <h3>θ class: AstroSat/LAXPC dynamic timing</h3>
      <p>The θ-class analysis used AstroSat/LAXPC observations of U-shaped light-curve regions. Dynamic PDS showed QPO power around 4–5 Hz. Spectral fits indicated increasing Keplerian disk rate, inward shock motion, and progressive softening as the radiation intensity rose.</p>
      <img src="/assets/images/xray/grs1915_theta_dynamic_pds.png" alt="Dynamic PDS maps for theta class GRS 1915+105 AstroSat observations">
    </article>
    <article class="xray-card">
      <h3>μ and C2 classes: comparative variability</h3>
      <p>The comparative study of GRS 1915+105 and IGR J17091-3624 examined energy-resolved light curves, dynamic photon index, PDS features, and spectral fits. Similar-looking variability did not imply identical hard-band behaviour: the role of the Comptonizing/hard component differed across the two sources and classes.</p>
      <img src="/assets/images/xray/grs1915_igr_mu_lightcurves.png" alt="Mu-class light curve comparison between GRS 1915+105 and IGR J17091-3624">
    </article>
  </div>
</section>

<section id="timing" class="xray-section xray-split">
  <div>
    <p class="xray-kicker">Timing diagnostics</p>
    <h2>PDS, QPOs and dynamic evolution</h2>
    <p>The timing work uses power-density spectra, energy-resolved light curves, dynamic PDS maps, and QPO fitting to locate which part of the flow is participating in the observed variability. In the TCAF/POS interpretation, the shock/CENBOL region is not only the Comptonizing cloud; it can also provide the natural length scale and timescale for low-frequency oscillations.</p>
  </div>
  <figure class="xray-figure">
    <img src="/assets/images/xray/grs1915_mu_dynamic_pds.png" alt="Dynamic PDS for mu-class GRS 1915+105 showing evolving QPO power">
    <figcaption>Dynamic PDS maps are useful when variability evolves faster than a single time-averaged spectrum can describe.</figcaption>
  </figure>
</section>

<section id="resources" class="xray-section">
  <h2>Resources</h2>
  <table class="xray-resource-table">
    <thead><tr><th>Topic</th><th>Resource</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>H1743-322</td><td><a href="/assets/xray/resources/H1743_322_2004_TCAF_POS.pdf">MNRAS 2017 paper</a></td><td>RXTE/PCA, 2004 outburst, TCAF + POS.</td></tr>
      <tr><td>Cygnus X-1</td><td><a href="/assets/xray/resources/Cygnus_X1_TCAF_mass_2019.pdf">2019 preprint</a></td><td>Hard-state RXTE/PCA spectra and TCAF mass constraint.</td></tr>
      <tr><td>GRS 1915+105 χ</td><td><a href="/assets/xray/resources/GRS1915_chi_TCAF_2020.pdf">RAA 2020 paper</a></td><td>χ subclasses, radio-loud/radio-quiet behaviour, TCAF + cutoffpl.</td></tr>
      <tr><td>GRS 1915+105 θ</td><td><a href="/assets/xray/resources/GRS1915_theta_AstroSat_2021.pdf">ApJ 2021 paper</a></td><td>AstroSat/LAXPC θ class, dynamic PDS, QPO evolution.</td></tr>
      <tr><td>GRS 1915 / IGR J17091</td><td><a href="/assets/xray/resources/GRS1915_IGRJ17091_variability_2022.pdf">AdSR 2022 paper</a></td><td>Comparative spectro-temporal study of μ and C2 classes.</td></tr>
      <tr><td>Thesis</td><td><a href="/assets/xray/resources/Ayan_Bhattacharjee_PhD_Thesis.pdf">PhD thesis</a></td><td>Detailed background, TCAF applications, NS/BH spectral-timing framework.</td></tr>
    </tbody>
  </table>
</section>

<script src="/assets/js/research-lightbox.js" defer></script>
