import axios from 'axios';

const localhost = '192.168.1.192';
// const localhost = '172.16.55.0';
const port = '8080';

const axiosInstance = axios.create({
  baseURL: `http://${localhost}:${port}`,
});

export const axiosGet = async (url: string, config?: any) => {
  try {
    const result = await axiosInstance.get(url, { ...config });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const axiosPost = async (url: string, config?: any) => {
  try {
    const result = await axiosInstance.post(url, { ...config });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const axiosPatch = async (url: string, config?: any) => {
  try {
    const result = await axiosInstance.patch(url, { ...config });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const axiosDelete = async (url: string, config?: any) => {
  try {
    const result = await axiosInstance.delete(url, { ...config });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
