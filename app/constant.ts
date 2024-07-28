import { ModelRecord } from "./client/api";

export const OWNER = "neuraiproject";
export const REPO = "Neurai";
export const WEBLLM_HOME_URL = "https://neurai.org";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  Templates = "/templates",
}

export enum ApiPath {
  Cors = "",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Templates = "templates.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Templates = "templates-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const DEFAULT_SIDEBAR_WIDTH = 320;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 260;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (name: string) => "unfinished-input-" + name;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang

export const DEFAULT_SYSTEM_TEMPLATE = `
You are an AI large language model assistant trained by {{provider}}.
Model display_name:  {{model}}
The current date and time is {{time}}.
Latex inline format: \\(x^2\\) 
Latex block format: $$e=mc^2$$
`;

export const DEFAULT_MODELS: ModelRecord[] = [
  {
    name: "Llama-3.1-8B-Instruct-q4f32_1-MLC-1k",
    display_name: "Llama | Cache: 8Gb | VRAM: 4600Mb",
    provider: "Meta | Cache: 8Gb | VRAM: 4500Mb",
    size: "8B",
    quantization: "q4f32",
    family: "Llama 3.1",
    vram_required_MB: 5295.7,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3.1-8B-Instruct-q4f32_1-MLC",
    display_name: "Llama",
    provider: "Meta | Cache: 8Gb | VRAM: 6100Mb",
    size: "8B",
    quantization: "q4f32",
    family: "Llama 3.1",
    vram_required_MB: 6101.01,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Phi-3-mini-4k-instruct-q4f32_1-MLC",
    display_name: "Phi",
    provider: "MLC | Cache: 8Gb | VRAM: 5400Mb",
    quantization: "q4f32_1",
    context_length: "4k",
    family: "Phi 3 Mini",
    vram_required_MB: 5483.12,
    low_resource_required: false,
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,

      top_p: 1,
    },
  },
  {
    name: "Phi-3-mini-4k-instruct-q4f16_1-MLC-1k",
    display_name: "Phi",
    provider: "MLC | Cache: 8Gb | VRAM: 2500Mb",
    quantization: "q4f16_1",
    context_length: "1k",
    family: "Phi 3 Mini",
    vram_required_MB: 2520.07,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,

      top_p: 0.95,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan | Cache: 1.1Gb | VRAM: 840Mb",
    size: "1.1B",
    quantization: "q4f32_1",
    context_length: "2k",
    family: "TinyLlama",
    vram_required_MB: 839.98,
    low_resource_required: true,
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,

      top_p: 1,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan | Cache: 1.1Gb | VRAM: 840Mb",
    size: "1.1B",
    quantization: "q4f32_1",
    context_length: "2k",
    family: "TinyLlama",
    vram_required_MB: 839.98,
    low_resource_required: true,
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,

      top_p: 1,
    },
  },
];

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;

export const LOG_LEVELS = {
  TRACE: 0,
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
  SILENT: 5,
};
