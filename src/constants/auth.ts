export const officialAPIEndpoint = 'https://api.openai.com/v1/chat/completions';
const customAPIEndpoints = import.meta.env.VITE_CUSTOM_API_ENDPOINT || 'https://free.churchless.tech/v1/chat/completions,https://chatgpt-api.shn.hk/v1/';
const customEndpointsArray = customAPIEndpoints.split(',').map((endpoint: string) => endpoint.trim());
export const defaultAPIEndpoint = import.meta.env.VITE_DEFAULT_API_ENDPOINT || officialAPIEndpoint;

export const availableEndpoints = [...customEndpointsArray, officialAPIEndpoint];

