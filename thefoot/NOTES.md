# Mac // Docker // Ollama
.. uses CPUs as docker desktop does not expose GPUs to the containers.

# Native Ollama
Models must first be downloaded and then pre-loaded (optional) using:

```bash

# Download
ollama pull llama3.1

# Load into memory
ollama run llama3.1 ""

```

List models:
```bash
curl http://localhost:11434/v1/models
```

Text completion:

```bash
curl -X POST http://localhost:11434/v1/completions \
-H "Content-Type: application/json" \
-d '{
  "model": "llama3.1",
  "prompt": "Hello, how are you?"
}'
```

Chat Completion:

```bash
curl -X POST http://localhost:11434/v1/chat/completions \
-H "Content-Type: application/json" \
-d '{
  "model": "llama3.1",
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "What is the capital of France?"
    }
  ]
}'
```
