---
layout: post
title: "Powering the AI Era: Investing in the 'Water Sellers' Behind Data Centers"
date: 2025-10-11 14:00:00 +0800
last_modified_at: 2025-10-11 14:00:00 +0800
categories: [tech]
tags: [power-market, infrastructure, nuclear, ai-demand]
author: Jiajun Liang
description: Breaks down the electricity suppliers powering AI expansion, from merchant generators to nuclear developers, and shows how to underwrite durable returns.
image: /assets/images/posts/ai-power-supply.svg
lang: en
featured: false
tldr:
  - "Electricity is the binding constraint on AI growth, elevating generators and transmission players."
  - "Flexible contracts and onsite generation de-risk hyperscale data center timelines."
  - "Nuclear small modular reactors (SMRs) re-emerge as credible baseload partners for AI ecosystems."
key_takeaways:
  - "Pair renewable PPAs with storage and gas peakers to cover both daytime peaks and overnight training loads."
  - "Transmission investment and grid-enhancing tech unlock trapped renewable capacity for AI hubs."
  - "SMR developers that secure regulatory fast lanes and utility partners will command premium valuations."
faqs:
  - question: "How big is the AI-driven power demand gap?"
    answer: "Our base case forecasts a 3x increase in data center load by 2030, requiring more than 120 GW of new capacity across North America and Asia."
  - question: "What role can demand response play?"
    answer: "Algorithmic load shifting during model training and inference windows can shave 10–15% off peak demand while monetizing ancillary services."
  - question: "Are SMRs investable yet?"
    answer: "Watch for developers that lock down site permits, manufacturing partners, and creditworthy offtakers—those milestones derisk revenue models."
redirect_from:
  - /industry%20research/ai%20industry/2025/10/11/ai-power-analysis.html
  - /Industry%20Research/AI%20Industry/2025/10/11/ai-power-analysis.html
toc: true
---

## Introduction: AI's Hidden Bottleneck

While everyone obsesses over GPUs, algorithms, and data pipelines, a more fundamental question keeps surfacing: **where will the electricity come from?**

Training and inference both rely on enormous computing power, and compute is simply electricity in disguise. As model sizes grow exponentially, power is shifting from "supporting infrastructure" to the **primary bottleneck**. This article breaks down the structural demand for AI power and highlights where investors can find the most compelling opportunities in this secular trend.

---

## Part 1: Quantifying AI's Power Appetite

### 1.1 Compute = Power: Back-of-the-Envelope Math

Start with a few base numbers:

**Power draw per GPU**
- NVIDIA H100: 700 W peak
- NVIDIA B100 (next generation): ~1000 W

**At the data center level**
```
100,000 H100 GPUs
= 100,000 × 700 W
= 70 MW (70,000 kilowatts)
= Continuous load, running 24/7
```

**Training a frontier model**
```
GPT-4–class model
- Training duration: 90–180 days
- Required GPUs: 10,000–25,000 H100s
- Power consumption: 100–500 GWh
- Equivalent to: 2–3 months of electricity usage for a mid-sized city
```

### 1.2 Why Power Is a Non-Negotiable Input

Three structural characteristics make AI power demand inelastic:

1. **No room for interruptions**  
   - Once training starts it must run continuously.  
   - Any outage resets the entire job—millions of dollars gone.  
   - Unlike conventional data centers, there is no acceptable downtime.

2. **Exploding power density**  
   ```
   Legacy data center: 5–10 kW per rack
   AI data center:    40–100 kW per rack
   → 8–10× increase in density
   ```

3. **Growth that keeps beating forecasts**  
   - 2024: global AI compute capacity grew 200%+.
   - 2025–2027: still tracking 100%+ CAGR.  
   - OpenAI, Google, and Meta are all scaling dedicated AI campuses.

---

## Part 2: Structural Constraints on Power Supply

### 2.1 Why Building New Data Centers Is So Hard

**Challenges for traditional grids**

1. **Insufficient grid headroom**  
   - Most U.S. grids were designed around demand curves from 20 years ago.  
   - A single AI data center can match the load of a medium-sized city.  
   - Grid reinforcement typically takes 3–5 years of permitting plus 5–10 years of construction.

2. **Intermittency of renewables**  
   - Solar and wind are variable by nature.  
   - AI training requires 24/7 baseload power.  
   - Tension: clean energy commitments vs. the need for stability.

3. **Permitting and environmental review**  
   - New plants require approvals across federal, state, and local levels.  
   - Environmental impact assessments alone add 2–3 years.  
   - Local opposition (the classic NIMBY effect) further delays timelines.

**Bottom line:** Moving from decision to energization typically takes **5–8 years**.

### 2.2 Nuclear Power: The Prime Candidate

Why nuclear keeps rising to the top of the shortlist:

| Energy Source | Reliability | Carbon Profile | Build Time | AI Fit |
|---------------|-------------|----------------|------------|--------|
| **Nuclear**   | ✅ 24/7      | ✅ Zero-carbon  | ⚠️ 5–10 yrs| ✅ Excellent |
| Natural Gas   | ✅ Stable    | ❌ High carbon  | ✅ 2–3 yrs | ⚠️ ESG concerns |
| Solar         | ❌ Variable  | ✅ Zero-carbon  | ✅ 1–2 yrs | ❌ Poor fit |
| Wind          | ❌ Variable  | ✅ Zero-carbon  | ✅ 1–2 yrs | ❌ Poor fit |

**Nuclear's distinct advantages**
1. **Baseload output**: 24/7 generation with >90% capacity factors.  
2. **Zero direct emissions**: Aligns with big tech ESG commitments.  
3. **Predictable economics**: Fuel is a small cost component; 20-year PPAs lock in pricing.  
4. **Faster restarts**: Bringing a retired plant back online can take 3–5 years vs. 10+ for brand new builds.

---

## Part 3: Key Investment Targets

### 3.1 Constellation Energy (CEG): The Clearest Beneficiary

**Company snapshot**
- Largest nuclear operator in the United States.  
- Operates 21 nuclear plants with 21+ GW of capacity.  
- Market cap: ~$80B (October 2025).

#### 3.1.1 Restarting TMI-1: A Landmark Event

**Three Mile Island Unit 1 (TMI-1)**

- Capacity: 835 MW.  
- Retired in 2019 for economic reasons.  
- Restart scheduled for commercial operation in 2028.

**20-year PPA with Microsoft**
```
Partnership outline
- Microsoft purchases 100% of output.
- Term: 20 years (2028–2048).
- Pricing: Fixed (not disclosed; market estimates at $80–100/MWh).
- Total contract value: $14–18B by street estimates.
```

**Why the risk-reward is compelling**

1. **Regulatory path cleared**  
   - NRC has approved the restart.  
   - Environmental reviews are complete.  
   - Major permits secured.

2. **Financing in place**  
   - Microsoft commits ~$1.6B of restart capital.  
   - Constellation operates the asset; risks are shared.  

3. **Revenue visibility**  
   ```
   Annual revenue estimate:
   835 MW × 8,760 hours × 90% capacity × $90/MWh ≈ $590M

   20-year gross revenue: $11.8B
   Less operating costs (~30%): ≈ $8.3B cumulative net cash flow
   ```

4. **A template for replication**  
   - Constellation can replicate the model across other dormant nuclear units.  
   - Tech giants get guaranteed clean power; Constellation secures long-dated cash flows.

#### 3.1.2 Valuation and Catalysts

- Shares trade at ~14× 2026E EBITDA, but the Microsoft contract effectively extends duration and reduces earnings volatility.  
- Street estimates likely underappreciate incremental upside from additional restart projects.  
- Catalysts: formal PPA signing, progress updates on refurbishment milestones, and potential new tech partnerships.

### 3.2 Alternative Plays to Watch

1. **Public Power Utilities** (e.g., TVA, BPA)  
   - Not publicly traded but influential as grid partners.  
   - They are experimenting with dedicated AI tariffs; their policy choices shape private-sector economics.

2. **Small Modular Reactor (SMR) Developers**  
   - NuScale, TerraPower, and GE Hitachi are racing to deploy SMRs tailored for data centers.  
   - Timelines remain uncertain, but co-location with AI campuses is a natural fit.

3. **Battery Storage Integrators**  
   - Firms such as Fluence provide grid-scale storage that complements nuclear baseload.  
   - Batteries help meet ramp requirements and improve grid resilience for AI clusters.

---

## Part 4: Strategic Takeaways for Investors

1. **Think like a utility**: The best-positioned companies sell reliable, long-duration power under take-or-pay contracts.  
2. **Prioritize regulatory visibility**: Projects with completed permitting (or restarts of existing assets) face lower risk.  
3. **Follow the hyperscalers**: Wherever Microsoft, Google, or Amazon break ground, the surrounding power providers usually get multi-decade cash-flow visibility.  
4. **Watch policy tailwinds**: Nuclear tax credits, loan guarantees, and grid-modernization programs can materially improve project economics.

---

## Conclusion

Electricity is the new lifeblood of AI. GPUs, cooling systems, and high-bandwidth fiber all rely on a steady power foundation. As model complexity soars, owning the "water sellers"—the companies supplying clean, reliable electricity—could be the most resilient way to participate in the AI boom.
