---
layout: page
title: TACO
permalink: /taco/
---

<div class="taco-page">
  <p class="taco-kicker">Accretion · Comptonization · Shocks · Timing</p>

  <p class="taco-lede">
    <strong>TACO</strong> collects my numerical and spectral modelling work on accretion flows around compact objects, with emphasis on X-ray binaries, two-component advective flows, neutron-star boundary layers, shocks, Comptonization, and timing signatures.
  </p>

  <div class="taco-note">
    This page is a curated research archive, not a public code release. The goal is to gather the relevant papers, thesis material, schematic figures, and selected notes around the TACO family of calculations.
  </div>

  <section class="taco-module" id="taco-mc">
    <div class="taco-module-text">
      <p class="taco-label">Radiative transfer / Monte Carlo</p>
      <h2>TACO-MC</h2>
      <p>
        <strong>TACO-MC</strong> is the Monte Carlo radiative-transfer module developed to study thermal Comptonization in a two-component advective flow around a neutron star. In this setup, soft photons from the Keplerian disc and the Normal Boundary Layer (NBOL) are injected into the hot post-shock region, the CENtrifugal pressure supported BOundary Layer (CENBOL), where they undergo repeated scattering before escaping as the emergent spectrum.
      </p>
      <p>
        The module was used to examine how the neutron-star boundary layer, the post-shock electron cloud, the disc/halo accretion rates, and the shock location shape the resulting X-ray spectra.
      </p>
      <p class="taco-links">
        <a href="/assets/taco/resources/bhattacharjee_chakrabarti_2017_mnras_taco_mc.pdf">2017 MNRAS paper</a>
        <span>·</span>
        <a href="/assets/taco/resources/ayan_bhattacharjee_phd_thesis_2019.pdf">Thesis chapters</a>
      </p>
    </div>
    <figure class="taco-figure">
      <img src="/assets/images/taco/taco_mc_tcaf_ns_schematic.png" alt="Schematic of the two-component advective flow around a neutron star, showing KD, NBOL, and CENBOL.">
      <figcaption>TCAF around a neutron star: soft photons from the Keplerian disc and NBOL are Comptonized by CENBOL electrons.</figcaption>
    </figure>
  </section>

  <section class="taco-module" id="taco-hd">
    <div class="taco-module-text">
      <p class="taco-label">Hydrodynamics / SPH</p>
      <h2>TACO-HD</h2>
      <p>
        <strong>TACO-HD</strong> is the hydrodynamic module for studying shocked accretion flows around weakly magnetized neutron stars. The simulations follow low-viscosity, sub-Keplerian inflow using smoothed particle hydrodynamics, with cooling included, in order to study the formation and oscillation of boundary layers and shock fronts.
      </p>
      <p>
        The work focuses on the dynamical origin of timing features: the formation of CENBOL and NBOL, the emergence of standing or oscillating shocks, the generation of strong outflows, and the connection between shock oscillations and low- and high-frequency QPO-like behaviour.
      </p>
      <p class="taco-links">
        <a href="/assets/taco/resources/bhattacharjee_chakrabarti_2019_apj_taco_hd.pdf">2019 ApJ paper</a>
        <span>·</span>
        <a href="/assets/taco/resources/ayan_bhattacharjee_phd_thesis_2019.pdf">Thesis chapters</a>
      </p>
    </div>
    <figure class="taco-figure">
      <img src="/assets/images/taco/taco_hd_flow_configuration.png" alt="Hydrodynamic flow configuration around a neutron star showing shocked accretion structure.">
      <figcaption>Representative shocked-flow configuration from the hydrodynamic neutron-star accretion calculations.</figcaption>
    </figure>
  </section>

  <section class="taco-module" id="taco-rt">
    <div class="taco-module-text">
      <p class="taco-label">Spectral model / TANS</p>
      <h2>TACO-RT</h2>
      <p>
        <strong>TACO-RT</strong> is the spectral/radiative-transfer extension of the TCAF-based neutron-star framework. It uses the physical geometry motivated by the Monte Carlo and hydrodynamic studies, but compresses the calculation into a faster spectral model for accreting neutron stars.
      </p>
      <p>
        The model combines contributions from the NBOL, the inner and outer Comptonizing regions of CENBOL, and the Keplerian disc. It was designed to explore how Z-source and Atoll-source spectral states can arise from changes in accretion rates, shock location, boundary-layer temperature, cloud transparency, and photon interception between the NBOL and CENBOL.
      </p>
      <p class="taco-links">
        <a href="/assets/taco/resources/bhattacharjee_chakrabarti_tans_taco_rt.pdf">TANS / unified spectral model</a>
        <span>·</span>
        <a href="/assets/taco/resources/ayan_bhattacharjee_phd_thesis_2019.pdf">Thesis chapters</a>
      </p>
    </div>
    <figure class="taco-figure">
      <img src="/assets/images/taco/taco_rt_tans_schematic.png" alt="Schematic of the TANS model and its spectral components.">
      <figcaption>TANS / TACO-RT schematic: NBOL, inner and outer CENBOL regions, and Keplerian-disc contributions to the final spectrum.</figcaption>
    </figure>
  </section>

  <section class="taco-resources" id="resources">
    <h2>Resources</h2>
    <ul>
      <li><a href="/assets/taco/resources/bhattacharjee_chakrabarti_2017_mnras_taco_mc.pdf">Monte Carlo simulations of thermal Comptonization process in a two-component advective flow around a neutron star</a></li>
      <li><a href="/assets/taco/resources/bhattacharjee_chakrabarti_2019_apj_taco_hd.pdf">Timing Properties of Shocked Accretion Flows around Neutron Stars in the Presence of Cooling</a></li>
      <li><a href="/assets/taco/resources/bhattacharjee_chakrabarti_tans_taco_rt.pdf">A unified spectral model for accreting neutron stars</a></li>
      <li><a href="/assets/taco/resources/ayan_bhattacharjee_phd_thesis_2019.pdf">PhD thesis: Spectral and Timing Properties of Black Holes and Neutron Stars in X-ray Binaries Using Two-Component Advective Flow Solution</a></li>
    </ul>
  </section>
</div>
