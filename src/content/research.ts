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
    year: "2010",
    title: "The Johnny Cash Project",
    maker: "Chris Milk · Aaron Koblin",
    medium: "参与式音乐影像",
    fact: "参与者通过网页绘图工具重绘单帧，所有投稿共同组成持续变化的 Johnny Cash 音乐影像。",
    relation: "粉丝不只保存偶像记忆，也通过共创持续生产偶像的文化生命。",
    source: "https://www.aaronkoblin.com/project/johnny-cash-project/",
  },
  {
    id: "C-02",
    year: "2010",
    title: "The Wilderness Downtown",
    maker: "Chris Milk · Google Creative Lab · Aaron Koblin",
    medium: "个性化互动影像",
    fact: "作品调用地图和街景数据，将用户成长的街区嵌入 Arcade Fire 的互动短片。",
    relation: "公共媒体作品通过个人地点数据转化为私人记忆触发器。",
    source: "https://www.aaronkoblin.com/project/the-wilderness-downtown/",
  },
  {
    id: "C-03",
    year: "2011—",
    title: "Europeana 1914–1918",
    maker: "Europeana",
    medium: "公众参与式数字档案",
    fact: "项目邀请公众提交与第一次世界大战有关的家庭故事与个人材料，让私人收藏进入公共文化档案。",
    relation: "档案权力从机构扩展到普通参与者，但分类、审核与可见性仍由平台组织。",
    source: "https://www.europeana.eu/en/exhibitions/untold-stories-of-the-first-world-war",
  },
  {
    id: "C-04",
    year: "52 WEEKS",
    title: "Dear Data",
    maker: "Giorgia Lupi · Stefanie Posavec",
    medium: "个人数据与通信设计",
    fact: "两位设计师连续一年收集生活数据，将其手绘为 52 组明信片并互相邮寄。",
    relation: "个人数据不是只用于效率计算，也能成为自我观察、友谊与记忆叙事的媒介。",
    source: "https://www.dear-data.com/theproject",
  },
  {
    id: "C-05",
    year: "2012",
    title: "A Journal of Insomnia",
    maker: "National Film Board of Canada",
    medium: "协作式互动纪录片",
    fact: "项目通过文字、绘画和摄像记录世界各地失眠者的经验，并将参与材料组织成网络纪录体验。",
    relation: "私人经验经由数字界面成为可共享的社会记忆，同时引出脆弱叙事的伦理问题。",
    source: "https://collection.nfb.ca/interactive/a_journal_of_insomnia",
  },
  {
    id: "C-06",
    year: "2010",
    title: "HIGHRISE: Out My Window",
    maker: "Katerina Cizek · NFB",
    medium: "360°互动纪录片",
    fact: "作品以 360°网页空间串联 13 个城市、49 个关于高层住宅生活的故事。",
    relation: "空间界面让分散的个人叙事构成可探索的集体记忆，而不是单一线性历史。",
    source: "https://collection.nfb.ca/interactive/highrise_out_my_window_en",
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
