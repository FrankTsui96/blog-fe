/**
 * API 使用示例
 *
 * 这个文件展示了如何使用封装好的 API 工具
 * 实际使用时可以删除此文件
 */

import apiClient from './api';

// ============================================
// 1. 基础使用示例
// ============================================

// GET 请求
export const getUsers = async () => {
  const response = await apiClient.get<User[]>('users');
  return response.data;
};

// POST 请求
export const createUser = async (userData: CreateUserDto) => {
  const response = await apiClient.post<User>('users', userData);
  return response.data;
};

// PUT 请求
export const updateUser = async (id: string, userData: Partial<User>) => {
  const response = await apiClient.put<User>(`users/${id}`, userData);
  return response.data;
};

// DELETE 请求
export const deleteUser = async (id: string) => {
  await apiClient.delete(`users/${id}`);
};

// ============================================
// 2. 带查询参数的请求
// ============================================

export const getUsersWithPagination = async (page: number, pageSize: number) => {
  const response = await apiClient.get<PaginatedResponse<User>>('users', {
    searchParams: {
      page,
      pageSize,
    },
  });
  return response.data;
};

// ============================================
// 3. 文件上传
// ============================================

export const uploadAvatar = async (file: File) => {
  const formData = new FormData();
  formData.append('avatar', file);

  const response = await apiClient.upload<{ url: string }>('upload/avatar', formData);
  return response.data;
};

// ============================================
// 4. 文件下载
// ============================================

export const downloadReport = async (reportId: string) => {
  await apiClient.download(`reports/${reportId}`, `report-${reportId}.pdf`);
};

// ============================================
// 5. 在 React 组件中使用
// ============================================

/*
import { useState, useEffect } from 'react';
import { getUsers } from './api-usage-example';

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '获取用户列表失败');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
*/

// ============================================
// 类型定义示例
// ============================================

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
}

interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
