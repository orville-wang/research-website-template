export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors?: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  detailImageUrl?: string;
  abstract?: string;
  award?: string;
  rank?: string;
  institutions?: string[];  // Collaborating institutions
  status?: string;  // e.g., "under review", "accepted", etc.
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "KDD",
    title: "CityWeave: Weaving User Needs and World Constraints for Personalized and Reliable Travel Route Planning",
    authors: "A. Wang, Zhiwen Chen, S. Wang, Q. Xia, J. Li",
    rank: "CCF A",
    status: "Oral",
    detailImageUrl: "/kdd.png",
    abstract: "Urban door-to-door (D2D) mobility planning is a core task for AI-powered smart cities, requiring models to capture individual mobility behavior and generate optimized plans under real-world urban constraints such as network connectivity and service schedules. Existing methods face fundamental limitations. Optimization-based approaches rely on static costs and fail to capture individual-specific preferences. LLM-agent-based approaches often have weak spatio-temporal reasoning and unstable constraint tracking, which reduces feasibility and reliability. In this study, we propose CityWeave, a VLM-based framework for urban D2D mobility planning that integrates the Who--When--Where--How (3W1H) reasoning paradigm with a two-stage training scheme. CityWeave learns this paradigm through supervised fine-tuning and is further improved by reinforcement learning based enhancement. A dataset of 180,000 real-world samples from 80,000 users is constructed to support training and evaluation. The model learns to identify user needs (Who), reason over departure and arrival time windows (When), read maps and spatial topology (Where), and invoke routing tools (How) to generate feasible plans. We further introduce a unified User--World Grounding (UWG) module that enforces navigation-based world constraints and evaluates personalization with respect to the user profile. Extensive experiments show that CityWeave achieves a state-of-the-art Final Pass Rate of 64.7% and a Commonsense Pass Rate of 92.4%, outperforming both conventional non-LLM planning pipelines and strong LLM-agent baselines. These results demonstrate that structured reasoning over human mobility behavior, combined with explicit user and world grounding, offers a practical path toward reliable and personalized planning agents for smart urban transportation systems.",
    institutions: [
      "Tongji University",
      "The Hong Kong University of Science and Technology (Guangzhou)",
      "The Hong Kong Polytechnic University",
    ],
  },
  {
    year: "2025",
    conference: "NeurIPS",
    title: "HCRMP: A LLM-Hinted Contextual Reinforcement Learning Framework for Autonomous Driving",
    authors: "Zhiwen Chen, H. Deng, Z. Li, H. Wen, G. Jin, R. Yu, B. Leng",
    paperUrl: "https://arxiv.org/abs/2505.15793",
    rank: "CCF A",
    status: "Accepted",
    detailImageUrl: "/hcrmp.png",
    abstract: "Integrating the understanding and reasoning capabilities of Large Language Models (LLM) with the self-learning capabilities of Reinforcement Learning (RL) enables more reliable driving performance under complex driving conditions. There has been a lot of work exploring LLM-Dominated RL methods in the field of autonomous driving motion planning. These methods, which utilize LLM to directly generate policies or provide decisive instructions during policy learning of RL agent, are centrally characterized by an over-reliance on LLM outputs. However, LLM outputs are susceptible to hallucinations. Evaluations show that state-of-the-art LLM indicates a non-hallucination rate of only approximately 57.95% when assessed on essential driving-related tasks. Thus, in these methods, hallucinations from the LLM can directly jeopardize the performance of driving policies. This paper argues that maintaining relative independence between the LLM and the RL is vital for solving the hallucinations problem. Consequently, this paper is devoted to propose a novel LLM-Hinted RL paradigm. The LLM is used to generate semantic hints for state augmentation and policy optimization to assist RL agent in motion planning, while the RL agent counteracts potential erroneous semantic indications through policy learning to achieve excellent driving performance. Based on this paradigm, we propose the HCRMP (LLM-Hinted Contextual Reinforcement Learning Motion Planner) architecture, which is designed that includes ①Augmented Semantic Representation Module to extend state space. ②Contextual Stability Anchor Module enhances the reliability of multi-critic weight hints by utilizing information from the knowledge base. ③Semantic Cache Module is employed to seamlessly integrate LLM low-frequency guidance with RL high-frequency control. Extensive experiments in CARLA validate HCRMP's strong overall driving performance. HCRMP achieves a task success rate of up to 80.3% under diverse driving conditions with different traffic densities. Under safety-critical driving conditions, HCRMP significantly reduces the collision rate by 11.4%, which effectively improves the driving performance in complex scenarios.",
    institutions: ["Tongji University", "SenseTime Research"],
  },
  {
    year: "",
    conference: "",
    title: "FlexPlanner: Learning Adaptive Driving Planner with Temporal Reward Decomposition",
    status: "Under Review",
    institutions: [
      "The Hong Kong University of Science and Technology (Guangzhou)",
      "Shanghai Jiao Tong University",
      "Hello Inc.",
    ],
  },
  {
    year: "",
    conference: "",
    title: "RegAD: Rethinking Regressive versus Generative Planning in End-to-End Autonomous Driving",
    status: "Under Review",
  },
  {
    year: "2026",
    conference: "IEEE TPAMI",
    title: "Typed Budgets for Object-Relational Driving World Models",
    status: "Under Review",
  },
  {
    year: "",
    conference: "",
    title: "Survey of General End-to-End Autonomous Driving: A Unified Perspective",
    status: "Under Review",
    institutions: ["SJTU", "DiDi Chuxing"],
  },
  {
    year: "",
    conference: "IEEE Transactions on Neural Networks and Learning Systems",
    title: "A Survey of Reinforcement Learning-Based Motion Planning for Autonomous Driving: Lessons Learned from a Driving Task Perspective",
    authors: "Z. Li, G. Jin, R. Yu, Zhiwen Chen, N. Li, W. Han, L. Xiong, B. Leng, J. Hu, I. Kolmanovsky, D. Filev",
    paperUrl: "https://arxiv.org/abs/2503.23650",
    status: "Under Review",
    institutions: ["Tongji University", "University of Michigan", "Texas A&M University"],
  },
  {
    year: "2022",
    conference: "Journal of Tongji University (Natural Science Edition)",
    title: "A Global Path Planning Method for Multi-Vehicle Autonomous Parking Based on Multi-Attribute Decision Making",
    authors: "Zhiwen Chen, Z. Li, J. Wu, et al.",
    status: "Accepted",
    institutions: ["Tongji University"],
  },
];
