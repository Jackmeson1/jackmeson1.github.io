---
layout: post
title: "Why QA Engineers Should Learn DevOps"
date: 2024-12-15 09:00:00 +0800
last_modified_at: 2024-12-15 09:00:00 +0800
categories: [tech]
tags: [qa, devops, automation, fortinet, career-notes]
author: Jiajun Liang
description: Lessons from running QA automation at Fortinet and why leaning into DevOps mindsets made our tests more reliable.
lang: en
featured: false
---

In 2021 I joined Fortinet as a QA engineer. I thought the job would be writing Selenium tests, filing bugs, and waiting for builds.

Two months in, the real work surfaced: **keeping the test infrastructure breathing** while product teams shipped firmware to thousands of enterprise firewalls.

## The Invisible Dependencies

The QA team inherited a Jenkins farm, some bash scripts, and a directory of flaky UI tests. None of it was monitored. Deployments would stall because a credential expired or a package mirror timed out.

I started shadowing the release engineering group to understand their tooling choices. The biggest unlocks:

- **Configuration as code.** We migrated Jenkins jobs into declarative pipelines, stored in Git, and reviewed them like any feature branch.
- **Shared observability.** Instead of private spreadsheets, we shipped build metrics into Grafana so SREs could alert on queue backups.
- **Infrastructure rehearsals.** Monthly game days forced us to practice rotating tokens, draining nodes, and restoring backups.

The pay-off was simple: engineers trusted our test results and pushed code faster because they saw the same dashboards we did.

## Shipping Like a Platform Team

Learning DevOps did not mean abandoning QA. It meant adopting the rituals that platform teams already use:

1. **Automate the environment.** Docker Compose files spun up predictable lab topologies so device tests behaved locally.
2. **Treat flaky tests as incidents.** We filed postmortems, captured timelines, and assigned owners just like production outages.
3. **Instrument everything.** Prometheus exporters told us when regressions came from the product versus when the test rig was sick.

Once we ran QA like a platform, onboarding new teammates felt lighter—they could read the docs, trigger a pipeline, and see green builds in under an hour.

## Where I'm Taking It Next

Now that I’m on sabbatical, I’m learning Kubernetes and Playwright so I can design test harnesses that auto-scale with demand. The mental model stays the same: **QA is a service.** You earn trust when deployments, pipelines, and telemetry are transparent to everyone.

If you’re a QA engineer wondering whether DevOps is “your job,” the answer is yes. Your users are the developers waiting on signal. Meet them where they work.
