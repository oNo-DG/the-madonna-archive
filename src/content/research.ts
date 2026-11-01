export type PracticeCase = {
  id: string;
  year: string;
  title: string;
  maker: string;
  medium: string;
  fact: string;
  relation: string;
  source: string;
};

export const practiceCases: PracticeCase[] = [
  {
    id: "C-01",
    year: "2020",
    title: "In Event of Moon Disaster",
    maker: "MIT Center for Advanced Virtuality · Francesca Panetta · Halsey Burgund",
    medium: "沉浸式合成历史",
    fact: "作品利用深度伪造技术，让尼克松朗读一篇从未真正发表的阿波罗 11 号应急演说，以替代历史训练公众辨认合成媒体。",
    relation: "它说明媒介不仅保存过去，也能够制造看似可信的过去；档案真实性因此成为设计问题。",
    source: "https://opendoclab.mit.edu/presents/event-moon-disaster-halsey-burgund-francesca-panetta/",
  },
  {
    id: "C-02",
    year: "2020",
    title: "The Zizi Show",
    maker: "Jake Elwes · 13 位英国变装表演者",
    medium: "互动深度伪造表演",
    fact: "项目以变装表演者共同建立的数据集训练神经网络，观众可在网页舞台切换不同合成身体与表演。",
    relation: "数字替身既可能复制刻板印象，也能在参与者拥有能动性的条件下成为社群自我档案。",
    source: "https://www.jakeelwes.com/project-zizi-show.html",
  },
  {
    id: "C-03",
    year: "2021",
    title: "Deep Nostalgia",
    maker: "MyHeritage · D-ID",
    medium: "AI 家庭照片动画",
    fact: "服务将预先录制的动作驱动应用到静态家庭照片，使照片中的人物眨眼、转头或微笑。",
    relation: "微小的运动让照片从证据转化为“在场感”，同时模糊记忆、模拟与情感投射的边界。",
    source: "https://blog.myheritage.com/2021/04/introducing-deep-nostalgia-special-animations/",
  },
  {
    id: "C-04",
    year: "2022",
    title: "ABBA Voyage",
    maker: "ABBA · Industrial Light & Magic · Svana Gisla",
    medium: "数字替身现场演出",
    fact: "演出以成员本人参与制作的数字化年轻形象，与现场乐队共同出现在专门建造的伦敦场馆中。",
    relation: "它把粉丝怀旧、名人身体与年龄重新编排为可持续演出的文化商品，也提出“谁的年龄被观看”的问题。",
    source: "https://abbavoyage.com/faqs",
  },
  {
    id: "C-05",
    year: "2023",
    title: "Synthetic Memories",
    maker: "Domestic Data Streamers",
    medium: "生成式 AI 记忆档案",
    fact: "项目通过访谈把未曾被拍摄或正在消失的个人记忆转化为共同修订的生成影像，并刻意模糊部分细节以区别真实照片。",
    relation: "记忆拥有者参与校准生成结果，使 AI 不是替代记忆，而是讨论身份、失落与档案伦理的媒介。",
    source: "https://www.domesticstreamers.com/work/synthetic-memories/",
  },
  {
    id: "C-06",
    year: "2023",
    title: "M. F. Husain: An AI Experience",
    maker: "Museum of Art & Photography · Accenture Labs",
    medium: "可对话数字人物",
    fact: "博物馆以研究整理的问答、语音合成和三维全息形象建立艺术家 M. F. Husain 的互动数字人物，供观众询问其生平与创作。",
    relation: "名人档案从可阅读材料变为可回应的角色，但回应范围、作者性与权威感由策展和系统共同塑造。",
    source: "https://map-india.org/the-ai-husain-experience/",
  },
];

export type DesignProposal = {
  id: string;
  title: string;
  zh: string;
  question: string;
  input: string;
  interaction: string;
  output: string;
  ethics: string;
};

export const designProposals: DesignProposal[] = [
  {
    id: "P-01",
    title: "AGEING IMAGE MIRROR",
    zh: "衰老影像镜",
    question: "当旧日明星影像不断被平台推荐，观看者如何意识到自己也在同时变老？",
    input: "用户选择一个具有个人记忆的流行文化影像与首次观看年份。",
    interaction: "界面并置历史影像、当前观看者的时间位置和平台循环推荐轨迹；用户可控制重叠程度，而不是生成虚假的年龄预测。",
    output: "一张关于明星、观看者与平台时间差的可保存关系图。",
    ethics: "不保存人脸；不把衰老呈现为缺陷；避免以年龄推断身份。",
  },
  {
    id: "P-02",
    title: "FAN MEMORY CONSTELLATION",
    zh: "粉丝记忆星图",
    question: "不同粉丝对同一作品的私人记忆，如何形成多声部而非统一答案？",
    input: "年份、地点、媒介形式和一段不超过 120 字的个人记忆。",
    interaction: "投稿按作品、年代和情绪形成可缩放星图；靠近节点时听见或读到个体叙事，远离时看到记忆群落。",
    output: "可筛选、可追溯、允许撤回的参与式记忆地图。",
    ethics: "投稿者拥有删除权；默认匿名；避免将情绪标签解释为心理诊断。",
  },
  {
    id: "P-03",
    title: "MEDIA TRACE PLAYER",
    zh: "媒介痕迹播放器",
    question: "同一文化对象从电视、唱片、录像带到平台短视频时，什么被保存，什么被改变？",
    input: "同一作品在不同媒介和年代中的版本、包装、评论与元数据。",
    interaction: "用户像切换唱片轨道一样比较画幅、时长、声音、界面和评论环境，并标记每次转换中的增益与损失。",
    output: "一份可视化媒介谱系和版本差异档案。",
    ethics: "清楚标记版权与来源；不重新上传受保护内容；区分事实记录和策展解释。",
  },
];
