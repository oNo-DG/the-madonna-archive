export type SourceRef = {
  id: string;
  title: string;
  author?: string;
  detail: string;
  kind: "primary" | "chapter-source" | "project-note";
  verified: boolean;
};

export type ArchiveItem = {
  id: string;
  year: number;
  title: string;
  medium: "broadcast" | "object" | "network" | "body";
  actor: "author" | "fan" | "industry";
  label: string;
  summary: string;
  interpretation: string;
  sourceId: string;
  page: string;
};

export const sources: SourceRef[] = [
  {
    id: "S-001",
    title: "Media and Memory",
    author: "Joanne Garde-Hansen",
    detail: "Chapter 7: “The Madonna Archive: Celebrity, Ageing and Fan Nostalgia”, pp. 120–135.",
    kind: "primary",
    verified: true,
  },
  {
    id: "S-002",
    title: "Chapter reading notes",
    detail: "Chinese summaries prepared from the uploaded chapter for this course project; paraphrase, not direct quotation.",
    kind: "project-note",
    verified: true,
  },
];

export const archiveItems: ArchiveItem[] = [
  {
    id: "A-001",
    year: 1984,
    title: "First encounter: Like a Virgin",
    medium: "broadcast",
    actor: "author",
    label: "TELEVISION / MEMORY",
    summary: "The chapter opens with the author’s conflicted memory of hearing and watching Madonna while growing up in a Catholic environment.",
    interpretation: "A media work becomes attached to identity formation; remembering the song also means remembering the earlier self who encountered it.",
    sourceId: "S-001",
    page: "pp. 120–122",
  },
  {
    id: "A-002",
    year: 2003,
    title: "Ageing in a younger pop field",
    medium: "body",
    actor: "industry",
    label: "MUSIC VIDEO / AGE",
    summary: "The chapter considers Madonna’s appearance alongside Britney Spears and the opposing readings of mentor, rival and ageing star.",
    interpretation: "Celebrity ageing is culturally narrated rather than merely biological, and is judged through gendered expectations.",
    sourceId: "S-001",
    page: "pp. 129–132",
  },
  {
    id: "A-003",
    year: 2009,
    title: "Celebration and recycled memory",
    medium: "object",
    actor: "industry",
    label: "COMPILATION / NOSTALGIA",
    summary: "The compilation reactivates familiar songs and visual signs, addressing older fans and new audiences at the same time.",
    interpretation: "Nostalgia offers continuity and emotion, but it can also be organised and sold by the culture industries.",
    sourceId: "S-001",
    page: "pp. 132–134",
  },
  {
    id: "A-004",
    year: 2009,
    title: "The unretouched body",
    medium: "body",
    actor: "fan",
    label: "DIGITAL IMAGE / AGEING",
    summary: "Online circulation placed unretouched images beside highly produced earlier images, prompting hostile responses, including from long-term fans.",
    interpretation: "The ageing celebrity can force fans to confront their own ageing, while digital archives make forgetting increasingly difficult.",
    sourceId: "S-001",
    page: "pp. 129–132",
  },
  {
    id: "A-005",
    year: 2010,
    title: "YouTube comments as memory traces",
    medium: "network",
    actor: "fan",
    label: "COMMENT / PARTICIPATION",
    summary: "Two fan responses reconnect the same song to different life histories: childhood identity and a musician’s later technical listening.",
    interpretation: "Public comments can act as vernacular memory records, showing how popular culture becomes entangled with personal biography.",
    sourceId: "S-001",
    page: "pp. 120–122",
  },
  {
    id: "A-006",
    year: 2010,
    title: "Madonna Picture Project",
    medium: "object",
    actor: "fan",
    label: "COLLECTION / ARCHIVE",
    summary: "Records, tickets, magazines, video formats and other fan-held objects are reorganised as an archive of popular memory.",
    interpretation: "A commodity can accrue memory value through use, wear, collection and narration; fans participate in building celebrity heritage.",
    sourceId: "S-001",
    page: "pp. 122–129",
  },
];

export const mediaModes = [
  {
    id: "broadcast",
    year: "1980s",
    name: "Broadcast",
    zh: "广播电视",
    device: "CRT",
    copy: "电视节目与音乐录像把声音、身体和造型变成可共同观看的事件。传播权主要集中在媒体机构与文化产业。",
    relation: "第七章以作者对电视表演的记忆作为入口。",
  },
  {
    id: "object",
    year: "1980s—2000s",
    name: "Collectible",
    zh: "实体收藏",
    device: "VINYL",
    copy: "唱片、磁带、门票和杂志首先是商品，随后在保存、磨损与叙述中获得私人记忆价值。",
    relation: "Madonna Picture Project 让分散收藏成为文化档案。",
  },
  {
    id: "network",
    year: "2000s—2010s",
    name: "Networked",
    zh: "网络参与",
    device: "WEB",
    copy: "上传、评论、收藏与分享让粉丝的解释公开可见，也让旧媒介内容持续进入新的生活史。",
    relation: "YouTube 评论成为章节分析个人记忆的材料。",
  },
  {
    id: "platform",
    year: "2020s",
    name: "Platform",
    zh: "平台与生成",
    device: "FEED",
    copy: "推荐、剪辑与生成技术进一步改变档案被看见和被重组的方式。此处是项目对原章的当代延伸。",
    relation: "非 2011 年原章直接论述，作为设计反思明确标注。",
  },
];

export const timelineMoments = [
  {
    year: "1984",
    title: "初次观看",
    author: "尴尬、吸引与身份形成同时发生；电视表演被写入作者的青春经验。",
    fan: "同一首歌会在不同粉丝的成长经历中形成不同的私人锚点。",
    industry: "音乐与形象经由大众媒体被组织为可广泛传播的明星事件。",
    source: "S-001 · pp. 120–122",
  },
  {
    year: "2009",
    title: "怀旧再包装",
    author: "精选集成为分析怀旧、品牌与文化遗产产业的案例。",
    fan: "熟悉的歌曲与形象重新连接过去的生活状态，也暴露对衰老的矛盾期待。",
    industry: "《Celebration》把旧作品和旧形象重新组合为当下可流通的文化商品。",
    source: "S-001 · pp. 129–134",
  },
  {
    year: "2010",
    title: "重新观看",
    author: "成年后的理论理解与年轻时的情感反应叠加在一起。",
    fan: "评论区公开了个人生活史、偶像认同与后来的专业聆听。",
    industry: "平台保存并并置大量旧影像，使明星历史持续可检索、可比较。",
    source: "S-001 · pp. 120–135",
  },
];
