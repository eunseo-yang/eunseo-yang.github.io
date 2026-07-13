---
title: "AI Tutor Intervention Strategies for Learning"
category: Research
period: 2023.12 – 2024.06
date: 2024-06-01
image: /img/projects/proactiveaitutor.png
tags: [Proactive System, Human-AI Interaction, E-learning, Intervention]
---

<div data-t="en" markdown="1">

*What role can an AI chatbot play in actually improving learning on self-paced platforms — not just answering questions?*

A 7-month research collaboration (Dec 2023 – Jun 2024) with the Department of Educational Technology, where I led the study as first author alongside one co-researcher. Published at LAK25 as *"Striking the Balance: Exploring Levels of AI Tutor Proactivity in Enhancing Online Self-Paced Learning."*

## 1. Research background

Online self-paced learning has grown quickly, but the chatbots that support it rarely move past simple Q&A or FAQ lookup. The moments that most damage self-paced learning — a drop in comprehension, fading interest, disengagement — usually happen silently, and learners have little way to recover in the moment. We wanted to know whether a tutor that *acts* rather than *waits* could change that.

## 2. The core problem

**Problem.** Support chatbots are fundamentally reactive: they respond only when asked. Yet the situations that hurt learning outcomes are exactly the ones learners don't put into words.

**Hypothesis.** A proactive, LLM-based tutor that intervenes in real time could improve both learning outcomes and the learning experience.

**Approach.** Instead of treating proactivity as on/off, we modeled it as a spectrum of four levels and built a working e-learning prototype (YouTube lectures + quizzes; GPT API, FastAPI, HTML/CSS/JS) in which the same tutor behaved differently at each level:

- **Passive Support** — responds only when the learner asks
- **Notification** — surfaces key points unprompted
- **Suggestion** — recommends follow-up learning activities
- **Active Support** — actively ensures the learner completes supplementary study

**Who, and what we wanted to verify.** With self-paced online learners (university students), we set out to find which level of proactivity best balances *learning outcome* against the learner's *sense of control* — and to test the unexamined assumption that "more proactive" means "better."

## 3. Method

Eight university students experienced all four intervention levels in a within-subjects study. To offset the order effects that can arise with such a small sample, I counterbalanced the sequence of conditions across participants to safeguard the study's reliability, then followed up with 7-point Likert surveys and interviews. We measured immersion, control, and satisfaction (self-rated); learning outcome (accuracy on 20 quizzes); and learning attitude (question frequency), then triangulated with interviews on question patterns and overall experience.

## 4. Insight

![Bar charts comparing immersion, control, satisfaction, learning outcome (quiz accuracy), and learning attitude (question frequency) across the four intervention levels — Passive Support (PS), Notification (N), Suggestion (S), and Active Support (AS).](/img/projects/proactiveaitutor-results.png)

- **Proactivity is not monotonically good.** Higher proactivity lifted quiz accuracy (≈18.7 at Suggestion vs. 15.5 at Passive) and kept immersion high — but it sharply cut the learner's sense of control (7 → 3 at Suggestion).
- **The autonomy paradox.** Even while feeling they were losing control, students reported *high* satisfaction, because they believed the intervention would improve their results.
- **A real side effect — induced passivity.** As proactivity rose, learners initiated fewer questions of their own (question frequency 5 → 1). The harder the tutor pushed, the more passive learners became.
- **Behavioral cues.** After any intervention, students asked more follow-up questions; on their own they struggled to identify key points; the Suggestion group accepted the AI's recommendations almost every time.
- **Conclusion.** There is no single "best" level. Because intervention carries both benefit and cost, the right level has to be balanced *dynamically* — the key insight being to analyze each learner's logs and adjust the intervention level in real time, sustaining strong results across all metrics instead of maximizing one at another's expense.

## 5. Conclusion

The hypothesis that proactive intervention would positively affect students' learning experience and outcomes was *conditionally rejected*. In this pilot, proactive intervention did raise learning outcomes (short-term quiz scores) — but it broke "sense of control," a core axis of the learning experience, and produced a side effect of "passivity (dependency)" that undermines learning over the long term.


## 6. Retrospective

- **Sample size.** There are limits to how far the sample and design generalize. In a within-subjects design, n = 8 is a small sample for quantitative generalization. I minimized order and fatigue effects through counterbalancing during the study, but fully establishing statistical significance was still out of reach. Future work should recruit a larger, more diverse sample and adopt a between-subjects or mixed design to isolate and verify each intervention level's effect more cleanly.
- **Study duration.** This research used a single reinforcement-learning lecture session, which can't reveal how proactive intervention behaves across topics or over a multi-week learning arc. Future work should run a longitudinal study — for example, ecologically embedding the tutor into a regular university curriculum, or introducing a crowdsourced milestone-reward structure — to test whether the passivity side effect compounds or fades as learners habituate.
- **Measurement.** The study leaned heavily on self-rated Likert items; it should be complemented with validated instruments, behavioral logs (time-on-task, re-watches, time-to-help, drop-off), and evaluation by education experts.
- **Test the adaptive claim.** We *generated* the "adjust dynamically" hypothesis but did not build or evaluate the adaptive policy. The next step is to prototype log-driven adaptation and test it head-to-head against fixed levels.

## 7. What I learned

- **I learned that the assumption "the more advanced and proactive an AI feature is, the better for the user" can be a fallacy.** And an experiment I set out to run simply to confirm whether a hypothesis was true or false instead led me to a new UX direction for online-tutor services: the system should adjust dynamically, but only within a bound that doesn't compromise the learner's autonomy. Perhaps UX research isn't about confirming a binary answer to a hypothesis, but about surfacing the trade-offs users themselves can't perceive — and proposing the real direction a product should take.
- I learned that the survey scores where users say they are "satisfied" (self-report) can conflict with the behavioral data (the sharp drop in question frequency) that shows the product actually making them passive. Users sometimes rate themselves "satisfied" out of courtesy to the people who built the service, or without thinking too deeply. **A UX researcher has to evaluate from many angles — through what users *do* and through system logs — rather than through what they *say*.**

</div>

<div data-t="ko" markdown="1">

*자기주도 학습 플랫폼에서 AI 챗봇은 단순히 질문에 답하는 것을 넘어, 실제 학습을 향상시키는 데 어떤 역할을 할 수 있을까?*

교육공학과와 함께 진행한 7개월(2023.12 – 2024.06)의 소규모 프로젝트로, 공동 연구자 1명과 함께 제1저자로 LAK25 Poster Session에 *"Striking the Balance: Exploring Levels of AI Tutor Proactivity in Enhancing Online Self-Paced Learning"*으로 게재했습니다. 해당 프로젝트는 파일럿 테스트로 아이디어를 제안하는 것에서 일단락했으나, 추후 교육공학과 Course에서 직접 시스템을 활용해보며 장기 프로젝트를 해볼 계획입니다.

## 1. 리서치 배경

비대면·자기주도 학습이 빠르게 늘고 있지만, 이를 지원하는 챗봇 대부분은 단순 질의응답이나 FAQ 수준에 머물러 있습니다. 정작 학습을 가장 해치는 순간 — 이해도 저하, 흥미 감소, 참여 이탈 — 은 대개 겉으로 드러나지 않고, 학습자는 그 순간을 스스로 회복할 방법이 마땅치 않습니다. 그래서 **'기다리는' 튜터가 아니라 '먼저 움직이는' 튜터가 이 문제를 바꿀 수 있을지 확인**하고자 했습니다.

## 2. 핵심 고민

**문제 정의.** 학습 지원 챗봇은 본질적으로 반응형(reactive)입니다 — 질문을 받아야만 응답하죠. 하지만 학습 성과를 떨어뜨리는 상황은 정작 학습자가 말로 표현하지 않는 순간들입니다.

**가설.** LLM 기반 튜터가 실시간으로 능동적으로 개입하면 학습 성과와 학습 경험을 모두 향상시킬 수 있을 것이다.

**접근.** 단순히 능동성의 '유무'의 효과를 확인하는 것을 넘어, 학습 효과를 극대화하는 '최적의 능동성 수준'을 도출하고자 했습니다. 이를 위해 능동성을 4단계 스펙트럼으로 구조화하고, 각 단계별 태스크를 다르게 수행하는 e-러닝 프로토타입을 직접 구현했습니다. 웹 프론트엔드(HTML/CSS/JS)부터 GPT API와 FastAPI 기반의 백엔드까지 직접 구축하여 가설을 검증할 수 있는 통제된 실험 환경을 마련했습니다.

- **Passive Support** — 학습자가 질문할 때만 응답
- **Notification** — 묻지 않아도 핵심 내용을 먼저 알림
- **Suggestion** — 핵심 내용을 바탕으로 추가 학습 활동을 권장
- **Active Support** — 학습자가 보충 학습을 반드시 수행하도록 적극 개입

**어떤 유저에게, 무엇을 확인하고 싶었나.** 자기주도 온라인 학습자(대학생)를 대상으로, *학습 성과*와 학습자의 *학습 경험* 사이에서 어떤 개입 수준이 가장 균형이 좋은지, 그리고 "더 능동적일수록 더 좋다"는 검증되지 않은 가정이 실제로 맞는지 확인하고자 했습니다.

## 3. 실험 방법

대학생 8명을 대상으로 4가지 개입 수준을 모두 경험하게 하는 피험자 내 설계(Within-subjects)로 진행했습니다. 소규모 표본에서 발생할 수 있는 순서 효과(Order Effect)를 상쇄하기 위해 참여자별로 처치 순서를 교차 배치(Counterbalancing)하여 실험의 신뢰도를 확보했으며, 이후 7점 리커트 설문과 인터뷰를 이어서 진행했습니다. 몰입도·통제력·만족도(자기 보고), 학습 성과(퀴즈 20문항 정답률), 학습 태도(질문 빈도)를 측정하고, 질문 패턴과 전반적 경험에 대한 인터뷰로 교차 검증했습니다.


## 4. 인사이트

![네 가지 개입 수준(Passive Support·Notification·Suggestion·Active Support)에 따른 몰입도·통제력·만족도·학습 성과(퀴즈 정답률)·학습 태도(질문 빈도) 비교 차트.](/img/projects/proactiveaitutor-results.png)

- **능동적 개입이 무조건 좋은 것은 아니다.** 개입 수준이 높을수록 퀴즈 정답률이 올라가고(Suggestion 약 18.7 vs. Passive 15.5) 몰입도도 높게 유지됐지만, 학습자의 통제감은 급격히 떨어졌습니다(Suggestion에서 7 → 3).
- **자율성의 역설.** 통제권을 잃는다고 느끼면서도 학습자들은 오히려 *높은 만족도*를 보고했는데, 그 개입이 자신의 성과를 높여줄 것이라 믿었기 때문입니다.
- **분명한 부작용 — 수동성 유발.** 개입이 강해질수록 학습자가 스스로 던지는 질문은 줄었습니다(질문 빈도 5 → 1). 튜터가 강하게 밀어붙일수록 학습자는 더 수동적으로 변했습니다.
- **행동 단서.** 어떤 형태든 AI 개입 이후에는 후속 질문이 늘었고, 학습자들은 스스로 핵심을 파악하는 데 어려움을 겪었으며, Suggestion 그룹은 AI의 제안을 거의 매번 수용했습니다.

## 5. 결론
정답인 단일 개입 수준은 없습니다. 본 파일럿 연구에서의 파일럿 실험에서는 능동적 개입이 학습 성과(단기 퀴즈 점수)는 올렸지만, 학습 경험의 핵심 축인 '통제감'을 무너뜨렸고, 장기적으로 학습을 저해하는 '수동성(의존성)'을 유발한다는 부작용이 확인되었습니다. 개입에는 효과와 부작용이 함께 따르므로 적절한 수준을 *동적으로* 조절해야 하며, 학습자별 로그를 분석해 실시간으로 개입 수준을 조정함으로써 각각의 지표에서  우수한 결과를 유지해야 합니다.

## 6. 회고

- **표본 수.** 피험자 내 설계(Within-subjects)에서 $n = 8$은 정량적 일반화를 하기에 작은 표본입니다. 실험 과정에서 역균형화(Counterbalancing)를 통해 순서 효과와 피로 효과를 최소화하려 노력했으나, 통계적 유의성을 완벽히 확보하기에는 한계가 있었습니다. 향후 과제에서는 더 크고 다양한 표본을 모집하여 피험자 간 설계(Between-subjects) 혹은 혼합 설계를 통해 각 개입 수준의 효과를 보다 깔끔하게 격리·검증하고자 합니다.
- **실험 기간.** 본 연구는 하나의 강화학습 강의 세션을 사용했습니다. 이 결과만으로는 주제에 따른 비교나 수 주에 걸친 학습 흐름에서의 능동적 개입이 어떻게 작동하는지 알 수 없습니다. 향후 정규 대학 커리큘럼과의 연계(Ecological Embedding)나 크라우드 소싱 기반의 마일스톤 보상 체계를 도입하여 장기 종단 연구(Longitudinal Study)를 수행함으로써, 수동성 부작용이 누적되는지 혹은 익숙해지며 완화되는지를 검증할 필요가 있습니다.
- **측정.** 본 실험은 자기 보고 리커트에 크게 의존했는데, 검증된 척도와 행동 로그(학습 시간, 재시청, 도움 요청까지의 시간, 이탈률), 그리고 교육 전문가의 평가 등으로 보완할 필요가 있습니다.
- **적응형 주장 검증.** "동적으로 조절해야 한다"는 가설을 도출했을 뿐, 적응형 정책을 만들어 평가하지는 못했습니다. 다음 단계는 로그 기반 적응 로직을 프로토타이핑해 고정 수준과 직접 비교 검증하는 것입니다.

## 7. 러닝

- **"AI 기능이 더 고도화되고 능동적일수록 유저에게 좋을 것이다"라는 생각은 착각일 수 있다는 점을 배웠습니다.** 또한 단순히 가설의 참/거짓을 알아내려고 했던 이 실험에서 "학습자의 자율성을 해치지 않는 선에서 동적으로 조절해야 한다"는 온라인 튜터 서비스의 새로운 UX 디자인 아이디어를 만나게 되었습니다. 어쩌면 UX 리서치는 가설에 대한 이분법적인 정답을 확인하는 과정을 넘어 다양한 가능성을 만나고 좁혀가는 과정이 아닐까요?
- 유저가 주관적으로 보고하는 '만족도'와 그들을 수동적으로 만드는 '실제 행동 데이터'가 충돌할 수 있음을 배웠습니다. 유저는 만드는 사람을 고려해 호의적인 답변을 주거나, 장기적인 부작용을 인지하지 못한 채 '당장의 편리함'만으로 높은 만족도를 보고하곤 하는 것 같습니다. 결국 유저의 말(Saying)만으로는 제품의 진짜 임팩트를 진단할 수 없는 것 같습니다. **UX 리서처와 서비스 개발자는 행동(Doing)과 시스템 로그를 통해 유저가 체감하는 진짜 가치를 추적해야 하며, 나아가 이 서비스가 유저를 어떻게 변화시킬지 다각도로 고민하고 평가해야 함을 알게 되었습니다.**
</div>
