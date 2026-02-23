import type {
  EmbeddedConceptProject,
  EmbeddedLearningLogEntry,
  EmbeddedRoadmapStage,
  FeaturedProject,
  Highlight,
  NavTab,
  TabMeta,
  TimelineEntry
} from "../types";

export const DEFAULT_TAB: NavTab = "programming";
export const RESUME_PDF_PATH = "/Chance-Dare-Resume.pdf";
export const CONTACT_EMAIL = "chancedurr@gmail.com";
export const GITHUB_URL = "https://github.com/chancedurr";

export const NAV_TABS: Array<{ id: NavTab; label: string }> = [
  { id: "programming", label: "Programming" },
  { id: "embedded", label: "Embedded" },
  { id: "bas", label: "BAS Controls" },
  { id: "cad", label: "CAD" },
  { id: "photography", label: "Photography" }
];

export const TAB_THEME_CLASSES: Partial<Record<NavTab, string>> = {
  programming: "programming-theme",
  embedded: "embedded-theme",
  bas: "bas-theme",
  cad: "cad-theme"
};

export function isNavTab(value: string): value is NavTab {
  return NAV_TABS.some((tab) => tab.id === value);
}

export const pageMeta: Record<NavTab, TabMeta> = {
  programming: {
    title: "Programming Background",
    subtitle: "Python-first background with formal data science and ML training."
  },
  embedded: {
    title: "STM32 / Embedded / C++ Learning",
    subtitle: "A public learning log tracking labs, concepts, debugging wins, and next milestones."
  },
  bas: {
    title: "BAS Controls Background",
    subtitle: "End-to-end BAS delivery across field execution, engineering, and commissioning."
  },
  cad: {
    title: "CAD Background",
    subtitle: "Production-ready drafting, standards, and engineering package quality."
  },
  photography: {
    title: "Photography",
    subtitle: "Portfolio gallery."
  }
};

export const highlightsByTab: Record<NavTab, Highlight[]> = {
  programming: [
    { label: "Primary Language", value: "Python" },
    { label: "Training", value: "BloomTech Data Science + ML" },
    { label: "Approach", value: "AI-assisted rapid delivery" }
  ],
  embedded: [
    { label: "Current Focus", value: "STM32 + Embedded C/C++" },
    { label: "Goal", value: "Document learning progress publicly" },
    { label: "Format", value: "Logs + Projects + Roadmap" }
  ],
  bas: [
    { label: "Role Scope", value: "PM + Engineering + Commissioning" },
    { label: "Systems", value: "Alerton + Delta Controls" },
    { label: "Project Size", value: "Small jobs to $1M+" }
  ],
  cad: [
    { label: "Current Role", value: "CAD Technician" },
    { label: "Strength", value: "Standards + revisions + quality" },
    { label: "Timeline", value: "Dec 2025 - Current" }
  ],
  photography: [
    { label: "Focus", value: "Portfolio growth" },
    { label: "Layout", value: "Responsive image grid" },
    { label: "Viewer", value: "Full-screen lightbox" }
  ]
};

export const featuredByTab: Record<NavTab, FeaturedProject[]> = {
  programming: [
    {
      title: "Portfolio + Resume Web App",
      role: "Built a modern multi-tab React interface with AI-assisted workflows.",
      outcome: "Shipped quickly with strong UX polish and maintainable structure."
    },
    {
      title: "Automation-First Coding Workflow",
      role: "Use Python and cross-language AI support for rapid prototyping.",
      outcome: "Faster iteration while preserving practical, production-ready output."
    }
  ],
  embedded: [
    {
      title: "Embedded Learning Hub (In Progress)",
      role: "Building a dedicated section to document STM32, embedded systems, and C++ progress.",
      outcome: "Creates a visible record of learning, experiments, and project growth."
    },
    {
      title: "Hands-On Peripheral Labs",
      role: "Plan and publish incremental labs for GPIO, UART, timers, ADC, and interrupts.",
      outcome: "Turns study sessions into a reusable portfolio and reference library."
    }
  ],
  bas: [
    {
      title: "Full-Scope BAS Delivery",
      role: "Owned PM, engineering, material procurement, programming, graphics, startup, commissioning.",
      outcome: "Delivered complete BAS projects from kickoff through turnover."
    },
    {
      title: "Multi-Scale BAS Execution",
      role: "Executed both smaller jobs and large million-dollar initiatives.",
      outcome: "Consistent quality and execution across varying project complexity."
    }
  ],
  cad: [
    {
      title: "CAD Package Production",
      role: "Create and revise drawings with strict drafting standards.",
      outcome: "Issued packages that are accurate, coordinated, and field-ready."
    },
    {
      title: "Cross-Team Drawing Coordination",
      role: "Work directly with engineering teams on revisions and as-builts.",
      outcome: "Reduced rework and improved clarity across deliverables."
    }
  ],
  photography: [
    {
      title: "Photography Portfolio Buildout",
      role: "Structured a clean gallery-first presentation for visual work.",
      outcome: "Easy to expand with new shoots and client-ready image browsing."
    },
    {
      title: "Lightbox Viewing Experience",
      role: "Added full-screen image viewing with keyboard navigation.",
      outcome: "More polished presentation and better image focus for visitors."
    }
  ]
};

export const timelineEntries: TimelineEntry[] = [
  {
    date: "Dec 2025 - Current",
    title: "CAD Technician",
    detail: "Produce and revise CAD drawings, maintain standards, and coordinate engineering updates."
  },
  {
    date: "Oct 2022 - Dec 2025",
    title: "Engineering Specialist (BAS)",
    detail: "Handled BAS project management, engineering, controls programming, graphics, startup, and commissioning."
  },
  {
    date: "Before Oct 2022",
    title: "Apprentice Electrician",
    detail:
      "Supported field installation and troubleshooting, pulled wire, assisted with panel and device terminations, and followed code/safety requirements while learning practical electrical workflows."
  },
  {
    date: "Earlier",
    title: "Programming + Data Science Training",
    detail: "Completed BloomTech Institute (formerly Lambda School) training in Data Science and Machine Learning."
  },
  {
    date: "Straight Out of High School",
    title: "AVTEC Industrial Electricity",
    detail:
      "Completed AVTEC's 1080-hour Industrial Electricity program covering AC/DC power distribution, wiring methods, motor controls, electronics, and NEC-based hands-on practice."
  }
];

export const embeddedRoadmap: EmbeddedRoadmapStage[] = [
  {
    stage: "Foundations",
    status: "Complete",
    items: "Toolchain setup, STM32CubeIDE/CubeMX basics, GPIO input/output, debugger basics, build/flash flow"
  },
  {
    stage: "Peripheral Control",
    status: "In Progress",
    items: "Button interrupts (EXTI), UART serial + button counter logging, timers, PWM, ADC, debouncing patterns, state machines"
  },
  {
    stage: "Embedded C++",
    status: "Planned",
    items: "RAII for peripherals, interfaces/drivers, static allocation, compile-time patterns"
  },
  {
    stage: "RTOS + Debugging",
    status: "Planned",
    items: "FreeRTOS basics, task timing, priorities, hard fault debugging, profiling"
  }
];

export const embeddedLearningLog: EmbeddedLearningLogEntry[] = [
  {
    id: "stm32-nucleo-f446re-uart-button-counter-2026-02-23",
    date: "Feb 23, 2026",
    topic: "UART Button Counter (`USART2` + EXTI Callback + Debounced Event Flag)",
    learned:
      "Built `uart_button_counter`, combining the EXTI callback/deferred-work pattern with `USART2` logging. The callback keeps ISR work short by setting a debounced `volatile` event flag, and the main loop clears the flag, increments a counter, formats a message with `snprintf`, and prints each accepted press over UART.",
    blocker:
      "The first version had a few classic integration bugs (wrong HAL GPIO toggle function name, event flag not cleared in the main loop, and missing `stdio.h` for `snprintf`), but reviewing each issue made the ISR-to-main handoff pattern much clearer.",
    nextStep: "Add timestamps (`HAL_GetTick()`) to UART messages, then start timer-based/non-blocking blink work.",
    status: "Completed",
    tags: ["uart", "usart2", "exti", "interrupts", "debounce", "snprintf", "debugging"],
    tools: ["STM32CubeIDE", "STM32CubeMX", "HAL", "ST-LINK", "PuTTY"],
    board: "NUCLEO-F446RE",
    confidence: 4
  },
  {
    id: "stm32-nucleo-f446re-uart-serial-bringup-2026-02-23",
    date: "Feb 23, 2026",
    topic: "USART2 Serial Bring-Up over ST-LINK Virtual COM Port",
    learned:
      "Configured `USART2` in CubeMX for asynchronous serial output (`115200 8N1`), sent a fixed `UART OK` message with `HAL_UART_Transmit`, and verified the output in PuTTY through the Nucleo ST-LINK virtual COM port.",
    blocker:
      "The main challenge was understanding where UART output actually appears on the PC and how the ST-LINK virtual COM port maps to a Windows COM port in Device Manager.",
    nextStep: "Use UART for something observable by logging button press counts in a dedicated `uart_button_counter` concept project.",
    status: "Completed",
    tags: ["uart", "usart2", "serial", "st-link-vcp", "putty", "hal_uart_transmit"],
    tools: ["STM32CubeIDE", "STM32CubeMX", "HAL", "ST-LINK", "PuTTY"],
    board: "NUCLEO-F446RE",
    confidence: 4
  },
  {
    id: "stm32-nucleo-f446re-button-interrupt-debounce-edge-mapping-2026-02-23",
    date: "Feb 23, 2026",
    topic: "EXTI Debounce with `HAL_GetTick()` + Press/Release Edge Mapping",
    learned:
      "Built a dedicated `button_interrupt_debounce_tick` concept project that keeps ISR work short, uses a timestamp gate (`HAL_GetTick()`) to debounce EXTI button events, and verified the `NUCLEO-F446RE` `B1` (`PC13`) edge behavior: falling triggers on press and rising triggers on release.",
    blocker:
      "There was some initial confusion about whether the next learning step should be implemented directly by the assistant or learned hands-on first, which led to switching to a logic-first + review workflow for embedded practice.",
    nextStep: "Start `uart_serial` and verify `USART2` output over the ST-LINK virtual COM port.",
    status: "Completed",
    tags: ["gpio", "button", "exti", "interrupts", "debounce", "hal_gettick", "edge-trigger"],
    tools: ["STM32CubeIDE", "STM32CubeMX", "HAL", "ST-LINK"],
    board: "NUCLEO-F446RE",
    confidence: 4
  },
  {
    id: "stm32-nucleo-f446re-toolchain-bringup-2026-02-23",
    date: "Feb 23, 2026",
    topic: "STM32CubeIDE Setup + First STM32 Project Bring-Up",
    learned:
      "Set up an STM32CubeIDE workspace, created both an Empty Project and a CubeMX-managed project, and learned why the CubeMX `.ioc` project is the better starting point for pin/peripheral configuration.",
    blocker:
      "The initial Empty Project (`blinky_c`) built correctly but lacked a `.ioc` file, which made the normal CubeMX flow and some debug discovery behavior less obvious.",
    nextStep: "Continue in `blinky_c_cubemx` and build peripheral labs on the NUCLEO-F446RE board.",
    status: "Completed",
    tags: ["setup", "toolchain", "cubemx", "cubeide"],
    tools: ["STM32CubeIDE", "STM32CubeMX"],
    board: "NUCLEO-F446RE",
    confidence: 4
  },
  {
    id: "stm32-nucleo-f446re-led-blink-debugger-basics-2026-02-23",
    date: "Feb 23, 2026",
    topic: "LED Blink + Debugger Basics (Breakpoints, Step, Watch)",
    learned:
      "Built, flashed, and debugged a CubeMX project on the NUCLEO-F446RE. Configured/toggled `LD2` on `PA5`, learned that CubeIDE commonly pauses at startup (`HAL_Init()`/`main()`), and practiced breakpoints, stepping, suspend/resume, and watch variables.",
    blocker:
      "At first it looked like flashing had failed because `LD1/COM` activity LED blinked but `LD2` did nothing. The fix was simply resuming execution after the debugger paused at startup.",
    nextStep: "Use the same project to add input handling and compare polling vs interrupt-driven behavior.",
    status: "Completed",
    tags: ["gpio", "debugging", "st-link", "blinky"],
    tools: ["STM32CubeIDE", "ST-LINK"],
    board: "NUCLEO-F446RE",
    confidence: 4
  },
  {
    id: "stm32-nucleo-f446re-button-polling-exti-2026-02-23",
    date: "Feb 23, 2026",
    topic: "Button Input (Polling + Debounce) and EXTI Interrupt Basics",
    learned:
      "Read `B1` on `PC13` using `HAL_GPIO_ReadPin`, used `GPIO_PinState` (`SET`/`RESET`) correctly, added a simple debounce re-read after a delay, and then moved to EXTI-based button interrupts with a short ISR callback and a `volatile` event flag handled in the main loop.",
    blocker:
      "Lower-level concepts were initially fuzzy (ports vs pins, why `GPIO_PIN_SET` is compared, when to use `volatile`, and how EXTI/NVIC/HAL callbacks fit together).",
    nextStep: "Implement a cleaner interrupt debounce using `HAL_GetTick()` and then move on to USART2 serial output.",
    status: "Completed",
    tags: ["gpio", "button", "exti", "interrupts", "debounce", "hal"],
    tools: ["STM32CubeIDE", "STM32CubeMX", "HAL"],
    board: "NUCLEO-F446RE",
    confidence: 4
  }
];

export const embeddedConceptProjects: EmbeddedConceptProject[] = [
  {
    id: "stm32-blinky-led-cubemx",
    concept: "LED Blink (GPIO Output)",
    workspaceProject: "blinky_c_cubemx",
    status: "Completed",
    board: "NUCLEO-F446RE",
    phase: "Phase 1: Bring-Up and Core Workflow",
    learningPlanItems: [
      "LED blink (`LD2` / `PA5`)",
      "Flash/debug on target with ST-LINK",
      "Debugger basics (breakpoints/step/watch)"
    ],
    summary:
      "CubeMX-managed STM32 project used as the main bring-up path to prove build -> flash -> debug -> observe with the onboard LED.",
    proof: "Main loop toggles `PA5` (`LD2`) and delays, verified while debugging from startup pause.",
    sourcePaths: [
      "STM32IDE_Workspace/blinky_c_cubemx/blinky_c_cubemx.ioc",
      "STM32IDE_Workspace/blinky_c_cubemx/Core/Src/main.c"
    ],
    codeSample: {
      title: "Blink loop in `main.c`",
      filePath: "STM32IDE_Workspace/blinky_c_cubemx/Core/Src/main.c",
      code: `while (1)
{
  blink_count++;
  HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
  HAL_Delay(100);
}`
    },
    relatedLogEntryIds: ["stm32-nucleo-f446re-led-blink-debugger-basics-2026-02-23"]
  },
  {
    id: "stm32-button-input-polling",
    concept: "Button Input (Polling + Debounce)",
    workspaceProject: "button_input",
    status: "Completed",
    board: "NUCLEO-F446RE",
    phase: "Phase 2: GPIO, Inputs, and Interrupts",
    learningPlanItems: [
      "Poll button input (`B1` / `PC13`)",
      "One-toggle-per-press latch logic",
      "Basic software debounce (polling)"
    ],
    summary:
      "Dedicated polling lab that reads `B1` on `PC13`, uses a press latch, and confirms a second read after a debounce delay before toggling `LD2`.",
    proof: "Button press toggles `LD2` once per press using polling + debounce re-read in the main loop.",
    sourcePaths: [
      "STM32IDE_Workspace/button_input/button_input.ioc",
      "STM32IDE_Workspace/button_input/Core/Src/main.c"
    ],
    codeSample: {
      title: "Polling + debounce + latch in `main.c`",
      filePath: "STM32IDE_Workspace/button_input/Core/Src/main.c",
      code: `GPIO_PinState button_state = HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13);

if (button_state == GPIO_PIN_SET)
{
  if (!button_was_pressed)
  {
    HAL_Delay(20);
    if (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) == GPIO_PIN_SET)
    {
      HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
      button_was_pressed = 1;
    }
  }
}
else
{
  button_was_pressed = 0;
}`
    },
    relatedLogEntryIds: ["stm32-nucleo-f446re-button-polling-exti-2026-02-23"]
  },
  {
    id: "stm32-button-exti-interrupt",
    concept: "Button Interrupt (EXTI Callback + Deferred Work)",
    workspaceProject: "button_interrupt",
    status: "Completed",
    board: "NUCLEO-F446RE",
    phase: "Phase 2: GPIO, Inputs, and Interrupts",
    learningPlanItems: [
      "EXTI button interrupt + callback flow",
      "Use `volatile` for ISR-shared flag",
      "Keep ISR short and defer work to main loop"
    ],
    summary:
      "Dedicated EXTI lab using `HAL_GPIO_EXTI_Callback(...)` to set a `volatile` flag and handle LED toggling in the main loop instead of doing work inside the ISR.",
    proof: "Callback sets `button_event`; main loop clears flag and toggles `LD2` on `PA5`.",
    sourcePaths: [
      "STM32IDE_Workspace/button_interrupt/button_interrupt.ioc",
      "STM32IDE_Workspace/button_interrupt/Core/Src/main.c",
      "STM32IDE_Workspace/button_interrupt/Core/Src/stm32f4xx_it.c"
    ],
    codeSample: {
      title: "EXTI callback + main loop handoff",
      filePath: "STM32IDE_Workspace/button_interrupt/Core/Src/main.c",
      code: `volatile uint8_t button_event = 0;

if (button_event)
{
  button_event = 0;
  HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
}

void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)
{
  if (GPIO_Pin == GPIO_PIN_13)
  {
    button_event = 1;
  }
}`
    },
    relatedLogEntryIds: ["stm32-nucleo-f446re-button-polling-exti-2026-02-23"]
  },
  {
    id: "stm32-bringup-empty-project-reference",
    concept: "Empty Project Bring-Up Reference",
    workspaceProject: "blinky_c",
    status: "Reference",
    board: "NUCLEO-F446RE",
    phase: "Phase 1: Bring-Up and Core Workflow",
    learningPlanItems: ["Create STM32CubeIDE project and build firmware (`.elf`)", "Compare Empty Project vs CubeMX-managed workflow"],
    summary:
      "Early STM32CubeIDE Empty Project kept as a reference to compare project structure and why the `.ioc` workflow is easier for incremental peripheral learning.",
    proof: "Built as an `.elf` and used as the contrast point before committing to CubeMX-managed labs.",
    sourcePaths: ["STM32IDE_Workspace/blinky_c"],
    relatedLogEntryIds: ["stm32-nucleo-f446re-toolchain-bringup-2026-02-23"]
  },
  {
    id: "stm32-button-interrupt-debounce-tick",
    concept: "Interrupt Debounce (`HAL_GetTick()`)",
    workspaceProject: "button_interrupt_debounce_tick",
    status: "Completed",
    board: "NUCLEO-F446RE",
    phase: "Phase 2: GPIO, Inputs, and Interrupts (Phase 4 timing pattern preview)",
    learningPlanItems: [
      "Add interrupt debounce using `HAL_GetTick()`",
      "Implement software debounce with timestamp comparison",
      "Test rising vs falling edge trigger behavior and document which maps to press/release on this board"
    ],
    summary:
      "EXTI debounce concept project that uses a wraparound-safe `HAL_GetTick()` timestamp comparison in the callback, keeps ISR work minimal, and verifies press/release edge mapping on the Nucleo user button.",
    proof:
      "Verified one-toggle-per-press behavior with timestamp-gated EXTI events; on `NUCLEO-F446RE` `B1`/`PC13`, `GPIO_MODE_IT_FALLING` triggers on press and `GPIO_MODE_IT_RISING` triggers on release.",
    sourcePaths: [
      "STM32IDE_Workspace/button_interrupt_debounce_tick/button_interrupt_debounce_tick.ioc",
      "STM32IDE_Workspace/button_interrupt_debounce_tick/Core/Src/main.c"
    ],
    codeSample: {
      title: "EXTI debounce gate with `HAL_GetTick()`",
      filePath: "STM32IDE_Workspace/button_interrupt_debounce_tick/Core/Src/main.c",
      code: `#define BUTTON_DEBOUNCE_MS 50U
volatile uint8_t button_event = 0;
volatile uint32_t last_time = 0;

void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)
{
  if (GPIO_Pin == B1_Pin)
  {
    uint32_t now = HAL_GetTick();
    if ((now - last_time) >= BUTTON_DEBOUNCE_MS)
    {
      last_time = now;
      button_event = 1;
    }
  }
}`
    },
    relatedLogEntryIds: ["stm32-nucleo-f446re-button-interrupt-debounce-edge-mapping-2026-02-23"]
  },
  {
    id: "stm32-uart-serial-console",
    concept: "UART Serial Output (`USART2`)",
    workspaceProject: "uart_serial",
    status: "Completed",
    board: "NUCLEO-F446RE",
    phase: "Phase 3: Serial Debugging and Observability",
    learningPlanItems: [
      "Configure `USART2` in CubeMX",
      "Transmit fixed string with `HAL_UART_Transmit`",
      "Confirm output in terminal on PC"
    ],
    summary:
      "Dedicated serial bring-up lab that verifies the ST-LINK virtual COM workflow end to end before using UART for richer debugging output.",
    proof: "Verified repeated `UART OK` output in PuTTY over the NUCLEO-F446RE ST-LINK virtual COM port using `USART2` (`115200 8N1`).",
    sourcePaths: [
      "STM32IDE_Workspace/uart_serial/uart_serial.ioc",
      "STM32IDE_Workspace/uart_serial/Core/Src/main.c"
    ],
    codeSample: {
      title: "Minimal `USART2` transmit loop",
      filePath: "STM32IDE_Workspace/uart_serial/Core/Src/main.c",
      code: `static const uint8_t uart_msg[] = "UART OK\\r\\n";

while (1)
{
  HAL_UART_Transmit(&huart2, (uint8_t *)uart_msg, sizeof(uart_msg) - 1, HAL_MAX_DELAY);
  HAL_Delay(1000);
}`
    },
    relatedLogEntryIds: ["stm32-nucleo-f446re-uart-serial-bringup-2026-02-23"]
  },
  {
    id: "stm32-uart-button-counter",
    concept: "UART Button Counter (EXTI + Debounce + `snprintf` Logging)",
    workspaceProject: "uart_button_counter",
    status: "Completed",
    board: "NUCLEO-F446RE",
    phase: "Phase 3: Serial Debugging and Observability (with Phase 2 interrupt pattern reuse)",
    learningPlanItems: [
      "Print state changes (button events / counters)",
      "Add simple formatted debug messages safely (without spamming timing-critical paths)",
      "Keep ISR short and defer work to main loop"
    ],
    summary:
      "Integration lab that reuses the EXTI callback/debounce pattern and adds UART observability by printing an incrementing button press count in the main loop.",
    proof:
      "Verified debounced button presses print an incrementing count in PuTTY and toggle `LD2`, with UART transmit kept out of interrupt context.",
    sourcePaths: [
      "STM32IDE_Workspace/uart_button_counter/uart_button_counter.ioc",
      "STM32IDE_Workspace/uart_button_counter/Core/Src/main.c",
      "STM32IDE_Workspace/uart_button_counter/Core/Src/stm32f4xx_it.c"
    ],
    codeSample: {
      title: "EXTI callback + UART counter logging",
      filePath: "STM32IDE_Workspace/uart_button_counter/Core/Src/main.c",
      code: `if (button_event)
{
  button_event = 0;
  button_counter++;
  int len = snprintf(msg, sizeof(msg), "Button presses: %lu\\r\\n", (unsigned long)button_counter);
  HAL_UART_Transmit(&huart2, (uint8_t *)msg, len, HAL_MAX_DELAY);
}

void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)
{
  if (GPIO_Pin == B1_Pin)
  {
    uint32_t now = HAL_GetTick();
    if ((now - last_tick) >= BUTTON_DEBOUNCE_MS)
    {
      last_tick = now;
      button_event = 1;
    }
  }
}`
    },
    relatedLogEntryIds: ["stm32-nucleo-f446re-uart-button-counter-2026-02-23"]
  },
  {
    id: "stm32-timer-blink-non-blocking",
    concept: "Timer-Based / Non-Blocking Blink",
    workspaceProject: "timer_blink_non_blocking",
    status: "Planned",
    board: "NUCLEO-F446RE",
    phase: "Phase 4: Time and Scheduling",
    learningPlanItems: [
      "Timer-based blinking (replace `HAL_Delay`)",
      "Use `HAL_GetTick()` for non-blocking timing in main loop"
    ],
    summary: "Concept project to compare a timestamp-driven loop and/or timer interrupt against blocking delays.",
    proof: "Target proof: LED blink while remaining responsive to a second task/input without long blocking calls.",
    sourcePaths: ["STM32IDE_Workspace/timer_blink_non_blocking (planned)"]
  }
];

export const embeddedProjectIdeas: FeaturedProject[] = [
  {
    title: "STM32 Blink + Register/HAL Comparison",
    role: "Compare a simple LED blink using generated HAL code and a lower-level approach.",
    outcome: "Build intuition for abstraction layers and project structure."
  },
  {
    title: "UART Debug Console",
    role: "Print sensor/state data over serial for debugging and development visibility.",
    outcome: "Foundation for every future embedded project and troubleshooting workflow."
  },
  {
    title: "Timer + Interrupt Lab",
    role: "Use periodic interrupts to drive deterministic updates and event handling.",
    outcome: "Core real-time control concepts before moving into RTOS work."
  }
];

export const programmingWorkflowPreview = `$ python -m pipeline.train
loaded_dataset=customer_events
features=48 model=xgboost
validation_auc=0.92
status=deploy-ready`;

export const embeddedLearningPreview = `topic=UART serial debug + button counter
board=NUCLEO-F446RE
what_worked=USART2 ST-LINK VCP output in PuTTY + EXTI callback debounce + UART button press counter logging
blocker=first integration bugs (flag clearing, HAL function name, snprintf include) fixed through review
next_step=timer-based blink / non-blocking timing patterns`;
