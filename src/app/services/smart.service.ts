
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { fetchEventSource } from '@microsoft/fetch-event-source';

@Injectable({
  providedIn: 'root',
})
export class SmartService {

  public sendMessage(request: any, respondWith: any) {
    respondWith.stream((signal: any, streamMessage: any) => {
      const prompt = `
      Answer the question based on the context below.
      The response should be in HTML format.
      The response should preserve any HTML formatting, links, and styles in the context.

      Context:"""${request.context}"""

      Question: """${request.query}"""

      Answer:`;

      const requestBody = {
        model: 'gpt-3.5-turbo',
        temperature: 0.7,
        max_tokens: 800,
        messages: [{ role: 'user', content: prompt }],
        stream: true,
      };

      const chatGptOptions = {
        signal,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${environment.openAiApiKey}`,
        },
        body: JSON.stringify(requestBody),
      };

      // Use microsoft's fetch-event-source library to work around the 2000 character limit
      // of the browser `EventSource` API, which requires query strings
      return fetchEventSource(environment.apiUrl, {
        ...chatGptOptions,
        openWhenHidden: true,
        onopen: async (response: any) => {
          const contentType = response.headers.get('content-type');
          if (response.ok && contentType?.includes('text/event-stream')) {
            return; // everything's good
          } else if (contentType?.includes('application/json')) {
            // openai returns json on error, instead of an event stream
            const data = await response.json();
            throw new Error(
              `Failed to communicate with the ChatGPT API because of ${data.error.type} error: ${data.error.message}`
            );
          } else {
            // generic plain text error
            throw new Error(
              `Failed to communicate with the ChatGPT API. ${await response.text()}`
            );
          }
        },
        onmessage: (ev: any) => {
          const data = ev.data;
          if (data !== '[DONE]') {
            const parsedData = JSON.parse(data);
            const firstChoice = parsedData?.choices[0];
            const message = firstChoice?.delta?.content;
            if (message) {
              streamMessage(message);
            }
          }
        },
        onerror: (error: any) => {
          // Stop operation and do not retry by the fetch-event-source
          throw error;
        },
      });
    });
  }
}
