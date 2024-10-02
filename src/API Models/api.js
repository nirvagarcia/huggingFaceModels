import axios from 'axios';

const API_URL = 'https://api-inference.huggingface.co/models/openai-community/gpt2';
const API_KEY = process.env.REACT_APP_HUGGINGFACEMODEL_APIKEY;

export const sendMessageToModel = async (query) => {
  try {
    const response = await axios.post(
      API_URL,
      { inputs: query },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data[0]?.generated_text || "No response";
  } catch (error) {
    console.error('Error communicating with the model:', error.response?.data || error.message);
    return "Error in generating response.";
  }
}