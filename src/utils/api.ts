import ky, { type KyInstance, type Options } from 'ky';

// API 基础配置
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
const API_TIMEOUT = 10000; // 10 秒

// 创建 ky 实例
const api: KyInstance = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [
      (request) => {
        // 从 localStorage 获取 token 并添加到请求头
        const token = localStorage.getItem('token');
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }

        console.log('DEV', import.meta.env);
        console.log('API_BASE_URL', API_BASE_URL);

        // 开发环境下打印请求信息
        if (import.meta.env.DEV) {
          console.log('→', request.method, request.url);
        }
      },
    ],
    afterResponse: [
      (_request, _options, response) => {
        // 开发环境下打印响应信息
        if (import.meta.env.DEV) {
          console.log('←', response.status, response.url);
        }
        return response;
      },
    ],
    beforeError: [
      (error) => {
        const { response } = error;

        // 处理常见的 HTTP 错误
        if (response) {
          switch (response.status) {
            case 401:
              // 未授权，清除 token 并跳转到登录页
              localStorage.removeItem('token');
              window.location.href = '/login';
              break;
            case 403:
              console.error('无权限访问');
              break;
            case 404:
              console.error('请求的资源不存在');
              break;
            case 500:
              console.error('服务器错误');
              break;
          }
        }

        return error;
      },
    ],
  },
  retry: {
    limit: 2,
    methods: ['get'],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
  },
});

// 类型定义
export interface ApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

// 封装的请求方法
export const apiClient = {
  /**
   * GET 请求
   */
  get: <T = unknown>(url: string, options?: Options) => {
    return api.get(url, options).json<ApiResponse<T>>();
  },

  /**
   * POST 请求
   */
  post: <T = unknown>(url: string, data?: unknown, options?: Options) => {
    return api.post(url, { json: data, ...options }).json<ApiResponse<T>>();
  },

  /**
   * PUT 请求
   */
  put: <T = unknown>(url: string, data?: unknown, options?: Options) => {
    return api.put(url, { json: data, ...options }).json<ApiResponse<T>>();
  },

  /**
   * PATCH 请求
   */
  patch: <T = unknown>(url: string, data?: unknown, options?: Options) => {
    return api.patch(url, { json: data, ...options }).json<ApiResponse<T>>();
  },

  /**
   * DELETE 请求
   */
  delete: <T = unknown>(url: string, options?: Options) => {
    return api.delete(url, options).json<ApiResponse<T>>();
  },

  /**
   * 上传文件
   */
  upload: <T = unknown>(url: string, formData: FormData, options?: Options) => {
    return api.post(url, { body: formData, ...options }).json<ApiResponse<T>>();
  },

  /**
   * 下载文件
   */
  download: async (url: string, filename?: string, options?: Options) => {
    const response = await api.get(url, options);
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  },
};

// 导出原始 ky 实例，以便需要时使用
export { api };

// 默认导出
export default apiClient;
