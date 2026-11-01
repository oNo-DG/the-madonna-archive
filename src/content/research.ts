export type PracticeCase = {
  id: string;
  year: string;
  title: string;
  maker: string;
  medium: string;
  category: "PRACTICE PROJECT" | "DESIGN RESEARCH";
  categoryZh: "实践项目" | "设计研究";
  image: string;
  imageAlt: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  fact: string;
  practice: string;
  relation: string;
  source: string;
};

export const practiceCases: PracticeCase[] = [
  {
    id: "C-01", year: "2016—", title: "Björk Digital",
    maker: "Björk · touring cultural institutions", medium: "沉浸式 VR 音乐展览",
    category: "PRACTICE PROJECT", categoryZh: "实践项目",
    image: "/images/cases/bjork-digital.jpg", imageAlt: "Björk Digital 官方展览视觉", imagePosition: "50% 38%",
    fact: "一项围绕《Vulnicura》等作品展开的巡回沉浸式展览，把音乐录像、360°影像、空间声场与互动装置组织为可进入的视听档案。",
    practice: "观众佩戴 VR 设备进入《Black Lake》等作品的虚拟场景，并在展览中观看横跨多年创作的音乐录像；既有歌曲因此被重新编排为空间化、身体化的观看经验。",
    relation: "它展示名人形象并非固定肖像，而是在声音、表演、服装、影像与技术之间不断被重新生产。",
    source: "https://www.cccb.org/en/w/exhibitions/bjork-digital",
  },
  {
    id: "C-02", year: "2025", title: "David Bowie Centre",
    maker: "V&A East Storehouse · David Bowie Archive", medium: "艺术家档案与开放研究中心",
    category: "PRACTICE PROJECT", categoryZh: "实践项目",
    image: "/images/cases/david-bowie-centre.jpg", imageAlt: "V&A David Bowie Centre 展陈空间", imagePosition: "50% 50%",
    fact: "V&A 以长期中心的形式开放 David Bowie 档案，馆藏涵盖歌词手稿、服装、摄影、绘画、录音与舞台角色材料。",
    practice: "中心以约 200 件轮换展品建立主题陈列，同时保留可预约查阅的工作档案；公众既能观看代表性物件，也能沿创作过程深入研究原始材料。",
    relation: "它把公众熟悉的明星人格拆解为服装、笔记、声音和舞台角色，揭示身份是被持续设计与变形的过程。",
    source: "https://www.vam.ac.uk/exhibitions/david-bowie-centre",
  },
  {
    id: "C-03", year: "2023—", title: "Eyes of the Storm",
    maker: "Paul McCartney · partner museums", medium: "私人摄影档案与巡回展览",
    category: "PRACTICE PROJECT", categoryZh: "实践项目",
    image: "/images/cases/eyes-of-the-storm.jpg", imageAlt: "Paul McCartney Photographs 1963–64: Eyes of the Storm 展览海报", imagePosition: "50% 44%", imageFit: "contain",
    fact: "展览从 Paul McCartney 重新发现的 1963—64 年底片出发，以 250 余张照片呈现披头士走向全球知名度时的旅行、后台与私人瞬间。",
    practice: "照片按城市与行程组成时间叙事，把公众熟悉的 Beatlemania 与成员视角下的朋友、车厢、酒店和人群并置，让私人镜头成为历史入口。",
    relation: "项目说明个人记忆可以补写大众媒体图像：名人既是被观看的对象，也是记录集体事件的主体。",
    source: "https://www.museegranet-aixenprovence.fr/en/exhibitions-1/translate-to-anglais-paul-mccartney-photographe-1963-64-eyes-of-the-storm",
  },
  {
    id: "C-04", year: "2014—17", title: "The British Invasion",
    maker: "GRAMMY Museum · The Beatles Story", medium: "互动音乐遗产展览",
    category: "PRACTICE PROJECT", categoryZh: "实践项目",
    image: "/images/cases/british-invasion.jpg", imageAlt: "The British Invasion 展览中的 Supremes 舞台服装", imagePosition: "50% 48%",
    fact: "展览以舞台服装、乐器、手写歌词与摄影等物件讲述 1960 年代英国乐队进入美国流行文化的历史。",
    practice: "除文物陈列外，观众可操作英国音乐根源地图、在视频记忆亭录下个人回忆，并跟随屏幕中的 Ringo Starr 完成鼓乐课程。",
    relation: "它让档案从静态证据变成参与式媒介：物件、教学互动与观众记忆共同补充音乐史。",
    source: "https://grammymuseum.org/exhibit/the-british-invasion-how-1960s-beat-groups-conquered-america/",
  },
  {
    id: "C-05", year: "2012—", title: "Grateful Dead Archive Online",
    maker: "UC Santa Cruz University Library", medium: "参与式数字档案研究",
    category: "DESIGN RESEARCH", categoryZh: "设计研究",
    image: "/images/cases/grateful-dead-archive.jpg", imageAlt: "Grateful Dead Archive Online 官方档案照片", imagePosition: "50% 42%", imageFit: "contain",
    fact: "这是一个将海报、照片、录音、信件、同人刊物与乐迷材料数字化的开放研究平台，线上提供数万件可检索档案。",
    practice: "平台把机构馆藏与用户参与放在同一系统中：访客可以浏览、标记、评论、分享并贡献内容，使元数据和社群记忆持续生长。",
    relation: "它为“活档案”提供方法模型：粉丝不是被研究的对象，而是共同描述、补充与传播文化记忆的合作者。",
    source: "https://www.gdao.org/about",
  },
];

export type DesignProposal = {
  id: string;
  title: string;
  zh: string;
  visual: "constellation" | "narrative" | "ageing";
  question: string;
  input: string;
  interaction: string;
  output: string;
  ethics: string;
};

export const designProposals: DesignProposal[] = [
  {
    id: "P-01", title: "FAN MEMORY CONSTELLATION", zh: "粉丝记忆星图", visual: "constellation",
    question: "不同粉丝对同一作品的私人记忆，如何形成多声部而非统一答案？",
    input: "年份、地点、媒介形式和一段不超过 120 字的个人记忆。",
    interaction: "投稿按作品、年代和情绪形成可缩放星图；靠近节点时读到个体叙事，远离时看到记忆群落。",
    output: "可筛选、可追溯、允许撤回的参与式记忆地图。",
    ethics: "投稿者拥有删除权；默认匿名；避免把情绪标签解释为心理诊断。",
  },
  {
    id: "P-02", title: "FAN FICTION FOR REALITY", zh: "为现实创作：重新书写一位名人", visual: "narrative",
    question: "名人形象究竟由谁创造？当互相矛盾的记忆并存时，身份能否成为一份共同书写的叙事？",
    input: "参与者提交个人记忆、旧照片、票根、文字片段与对名人形象的私人解释。",
    interaction: "系统按人物、事件与时间把材料叠加为多条叙事轨道；用户可切换讲述者、保留矛盾版本，而不合并成唯一传记。",
    output: "一份持续生长的集体叙事，可转化为互动展览、动态视觉与实验出版物。",
    ethics: "取得投稿授权并保留撤回机制；清楚区分事实记录、个人记忆与虚构补写，避免冒充官方传记。",
  },
  {
    id: "P-03", title: "THE AGEING BODY", zh: "衰老的身体：一个随时间变化的档案", visual: "ageing",
    question: "媒体影像与语言如何塑造我们对衰老的判断？为什么女性名人尤其被要求维持年轻？",
    input: "同一公众人物在不同年龄阶段的肖像、宣传照、新闻标题与公众评论。",
    interaction: "观众切换年龄阶段、隐藏媒体文字，或让图像重叠、模糊、破碎与重新组合，观察评价如何改变身体的可见方式。",
    output: "一件随时间和观看动作变化的影像档案，可呈现为互动装置、生成视觉、动态海报或实验出版。",
    ethics: "不预测或美化真实人脸年龄；标注影像与媒体文本来源；避免把衰老再次呈现为缺陷或奇观。",
  },
];
