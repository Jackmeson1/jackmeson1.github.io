---
layout: post
title: "Grid Gridlock: Why Eaton's 12-Month Backlog and On-Site Power Are Reshaping AI Infrastructure"
date: 2025-10-15 09:00:00 +0800
last_modified_at: 2025-10-15 09:00:00 +0800
categories: [tech]
tags: [grid-infrastructure, eaton, bloom-energy, onsite-generation, ai-datacenters]
author: Jiajun Liang
description: "The grid is the new bottleneck. Eaton's $11.4B backlog and 12-18 month transformer lead times reveal a structural supply shortage. Meanwhile, Bloom Energy's on-site generation bypasses the queue entirely—27% of datacenters will be grid-independent by 2030."
image: /assets/images/posts/grid-bottleneck-analysis.svg
lang: en
featured: true
series: "AI Power Infrastructure Investment Series"
series_index: 4
tldr:
  - "Grid interconnection queue: 9 years in PJM, forcing AI datacenters to seek alternatives or pay massive premiums for existing capacity."
  - "Eaton's $11.4B backlog with 12-18 month transformer lead times creates unprecedented pricing power for distribution equipment."
  - "On-site generation adoption: 1% (2024) → 27% (2030)—Bloom Energy forecasts 35 GW of AI datacenters will bypass the grid entirely."
key_takeaways:
  - "PJM capacity auction hit price ceiling ($329/MW-day) for first time—clear signal of severe grid constraints in AI hotspots."
  - "Transformer/switchgear bottlenecks: 100 MW AI datacenter needs 120-150 MVA transformers with 12-18 month delivery—double 2020 timelines."
  - "On-site solid oxide fuel cells (SOFC) deliver 90-day deployment vs. 5-9 year grid upgrades—time value justifies 30-50% cost premium."
faqs:
  - question: "Why can't grid operators just add more capacity?"
    answer: "Three constraints: (1) Permitting takes 3-5 years, (2) Transformer production is maxed out globally, (3) Local opposition delays transmission projects. Result: Even with unlimited capital, physical delivery takes 5-9 years—AI datacenters can't wait."
  - question: "How does on-site generation economics compare to grid power?"
    answer: "Grid Tier III upgrade: $2-3M/MW capex + 5-9 year wait. On-site SOFC: $3-5M/MW capex + 90-day deployment. Premium = $1-2M/MW but saves 5-9 years—for AI training race, time value >> cost difference."
  - question: "Is this creating a moat for companies like Eaton and Bloom?"
    answer: "Yes—supply-constrained markets always create pricing power. Eaton's book-to-bill ratio >1.0 despite record sales. Bloom's AEP 1 GW order (utility-scale adoption) signals transition from niche to mainstream. These advantages last 5-10 years minimum."
seo_title: "Grid Infrastructure Bottleneck: Eaton & Bloom Energy AI Investment Analysis 2025"
keywords: [eaton stock analysis, bloom energy SOFC, grid interconnection queue, transformer lead times, onsite datacenter power, PJM capacity auction]
---

## Executive Summary

**The New Bottleneck:** While everyone focuses on GPUs and power generation, the **grid itself** has become the binding constraint. AI datacenters need 100 MW-1 GW connections, but:

- **PJM interconnection queue:** 9 years backlog (up from 5 years in 2020)
- **Transformer lead times:** 12-18 months (double the 2020 baseline)
- **Capacity auction prices:** Hit $329/MW-day ceiling (first time ever)

**Two Solutions Emerging:**

**Solution 1: Grid Equipment Upgrades (Eaton)**
- $11.4B backlog (+17% YoY) despite record sales
- Book-to-bill ratio: 1.1x (demand > supply)
- Datacenter segment growing 50% YoY (vs. 23% company average)

**Solution 2: Bypass the Grid Entirely (Bloom Energy)**
- On-site generation forecast: 1% (2024) → 27% (2030)
- 90-day deployment vs. 5-9 year grid wait
- AEP 1 GW order signals utility-scale adoption

**Investment Thesis:** Infrastructure bottlenecks create **sustained pricing power** for equipment vendors and on-site generation providers. Unlike commodity markets, supply cannot respond quickly—creating 5-10 year windows for excess returns.

<!--more-->

---

## Part 1: The Grid Interconnection Crisis

### 1.1 Quantifying the Queue

**U.S. Grid Interconnection Wait Times (2024):**

| Region | 2020 Wait Time | 2024 Wait Time | Projects in Queue | Completion Rate |
|--------|----------------|----------------|-------------------|-----------------|
| **PJM** (Mid-Atlantic) | 5 years | **9 years** | 270 GW | 27% |
| **MISO** (Midwest) | 4 years | 7 years | 180 GW | 31% |
| **CAISO** (California) | 3 years | 6 years | 150 GW | 35% |
| **ERCOT** (Texas) | 2 years | 5 years | 120 GW | 42% |

**Key Insight:** 73% of queued projects **never complete**—they either withdraw due to delays or fail feasibility studies.

**Source:** Lawrence Berkeley National Lab, Grid Interconnection Study 2024

**What This Means for AI Datacenters:**

```
Traditional Datacenter (2020):
- Power requirement: 10-20 MW
- Grid connection: 2-3 years
- Acceptable: Yes (training cycles long enough)

AI Datacenter (2025):
- Power requirement: 100-1,000 MW
- Grid connection: 5-9 years
- Acceptable: NO (AI race moves too fast)
```

### 1.2 PJM Capacity Auction Shock

**July 2025 Capacity Auction Results:**

| Metric | 2023 Auction | 2025 Auction | Change |
|--------|--------------|--------------|--------|
| **Clearing Price** | $28.92/MW-day | **$329.17/MW-day** | +1,038% |
| **Price Ceiling Hit?** | No | **YES** (first time) | - |
| **New Capacity Offered** | 12 GW | 8 GW | -33% |

**Source:** PJM Interconnection Capacity Market Results

**What Happened:**
1. **Demand surge:** AI datacenters adding 15-20 GW demand in PJM region
2. **Supply shortage:** Generation retirements outpacing new builds
3. **Transmission limits:** Existing grid cannot import enough power from other regions
4. **Result:** Price ceiling hit—clear market failure signal

**Investor Implication:** Capacity-constrained markets = pricing power for infrastructure providers.

### 1.3 Why Building New Grid Infrastructure Takes So Long

**Timeline Breakdown (100 MW Datacenter):**

| Phase | Duration | Key Activities | Failure Risk |
|-------|----------|----------------|--------------|
| **Pre-Development** | 6-12 months | Site selection, feasibility | 30% |
| **Permitting** | 12-24 months | Environmental, local approvals | 40% |
| **Engineering** | 6-12 months | Design, equipment procurement | 10% |
| **Construction** | 18-36 months | Substation, transmission lines | 15% |
| **Commissioning** | 3-6 months | Testing, grid integration | 5% |
| **Total** | **45-90 months** | **3.75-7.5 years** | **Cumulative: ~60-70%** |

**Why It Can't Be Accelerated:**

**1. Equipment Bottlenecks**
- Large power transformers: 12-18 month production cycles
- Global capacity maxed out (China, Siemens, ABB all at full utilization)
- Cannot add capacity quickly (factory buildouts take 3-5 years)

**2. Permitting Complexity**
- Federal: FERC, EPA reviews
- State: Public utility commissions
- Local: Zoning, environmental impact
- **Minimum:** 18-24 months even with no opposition

**3. NIMBY Opposition**
- Transmission lines face 60-80% local opposition
- Legal challenges add 2-5 years
- Example: Plains & Eastern Clean Line (700 MW) cancelled after 8 years of permitting

---

## Part 2: Eaton Corporation - The Grid Equipment Leader

### 2.1 Company Overview & Market Position

**Eaton Corporation (NYSE: ETN)**
- **Business:** Electrical equipment (50% of revenue), aerospace, vehicle
- **Datacenter focus:** UPS, switchgear, PDUs, monitoring
- **Market cap:** ~$140-150B (October 2025)

**Recent Performance:**
- **Q2 2025 datacenter orders:** +23% YoY
- **Electrical Americas backlog:** $11.4B (+17% YoY)
- **Book-to-bill ratio:** 1.1x (orders exceeding shipments)
- **Datacenter segment growth:** 50% (vs. 23% company average)

### 2.2 The Infrastructure Bottleneck

**What AI Datacenters Need:**

**Traditional Datacenter (10 MW):**
```
Power requirement: 10 MW
Transformer config: 2 × 10 MVA transformers (N+1 redundancy)
Switchgear: Medium voltage (15 kV)
Lead time (2020): 6-8 months
```

**AI Datacenter (100 MW):**
```
Power requirement: 100 MW
Transformer config: 12-15 × 10 MVA or 3-4 × 40 MVA transformers
Switchgear: High voltage (35 kV+) with 2N redundancy
Lead time (2025): 12-18 months
```

**The Gap:** 10x power = 20-30x equipment complexity (due to redundancy requirements)

### 2.3 Supply-Demand Imbalance

**Evidence of Pricing Power:**

**1. Lead Time Extension**
| Equipment | 2020 Lead Time | 2025 Lead Time | Increase |
|-----------|----------------|----------------|----------|
| **Medium Voltage Transformers** | 6-8 months | 10-12 months | +50-67% |
| **Large Power Transformers** | 8-10 months | **14-18 months** | +75-80% |
| **Switchgear** | 4-6 months | 8-12 months | +100% |

**2. Backlog Growth**
- Eaton Electrical Americas: $11.4B (Q2 2025)
- Previous quarter: $9.7B
- YoY growth: +17%
- **Despite record sales:** Book-to-bill ratio 1.1x

**3. Oracle as Leading Indicator**
- Oracle's massive datacenter buildout orders
- 18-24 month advance orders for Eaton equipment
- Indicates hyperscaler demand pipeline very deep

**Source:** Eaton Q2 2025 Earnings, BNP Paribas Analysis

### 2.4 Financial Analysis & Valuation

**Key Metrics (October 2025):**
- **P/E (TTM):** 25-28x
- **Forward P/E (2026E):** 22-25x
- **EV/EBITDA:** 18-20x
- **Price/Sales:** 3.2-3.5x

**vs. Industrial Peers:**
- S&P 500 Industrials avg PE: 19-22x
- **Eaton premium:** 15-30%

**Valuation Justification:**
- **Growth:** Datacenter segment 50% YoY (vs. peer average 8-12%)
- **Visibility:** $11.4B backlog = 8-10 months revenue
- **Margin expansion:** Datacenter equipment higher margin (40-45% gross vs. 35% industrial)
- **TAM expansion:** Goldman Sachs estimates $65B TAM by 2028

**Bull Case Price Target (12-month):**
- **Base case:** $350-380 (20-30% upside from ~$290 current)
- **Assumes:** 20% datacenter revenue growth, margins hold, PE stable 25-27x

**Bear Case Downside:**
- **Risk:** AI capex slowdown, backlog decline
- **Downside:** $230-250 (20-25% below current)

### 2.5 Investment Strategy

**Position Sizing:**
- **Conservative:** 10-12% of AI infrastructure allocation
- **Balanced:** 15-18%
- **Aggressive:** 20-25%

**Entry Strategy:**
- **Single entry acceptable:** Lower valuation vs. Vertiv (PE 25x vs. 35x)
- **Price targets:** $280-300 fair entry, $250-270 excellent

**Why Eaton Over Schneider Electric:**
1. **Pure play:** 50% electrical equipment (vs. Schneider 40%)
2. **U.S. exposure:** 60% North America revenue (AI datacenter hotspot)
3. **Valuation:** PE 25x vs. Schneider 20-23x—Eaton growth justifies premium

---

## Part 3: On-Site Generation Revolution

### 3.1 Why Bypass the Grid?

**The Business Case:**

**Scenario: 100 MW AI Datacenter in Northern Virginia**

**Option A: Grid Connection**
```
Capex:
- Substation upgrades: $8-12M
- Transmission interconnect: $15-25M
- Redundancy (N+1): +40%
Total: $32-52M

Timeline:
- Interconnection queue: 9 years (PJM)
- Construction: 2-3 years
Total: 11-12 years

Cost: $32-52M + 11-year opportunity cost = UNACCEPTABLE
```

**Option B: On-Site Solid Oxide Fuel Cells (SOFC)**
```
Capex:
- Bloom Energy SOFC: $3-5M/MW × 100 MW = $300-500M
- Natural gas interconnect: $5-10M
- Backup systems: $20-30M
Total: $325-540M

Timeline:
- Equipment delivery: 3-6 months
- Installation: 3-6 months
- Commissioning: 1-2 months
Total: 7-14 months (90-day fast-track possible)

Cost: $325-540M but 11-year time savings = COMPETITIVE
```

**Key Insight:** For AI training race, **time value >> cost difference**. Paying $300M more to save 11 years is rational.

### 3.2 Bloom Energy - Market Leader

**Company Overview:**
- **Technology:** Solid Oxide Fuel Cells (SOFC)
- **Capacity:** 50-250 kW per unit, scalable to GW
- **Efficiency:** 60%+ (vs. 30-40% traditional gas turbines)
- **Market position:** Dominant in datacenter on-site power

**Recent Traction:**

**1. Oracle Partnership**
- **Commitment:** 90-day deployment guarantee
- **Scale:** Multiple 100+ MW projects
- **Significance:** Oracle's endorsement validates technology

**2. Equinix Expansion**
- **Scope:** 19 datacenters, 100+ MW total
- **Use case:** SOFC as **primary baseload** (not just backup)
- **Migration:** From backup diesel to primary SOFC

**3. American Electric Power (AEP) - GAME CHANGER**
- **Order:** Up to 1 GW procurement agreement
- **Significance:** **Utility-scale adoption**—no longer just datacenter niche
- **Timeline:** Staged rollout 2025-2030

**Source:** Bloom Energy Investor Reports 2025

### 3.3 Technology Deep Dive: SOFC vs. Alternatives

**Performance Comparison:**

| Metric | Bloom SOFC | Gas Turbine | Diesel Generator |
|--------|------------|-------------|------------------|
| **Efficiency** | 60%+ | 30-40% | 25-35% |
| **Emissions (CO2)** | 400 g/kWh | 550 g/kWh | 700 g/kWh |
| **Uptime** | 99.9% | 95-98% | 98-99% (short-term) |
| **Startup Time** | <1 second | Minutes | Seconds |
| **Noise** | <60 dB | 85-95 dB | 90-100 dB |
| **Fuel Flexibility** | NG, biogas, H2 | NG, diesel | Diesel only |
| **Maintenance Interval** | 3-5 years | 1-2 years | Annual |

**Hydrogen Readiness:**
- SOFC can run on hydrogen with minimal modification
- Positions Bloom for 2030+ green hydrogen transition
- Provides future-proofing vs. pure natural gas solutions

### 3.4 Market Forecast: On-Site Generation Adoption

**Bloom Energy 2025 Survey Results:**

| Metric | 2024 Actual | 2030 Forecast | Growth |
|--------|-------------|---------------|--------|
| **% Datacenters with on-site primary power** | 1% | **27%** | 27x |
| **Total capacity (GW)** | ~2 GW | **35 GW** | 17.5x |
| **Market value** | $6B | **$105B** | 17.5x |

**Drivers:**
1. **Grid queue crisis:** 9-year waits unsustainable
2. **Fast deployment:** 90 days vs. 11 years
3. **Reliability:** 99.9% uptime matches nuclear
4. **ESG narrative:** "Natural gas bridge to hydrogen"

### 3.5 Debunking the Tier Misconception

**Myth:** "On-site generation can upgrade Tier II to Tier III"

**Reality:** ❌ **FALSE**

**What Tier Standards Actually Mean:**

**Tier II:**
- N+1 component redundancy
- Single distribution path
- No concurrent maintenance capability
- Adding SOFC does NOT change architecture

**Tier III:**
- N+1 distribution redundancy
- Multiple distribution paths (2N power, cooling, networking)
- Concurrent maintenance capability
- Requires full infrastructure redesign

**What On-Site Generation ACTUALLY Solves:**
- ✅ Bypasses grid interconnection queue
- ✅ Provides capacity in grid-constrained regions
- ✅ Increases overall reliability (grid + on-site = dual source)
- ❌ Does NOT automatically upgrade Tier level

**Cost Reality Check:**
```
Tier II facility + SOFC:
- Tier II capex: $5-6M/MW
- SOFC capex: $3-5M/MW
- Total: $8-11M/MW

Pure Tier III facility:
- Tier III capex: $7-9M/MW
- Grid connection: $2-3M/MW
- Total: $9-12M/MW

Cost similar, but SOFC provides grid independence advantage
```

---

## Part 4: Geographic Winners & Losers

### 4.1 Winner: Northern Virginia (Loudoun County)

**Why It Dominates:**
- **Existing capacity:** 2,000+ MW operational
- **Grid headroom:** Dominion Energy 12 GW expansion plan
- **Tier III density:** 68% of facilities (highest in U.S.)
- **Fiber:** Massive connectivity hub
- **Land:** Still available at reasonable cost

**New AI Datacenter Projects (2025):**
- Microsoft: 500 MW
- Amazon: 800 MW expansion
- Google: 300 MW
- Meta: 400 MW

**Investment Angle:** Land/REIT plays risky (hyperscalers build their own), but equipment vendors (Eaton, Vertiv) benefit massively.

### 4.2 Winner: Iowa (Des Moines Area)

**Why It's Growing:**
- **100% renewable:** Wind power saturation
- **MidAmerican Energy:** Proactive AI tariffs
- **Land:** Extremely cheap (~$5K/acre vs. $500K+ Virginia)
- **No queue:** Grid capacity available

**Deployments:**
- Microsoft: 1.3 GW pipeline
- Google: 750 MW
- Meta: 500 MW

**Caveat:** Cold climate adds cooling costs, but wind economics offset.

### 4.3 Loser: Alberta, Canada

**Why It's Failing:**

**1. Grid Quota Crisis**
- **Demand:** 16,000 MW requested
- **Available:** 1,200 MW through 2028
- **Fulfillment rate:** 7.5%

**2. Tier Infrastructure Gap**
- **First Tier III:** eStruxture CAL-3 (90 MW, opening fall 2026)
- **vs. Virginia:** 2,000+ MW Tier III already operational

**3. Clean Energy Deficit**
- **Alberta grid:** 60% natural gas, 20% coal
- **vs. Iowa:** 100% wind
- **ESG problem:** Hyperscalers can't hit carbon goals

**4. Local Opposition**
- **Sept 2025:** Rocky View County votes 6-1 to reject large datacenter
- **Concerns:** Water use, agricultural land loss

**Investor Lesson:** Avoid markets with:
- Grid quotas (supply rationing)
- Tier II-only infrastructure
- Hostile local politics
- Weak renewable energy mix

### 4.4 Loser: Bitcoin Miner Conversions

**The Pitch:** "Convert bitcoin mining facilities to AI datacenters—already have power!"

**The Reality:** ❌ **Fundamentally incompatible infrastructure**

**Why Bitcoin Mining Power ≠ AI Datacenter Power:**

| Component | Bitcoin Mining | AI Datacenter | Compatible? |
|-----------|----------------|---------------|-------------|
| **Power Distribution** | Single-path, no redundancy | 2N redundancy | ❌ NO |
| **Cooling** | Simple air, hot/cold aisle | Liquid cooling, precision | ❌ NO |
| **Network** | 10 Gbps sufficient | 400 Gbps+ required | ❌ NO |
| **UPS** | Minimal (downtime OK) | 2N UPS (zero tolerance) | ❌ NO |
| **Fire Suppression** | Basic sprinklers | Clean agent (FM-200) | ❌ NO |
| **Physical Security** | Fence + cameras | SOC 2, Tier III standards | ❌ NO |

**Retrofit Cost Analysis:**

```
Bitcoin Mining Facility:
- Original capex: $1-2M/MW
- Power infrastructure: Single-path, simple transformers

AI Datacenter Requirements:
- Power upgrade: $8M/MW (2N redundancy)
- Cooling retrofit: $5M/MW (liquid cooling)
- Network upgrade: $2M/MW (400G fabric)
- Fire/security: $3M/MW
Total retrofit: $18M/MW

New AI Datacenter:
- Ground-up build: $15-20M/MW

Conclusion: Retrofit cost ≈ new build cost
Economic case = ZERO
```

**Real-World Example:**
- **Compute North** (bankrupt bitcoin miner): Attempted AI datacenter pivot
- **Result:** Abandoned after realizing retrofit uneconomical
- **Facilities sold:** Liquidated for land value, not infrastructure

---

## Part 5: Investment Strategy

### 5.1 Eaton Corporation (ETN)

**Allocation:**
- **Conservative:** 10-12%
- **Balanced:** 15-18%
- **Aggressive:** 20-25%

**Entry Strategy:**
- **Single batch acceptable:** PE 25x is reasonable (vs. Vertiv 35x)
- **Target price:** $280-300 (current ~$290-300)
- **Add on weakness:** $250-270 = aggressive buy

**Catalysts:**
- Q3 earnings (backlog growth >$12B)
- Oracle datacenter deployment announcements
- Guidance raise (datacenter segment 60%+ growth)

**Risks:**
- AI capex slowdown
- Transformer production capacity increases (pricing pressure)
- Competition (Schneider Electric, ABB)

### 5.2 Bloom Energy (BE)

**Allocation:**
- **Conservative:** 5-7%
- **Balanced:** 10-12%
- **Aggressive:** 15-18%

**Entry Strategy (3-Batch):**

**Batch 1 (40%):** Immediate
- **Price:** Current ~$12-15
- **Logic:** AEP 1 GW order de-risks commercialization

**Batch 2 (30%):** Post-quarterly earnings
- **Watch for:** Oracle/Equinix deployment updates
- **Price:** $10-12 on weakness

**Batch 3 (30%):** Utility adoption proof
- **Trigger:** 2nd utility-scale order (beyond AEP)
- **Price:** Willing to pay $15-18

**Catalysts:**
- AEP 1 GW deployment milestones (quarterly updates)
- Oracle 90-day deployment success stories
- Hydrogen transition announcements (2027-2030)

**Risks:**
- Execution: 1 GW is 10x scale-up from current production
- Competition: Plug Power, FuelCell Energy entering market
- Natural gas price volatility (fuel cost risk)
- Technology: Hydrogen transition requires capex, may hit margins

### 5.3 What to Avoid

**❌ Datacenter REITs (DLR, EQIX)**
- **Problem:** Hyperscalers building their own (disintermediation)
- **Growth:** 4-6% (unexciting)
- **Valuation:** Not cheap enough to justify slow growth

**❌ Transmission Utilities**
- **Problem:** Highly regulated, slow permitting, NI

MBY risk
- **Returns:** Rate-of-return regulation caps upside
- **Better bet:** Vertiv/Eaton (unregulated, capture full upside)

**❌ Copper/Aluminum Miners**
- **Problem:** AI datacenter demand <5% of total
- **Correlation:** More tied to China construction, autos
- **Commodity risk:** Zero pricing power

---

## Conclusion: The Infrastructure Advantage

**Key Takeaways:**

1. **Grid is the bottleneck:** 9-year queues force AI datacenters to seek alternatives
2. **Equipment vendors win:** Eaton's $11.4B backlog + pricing power = 5-10 year tailwind
3. **On-site generation emerges:** Bloom's 90-day deployment beats 9-year wait—time value justifies premium
4. **Geography matters:** Virginia/Iowa win, Alberta/Bitcoin miners lose

**Investment Verdict:**

**Eaton (ETN): ⭐⭐⭐⭐**
- Strong: Backlog visibility, reasonable valuation (PE 25x)
- Weak: Cyclical exposure if AI capex slows
- **Allocation:** 15-20% (core holding)

**Bloom Energy (BE): ⭐⭐⭐⭐**
- Strong: Unique technology, AEP validation, 27% adoption forecast
- Weak: Execution risk (1 GW scale-up), competitive entry
- **Allocation:** 10-15% (growth play)

**Next Article:** Part 5 synthesizes everything into actionable portfolio construction—conservative/balanced/aggressive allocations, batch buying strategies, risk management, and the final investment checklist.

---

## Series Navigation

📚 **AI Power Infrastructure Investment Series:**
- [Part 1: Power Revolution Overview](/tech/2025/10/12/ai-datacenter-power-revolution/)
- [Part 2: Liquid Cooling Deep Dive](/tech/2025/10/13/liquid-cooling-thermal-management/)
- [Part 3: Nuclear Power Renaissance](/tech/2025/10/14/nuclear-power-renaissance-ai/)
- **Part 4: Grid Infrastructure & On-Site Generation** ← You are here
- [Part 5: Portfolio Construction](#) (Final article coming next)

---

**Disclaimer:** For informational purposes only. Not investment advice. Data current as of October 2025. Conduct independent due diligence.

**Sources:**
- Eaton Corporation Q2 2025 Earnings
- Bloom Energy 2025 Datacenter Survey
- PJM Interconnection Capacity Auction Results
- Lawrence Berkeley National Lab Grid Study 2024
- AEP-Bloom Energy Partnership Announcement
- Goldman Sachs Datacenter Infrastructure TAM Analysis

#Grid #Infrastructure #Eaton #BloomEnergy #OnSiteGeneration #AI #Datacenters #Investment
