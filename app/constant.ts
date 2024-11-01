import { ModelRecord } from "./client/api";

export const OWNER = "NeuraiProject";
export const REPO = "neurai-ai-chat";
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
You are currently engaging with users on WebLLM Chat, an open-source AI Chatbot UI developed by MLC.ai (Machine Learning Compilation).
Model display_name:  {{model}}
The current date and time is {{time}}.
Latex inline format: \\(x^2\\) 
Latex block format: $$e=mc^2$$
`;

export const DEFAULT_MODELS: ModelRecord[] = [
  // Llama-3.2
  {
    name: "Llama-3.2-1B-Instruct-q4f32_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "1B",
    quantization: "q4f32",
    family: "Llama 3.2",
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3.2-1B-Instruct-q4f16_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "1B",
    quantization: "q4f16",
    family: "Llama 3.2",
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3.2-1B-Instruct-q0f32-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "1B",
    quantization: "q0f32",
    family: "Llama 3.2",
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3.2-1B-Instruct-q0f16-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "1B",
    quantization: "q0f16",
    family: "Llama 3.2",
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3.2-3B-Instruct-q4f32_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "3B",
    quantization: "q4f32",
    family: "Llama 3.2",
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3.2-3B-Instruct-q4f16_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "3B",
    quantization: "q4f16",
    family: "Llama 3.2",
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  // SmolLM
  {
    name: "SmolLM-1.7B-Instruct-q0f16-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "1.7B",
    quantization: "q0f16",
    family: "SmolLM",
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-360M-Instruct-q0f16-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "360M",
    quantization: "q0f16",
    family: "SmolLM",
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-135M-Instruct-q0f16-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "135M",
    quantization: "q0f16",
    family: "SmolLM",
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
   {
    name: "Qwen2.5-0.5B-Instruct-q4f32_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "0.5B",
    quantization: "q4f32",
    family: "Qwen 2.5",
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "0.5B",
    quantization: "q4f16",
    family: "Qwen 2.5",
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2.5-0.5B-Instruct-q0f16-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "0.5B",
    quantization: "q0f16",
    family: "Qwen 2.5",
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2.5-0.5B-Instruct-q0f32-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "0.5B",
    quantization: "q0f32",
    family: "Qwen 2.5",
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "1.5B",
    quantization: "q4f16",
    family: "Qwen 2.5",
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2.5-1.5B-Instruct-q4f32_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "1.5B",
    quantization: "q4f32",
    family: "Qwen 2.5",
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2.5-3B-Instruct-q4f16_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "3B",
    quantization: "q4f16",
    family: "Qwen 2.5",
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2.5-3B-Instruct-q4f32_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "3B",
    quantization: "q4f32",
    family: "Qwen 2.5",
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2.5-7B-Instruct-q4f16_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "7B",
    quantization: "q4f16",
    family: "Qwen 2.5",
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2.5-7B-Instruct-q4f32_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "7B",
    quantization: "q4f32",
    family: "Qwen 2.5",
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  // Qwen2.5-Coder
  {
    name: "Qwen2.5-Coder-1.5B-Instruct-q4f16_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "1.5B",
    quantization: "q4f16",
    family: "Qwen 2.5 Coder",
    recommended_config: {
      temperature: 1.0,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1.0,
    },
  },
  {
    name: "Qwen2.5-Coder-1.5B-Instruct-q4f32_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "1.5B",
    quantization: "q4f32",
    family: "Qwen 2.5 Coder",
    recommended_config: {
      temperature: 1.0,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1.0,
    },
  },
  {
    name: "Qwen2.5-Coder-7B-Instruct-q4f16_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "7B",
    quantization: "q4f16",
    family: "Qwen 2.5 Coder",
    recommended_config: {
      temperature: 1.0,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1.0,
    },
  },
  {
    name: "Qwen2.5-Coder-7B-Instruct-q4f32_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "7B",
    quantization: "q4f32",
    family: "Qwen 2.5 Coder",
    recommended_config: {
      temperature: 1.0,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1.0,
    },
  },
  {
    name: "Llama-3.1-70B-Instruct-q3f16_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "70B",
    quantization: "q3f16",
    family: "Llama 3.1",
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    quantization: "q4f16",
    family: "TinyLlama",
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    quantization: "q4f32",
    family: "TinyLlama",
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC-1k",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    quantization: "q4f16",
    family: "TinyLlama",
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC-1k",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    quantization: "q4f32",
    family: "TinyLlama",
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
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
