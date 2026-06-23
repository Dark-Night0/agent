import { describe, expect, it } from 'vitest';
import { defaultConfig } from '../config/config.js';
import { newFromConfig } from './factory.js';

describe('newFromConfig', () => {
  it('creates a Kimi client with Moonshot defaults', () => {
    const cfg = defaultConfig();
    cfg.backend = 'kimi';
    cfg.api_key = 'sk-kimi';

    const client = newFromConfig(cfg);

    expect(client.name()).toBe('kimi');
    expect(client.model()).toBe('kimi-k2.6');
  });

  it('requires a Kimi API key', () => {
    const cfg = defaultConfig();
    cfg.backend = 'kimi';

    expect(() => newFromConfig(cfg)).toThrow(/MOONSHOT_API_KEY/);
  });

  it('creates a Groq client with defaults', () => {
    const cfg = defaultConfig();
    cfg.backend = 'groq';
    cfg.api_key = 'gsk-test';

    const client = newFromConfig(cfg);

    expect(client.name()).toBe('groq');
    expect(client.model()).toBe('openai/gpt-oss-20b');
  });

  it('requires a Groq API key', () => {
    const cfg = defaultConfig();
    cfg.backend = 'groq';

    expect(() => newFromConfig(cfg)).toThrow(/GROQ_API_KEY/);
  });

  it('creates a Gemini client with defaults', () => {
    const cfg = defaultConfig();
    cfg.backend = 'gemini';
    cfg.api_key = 'gemini-test';

    const client = newFromConfig(cfg);

    expect(client.name()).toBe('gemini');
    expect(client.model()).toBe('models/gemini-3.5-flash');
  });

  it('requires a Gemini API key', () => {
    const cfg = defaultConfig();
    cfg.backend = 'gemini';

    expect(() => newFromConfig(cfg)).toThrow(/GEMINI_API_KEY/);
  });
});
